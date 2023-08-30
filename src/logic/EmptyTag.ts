import type {NSP} from "nsp-server-pages";
import type {Struts1Logic} from "../../index.js";

/**
 * <logic:empty>
 */
export const emptyTag: NSP.TagFn<Struts1Logic.EmptyTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
