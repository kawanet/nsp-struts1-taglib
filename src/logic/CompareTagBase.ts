import {ConditionalTagBase, ConditionalTagBaseAttr} from "./ConditionalTagBase.js";

export abstract class CompareTagBase<A extends Partial<CompareTagBaseAttr>> extends ConditionalTagBase<A> {
    protected attr: A;

    protected condition(): boolean {
        return this.compare(this.getLeft(), this.getRight());
    }

    /**
     * helper method to retrieve the left-side variable to compare
     */
    protected getLeft(): any {
        const {name, parameter} = this.attr;

        let variable: any;

        if (name) {
            variable = this.lookup();
        } else if (parameter) {
            variable = this.context[parameter];
        }

        if (variable == null) {
            variable = ""; // Coerce null to a zero-length String
        }

        return variable;
    }

    /**
     * helper method to retrieve the right-side value to be compared
     */
    protected getRight(): any {
        return this.attr.value ?? "";
    }

    /**
     * child classes must implement the compare method
     */
    protected abstract compare(left: any, right: any): boolean;
}

export interface CompareTagBaseAttr extends ConditionalTagBaseAttr {
    parameter?: string;
    value: any;
}
