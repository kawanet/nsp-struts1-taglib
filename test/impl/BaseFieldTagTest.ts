import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {struts1Impl} from "../../src/impl.js";

const TITLE = "test/impl/BaseFieldTagTest.ts";

describe(TITLE, () => {
    interface Context {
        bar: string;
    }

    interface Attr {
        //
    }

    /**
     * example to implement an original tag extending BaseFieldTag
     */
    class MyInputTag extends struts1Impl.html.BaseFieldTag<Attr> {
        type = "text";
    }

    const nsp = createNSP();

    nsp.addTagLib({ns: "test", tag: {myInput: MyInputTag}});

    it("class MyInputTag extends struts1Impl.html.BaseFieldTag", async () => {
        const src: string = '<test:myInput property="foo" value="${bar}"/>';

        const render = await nsp.parse(src).toFn<Context>();

        const ctx: Context = {bar: "BUZ"};

        assert.equal(render(ctx), '<input type="text" name="foo" value="BUZ">');
    });
});
