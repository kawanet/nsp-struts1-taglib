import type {Struts1Bean} from "../../index.js";
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
        throw new Error("Not implemented: <bean:cookie>"); // TODO
    };
}
