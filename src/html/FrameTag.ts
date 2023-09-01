import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {prepareAttribute} from "./BaseHandlerTag.js";
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

        prepareAttribute(results, "src", this.calculateURL());
        prepareAttribute(results, "name", attr.name);

        if (attr.noresize) {
            results.append(" noresize=\"noresize\"");
        }

        prepareAttribute(results, "scrolling", attr.scrolling);
        prepareAttribute(results, "marginheight", attr.marginheight);
        prepareAttribute(results, "marginwidth", attr.marginwidth);
        prepareAttribute(results, "frameborder", attr.frameborder);
        prepareAttribute(results, "longdesc", attr.longdesc);

        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(this.getElementClose());

        results.append(this.getBody());

        return results.toString();
    }
}
