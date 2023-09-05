import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/TextareaTagTest.ts";

interface Context {
    //
}

/**
 * <html:textarea>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:textarea>', async () => {
        const src: string = '<html:textarea property="message" value="aaa" cols="40" rows="6"/>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '<textarea name="message" cols="40" rows="6">aaa</textarea>');
    });
});
