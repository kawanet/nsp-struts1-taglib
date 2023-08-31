import type {Struts1Logic} from "../../index.js";
import {CompareTagBase} from "./CompareTagBase.js";

/**
 * <logic:lessEqual>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/LessEqualTag.java
 */
export class LessEqualTag extends CompareTagBase<Struts1Logic.LessEqualTagAttr> {
    protected attr: Struts1Logic.LessEqualTagAttr;

    render() {
        throw new Error("Not implemented: <logic:lessEqual>");
        return null as string; // TODO
    };
}
