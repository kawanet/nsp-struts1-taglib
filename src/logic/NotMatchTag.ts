import type {NSP} from "nsp-server-pages";
import type {Struts1Logic} from "../../index.js";

/**
 * <logic:notMatch>
 */
export const notMatchTag: NSP.TagFn<Struts1Logic.NotMatchTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
