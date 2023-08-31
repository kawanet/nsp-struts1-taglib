import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:empty>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/EmptyTag.java
 */
export class EmptyTag extends ConditionalTagBase<Struts1Logic.EmptyTagAttr> {
    attr: Struts1Logic.EmptyTagAttr;

    protected condition() {
        const value = this.getTarget();
        return value == null || value.length === 0;
    }

    protected getTarget(): any {
        const {context} = this;
        const {name, property} = this.attr;

        if (name) {
            if (property) {
                return context[name]?.[property];
            } else {
                return context[name];
            }
        }
    }
}
