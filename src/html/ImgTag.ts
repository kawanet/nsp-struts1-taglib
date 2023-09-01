import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "./BaseHandlerTag.js";

/**
 * <html:img>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ImgTag.java
 */
export class ImgTag extends BaseHandlerTag<Struts1Html.ImgTagAttr> {
    protected attr: Struts1Html.ImgTagAttr;

    protected doDisabled = false;

    render() {
        throw new Error("Not implemented: <html:img>"); // TODO
    };
}
