import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/ForwardTagTest.ts";

interface Context {
    //
}

/**
 * <logic:forward>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:forward>', async () => {
        const src: string = '[<logic:forward/>]';

        const render = nsp.parse(src).toFn<Context>();

        // it should throw as not implemented by design
        await assert.rejects(async () => render({}));
    });
});
