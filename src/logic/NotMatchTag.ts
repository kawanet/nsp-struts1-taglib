import type {Struts1Logic} from "../../index.js";
import {MatchTag} from "./MatchTag.js";

/**
 * <logic:notMatch>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/NotMatchTag.java
 */
export class NotMatchTag extends MatchTag {
    protected attr: Struts1Logic.NotMatchTagAttr;

    protected condition(): boolean {
        return !super.condition();
    }
}
