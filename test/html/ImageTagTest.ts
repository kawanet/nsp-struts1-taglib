import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/ImageTagTest.ts";

interface Context {
    //
}

/**
 * <html:image>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:image>', async () => {
        const src: string = '<html:image src="/struts-power.gif"/>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(await render(ctx), '<input type="image" src="%2Fstruts-power.gif">');
    });
});
