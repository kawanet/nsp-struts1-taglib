import type {NSP} from "nsp-server-pages";
import type {Struts1Bean} from "../../index.js";

/**
 * <bean:define>
 */
export const defineTag: NSP.TagFn<Struts1Bean.DefineTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
