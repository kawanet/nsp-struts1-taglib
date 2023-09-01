import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";

const TITLE = "test/bean/MessageTagTest.ts";

interface Context {
    //
}

/**
 * <bean:message>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    it('<bean:message>', async () => {
        const src: string = '[]'; // TODO

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '[]');
    });
});
