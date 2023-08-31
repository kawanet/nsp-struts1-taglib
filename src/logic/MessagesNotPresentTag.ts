import type {Struts1Logic} from "../../index.js";
import {MessagesPresentTag} from "./MessagesPresentTag.js";

/**
 * <logic:messagesNotPresent>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/MessagesNotPresentTag.java
 */
export class MessagesNotPresentTag extends MessagesPresentTag {
    protected attr: Struts1Logic.MessagesNotPresentTagAttr;

    render() {
        throw new Error("Not implemented: <logic:messagesNotPresent>");
        return null as string; // TODO
    };
}
