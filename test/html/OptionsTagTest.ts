import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/OptionsTagTest.ts";

interface Context {
    bean: {
        color1: string;
    },
    colors: string[];
}

/**
 * <html:options>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:options>', async () => {
        const src: string = `
<html:select name="bean" property="color1" size="7">
<html:options name="colors" />
</html:select>
`;

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {
            bean: {
                color1: "green",
            },
            colors: ["red", "green", "blue"]
        };

        assert.equal(await render(ctx), `
<select name="color1" size="7"><option value="red">red</option>
<option value="green" selected="selected">green</option>
<option value="blue">blue</option></select>
`.trim());
    });
});
