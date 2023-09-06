import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:options>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/OptionsTag.java
 */
export class OptionsTag extends TagSupport<Struts1Html.OptionsTagAttr> {
    protected attr: Struts1Html.OptionsTagAttr;

    render() {
        throw new Error("Not implemented: <html:options>"); // TODO
    }
}
