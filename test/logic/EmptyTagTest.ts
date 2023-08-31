import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/EmptyTagTest.ts";

interface Context {
    items?: string[];
}

/**
 * <logic:empty>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:empty>', async () => {
        const src = '[<logic:empty name="items">TRUE</logic:empty>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context;

        ctx = {};
        assert.equal(render(ctx), '[TRUE]');

        ctx = {items: []};
        assert.equal(render(ctx), '[TRUE]');

        ctx = {items: ["foo", "bar"]};
        assert.equal(render(ctx), '[]');
    });
});
