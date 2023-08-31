import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/NotMatchTagTest.ts";

interface Context {
    string?: string;
    location?: "start" | "end";
    value?: string;
}

/**
 * <logic:notMatch>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:notMatch>', async () => {
        const src: string = '[<logic:notMatch name="string" value="foo">match</logic:notMatch>]';
        const render = nsp.parse(src).toFn<Context>();
        let ctx: Context;

        ctx = {string: "foo"};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx = {string: "bar"};
        assert.equal(render(ctx), '[match]', JSON.stringify(ctx));
    });

    it('location="${location}"', async () => {
        const src: string = '[<logic:notMatch name="string" value="${value}" location="${location}">match</logic:notMatch>]';
        const render = nsp.parse(src).toFn<Context>();
        let ctx: Context;

        ctx = {string: "foo-bar", value: "foo", location: "start"};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx = {string: "foo-bar", value: "foo", location: "end"};
        assert.equal(render(ctx), '[match]', JSON.stringify(ctx));

        ctx = {string: "foo-bar", value: "bar", location: "start"};
        assert.equal(render(ctx), '[match]', JSON.stringify(ctx));

        ctx = {string: "foo-bar", value: "bar", location: "end"};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));
    });
});
