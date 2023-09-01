import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:header>
 *
 * Define a scripting variable based on the value(s) of the specified header
 * received with this request.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/HeaderTag.java
 */
export class HeaderTag extends TagSupport<Struts1Bean.HeaderTagAttr> {
    protected attr: Struts1Bean.HeaderTagAttr;

    render() {
        throw new Error("Not implemented: <bean:header>"); // TODO
    }
}
