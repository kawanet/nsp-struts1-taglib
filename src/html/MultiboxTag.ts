import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {BaseHandlerTag, prepareAttribute} from "./BaseHandlerTag.js";

/**
 * <html:multibox>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/MultiboxTag.java
 */
export class MultiboxTag extends BaseHandlerTag<Struts1Html.MultiboxTagAttr> {
    protected attr: Struts1Html.MultiboxTagAttr;

    async render() {
        const {attr} = this;

        const body = await this.getBody();
        if (body) this.constant = body.trim();

        const results = new StringBuffer(`<input type="checkbox"`);

        prepareAttribute(results, "name", attr.property);
        prepareAttribute(results, "accesskey", attr.accesskey);
        prepareAttribute(results, "tabindex", attr.tabindex);

        const value = this.prepareValue(results);

        this.prepareChecked(results, value);
        results.append(this.prepareEventHandlers());
        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(this.getElementClose());

        return results.toString();
    }

    /**
     * The constant String value to be returned when this checkbox is selected
     * and the form is submitted.
     */
    constant: string;

    /**
     * Render the value element
     */
    prepareValue(results: StringBuffer) {
        const value = this.attr.value ?? this.constant;

        if (value == null) {
            throw new Error(`You must specify the value attribute or nested tag content`);
        }

        prepareAttribute(results, "value", value);

        return value;
    }

    /**
     * Render the checked element
     */
    prepareChecked(results: StringBuffer, value: string) {
        const checked = this.context[this.attr.property];

        if (checkArray(checked, value)) {
            prepareAttribute(results, "checked", "checked");
        }
    }
}

const checkArray = (checked: any, value: any) => {
    if (Array.isArray(checked)) {
        return checked.find(v => checkValue(v, value));
    } else {
        return checkValue(checked, value);
    }
};

const checkValue = (checked: any, value: any): boolean => {
    return ("object" !== typeof checked && checked == value);
};
