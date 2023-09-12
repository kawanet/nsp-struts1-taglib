import type {Struts1Logic} from "../../index.js";
import {toBoolean} from "../internal/toBoolean.js";
import {CompareTagBase} from "./CompareTagBase.js";

/**
 * <logic:equal>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/EqualTag.java
 */
export class EqualTag extends CompareTagBase<Struts1Logic.EqualTagAttr> {
    protected attr: Struts1Logic.EqualTagAttr;

    protected compare(left: any, right: any) {
        if ("boolean" === typeof left) {
            right = !!toBoolean(right);
        } else if ("boolean" === typeof right) {
            left = !!toBoolean(left);
        }

        return left == right;
    }
}
