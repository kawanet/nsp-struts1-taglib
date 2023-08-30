import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";

/**
 * <html:optionsCollection>
 */
export const optionsCollectionTag: NSP.TagFn<Struts1Html.OptionsCollectionTagAttr> = (tag) => {
    return (_) => {
        throw new Error(`Not implemented: <${tag.name}>`);
    };
};
