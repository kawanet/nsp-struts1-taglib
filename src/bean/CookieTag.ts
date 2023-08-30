import type {NSP} from "nsp-server-pages";
import type {Struts1Bean} from "../../index.js";

/**
 * <bean:cookie>
 */
export const cookieTag: NSP.TagFn<Struts1Bean.CookieTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
