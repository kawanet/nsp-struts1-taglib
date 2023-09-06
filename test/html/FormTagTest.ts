import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/FormTagTest.ts";

interface Context {
    //
}

/**
 * <html:form>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:form>', async () => {
        const src: string = '<html:form action="/logon" method="get"><html:submit>SUBMIT</html:submit></html:form>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(await render(ctx), '<form method="get" action="/logon"><input type="submit" value="SUBMIT"></form>');
    });
});
