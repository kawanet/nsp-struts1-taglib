import type {Struts1Html} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";

/**
 * <html:javascript>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/JavascriptValidatorTag.java
 */
export class JavascriptValidatorTag extends BodyTagSupport<Struts1Html.JavascriptTagAttr> {
    protected attr: Struts1Html.JavascriptTagAttr;

    render() {
        throw new Error("Not implemented: <html:javascript>"); // TODO
    };
}
