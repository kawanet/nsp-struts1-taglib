import type {Struts1Html} from "../../index.js";
import {LinkTag} from "./LinkTag.js";

/**
 * <html:frame>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/FrameTag.java
 */
export class FrameTag extends LinkTag {
    protected attr: Struts1Html.FrameTagAttr;

    render() {
        throw new Error("Not implemented: <html:frame>");
        return null as string; // TODO
    };
}
