import type {Struts1Html} from "../../index.js";
import {SubmitTag} from "./SubmitTag.js";

/**
 * <html:button>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ButtonTag.java
 */
export class ButtonTag extends SubmitTag {
    protected attr: Struts1Html.ButtonTagAttr;

    render() {
        throw new Error("Not implemented: <html:button>");
        return null as string; // TODO
    };
}
