import type {NSP} from "nsp-server-pages";
import type {Struts1Logic} from "../../index.js";

/**
 * <logic:messagesPresent>
 */
export const messagesPresentTag: NSP.TagFn<Struts1Logic.MessagesPresentTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
