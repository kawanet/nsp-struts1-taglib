import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "./BaseHandlerTag.js";

/**
 * <html:submit>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/SubmitTag.java
 */
export class SubmitTag extends BaseHandlerTag<Struts1Html.SubmitTagAttr> {
    protected attr: Struts1Html.SubmitTagAttr;

    render() {
        throw new Error("Not implemented: <html:submit>"); // TODO
    };
}
