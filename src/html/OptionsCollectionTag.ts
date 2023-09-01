import type {Struts1Html} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:optionsCollection>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/OptionsCollectionTag.java
 */
export class OptionsCollectionTag extends TagSupport<Struts1Html.OptionsCollectionTagAttr> {
    protected attr: Struts1Html.OptionsCollectionTagAttr;

    render() {
        throw new Error("Not implemented: <html:optionsCollection>"); // TODO
    };
}
