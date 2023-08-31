import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/MessagesPresentTagTest.ts";

interface Context {
    //
}

/**
 * <logic:messagesPresent>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:messagesPresent>', async () => {
        const src: string = '[<logic:messagesPresent>messagesPresent</logic:messagesPresent>]';

        const render = nsp.parse(src).toFn<Context>();

        // it throws on runtime as not implemented yet
        assert.rejects(async () => render({})); // TODO
    });
});
