import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";
import type {Cookie} from "../../src/util/Cookie.js";

const TITLE = "test/bean/CookieTagTest.ts";

interface Context {
    name?: string;
    cookie1?: string;
    cookie2?: string;
    cookie3?: string;
    result?: Cookie;
    results?: Cookie[];
}

/**
 * <bean:cookie>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    const cookies = {cookie1: "FOO", cookie2: ["BAR", "BUZ"]};

    const req = {cookies};

    it('<bean:cookie>', async () => {
        const src: string = '<bean:cookie name="${name}" id="result"/>[${result.value}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "req").set(req);

        ctx.name = "cookie1";
        assert.equal(render(ctx), '[FOO]');

        ctx.name = "cookie2";
        assert.equal(render(ctx), '[BAR]');

        ctx.name = "cookie3";
        assert.throws(() => render(ctx));
    });

    it('<bean:cookie value="">', async () => {
        const src: string = '<bean:cookie name="${name}" id="result" value="QUX"/>[${result.value}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "req").set(req);

        ctx.name = "cookie1";
        assert.equal(render(ctx), '[FOO]');

        ctx.name = "cookie2";
        assert.equal(render(ctx), '[BAR]');

        ctx.name = "cookie3";
        assert.equal(render(ctx), '[QUX]');
    });

    it('<bean:cookie multiple>', async () => {
        const src: string = '<bean:cookie multiple name="${name}" id="results"/>[${results.length}][${results[0].value}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "req").set(req);

        ctx.name = "cookie1";
        assert.equal(render(ctx), '[1][FOO]');

        ctx.name = "cookie2";
        assert.equal(render(ctx), '[2][BAR]');

        ctx.name = "cookie3";
        assert.throws(() => render(ctx));
    });

    it('<bean:cookie multiple value="">', async () => {
        const src: string = '<bean:cookie multiple name="${name}" id="results" value="QUX"/>[${results.length}][${results[0].value}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "req").set(req);

        ctx.name = "cookie1";
        assert.equal(render(ctx), '[1][FOO]');

        ctx.name = "cookie2";
        assert.equal(render(ctx), '[2][BAR]');

        ctx.name = "cookie3";
        assert.equal(render(ctx), '[1][QUX]');
    });
});
