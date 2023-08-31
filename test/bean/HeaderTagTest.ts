import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";

const TITLE = "test/bean/HeaderTagTest.ts";

interface Context {
    //
}

/**
 * <bean:header>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    it('<bean:header>', async () => {
        const src = '[]'; // TODO

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(render({}), '[]');
    });
});
