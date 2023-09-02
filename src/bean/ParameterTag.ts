import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:parameter>
 *
 * Define a scripting variable based on the value(s) of the specified
 * parameter received with this request.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/ParameterTag.java
 */
export class ParameterTag extends TagSupport<Struts1Bean.ParameterTagAttr> {
    protected attr: Struts1Bean.ParameterTagAttr;

    render() {
        const {multiple} = this.attr;

        if (multiple) {
            this.handleMultiple();
        } else {
            this.handleSingle();
        }
    }

    protected handleMultiple() {
        const {id, name, value} = this.attr;

        let items = this.getRequest().getParameterValues(name);

        if (!items?.length && value) {
            items = [value];
        }

        if (!items?.length) {
            throw new Error(`No header ${name} was included in this request`);
        }

        this.context[id] = items;
    }

    protected handleSingle() {
        const {id, name, value} = this.attr;

        let item = this.getRequest().getParameter(name);

        if (!item && value) {
            item = value;
        }

        if (!item) {
            throw new Error(`No parameter ${name} was included in this request`);
        }

        this.context[id] = item;
    }
}
