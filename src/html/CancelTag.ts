import type {Struts1Html} from "../../index.js";
import {SubmitTag} from "./SubmitTag.js";

/**
 * <html:cancel>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/CancelTag.java
 */
export class CancelTag extends SubmitTag {
    protected attr: Struts1Html.CancelTagAttr;

    async render(): Promise<string> {
        throw new Error("Not implemented: <html:cancel>"); // TODO
    };
}
