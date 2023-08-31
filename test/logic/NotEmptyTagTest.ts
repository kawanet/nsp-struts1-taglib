import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/NotEmptyTagTest.ts";

interface Context {
    items?: string[];
}

/**
 * <logic:notEmpty>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:notEmpty>', async () => {
        const src = '[<logic:notEmpty name="items">TRUE</logic:notEmpty>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context;

        // Cannot find bean: items
        ctx = {};
        await assert.rejects(async () => render(ctx));

        ctx = {items: []};
        assert.equal(render(ctx), '[]');

        ctx = {items: ["foo", "bar"]};
        assert.equal(render(ctx), '[TRUE]');
    });
});
