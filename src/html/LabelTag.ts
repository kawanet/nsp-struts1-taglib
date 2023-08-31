import type {Struts1Html} from "../../index.js";
import {BaseInputTag} from "./BaseInputTag.js";

/**
 * <html:label>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/LabelTag.java
 */
export class LabelTag extends BaseInputTag<Struts1Html.LabelTagAttr> {
    protected attr: Struts1Html.LabelTagAttr;

    render() {
        throw new Error("Not implemented: <html:label>");
        return null as string; // TODO
    };
}
