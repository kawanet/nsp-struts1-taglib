import type {NSP} from "nsp-server-pages";
import type {Struts1Bean} from "../../index.js";

/**
 * <bean:struts>
 */
export const strutsTag: NSP.TagFn<Struts1Bean.StrutsTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
