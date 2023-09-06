import type {Struts1Html} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";

/**
 * <html:param>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ParamTag.java
 */
export class ParamTag extends BodyTagSupport<Struts1Html.ParamTagAttr> {
    protected attr: Struts1Html.ParamTagAttr;

    render() {
        throw new Error("Not implemented: <html:param>"); // TODO
    }
}
