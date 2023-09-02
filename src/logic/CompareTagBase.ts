import {ConditionalTagBase} from "./ConditionalTagBase.js";

export abstract class CompareTagBase<A extends Partial<CompareTagAttr>> extends ConditionalTagBase<A> {
    protected attr: A;

    protected condition(): boolean {
        return this.compare(this.getLeft(), this.getRight());
    }

    protected getLeft(): any {
        const {name} = this.attr;

        let variable: any;

        if (name) {
            variable = this.lookup();
        }

        if (variable == null) {
            variable = ""; // Coerce null to a zero-length String
        }

        return variable;
    }

    protected getRight(): any {
        return this.attr.value ?? "";
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
