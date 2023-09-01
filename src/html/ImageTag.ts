import type {Struts1Html} from "../../index.js";
import {SubmitTag} from "./SubmitTag.js";

/**
 * <html:image>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ImageTag.java
 */
export class ImageTag extends SubmitTag {
    protected attr: Struts1Html.ImageTagAttr;

    render() {
        throw new Error("Not implemented: <html:image>"); // TODO
    };
}
