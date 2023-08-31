import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";
import {PrepareBeanAction} from "./lib/PrepareBeanAction.js";

const TITLE = "test/bean/DefineTagTest.ts";

interface Context extends PrepareBeanAction {
    define1?: string;
    define2?: string;
}

/**
 * <bean:define>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    it('define1', async () => {
        const src: string = '[<bean:define id="define1" value="This is a test string"/>][<bean:write name="define1" />]';

        const render = nsp.parse(src).toFn<Context>();

        const ctx = new PrepareBeanAction();

        assert.equal(await render(ctx), '[][This is a test string]');
    });

    it('define2', async () => {
        const src: string = '[<bean:define name="example" property="nested" id="define2" />][<bean:write name="define2" property="stringValue" />]';

        const render = nsp.parse(src).toFn<Context>();

        const ctx = new PrepareBeanAction();

        assert.equal(await render(ctx), '[][This is a string from NestedBean]');
    });
});
