import type {Struts1Bean} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";
import {TagUtils} from "../util/TagUtils.js";

/**
 * <bean:define>
 *
 * Define a scripting variable based on the value(s) of the specified bean
 * property.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/DefineTag.java
 */
export class DefineTag extends BodyTagSupport<Struts1Bean.DefineTagAttr> {
    protected attr: Struts1Bean.DefineTagAttr;

    async render() {
        const {attr, context} = this;
        const {name, property, scope, id} = attr;
        let {value} = attr;

        const body = (await this.getBody())?.trim();

        // Enforce restriction on ways to declare the new value
        let n = 0;
        if (body) n++;
        if (name) n++;
        if (value) n++;

        if (n > 1) {
            throw new Error(`Define tag can contain only one of name attribute, value attribute, or body content for bean with id: ${id}`);
        }

        if (!value && name) {
            value = TagUtils.getInstance().lookup(context, name, property, scope);
        }

        if (!value && body) {
            value = body;
        }

        if (value == null) {
            throw new Error(`Define tag cannot set a null value for bean with id: ${id}`);
        }

        // Expose this value as a scripting variable
        context[id] = value;
    }
}
