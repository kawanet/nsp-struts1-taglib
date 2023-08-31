import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";

const TITLE = "test/bean/SizeTagTest.ts";

interface Context {
    bean?: Bean;
}

interface Bean {
    stringArray: string[];
}

/**
 * <bean:size>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    it('<bean:size>', async () => {
        const src: string = '[<bean:size id="stringSize" name="bean" property="stringArray" />][${stringSize}]';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};
        assert.rejects(async () => render(ctx));

        ctx.bean = {stringArray: ["foo", "bar", "buz"]};
        assert.equal(await render(ctx), '[][3]');
    });
});
