import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/HtmlTagTest.ts";

interface Context {
    //
}

/**
 * <html:html>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:html>', async () => {
        const src: string = '<html:html>BODY</html:html>';

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(render({}), '<html>BODY</html>');
    });
});
