import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/NotPresentTagTest.ts";

interface Context {
    testBean?: Bean;
}

interface Bean {
    fred?: string;
    stringValue?: string;
}

/**
 * <logic:notPresent>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:notPresent name="testBean">', async () => {
        const src = '[<logic:notPresent name="testBean">TRUE</logic:notPresent>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context = {};

        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));

        ctx.testBean = {fred: "Fred"};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));
    });

    it('<logic:notPresent name="testBean" property="fred">', async () => {
        const src = '[<logic:notPresent name="testBean" property="fred">TRUE</logic:notPresent>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context = {};

        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));

        ctx.testBean = {fred: "Fred"};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx.testBean = {stringValue: "StringValue"};
        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));
    });
});
