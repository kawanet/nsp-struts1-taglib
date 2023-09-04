import { TagSupport } from "../util/TagSupport.js";
export declare abstract class ConditionalTagBase<A extends Partial<ConditionalTagAttr>> extends TagSupport<A> {
    protected attr: A;
    render(): string | Promise<string>;
    /**
     * child classes must implement the condition method
     */
    protected abstract condition(): boolean;
    /**
     * helper method to look for the variable
     */
    protected lookup<T>(): T;
}
interface ConditionalTagAttr {
    name?: string;
    property?: string;
    scope?: string;
}
export {};
