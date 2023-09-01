import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/OptionsCollectionTagTest.ts";

interface Context {
    //
}

/**
 * <html:optionsCollection>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:optionsCollection>', async () => {
        const src: string = '[]'; // TODO

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '[]');
    });
});
