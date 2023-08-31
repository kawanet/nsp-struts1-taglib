import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags} from "../../index.js";

const TITLE = "test/html/MultiboxTagTest.ts";

interface Context {
    fruits?: string | string[];
}

/**
 * <html:multibox>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('Strawberry', async () => {
        const src = '<html:multibox property="fruits" value="Strawberry"/>';

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(await render({}), '<input type="checkbox" name="fruits" value="Strawberry">', "#1");

        assert.equal(await render({fruits: []}), '<input type="checkbox" name="fruits" value="Strawberry">', "#2");

        assert.equal(await render({fruits: ["Apple", "Strawberry"]}), '<input type="checkbox" name="fruits" value="Strawberry" checked="checked">', "#3");

        assert.equal(await render({fruits: "Strawberry"}), '<input type="checkbox" name="fruits" value="Strawberry" checked="checked">', "#4");
    });

    it('Apple', async () => {
        const src = '<html:multibox property="fruits"> Apple </html:multibox>';

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(await render({}), '<input type="checkbox" name="fruits" value="Apple">', "#1");

        assert.equal(await render({fruits: []}), '<input type="checkbox" name="fruits" value="Apple">', "#2");

        assert.equal(await render({fruits: ["Apple", "Strawberry"]}), '<input type="checkbox" name="fruits" value="Apple" checked="checked">', "#3");

        assert.equal(await render({fruits: "Apple"}), '<input type="checkbox" name="fruits" value="Apple" checked="checked">', "#4");
    });
});
