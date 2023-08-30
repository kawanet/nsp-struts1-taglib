import type {NSP} from "nsp-server-pages";
import type {Struts1Logic} from "../../index.js";

/**
 * <logic:messagesNotPresent>
 */
export const messagesNotPresentTag: NSP.TagFn<Struts1Logic.MessagesNotPresentTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
