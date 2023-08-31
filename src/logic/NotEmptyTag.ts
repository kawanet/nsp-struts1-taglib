import {EmptyTag} from "./EmptyTag.js";

/**
 * <logic:notEmpty>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/NotEmptyTag.java
 */
export class NotEmptyTag extends EmptyTag {
    protected condition() {
        return !super.condition();
    }
}
