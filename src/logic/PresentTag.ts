import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:present>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/PresentTag.java
 */
export class PresentTag extends ConditionalTagBase<Struts1Logic.PresentTagAttr> {
    protected attr: Struts1Logic.PresentTagAttr;

    render() {
        throw new Error("Not implemented: <logic:present>");
        return null as string; // TODO
    };
}
