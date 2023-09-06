import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {BaseHandlerTag, prepareAttribute} from "./BaseHandlerTag.js";

/**
 * <html:submit>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/SubmitTag.java
 */
export class SubmitTag extends BaseHandlerTag<Struts1Html.SubmitTagAttr> {
    protected attr: Struts1Html.SubmitTagAttr;

    /**
     * The body content of this tag (if any).
     */
    protected text: string = null;

    async render(): Promise<string> {
        const {attr} = this;
        this.text = null;

        if (this.getBody() != null) {
            const value = (await this.getBody()).trim();

            if (value.length > 0) {
                this.text = value;
            }
        }

        // Generate an HTML element
        const results = new StringBuffer();

        results.append(this.getElementOpen());
        prepareAttribute(results, "name", attr.property);
        this.prepareButtonAttributes(results);
        results.append(this.prepareEventHandlers());
        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(this.getElementClose());

        return results.toString();
    };

    /**
     * Render the opening element.
     */
    protected getElementOpen(): string {
        return "<input type=\"submit\"";
    }

    /**
     * Render the button attributes
     */
    protected prepareButtonAttributes(results: StringBuffer): void {
        const {attr} = this;
        prepareAttribute(results, "accesskey", attr.accesskey);
        prepareAttribute(results, "tabindex", attr.tabindex);
        this.prepareValue(results);
    }

    /**
     * Render the value element
     */
    protected prepareValue(results: StringBuffer): void {
        // Acquire the label value we will be generating
        const {attr} = this;
        let label = attr.value;

        if ((label == null) && (this.text != null)) {
            label = this.text;
        }

        if ((label == null) || (label.length < 1)) {
            label = this.getDefaultValue();
        }

        prepareAttribute(results, "value", label);
    }

    /**
     * Return the default value.
     */
    protected getDefaultValue(): string {
        return "Submit";
    }

}
