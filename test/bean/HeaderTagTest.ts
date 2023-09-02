import {strict as assert} from "assert";
import type {IncomingHttpHeaders} from "http";
import {createNSP, NSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";

const TITLE = "test/bean/HeaderTagTest.ts";

interface Context {
    foo?: string;
    name?: string;
    defaultValue?: string;
    encoding?: string;
    result?: string;
    results?: string[];
    size?: number;
}

/**
 * <bean:header>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    const headers: IncomingHttpHeaders = {
        "accept-encoding": "deflate",
        "x-foo": "FOO",
        "x-foo-0": [],
        "x-foo-1": ["FOO"],
        "x-foo-2": ["FOO", "BAR"],
        "x-foo-3": ["FOO", "BAR", "BUZ"],
    };

    const wrap = (render: NSP.NodeFn<Context>): NSP.NodeFn<Context> => {
        return (ctx) => {
            nsp.store(ctx, "headers").set(headers);
            return render(ctx);
        };
    };

    it('<bean:header id="encodings">', async () => {
        const src: string = '<bean:header name="Accept-Encoding" id="encodings" />[<bean:write name="encodings" />]';

        const render = wrap(nsp.parse(src).toFn<Context>());

        assert.equal(render({}), '[deflate]', "#1");
    });

    it('<bean:header>', async () => {
        const src: string = '<bean:header name="${name}" id="result"/>[${result}]';

        const render = wrap(nsp.parse(src).toFn<Context>());

        assert.equal(render({name: "X-Foo"}), '[FOO]', "#1");

        await assert.rejects(async () => render({name: "X-Bar"}), "#2");

        await assert.rejects(async () => render({name: "X-Foo-0"}), "#3");

        assert.equal(render({name: "X-Foo-1"}), '[FOO]', "#4");

        assert.equal(render({name: "X-Foo-2"}), '[FOO]', "#5");
    });

    it('<bean:header value="">', async () => {
        const src: string = '<bean:header name="${name}" id="result" value="QUX"/>[${result}]';

        const render = wrap(nsp.parse(src).toFn<Context>());

        assert.equal(render({name: "X-Foo"}), '[FOO]', "#6");

        assert.equal(render({name: "X-Bar"}), '[QUX]', "#7");

        assert.equal(render({name: "X-Foo-0"}), '[QUX]', "#8");

        assert.equal(render({name: "X-Foo-1"}), '[FOO]', "#9");
    });

    it('<bean:header multiple>', async () => {
        const src: string = '<bean:header multiple name="${name}" id="results" />[${results.length}][${results[0]}]';

        const render = wrap(nsp.parse(src).toFn<Context>());

        assert.equal(render({name: "X-Foo"}), '[1][FOO]', "#1");

        await assert.rejects(async () => render({name: "X-Bar"}), "#2");

        await assert.rejects(async () => render({name: "X-Foo-0"}), "#3");

        assert.equal(render({name: "X-Foo-1"}), '[1][FOO]', "#4");

        assert.equal(render({name: "X-Foo-2"}), '[2][FOO]', "#5");

        assert.equal(render({name: "X-Foo-3"}), '[3][FOO]', "#6");
    });

    it('<bean:header multiple value="">', async () => {
        const src: string = '<bean:header multiple name="${name}" id="results" value="QUX"/>[${results.length}][${results[0]}]';

        const render = wrap(nsp.parse(src).toFn<Context>());

        assert.equal(render({name: "X-Foo"}), '[1][FOO]', "#7");

        assert.equal(render({name: "X-Bar"}), '[1][QUX]', "#8");

        assert.equal(render({name: "X-Foo-0"}), '[1][QUX]', "#9");

        assert.equal(render({name: "X-Foo-1"}), '[1][FOO]', "#10");
    });
});
