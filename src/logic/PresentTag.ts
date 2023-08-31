import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:present>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/PresentTag.java
 */
export class PresentTag extends ConditionalTagBase<Struts1Logic.PresentTagAttr> {
    protected attr: Struts1Logic.PresentTagAttr;

    protected condition() {
        const value = this.getValue();
        return value != null;
    };

    protected getValue(): any {
        const {name, property} = this.attr;

        return this.context[name] ?? this.context[property]; // TODO
    }
}
