import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/FrameTagTest.ts";

interface Context {
    //
}

/**
 * <html:frame>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:frame>', async () => {
        const src: string = '<html:frame href="/foo/"/>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '<frame src="/foo/">');
    });
});
