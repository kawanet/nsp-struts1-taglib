import { StringBuffer } from "../util/StringBuffer.js";
import { BaseInputTag } from "./BaseInputTag.js";
import type { BaseInputTagAttr } from "./BaseInputTagAttr.js";
export declare abstract class BaseFieldTag<A extends Partial<BaseFieldTagAttr>> extends BaseInputTag<A> {
    protected attr: A;
    protected abstract type: string;
    render(): string | Promise<string> | void | Promise<void>;
    /**
     * Renders a fully formed &lt;input&gt; element.
     */
    protected renderInputElement(): StringBuffer;
    /**
     * Render the value element
     */
    protected prepareValue(results: StringBuffer): void;
    /**
     * Return the given value as a formatted <code>String</code>.  This
     * implementation escapes potentially harmful HTML characters.
     */
    protected formatValue(value: any): string;
}
interface BaseFieldTagAttr extends BaseInputTagAttr {
    accept?: string;
    redisplay?: string;
}
export {};
