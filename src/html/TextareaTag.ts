import type {Struts1Html} from "../../index.js";
import {BaseInputTag} from "./BaseInputTag.js";

/**
 * <html:textarea>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/TextareaTag.java
 */
export class TextareaTag extends BaseInputTag<Struts1Html.TextareaTagAttr> {
    protected attr: Struts1Html.TextareaTagAttr;

    protected doReadonly = true;

    render() {
        throw new Error("Not implemented: <html:textarea>"); // TODO
    };
}
