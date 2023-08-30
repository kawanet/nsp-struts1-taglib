import type {NSP} from "nsp-server-pages";
import type {Struts1Bean} from "../../index.js";

/**
 * <bean:size>
 */
export const sizeTag: NSP.TagFn<Struts1Bean.SizeTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
