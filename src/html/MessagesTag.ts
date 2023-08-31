import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "../util/BaseHandlerTag.js";

/**
 * <html:messages>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/MessagesTag.java
 */
export class MessagesTag extends BaseHandlerTag<Struts1Html.MessagesTagAttr> {
    protected attr: Struts1Html.MessagesTagAttr;

    render() {
        throw new Error("Not implemented: <html:messages>");
        return null as string; // TODO
    };
}
