import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";

/**
 * <html:select>
 */
export const selectTag: NSP.TagFn<Struts1Html.SelectTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
