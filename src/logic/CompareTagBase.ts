import {ConditionalTagBase} from "./ConditionalTagBase.js";

export abstract class CompareTagBase<A extends Partial<CompareTagAttr>> extends ConditionalTagBase<A> {
    protected attr: A;

    protected condition(): boolean {
        const left = this.getLeft();
        const right = this.attr.value;
        return this.compare(left, right);
    }

    protected getLeft(): any {
        return this.attr.value; // TODO
    }

    protected getRight(): any {
        return this.attr.value;
    }

    /**
     * child classes must implement the compare method
     */
    protected abstract compare(left: any, right: any): boolean;
}

interface CompareTagAttr {
    value: any;
}
