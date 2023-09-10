import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/EqualTagTest.ts";

interface Context {
    intValue?: number;

    bean?: { intProperty: number };
}

interface PartialRequest {
    headers?: { [key: string]: string };
    cookies?: { [key: string]: string };
}

/**
 * <logic:equal>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:equal name="">', async () => {
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

    it('<logic:equal name="" property="">', async () => {
        const src: string = '[<logic:equal name="bean" property="intProperty" value="7">TRUE</logic:equal>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context;

        ctx = {bean: {intProperty: 6}};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx = {bean: {intProperty: 7}};
        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));

        ctx = {bean: {intProperty: 8}};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));
    });

    it('<logic:equal parameter="">', async () => {
        const src: string = '[<logic:equal parameter="intValue" value="7">TRUE</logic:equal>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context;

        ctx = {intValue: 6};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));

        ctx = {intValue: 7};
        assert.equal(render(ctx), '[TRUE]', JSON.stringify(ctx));

        ctx = {intValue: 8};
        assert.equal(render(ctx), '[]', JSON.stringify(ctx));
    });

    it('<logic:equal header="">', async () => {
        const src: string = '[<logic:equal header="x-value" value="foo">TRUE</logic:equal>]';
        const render = nsp.parse(src).toFn<Context>();

        {
            const ctx: Context = {};
            const headers = {"x-value": "foo"};
            nsp.store<PartialRequest>(ctx, "req").set({headers});
            assert.equal(render(ctx), '[TRUE]', JSON.stringify(headers));
        }

        {
            const ctx: Context = {};
            const headers = {"x-value": "bar"};
            nsp.store<PartialRequest>(ctx, "req").set({headers});
            assert.equal(render(ctx), '[]', JSON.stringify(headers));
        }
    });

    it('<logic:equal cookie="">', async () => {
        const src: string = '[<logic:equal cookie="x-value" value="bar">TRUE</logic:equal>]';
        const render = nsp.parse(src).toFn<Context>();

        {
            const ctx: Context = {};
            const cookies = {"x-value": "foo"};
            nsp.store<PartialRequest>(ctx, "req").set({cookies});
            assert.equal(render(ctx), '[]', JSON.stringify(cookies));
        }

        {
            const ctx: Context = {};
            const cookies = {"x-value": "bar"};
            nsp.store<PartialRequest>(ctx, "req").set({cookies});
            assert.equal(render(ctx), '[TRUE]', JSON.stringify(cookies));
        }
    });
});
