import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";

const TITLE = "test/bean/ParameterTagTest.ts";

interface Context {
    name?: string;
    param1?: string;
    param2?: string;
    param3?: string;
    result?: string;
    results?: string[];
}

/**
 * <bean:parameter>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    const query = {param1: "FOO", param2: ["BAR", "BUZ"]};

    it('<bean:parameter>', async () => {
        const src: string = '<bean:parameter name="${name}" id="result"/>[${result}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "query").set(query);

        ctx.name = "param1";
        assert.equal(render(ctx), '[FOO]');

        ctx.name = "param2";
        assert.equal(render(ctx), '[BAR]');

        ctx.name = "param3";
        assert.throws(() => render(ctx));
    });

    it('<bean:parameter value="">', async () => {
        const src: string = '<bean:parameter name="${name}" id="result" value="QUX"/>[${result}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "query").set(query);

        ctx.name = "param1";
        assert.equal(render(ctx), '[FOO]');

        ctx.name = "param2";
        assert.equal(render(ctx), '[BAR]');

        ctx.name = "param3";
        assert.equal(render(ctx), '[QUX]');
    });

    it('<bean:parameter multiple>', async () => {
        const src: string = '<bean:parameter multiple name="${name}" id="results"/>[${results.length}][${results[0]}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "query").set(query);

        ctx.name = "param1";
        assert.equal(render(ctx), '[1][FOO]');

        ctx.name = "param2";
        assert.equal(render(ctx), '[2][BAR]');

        ctx.name = "param3";
        assert.throws(() => render(ctx));
    });

    it('<bean:parameter multiple value="">', async () => {
        const src: string = '<bean:parameter multiple name="${name}" id="results" value="QUX"/>[${results.length}][${results[0]}]';
        const render = nsp.parse(src).toFn<Context>();
        const ctx: Context = {};
        nsp.store(ctx, "query").set(query);

        ctx.name = "param1";
        assert.equal(render(ctx), '[1][FOO]');

        ctx.name = "param2";
        assert.equal(render(ctx), '[2][BAR]');

        ctx.name = "param3";
        assert.equal(render(ctx), '[1][QUX]');
    });
});
