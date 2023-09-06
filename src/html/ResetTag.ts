import type {Struts1Html} from "../../index.js";
import {SubmitTag} from "./SubmitTag.js";

/**
 * <html:reset>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ResetTag.java
 */
export class ResetTag extends SubmitTag {
    protected attr: Struts1Html.ResetTagAttr;

    async render(): Promise<string> {
        throw new Error("Not implemented: <html:reset>"); // TODO
    }
}
