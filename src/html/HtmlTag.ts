import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:html>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/HtmlTag.java
 */
export class HtmlTag extends TagSupport<Struts1Html.HtmlTagAttr> {
    protected attr: Struts1Html.HtmlTagAttr;

    render() {
        throw new Error("Not implemented: <html:html>");
        return null as string; // TODO
    };
}
