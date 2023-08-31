import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/RedirectTagTest.ts";

interface Context {
    //
}

/**
 * <logic:redirect>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:redirect>', async () => {
        const src = '[<logic:redirect/>]';

        const render = nsp.parse(src).toFn<Context>();

        // it should throw as not implemented by design
        assert.rejects(async () => render({}));
    });
});
