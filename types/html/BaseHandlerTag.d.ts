import { BodyTagSupport } from "../util/BodyTagSupport.js";
import { StringBuffer } from "../util/StringBuffer.js";
import type { BaseHandlerTagAttr } from "./BaseHandlerTagAttr.js";
export declare abstract class BaseHandlerTag<A extends Partial<BaseHandlerTagAttr>> extends BodyTagSupport<A> {
    protected attr: A;
    /**
     * Indicates whether 'disabled' is a valid attribute.
     */
    protected doDisabled: boolean;
    /**
     * Indicates whether 'readonly' is a valid attribute.
     */
    protected doReadonly: boolean;
    /**
     * Determine if there are errors for the component.
     * TODO
     */
    doErrorsExist(): boolean;
    /**
     * Prepares the style attributes for inclusion in the component's HTML
     * tag.
     */
    protected prepareStyles(): string | Promise<string>;
    /**
     * Prepares the event handlers for inclusion in the component's HTML tag.
     */
    protected prepareEventHandlers(): string | Promise<string>;
    /**
     * Prepares the mouse event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareMouseEvents(handlers: StringBuffer): void;
    /**
     * Prepares the keyboard event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareKeyEvents(handlers: StringBuffer): void;
    /**
     * Prepares the text event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareTextEvents(handlers: StringBuffer): void;
    /**
     * Prepares the focus event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareFocusEvents(handlers: StringBuffer): void;
    /**
     * Prepares the internationalization attribtes, appending them to the given
     * StringBuffer.
     */
    protected prepareInternationalization(handlers: StringBuffer): void;
    /**
     * 'Hook' to enable tags to be extended and additional attributes added.
     */
    protected prepareOtherAttributes(_: StringBuffer): void;
    /**
     * Prepares an attribute if the value is not null, appending it to the
     * given StringBuffer.
     */
    protected prepareAttribute(handlers: StringBuffer, name: string, value: any): void;
    /**
     * Returns the closing brace for an input element
     */
    protected getElementClose(): string;
}
export declare const prepareAttribute: (handlers: StringBuffer, name: string, value: any) => void;
