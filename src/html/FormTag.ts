import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:form>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/FormTag.java
 */
export class FormTag extends TagSupport<Struts1Html.FormTagAttr> {
    protected attr: Struts1Html.FormTagAttr;

    render() {
        throw new Error("Not implemented: <html:form>"); // TODO
    };
}
