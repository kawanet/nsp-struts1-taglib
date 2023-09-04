import { ConditionalTagBase } from "./ConditionalTagBase.js";
export declare abstract class CompareTagBase<A extends Partial<CompareTagAttr>> extends ConditionalTagBase<A> {
    protected attr: A;
    protected condition(): boolean;
    /**
     * helper method to retrieve the left-side variable to compare
     */
    protected getLeft(): any;
    /**
     * helper method to retrieve the right-side value to be compared
     */
    protected getRight(): any;
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
export {};
