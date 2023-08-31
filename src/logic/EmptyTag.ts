import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:empty>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/EmptyTag.java
 */
export class EmptyTag extends ConditionalTagBase<Struts1Logic.EmptyTagAttr> {
    protected attr: Struts1Logic.EmptyTagAttr;

    render() {
        throw new Error("Not implemented: <logic:empty>");
        return null as string; // TODO
    };
}
