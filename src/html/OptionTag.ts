import type {Struts1Html} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {TagUtils} from "../util/TagUtils.js";
import {Constants} from "./Constants.js";
import {SelectTag} from "./SelectTag.js";

/**
 * <html:option>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/OptionTag.java
 */
export class OptionTag extends BodyTagSupport<Struts1Html.OptionTagAttr> {
    protected attr: Struts1Html.OptionTagAttr;

    /**
     * The message text to be displayed to the user for this tag (if any)
     */
    private _text: string = null;

    render() {
        this._text = null;

        if (this.getBody() != null) {
            let text = this.getBody().toString();

            if (text != null) {
                text = text.trim();

                if (text.length > 0) {
                    this._text = text;
                }
            }
        }

        return this.renderOptionElement().toString();
    }

    /**
     * Generate an HTML %lt;option&gt; element.
     */
    protected renderOptionElement(): string | Promise<string> {
        const {attr} = this;
        const results = new StringBuffer("<option value=\"");

        if (attr.filter) {
            results.append(TagUtils.getInstance().filter(attr.value));
        } else {
            results.append(attr.value);
        }
        results.append("\"");

        if (attr.disabled) {
            results.append(" disabled=\"disabled\"");
        }

        if (this.selectTag().isMatched(attr.value)) {
            results.append(" selected=\"selected\"");
        }

        if (attr.style != null) {
            results.append(" style=\"");
            results.append(TagUtils.getInstance().filter(attr.style));
            results.append("\"");
        }

        if (attr.styleId != null) {
            results.append(" id=\"");
            results.append(TagUtils.getInstance().filter(attr.styleId));
            results.append("\"");
        }

        if (attr.styleClass != null) {
            results.append(" class=\"");
            results.append(TagUtils.getInstance().filter(attr.styleClass));
            results.append("\"");
        }

        if (attr.dir != null) {
            results.append(" dir=\"");
            results.append(TagUtils.getInstance().filter(attr.dir));
            results.append("\"");
        }

        if (attr.lang != null) {
            results.append(" lang=\"");
            results.append(TagUtils.getInstance().filter(attr.lang));
            results.append("\"");
        }

        if (attr.title != null || attr.titleKey != null) {
            results.append(" title=\"");
            results.append(this.message(attr.title, attr.titleKey));
            results.append("\"");
        }

        results.append(">");

        results.append(this.text());

        results.append("</option>");

        return results.toString();
    }

    /**
     * Acquire the select tag we are associated with.
     */
    private selectTag(): SelectTag {
        const selectTag: SelectTag = this.context[Constants.SELECT_KEY]

        if (selectTag == null) {
            throw new Error("Option tag must be nested in a Select tag");
        }

        return selectTag;
    }

    /**
     * Return the text specified by the literal value or the message resources
     * key, if any; otherwise return <code>null</code>.
     */
    protected message(literal: string, key: string): string {
        if (literal != null) {
            if (key != null) {
                throw new Error("You can specify either the literal value or a message key but not both")
            } else {
                return (literal);
            }
        } else {
            // TODO if (key != null) {
            return null;
        }
    }

    /**
     * Return the text to be displayed to the user for this option (if any).
     */
    protected text(): string {
        const {attr} = this;
        let optionText = this._text;

        if ((optionText == null) && (attr.key != null)) {
            // TODO
            optionText = null;
        }

        // no body text and no key to lookup so display the value
        if (optionText == null) {
            optionText = attr.value;
        }

        return optionText;
    }
}
