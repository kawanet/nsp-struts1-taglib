import type {Struts1Html} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";

/**
 * <html:option>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/OptionTag.java
 */
export class OptionTag extends BodyTagSupport<Struts1Html.OptionTagAttr> {
    protected attr: Struts1Html.OptionTagAttr;

    render() {
        throw new Error("Not implemented: <html:option>"); // TODO
    };
}
