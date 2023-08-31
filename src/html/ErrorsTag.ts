import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:errors>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ErrorsTag.java
 */
export class ErrorsTag extends TagSupport<Struts1Html.ErrorsTagAttr> {
    protected attr: Struts1Html.ErrorsTagAttr;

    render() {
        throw new Error("Not implemented: <html:errors>");
        return null as string; // TODO
    };
}
