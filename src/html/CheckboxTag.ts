import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "./BaseHandlerTag.js";

/**
 * <html:checkbox>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/CheckboxTag.java
 */
export class CheckboxTag extends BaseHandlerTag<Struts1Html.CheckboxTagAttr> {
    protected attr: Struts1Html.CheckboxTagAttr;

    render() {
        throw new Error("Not implemented: <html:checkbox>"); // TODO
    };
}
