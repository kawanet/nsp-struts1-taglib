import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:xhtml>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/XhtmlTag.java
 */
export class XhtmlTag extends TagSupport<Struts1Html.XhtmlTagAttr> {
    protected attr: Struts1Html.XhtmlTagAttr;

    render() {
        throw new Error("Not implemented: <html:xhtml>");
        return null as string; // TODO
    };
}
