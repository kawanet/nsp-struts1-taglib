import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/EqualTagTest.ts";

interface Context {
    intValue?: number;

    bean?: {
        intProperty?: number;
        stringProperty?: string;
        getStringProperty?: () => string;
    };

    map?: Map<string, string>;

    types?: typeof types,
}

const types = {
    TRUE: true,
    FALSE: false,
    NULL: null as null,
    EMPTY: "",
    STRING1: "1",
    STRING0: "0",
    NUMBER1: 1,
    NUMBER0: 0,
};

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

    it('<logic:equal> using getter method', async () => {
        const src: string = '[<logic:equal name="bean" property="stringProperty" value="foo">TRUE</logic:equal>]';

        const render = nsp.parse(src).toFn<Context>();

        assert.equal(render({bean: {stringProperty: "foo"}}), '[TRUE]', "#1");
        assert.equal(render({bean: {getStringProperty: () => "foo"}}), '[TRUE]', "#2");

        assert.equal(render({bean: {stringProperty: "bar"}}), '[]', "#3");
        assert.equal(render({bean: {getStringProperty: () => "bar"}}), '[]', "#4");
    });

    it('<logic:equal> using MapLike', async () => {
        const src: string = '[<logic:equal name="map" property="stringProperty" value="foo">TRUE</logic:equal>]';

        const render = nsp.parse(src).toFn<Context>();

        const map = new Map();

        map.set("stringProperty", "foo");
        assert.equal(render({map}), '[TRUE]', "#1");

        map.set("stringProperty", "bar");
        assert.equal(render({map}), '[]', "#2");
    });

    it('<logic:equal value="true">', async () => {
        const src: string = `
<li>TRUE: <logic:equal name="types" property="TRUE" value="true">TRUE</logic:equal></li>
<li>FALSE: <logic:equal name="types" property="FALSE" value="true">TRUE</logic:equal></li>
<li>NULL: <logic:equal name="types" property="NULL" value="true">TRUE</logic:equal></li>
<li>EMPTY: <logic:equal name="types" property="EMPTY" value="true">TRUE</logic:equal></li>
<li>STRING1: <logic:equal name="types" property="STRING1" value="true">TRUE</logic:equal></li>
<li>STRING0: <logic:equal name="types" property="STRING0" value="true">TRUE</logic:equal></li>
<li>NUMBER1: <logic:equal name="types" property="NUMBER1" value="true">TRUE</logic:equal></li>
<li>NUMBER0: <logic:equal name="types" property="NUMBER0" value="true">TRUE</logic:equal></li>
`;

        const expected = `
<li>TRUE: TRUE</li>
<li>FALSE: </li>
<li>NULL: </li>
<li>EMPTY: </li>
<li>STRING1: </li>
<li>STRING0: </li>
<li>NUMBER1: </li>
<li>NUMBER0: </li>
`;

        const render = nsp.parse(src).toFn<Context>();
        assert.equal(render({types}), expected);
    });

    it('<logic:equal value="false">', async () => {
        const src: string = `
<li>TRUE: <logic:equal name="types" property="TRUE" value="false">FALSE</logic:equal></li>
<li>FALSE: <logic:equal name="types" property="FALSE" value="false">FALSE</logic:equal></li>
<li>NULL: <logic:equal name="types" property="NULL" value="false">FALSE</logic:equal></li>
<li>EMPTY: <logic:equal name="types" property="EMPTY" value="false">FALSE</logic:equal></li>
<li>STRING1: <logic:equal name="types" property="STRING1" value="false">FALSE</logic:equal></li>
<li>STRING0: <logic:equal name="types" property="STRING0" value="false">FALSE</logic:equal></li>
<li>NUMBER1: <logic:equal name="types" property="NUMBER1" value="false">FALSE</logic:equal></li>
<li>NUMBER0: <logic:equal name="types" property="NUMBER0" value="false">FALSE</logic:equal></li>
`;

        const expected: string = `
<li>TRUE: </li>
<li>FALSE: FALSE</li>
<li>NULL: </li>
<li>EMPTY: </li>
<li>STRING1: </li>
<li>STRING0: </li>
<li>NUMBER1: </li>
<li>NUMBER0: </li>
`;

        const render = nsp.parse(src).toFn<Context>();
        assert.equal(render({types}), expected);
    });

    it('<logic:equal value="">', async () => {
        const src: string = `
<li>TRUE: <logic:equal name="types" property="TRUE" value="">EMPTY</logic:equal></li>
<li>FALSE: <logic:equal name="types" property="FALSE" value="">EMPTY</logic:equal></li>
<li>NULL: <logic:equal name="types" property="NULL" value="">EMPTY</logic:equal></li>
<li>EMPTY: <logic:equal name="types" property="EMPTY" value="">EMPTY</logic:equal></li>
<li>STRING1: <logic:equal name="types" property="STRING1" value="">EMPTY</logic:equal></li>
<li>STRING0: <logic:equal name="types" property="STRING0" value="">EMPTY</logic:equal></li>
<li>NUMBER1: <logic:equal name="types" property="NUMBER1" value="">EMPTY</logic:equal></li>
<li>NUMBER0: <logic:equal name="types" property="NUMBER0" value="">EMPTY</logic:equal></li>
`;

        const expected: string = `
<li>TRUE: </li>
<li>FALSE: </li>
<li>NULL: EMPTY</li>
<li>EMPTY: EMPTY</li>
<li>STRING1: </li>
<li>STRING0: </li>
<li>NUMBER1: </li>
<li>NUMBER0: </li>
`;

        const render = nsp.parse(src).toFn<Context>();
        assert.equal(render({types}), expected);
    });
});
