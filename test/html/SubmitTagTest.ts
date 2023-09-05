import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/SubmitTagTest.ts";

interface Context {
    //
}

/**
 * <html:submit>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:submit>', async () => {
        const src: string = '<html:submit/>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(await render(ctx), '<input type="submit" value="Submit">');
    });

    it('<html:submit> has child', async () => {
        const src: string = '<html:submit>test</html:submit>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(await render(ctx), '<input type="submit" value="test">');
    });
});
