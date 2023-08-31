import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/IterateTagTest.ts";

interface Context {
    bean?: Bean;
}

interface Bean {
    stringArray?: string[];
}

/**
 * <logic:iterate>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:iterate>', async () => {
        const src: string = '[<logic:iterate id="element" name="bean" property="stringArray" indexId="index">[${index}=${element}]</logic:iterate>]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context = {};
        assert.rejects(async () => render(ctx));

        ctx.bean = {stringArray: []};
        assert.equal(await render(ctx), '[]', JSON.stringify(ctx));

        ctx.bean = {stringArray: ["foo", "bar", "buz"]};
        assert.equal(await render(ctx), '[[0=foo][1=bar][2=buz]]', JSON.stringify(ctx));
    });
});
