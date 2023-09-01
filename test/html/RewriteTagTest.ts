import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/RewriteTagTest.ts";

interface Context {
    //
}

/**
 * <html:rewrite>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:rewrite>', async () => {
        const src: string = `<html:rewrite href="/foo/"/>`;

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '/foo/');
    });
});
