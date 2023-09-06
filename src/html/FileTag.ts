import type {Struts1Html} from "../../index.js";
import {BaseFieldTag} from "./BaseFieldTag.js";

/**
 * <html:file>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/FileTag.java
 */
export class FileTag extends BaseFieldTag<Struts1Html.FileTagAttr> {
    protected attr: Struts1Html.FileTagAttr;

    protected type = "file";

    render() {
        throw new Error("Not implemented: <html:file>"); // TODO
    }
}
