import type {Struts1Logic} from "../../index.js";
import {CompareTagBase} from "./CompareTagBase.js";

/**
 * <logic:notEqual>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/NotEqualTag.java
 */
export class NotEqualTag extends CompareTagBase<Struts1Logic.NotEqualTagAttr> {
    protected attr: Struts1Logic.NotEqualTagAttr;

    render() {
        throw new Error("Not implemented: <logic:notEqual>");
        return null as string; // TODO
    };
}
