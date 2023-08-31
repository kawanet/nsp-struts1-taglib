import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/EqualTagTest.ts";

interface Context {
    intValue?: number;
}

/**
 * <logic:equal>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:equal>', async () => {
        const src: string = '[<logic:equal name="intValue" value="7">TRUE</logic:equal>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context;

        ctx = {intValue: 6};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx = {intValue: 7};
        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));

        ctx = {intValue: 8};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));
    });
});
