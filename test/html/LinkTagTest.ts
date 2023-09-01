import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/LinkTagTest.ts";

interface Context {
    //
}

/**
 * <html:link>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:link>', async () => {
        const src: string = '<html:link href="/foo/" styleClass="bar">FOO</html:link>';

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(render({}), '<a href="/foo/" class="bar">FOO</a>');
    });
});
