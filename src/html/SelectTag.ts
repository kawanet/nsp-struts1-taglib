import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "../util/BaseHandlerTag.js";

/**
 * <html:select>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/SelectTag.java
 */
export class SelectTag extends BaseHandlerTag<Struts1Html.SelectTagAttr> {
    protected attr: Struts1Html.SelectTagAttr;

    render() {
        throw new Error("Not implemented: <html:select>");
        return null as string; // TODO
    };
}
