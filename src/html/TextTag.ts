import type {Struts1Html} from "../../index.js";
import {BaseFieldTag} from "./BaseFieldTag.js";

/**
 * <html:text>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/TextTag.java
 */
export class TextTag extends BaseFieldTag<Struts1Html.TextTagAttr> {
    protected attr: Struts1Html.TextTagAttr;

    protected type = "text";

    protected doReadonly = true;

    render() {
        throw new Error("Not implemented: <html:text>"); // TODO
    };
}
