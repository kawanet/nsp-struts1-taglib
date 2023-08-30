import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";

/**
 * <html:html>
 */
export const htmlTag: NSP.TagFn<Struts1Html.HtmlTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
