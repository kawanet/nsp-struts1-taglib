import type {NSP} from "nsp-server-pages";
import type {Struts1Bean} from "../../index.js";

/**
 * <bean:write>
 */
export const writeTag: NSP.TagFn<Struts1Bean.WriteTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
