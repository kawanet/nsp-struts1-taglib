import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:messagesPresent>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/MessagesPresentTag.java
 */
export class MessagesPresentTag extends ConditionalTagBase<Struts1Logic.MessagesPresentTagAttr> {
    protected attr: Struts1Logic.MessagesPresentTagAttr;

    protected condition(): boolean {
        throw new Error("Not implemented: <logic:messagesPresent>");
        return null as boolean; // TODO
    };
}
