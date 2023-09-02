import type {Struts1Logic} from "../../index.js";
import {EmptyTag} from "./EmptyTag.js";

/**
 * <logic:notEmpty>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/NotEmptyTag.java
 */
export class NotEmptyTag extends EmptyTag {
    protected attr: Struts1Logic.NotEmptyTagAttr;

    protected condition(): boolean {
        return !super.condition();
    }
}
