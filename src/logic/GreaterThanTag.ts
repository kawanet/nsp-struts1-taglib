import type {Struts1Logic} from "../../index.js";
import {CompareTagBase} from "./CompareTagBase.js";

/**
 * <logic:greaterThan>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/GreaterThanTag.java
 */
export class GreaterThanTag extends CompareTagBase<Struts1Logic.GreaterThanTagAttr> {
    protected attr: Struts1Logic.GreaterThanTagAttr;

    render() {
        throw new Error("Not implemented: <logic:greaterThan>");
        return null as string; // TODO
    };
}
