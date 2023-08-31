import type {Struts1Logic} from "../../index.js";
import {CompareTagBase} from "./CompareTagBase.js";

/**
 * <logic:greaterEqual>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/GreaterEqualTag.java
 */
export class GreaterEqualTag extends CompareTagBase<Struts1Logic.GreaterEqualTagAttr> {
    protected compare(left: any, right: any) {
        return left >= right;
    }
}
