import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";

/**
 * <html:submit>
 */
export const submitTag: NSP.TagFn<Struts1Html.SubmitTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
