import type {Struts1Bean} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";

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

    render() {
        throw new Error("Not implemented: <bean:define>");
        return null as string; // TODO
    };
}
