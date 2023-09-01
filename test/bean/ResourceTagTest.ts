import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags, Struts1Bean} from "../../index.js";

const TITLE = "test/bean/ResourceTagTest.ts";

interface Context {
    //
}

/**
 * <bean:resource>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    const resources: { [name: string]: string } = {
        "/WEB-INF/web.xml": `<web-app></web-app>`,
    };

    it('<bean:resource>', async () => {
        const src: string = '[<bean:resource id="webxml" name="/WEB-INF/web.xml" />][<bean:write name="webxml" filter="true" />]';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        (nsp as Struts1Bean.Hooks).hook("bean:resource", async (name) => resources[name]);

        assert.equal(await render(ctx), '[][&lt;web-app&gt;&lt;/web-app&gt;]');

        (nsp as Struts1Bean.Hooks).hook("bean:resource", async (_) => null);

        await assert.rejects(async () => render(ctx));
    });
});
