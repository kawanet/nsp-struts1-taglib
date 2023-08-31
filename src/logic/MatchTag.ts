import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:match>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/MatchTag.java
 */
export class MatchTag extends ConditionalTagBase<Struts1Logic.MatchTagAttr> {
    protected attr: Struts1Logic.MatchTagAttr;

    render() {
        throw new Error("Not implemented: <logic:match>");
        return null as string; // TODO
    };
}
