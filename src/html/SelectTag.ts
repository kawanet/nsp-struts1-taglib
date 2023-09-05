import type {Struts1Html} from "../../index.js";
import { BeanUtils } from "../util/BeanUtils.js";
import { StringBuffer } from "../util/StringBuffer.js";
import { TagUtils } from "../util/TagUtils.js";
import {BaseHandlerTag, prepareAttribute} from "./BaseHandlerTag.js";
import { Constants } from "./Constants.js";

/**
 * <html:select>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/SelectTag.java
 */
export class SelectTag extends BaseHandlerTag<Struts1Html.SelectTagAttr> {
    protected attr: Struts1Html.SelectTagAttr;

    /**
     * The actual values we will match against, calculated in doStartTag().
     */
    protected match: string[] = null;

    /**
     * The saved body content of this tag.
     */
    protected saveBody: string | Promise<string> = null;

    render() {
        const results = new StringBuffer()
        results.append(this.renderSelectStartElement());

        // Store this tag itself as a page attribute
        this.context[Constants.SELECT_KEY] = this;

        this.calculateMatchValues();

        if (this.getBody() != null) {
            let value = this.getBody();

            if (value == null) {
                value = "";
            }

            this.saveBody = value;
            // this.saveBody = value.trim();
        }

        // Remove the page scope attributes we created
        delete this.context[Constants.SELECT_KEY];

        // Render a tag representing the end of our current form
        if (this.saveBody != null) {
            results.append(this.saveBody);
            this.saveBody = null;
        }

        results.append("</select>");

        return results.toString();
    };

    /**
     * Does the specified value match one of those we are looking for?
     */
    public isMatched(value: string): boolean {
        if ((this.match == null) || (value == null)) {
            return false;
        }

        for (let i = 0; i < this.match.length; i++) {
            if (value == this.match[i]) {
                return true;
            }
        }

        return false;
    }

    /**
     * Create an appropriate select start element based on our parameters.
     */
    protected renderSelectStartElement(): string | Promise<string> {
        const {attr} = this;
        const results = new StringBuffer("<select");

        prepareAttribute(results, "name", attr.property);
        // prepareAttribute(results, "accesskey", attr.accesskey);

        if (attr.multiple != null && !(attr.multiple === "false")) {
            results.append(" multiple=\"multiple\"");
        }

        prepareAttribute(results, "size", attr.size);
        prepareAttribute(results, "tabindex", attr.tabindex);
        results.append(this.prepareEventHandlers());
        results.append(this.prepareStyles());
        this.prepareOtherAttributes(results);
        results.append(">");

        return results.toString();
    }

    /**
     * Calculate the match values we will actually be using.
     */
    private calculateMatchValues(): void {
        const {attr} = this;
        if (attr.value != null) {
            this.match = [];
            this.match[0] = attr.value;
        } else {
            const bean =
                TagUtils.getInstance().lookup(this.context, attr.name, null);

            if (bean == null) {
                throw new Error(`Cannot find bean under name ${attr.name}`);
            }

            try {
                this.match = BeanUtils.getArrayProperty(bean, attr.property);

                if (this.match == null) {
                    this.match = [];
                }
            } catch (e) {
                throw new Error(`Cannot access property ${attr.property} for bean under name ${attr.name}`)
            }
        }
    }
}
