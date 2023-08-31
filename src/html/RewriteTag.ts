import type {Struts1Html} from "../../index.js";
import {LinkTag} from "./LinkTag.js";

/**
 * <html:rewrite>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/RewriteTag.java
 */
export class RewriteTag extends LinkTag {
    protected attr: Struts1Html.RewriteTagAttr;

    render() {
        throw new Error("Not implemented: <html:rewrite>");
        return null as string; // TODO
    };
}
