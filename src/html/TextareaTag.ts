import type {Struts1Html} from "../../index.js";
import { StringBuffer } from "../util/StringBuffer.js";
import { TagUtils } from "../util/TagUtils.js";
import { prepareAttribute } from "./BaseHandlerTag.js";
import {BaseInputTag} from "./BaseInputTag.js";

/**
 * <html:textarea>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/TextareaTag.java
 */
export class TextareaTag extends BaseInputTag<Struts1Html.TextareaTagAttr> {
    protected attr: Struts1Html.TextareaTagAttr;

    protected doReadonly = true;

    render() {
        const results = this.renderTextareaElement();
        return results
    };

    /**
     * Generate an HTML &lt;textarea&gt; tag.
     */
    protected renderTextareaElement(): string |Promise<string> {
        const {attr} = this;
        const results = new StringBuffer("<textarea");

        prepareAttribute(results, "name", attr.property);
        prepareAttribute(results, "accesskey", attr.accesskey);
        prepareAttribute(results, "tabindex", attr.tabindex);
        prepareAttribute(results, "cols", attr.cols);
        prepareAttribute(results, "rows", attr.rows);
        results.append(this.prepareEventHandlers());
        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(">");

        results.append(this.renderData());

        results.append("</textarea>");

        return results.toString();
    }

    /**
     * Renders the value displayed in the &lt;textarea&gt; tag.
     */
    protected renderData(): string {
        const {attr} = this;
        let data = attr.value;

        if (data == null) {
            data = this.lookupProperty(this.name, attr.property);
        }

        return (data == null) ? "" : TagUtils.getInstance().filter(data);
    }
}
