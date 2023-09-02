import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/HiddenTagTest.ts";

interface Context {
    //
}

/**
 * <html:hidden>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:hidden>', async () => {
        const src: string = '<html:hidden property="hidden" value="Sssh! It\'s a secret. Nobody knows I\'m here."/>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(render(ctx), '<input type="hidden" name="hidden" value="Sssh! It&apos;s a secret. Nobody knows I&apos;m here.">');
    });
});
