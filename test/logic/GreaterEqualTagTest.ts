import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/GreaterEqualTagTest.ts";

interface Context {
    intValue?: number;
}

/**
 * <logic:greaterEqual>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:greaterEqual>', async () => {
        const src = '[<logic:greaterEqual name="intValue" value="7">TRUE</logic:greaterEqual>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context = {};
        assert.equal(render(ctx), '[]');

        ctx.intValue = 6;
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx.intValue = 7;
        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));

        ctx.intValue = 8;
        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));
    });
});
