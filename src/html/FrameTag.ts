import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {LinkTag} from "./LinkTag.js";

/**
 * <html:frame>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/FrameTag.java
 */
export class FrameTag extends LinkTag {
    protected attr: Struts1Html.FrameTagAttr;

    render() {
        const {attr} = this;

        // Print this element to our output writer
        const results = new StringBuffer("<frame");

        results.attr("src", this.calculateURL());
        results.attr("name", attr.name);

        if (attr.noresize) {
            results.append(" noresize=\"noresize\"");
        }

        results.attr("scrolling", attr.scrolling);
        results.attr("marginheight", attr.marginheight);
        results.attr("marginwidth", attr.marginwidth);
        results.attr("frameborder", attr.frameborder);
        results.attr("longdesc", attr.longdesc);

        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(this.getElementClose());

        results.append(this.getBody());

        return results.toString();
    }
}
