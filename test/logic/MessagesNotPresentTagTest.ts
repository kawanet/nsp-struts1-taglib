import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {logicTags} from "../../index.js";

const TITLE = "test/logic/MessagesNotPresentTagTest.ts";

interface Context {
    //
}

/**
 * <logic:messagesNotPresent>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "logic", tag: logicTags});

    it('<logic:messagesNotPresent>', async () => {
        const src: string = '[<logic:messagesNotPresent>messagesNotPresent</logic:messagesNotPresent>]';

        const render = nsp.parse(src).toFn<Context>();

        // it throws on runtime as not implemented yet
        await assert.rejects(async () => render({})); // TODO
    });
});
