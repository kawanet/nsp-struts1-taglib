import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:base>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/BaseTag.java
 */
export class BaseTag extends TagSupport<Struts1Html.BaseTagAttr> {
    protected attr: Struts1Html.BaseTagAttr;

    render() {
        throw new Error("Not implemented: <html:base>"); // TODO
    }
}
