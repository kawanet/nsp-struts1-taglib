import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";

/**
 * <html:radio>
 */
export const radioTag: NSP.TagFn<Struts1Html.RadioTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
