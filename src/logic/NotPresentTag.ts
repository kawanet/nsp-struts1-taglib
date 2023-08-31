import type {Struts1Logic} from "../../index.js";
import {PresentTag} from "./PresentTag.js";

/**
 * <logic:notPresent>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/NotPresentTag.java
 */
export class NotPresentTag extends PresentTag {
    protected attr: Struts1Logic.NotPresentTagAttr;

    protected condition(): boolean {
        return !super.condition();
    }
}
