import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "../util/BaseHandlerTag.js";

/**
 * <html:radio>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/RadioTag.java
 */
export class RadioTag extends BaseHandlerTag<Struts1Html.RadioTagAttr> {
    protected attr: Struts1Html.RadioTagAttr;

    render() {
        throw new Error("Not implemented: <html:radio>");
        return null as string; // TODO
    };
}
