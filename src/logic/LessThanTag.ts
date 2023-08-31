import type {Struts1Logic} from "../../index.js";
import {CompareTagBase} from "./CompareTagBase.js";

/**
 * <logic:lessThan>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/LessThanTag.java
 */
export class LessThanTag extends CompareTagBase<Struts1Logic.LessThanTagAttr> {
    protected compare(left: any, right: any) {
        return left < right;
    }
}
