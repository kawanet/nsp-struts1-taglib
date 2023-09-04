import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {struts1Impl} from "../../src/impl.js";

const TITLE = "test/impl/TagSupportTest.ts";

describe(TITLE, () => {
    interface Context {
        foo: string;
    }

    interface Attr {
        bar: string;
    }

    /**
     * example to implement an original tag extending TagSupport
     */
    class MyTag extends struts1Impl.util.TagSupport<Attr> {
        render() {
            const {bar} = this.attr;
            return bar;
        };
    }

    const nsp = createNSP();

    nsp.addTagLib({ns: "test", tag: {myTag: MyTag}});

    it("class MyTag extends struts1Impl.util.TagSupport", async () => {
        const src: string = '[<test:myTag bar="${foo}"/>]';

        const render = await nsp.parse(src).toFn<Context>();

        const ctx: Context = {foo: "BUZ"};

        assert.equal(render(ctx), '[BUZ]');
    });
});
