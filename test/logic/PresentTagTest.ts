import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/PresentTagTest.ts";

interface Context {
    testBean?: Bean;
}

interface Bean {
    fred?: string;
    stringValue?: string;
}

/**
 * <logic:present>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:present>', async () => {
        const src = '[<logic:present name="testBean">TRUE</logic:present>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context = {};

        assert.equal(render(ctx), '[]');

        ctx.testBean = {fred: "Fred"};
        assert.equal(render(ctx), '[TRUE]');
    });
});
