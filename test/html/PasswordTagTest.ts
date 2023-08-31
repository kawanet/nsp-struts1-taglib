import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/PasswordTagTest.ts";

interface Context {
    //
}

/**
 * <html:password>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:password>', async () => {
        const src = '[]'; // TODO

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(render({}), '[]');
    });
});
