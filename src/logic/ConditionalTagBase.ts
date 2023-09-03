import {TagSupport} from "../util/TagSupport.js";
import {TagUtils} from "../util/TagUtils.js";

export abstract class ConditionalTagBase<A extends Partial<ConditionalTagAttr>> extends TagSupport<A> {
    protected attr: A;

    render() {
        if (this.condition()) {
            return this.getBody();
        }
    }

    /**
     * child classes must implement the condition method
     */
    protected abstract condition(): boolean;

    /**
     * helper method to look for the variable
     */
    protected lookup<T>(): T {
        const {context} = this;
        const {name, property, scope} = this.attr;
        return TagUtils.getInstance().lookup(context, name, property, scope);
    }
}

interface ConditionalTagAttr {
    name?: string;
    property?: string;
    scope?: string;
}
