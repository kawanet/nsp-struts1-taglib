import type {NSP} from "nsp-server-pages";
import type {Struts1Logic} from "../../index.js";

/**
 * <logic:greaterEqual>
 */
export const greaterEqualTag: NSP.TagFn<Struts1Logic.GreaterEqualTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
