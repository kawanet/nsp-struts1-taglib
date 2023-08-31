import {TagSupport} from "../util/TagSupport.js";

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
}

interface ConditionalTagAttr {
    //
}
