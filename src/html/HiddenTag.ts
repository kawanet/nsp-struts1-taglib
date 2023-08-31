import type {Struts1Html} from "../../index.js";
import {BaseFieldTag} from "./BaseFieldTag.js";

/**
 * <html:hidden>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/HiddenTag.java
 */
export class HiddenTag extends BaseFieldTag<Struts1Html.HiddenTagAttr> {
    protected attr: Struts1Html.HiddenTagAttr;

    render() {
        throw new Error("Not implemented: <html:hidden>");
        return null as string; // TODO
    };
}
