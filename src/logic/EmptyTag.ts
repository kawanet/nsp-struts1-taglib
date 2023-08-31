import type {Struts1Logic} from "../../index.js";
import {TagUtils} from "../util/TagUtils.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:empty>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/EmptyTag.java
 */
export class EmptyTag extends ConditionalTagBase<Struts1Logic.EmptyTagAttr> {
    attr: Struts1Logic.EmptyTagAttr;

    protected condition() {
        const {context} = this;
        const {name, property, scope} = this.attr;

        const value: ArrayLike<any> = TagUtils.getInstance().lookup(context, name, property, scope);

        return value == null || value.length === 0;
    }
}
