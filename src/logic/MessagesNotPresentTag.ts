import type {Struts1Logic} from "../../types/index.js";
import {MessagesPresentTag} from "./MessagesPresentTag.js";

/**
 * <logic:messagesNotPresent>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/MessagesNotPresentTag.java
 */
export class MessagesNotPresentTag extends MessagesPresentTag {
    protected attr: Struts1Logic.MessagesNotPresentTagAttr;

    protected condition(): boolean {
        return !super.condition();
    }
}
