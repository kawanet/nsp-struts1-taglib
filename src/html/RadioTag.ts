import type {Struts1Html} from "../../index.js";
import { StringBuffer } from "../util/StringBuffer.js";
import { TagUtils } from "../util/TagUtils.js";
import {BaseHandlerTag, prepareAttribute} from "./BaseHandlerTag.js";

/**
 * <html:radio>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/RadioTag.java
 */
export class RadioTag extends BaseHandlerTag<Struts1Html.RadioTagAttr> {
    protected attr: Struts1Html.RadioTagAttr;

    /**
     * The body content of this tag (if any).
     */
    protected text: string = null;

    async render() {
        const results = this.renderRadioElement(this.serverValue(), this.currentValue());

        this.text = null;

        const bodyContent = await this.getBody();
        if (bodyContent != null) {
            const value = bodyContent.trim();

            if (value.length > 0) {
                this.text = value;
            }
        }

        if (this.text != null) {
            results.append(this.text);
        }

        return results.toString();
    };

    /**
     * Return the String to be used in the radio tag's <code>value</code>
     * attribute that gets sent to the server on form submission.
     */
    private serverValue(): string {
        const {attr} = this;
        // Not using indexed radio buttons
        if (attr.idName == null) {
            return attr.value;
        }

        const serverValue = this.lookupProperty(attr.idName, attr.value);

        return (serverValue == null) ? "" : serverValue;
    }

    /**
     * Acquire the current value of the bean specified by the
     * <code>name</code> attribute and the property specified by the
     * <code>property</code> attribute. This radio button with this value will
     * be checked.
     */
    private currentValue(): string {
        const {attr} = this;
        const current = this.lookupProperty(attr.name, attr.property);

        return (current == null) ? "" : current;
    }

    /**
     * Renders an HTML &lt;input type="radio"&gt; element.
     */
    protected renderRadioElement(serverValue: string, checkedValue: string): StringBuffer {
        const {attr} = this;
        const results = new StringBuffer("<input type=\"radio\"");

        prepareAttribute(results, "name", attr.property);
        prepareAttribute(results, "accesskey", attr.accesskey);
        prepareAttribute(results, "tabindex", attr.tabindex);
        prepareAttribute(results, "value",
            TagUtils.getInstance().filter(serverValue));

        if (serverValue === checkedValue) {
            results.append(" checked=\"checked\"");
        }

        results.append(this.prepareEventHandlers());
        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(this.getElementClose());

        return results;
    }

}
