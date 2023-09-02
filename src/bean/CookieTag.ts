import type {Struts1Bean} from "../../index.js";
import {Cookie} from "../util/Cookie.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:cookie>
 *
 * Define a scripting variable based on the value(s) of the specified cookie
 * received with this request.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/CookieTag.java
 */
export class CookieTag extends TagSupport<Struts1Bean.CookieTagAttr> {
    protected attr: Struts1Bean.CookieTagAttr;

    render() {
        const {id, multiple, name, value} = this.attr;

        const cookies = this.getRequest().getCookies() ?? [];

        const values = cookies.filter(v => (v.getName() === name));

        if (values.length < 1 && value) {
            values.push(new Cookie(name, value));
        }

        if (values.length < 1) {
            throw new Error(`No cookie ${name} was included in this request`);
        }

        this.context[id] = multiple ? values : values[0];
    }
}
