import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/SelectTagTest.ts";

interface Context {
    //
}

/**
 * <html:select>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:select>', async () => {
        const src: string = '<html:select property="singleSelect" value="1" size="10"></html:select>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '<select name="singleSelect" size="10"></select>');
    });
});
