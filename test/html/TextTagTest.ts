import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/TextTagTest.ts";

interface Context {
    //
}

/**
 * <html:text>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:text>', async () => {
        const src: string = '<html:text property="name" value="aaa" size="40" maxlength="50"/>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '<input type="text" name="name" maxlength="50" value="aaa">');
    });
});
