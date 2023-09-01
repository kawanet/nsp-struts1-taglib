import {$$} from "telesy";
import {BodyTagSupport} from "../util/BodyTagSupport.js";
import {StringBuffer} from "../util/StringBuffer.js";
import type {BaseHandlerTagAttr} from "./BaseHandlerTagAttr.js";

export abstract class BaseHandlerTag<A extends Partial<BaseHandlerTagAttr>> extends BodyTagSupport<A> {
    protected attr: A;

    /**
     * Indicates whether 'disabled' is a valid attribute.
     */
    protected doDisabled: boolean = true;

    /**
     * Indicates whether 'readonly' is a valid attribute.
     */
    protected doReadonly: boolean = false;

    /**
     * Determine if there are errors for the component.
     * TODO
     */
    doErrorsExist(): boolean {
        return false;
    }

    /**
     * Prepares the style attributes for inclusion in the component's HTML
     * tag.
     */
    protected prepareStyles() {
        const errorsExist = this.doErrorsExist();
        const {attr} = this;
        const styles = new StringBuffer();

        if (errorsExist && attr.errorStyleId != null) {
            prepareAttribute(styles, "id", attr.errorStyleId);
        } else {
            prepareAttribute(styles, "id", attr.styleId);
        }

        if (errorsExist && attr.errorStyle != null) {
            prepareAttribute(styles, "style", attr.errorStyle);
        } else {
            prepareAttribute(styles, "style", attr.style);
        }

        if (errorsExist && attr.errorStyleClass != null) {
            prepareAttribute(styles, "class", attr.errorStyleClass);
        } else {
            prepareAttribute(styles, "class", attr.styleClass);
        }

        // TODO: message(getTitle(), getTitleKey())
        prepareAttribute(styles, "title", attr.title);

        // TODO: message(getAlt(), getAltKey())
        prepareAttribute(styles, "alt", attr.alt);

        this.prepareInternationalization(styles);

        return styles.toString();
    }

    /**
     * Prepares the event handlers for inclusion in the component's HTML tag.
     */
    protected prepareEventHandlers() {
        const handlers = new StringBuffer();

        this.prepareMouseEvents(handlers);
        this.prepareKeyEvents(handlers);
        this.prepareTextEvents(handlers);
        this.prepareFocusEvents(handlers);

        return handlers.toString();
    }

    /**
     * Prepares the mouse event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareMouseEvents(handlers: StringBuffer) {
        const {attr} = this;

        prepareAttribute(handlers, "onclick", attr.onclick);
        prepareAttribute(handlers, "ondblclick", attr.ondblclick);
        prepareAttribute(handlers, "onmouseover", attr.onmouseover);
        prepareAttribute(handlers, "onmouseout", attr.onmouseout);
        prepareAttribute(handlers, "onmousemove", attr.onmousemove);
        prepareAttribute(handlers, "onmousedown", attr.onmousedown);
        prepareAttribute(handlers, "onmouseup", attr.onmouseup);
    }

    /**
     * Prepares the keyboard event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareKeyEvents(handlers: StringBuffer) {
        const {attr} = this;

        prepareAttribute(handlers, "onkeydown", attr.onkeydown);
        prepareAttribute(handlers, "onkeyup", attr.onkeyup);
        prepareAttribute(handlers, "onkeypress", attr.onkeypress);
    }

    /**
     * Prepares the text event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareTextEvents(handlers: StringBuffer) {
        const {attr} = this;

        prepareAttribute(handlers, "onselect", attr.onselect);
        prepareAttribute(handlers, "onchange", attr.onchange);
    }

    /**
     * Prepares the focus event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareFocusEvents(handlers: StringBuffer) {
        const {attr, doDisabled, doReadonly} = this;

        prepareAttribute(handlers, "onblur", attr.onblur);
        prepareAttribute(handlers, "onfocus", attr.onfocus);

        if (doDisabled) {
            if (attr.disabled) {
                handlers.append(` disabled="disabled"`);
            }
        }

        if (doReadonly) {
            if (attr.readonly) {
                handlers.append(` readonly="readonlyl"`);
            }
        }
    }

    /**
     * Prepares the internationalization attribtes, appending them to the given
     * StringBuffer.
     */
    protected prepareInternationalization(handlers: StringBuffer) {
        const {attr} = this;
        prepareAttribute(handlers, "bundle", attr.bundle);
        prepareAttribute(handlers, "dir", attr.dir);
    }

    /**
     * 'Hook' to enable tags to be extended and additional attributes added.
     */
    protected prepareOtherAttributes(_: StringBuffer): void {
        //
    }

    /**
     * Prepares an attribute if the value is not null, appending it to the
     * given StringBuffer.
     */
    protected prepareAttribute(handlers: StringBuffer, name: string, value: any) {
        return prepareAttribute(handlers, name, value);
    }

    /**
     * Returns the closing brace for an input element
     */
    protected getElementClose() {
        return ">";
    }
}

export const prepareAttribute = (handlers: StringBuffer, name: string, value: any) => {
    if (value === true) {
        handlers.append($$` ${name}`);
    } else if (value != null) {
        handlers.append($$` ${name}="${String(value)}"`);
    }
};
