import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";

/**
 * <html:errors>
 */
export const errorsTag: NSP.TagFn<Struts1Html.ErrorsTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
