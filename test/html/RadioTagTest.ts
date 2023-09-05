import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {htmlTags, beanTags} from "../../index.js";
import { PrepareBeanAction } from "../bean/lib/PrepareBeanAction.js";

const TITLE = "test/html/RadioTagTest.ts";

interface Context {
    //
}

/**
 * <html:radio>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});
    nsp.addTagLib({ns: "html", tag: htmlTags});

    it('<html:radio>', async () => {
        const defineBean = '<bean:define id="define1" value="This is a test string"/>';
        const src: string = defineBean + '<html:radio name="define1" value="a"></html:radio>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        assert.equal(await render(ctx), '<input type="radio" value="a">');
    });

    it('<html:radio> checked', async () => {
        const defineBean = '<bean:define name="example" property="nested" id="define2" />';
        const src: string = defineBean + '<html:radio property="stringValue" name="define2" value="This is a string from NestedBean">Actually, I hate it.</html:radio>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx = new PrepareBeanAction();

        assert.equal(await render(ctx), '<input type="radio" name="stringValue" value="This is a string from NestedBean" checked="checked">Actually, I hate it.');
    });

    it('<html:radio> bean not found', async () => {
        const src: string = '<html:radio name="kind" value="a"></html:radio>';

        const render = nsp.parse(src).toFn<Context>();

        const ctx: Context = {};

        await assert.rejects(async () => await render(ctx), new Error("Cannot find bean under name kind"))
    });
});
