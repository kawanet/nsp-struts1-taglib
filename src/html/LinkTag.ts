import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {BaseHandlerTag, prepareAttribute} from "./BaseHandlerTag.js";

/**
 * <html:link>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/LinkTag.java
 */
export class LinkTag extends BaseHandlerTag<Struts1Html.LinkTagAttr> {
    protected attr: Struts1Html.LinkTagAttr;

    protected doDisabled = false;

    render() {
        const {attr} = this;

        const results = new StringBuffer();
        results.append("<a");
        prepareAttribute(results, "name", attr.name);
        prepareAttribute(results, "href", this.calculateURL());
        prepareAttribute(results, "target", attr.target);
        prepareAttribute(results, "accesskey", attr.accesskey);
        prepareAttribute(results, "tabindex", attr.tabindex);
        results.append(this.prepareStyles());
        results.append(this.prepareEventHandlers());
        this.prepareOtherAttributes(results);
        results.append(">");

        results.append(this.getBody());

        results.append("</a>");

        return results.toString();
    }

    calculateURL() {
        const {href} = this.attr;

        // TODO

        return href;
    }
}
