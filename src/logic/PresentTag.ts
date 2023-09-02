import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:present>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/PresentTag.java
 */
export class PresentTag extends ConditionalTagBase<Struts1Logic.PresentTagAttr> {
    protected attr: Struts1Logic.PresentTagAttr;

    protected condition(): boolean {
        const {name} = this.attr;

        let present = false;

        if (name) {
            present = this.isBeanPresent();
        }

        return present;
    }

    /**
     * Returns true if the bean given in the <code>name</code> attribute is
     * found.
     */
    protected isBeanPresent(): boolean {
        let value: any;

        try {
            value = this.lookup();
        } catch (e) {
            value = null;
        }

        return (value != null);
    }
}
