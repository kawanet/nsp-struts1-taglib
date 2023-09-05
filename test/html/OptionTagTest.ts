import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/OptionTagTest.ts";

interface Context {
    //
}

/**
 * <html:option>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:option>', async () => {
        const src: string = '<html:select property="singleSelect" value="1" size="10"><html:option value="Single 0" title="0">Single 0</html:option></html:select>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '<select name="singleSelect" size="10"><option value="Single 0" title="0">Single 0</option></select>');
    });

    it('<html:option> only', async () => {
        const src: string = '<html:option value="Single 0" title="0">Single 0</html:option>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};
        assert.rejects(async () => render(ctx), "Option tag must be nested in a Select tag")
    })
});
