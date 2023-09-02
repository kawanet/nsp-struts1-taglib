import { StringBuffer } from "../util/StringBuffer.js";
import { TagUtils } from "../util/TagUtils.js";
import {BaseInputTag} from "./BaseInputTag.js";
import type {BaseInputTagAttr} from "./BaseInputTagAttr.js";

export abstract class BaseFieldTag<A extends Partial<BaseFieldTagAttr>> extends BaseInputTag<A> {
    protected attr: A;

    protected abstract type: string;

    /**
     * Renders a fully formed &lt;input&gt; element.
     */
    protected renderInputElement() {
        const {attr} = this;
        const results = new StringBuffer("<input");

        this.prepareAttribute(results, "type", this.type);
        this.prepareAttribute(results, "name", this.prepareAttribute(results, "name", attr.property));
        this.prepareAttribute(results, "accesskey", attr.accesskey);
        this.prepareAttribute(results, "accept", attr.accept);
        this.prepareAttribute(results, "maxlength", attr.maxlength);
        this.prepareAttribute(results, "size", attr.cols);
        this.prepareAttribute(results, "tabindex", attr.tabindex);
        this.prepareValue(results);
        results.append(this.prepareEventHandlers());
        results.append(this.prepareStyles());
        this.prepareAttribute(results, "autocomplete", attr.autocomplete);
        this.prepareOtherAttributes(results);
        results.append(this.getElementClose());

        return results;
    }

    /**
     * Render the value element
     */
    protected prepareValue(results: StringBuffer): void {
        const {attr} = this;
        results.append(" value=\"");

        if (attr.value != null) {
            results.append(this.formatValue(attr.value));
        } else if (attr.redisplay || !("password" == this.type)) {
            const value =
                TagUtils.getInstance().lookup(this.context, this.name, attr.property, null);

            results.append(this.formatValue(value));
        }

        results.append('"');
    }

    /**
     * Return the given value as a formatted <code>String</code>.  This
     * implementation escapes potentially harmful HTML characters.
     */
    protected formatValue(value: any): string {
        if (value == null) {
            return "";
        }

        return TagUtils.getInstance().filter(value.toString());
    }
}

interface BaseFieldTagAttr extends BaseInputTagAttr {
    accept?: string;

    redisplay?: string;
}
