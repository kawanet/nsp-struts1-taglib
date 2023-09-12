import type {Struts1Bean} from "../../index.js";
import {toBoolean} from "../internal/toBoolean.js";
import {TagSupport} from "../util/TagSupport.js";
import {TagUtils} from "../util/TagUtils.js";

interface Format {
    format(value: any): string;
}

/**
 * <bean:write>
 *
 * Tag that retrieves the specified property of the specified bean, converts
 * it to a String representation (if necessary), and writes it to the current
 * output stream, optionally filtering characters that are sensitive in HTML.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/WriteTag.java
 */
export class WriteTag extends TagSupport<Struts1Bean.WriteTagAttr> {
    protected attr: Struts1Bean.WriteTagAttr;

    render() {
        const {context} = this;
        const {ignore, name, property, scope, filter} = this.attr;

        // Look up the requested bean (if necessary)
        if (ignore) {
            if (TagUtils.getInstance().lookup(context, name, scope) == null) {
                return; // Nothing to output
            }
        }

        // Look up the requested property value
        const value = TagUtils.getInstance().lookup(context, name, property, scope);

        if (value == null) {
            return; // Nothing to output
        }

        // Convert value to the String with some formatting
        const output = this.formatValue(value);

        // Print this property value to our output writer, suitably filtered
        if (toBoolean(filter) !== false) {
            return TagUtils.getInstance().filter(output);
        } else {
            return output;
        }
    }

    protected formatValue(valueToFormat: any): string {
        let format: Format;
        const value = valueToFormat;

        if ("string" === typeof value) {
            return value;
        } else {
            if ("number" === typeof value) {
                format = {format: JSON.stringify}; // TODO
            } else if (value instanceof Date) {
                format = {format: JSON.stringify}; // TODO
            }
        }

        if (format) {
            return format.format(value);
        } else {
            return String(value);
        }
    }
}
