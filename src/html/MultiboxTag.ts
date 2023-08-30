import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "../util/BaseHandlerTag.js";
import {StringBuffer} from "../util/StringBuffer.js";

/**
 * <html:multibox>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/MultiboxTag.java
 */
export const multiboxTag: NSP.TagFn<Struts1Html.MultiboxTagAttr> = (tag) => {
    return (context) => {
        return new MultiboxTag(tag, context).toString();
    };
};

class MultiboxTag extends BaseHandlerTag<Struts1Html.MultiboxTagAttr> {
    protected attr: Struts1Html.MultiboxTagAttr;

    async toString() {
        const {attr} = this;

        const body = await this.getBody();
        if (body) this.constant = body.trim();

        const results = new StringBuffer(`<input type="checkbox"`);

        results.attr("name", attr.property);
        results.attr("accesskey", attr.accesskey);
        results.attr("tabindex", attr.tabindex);

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

        results.attr("value", value);

        return value;
    }

    /**
     * Render the checked element
     */
    prepareChecked(results: StringBuffer, value: string) {
        const checked = this.context[this.attr.property];

        if (checkArray(checked, value)) {
            results.attr("checked", "checked");
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
