import {TagUtils} from "../util/TagUtils.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

export abstract class CompareTagBase<A extends Partial<CompareTagAttr>> extends ConditionalTagBase<A> {
    protected attr: A;

    protected condition(): boolean {
        const {context} = this;
        const {name, property, value, scope} = this.attr;

        let variable: any;

        if (name) {
            variable = TagUtils.getInstance().lookup(context, name, property, scope);
        }

        if (variable == null) {
            variable = ""; // Coerce null to a zero-length String
        }

        return this.compare(variable, value);
    }

    /**
     * child classes must implement the compare method
     */
    protected abstract compare(left: any, right: any): boolean;
}

interface CompareTagAttr {
    name: string;
    property: string;
    value: any;
    scope?: string;
}
