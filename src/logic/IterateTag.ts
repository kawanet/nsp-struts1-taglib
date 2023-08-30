import type {NSP} from "nsp-server-pages";
import type {Struts1Logic} from "../../index.js";

/**
 * <logic:iterate>
 */
export const iterateTag: NSP.TagFn<Struts1Logic.IterateTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
