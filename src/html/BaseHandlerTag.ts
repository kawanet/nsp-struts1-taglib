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
            styles.attr("id", attr.errorStyleId);
        } else {
            styles.attr("id", attr.styleId);
        }

        if (errorsExist && attr.errorStyle != null) {
            styles.attr("style", attr.errorStyle);
        } else {
            styles.attr("style", attr.style);
        }

        if (errorsExist && attr.errorStyleClass != null) {
            styles.attr("class", attr.errorStyleClass);
        } else {
            styles.attr("class", attr.styleClass);
        }

        // TODO: message(getTitle(), getTitleKey())
        styles.attr("title", attr.title);

        // TODO: message(getAlt(), getAltKey())
        styles.attr("alt", attr.alt);

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

        handlers.attr("onclick", attr.onclick);
        handlers.attr("ondblclick", attr.ondblclick);
        handlers.attr("onmouseover", attr.onmouseover);
        handlers.attr("onmouseout", attr.onmouseout);
        handlers.attr("onmousemove", attr.onmousemove);
        handlers.attr("onmousedown", attr.onmousedown);
        handlers.attr("onmouseup", attr.onmouseup);
    }

    /**
     * Prepares the keyboard event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareKeyEvents(handlers: StringBuffer) {
        const {attr} = this;

        handlers.attr("onkeydown", attr.onkeydown);
        handlers.attr("onkeyup", attr.onkeyup);
        handlers.attr("onkeypress", attr.onkeypress);
    }

    /**
     * Prepares the text event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareTextEvents(handlers: StringBuffer) {
        const {attr} = this;

        handlers.attr("onselect", attr.onselect);
        handlers.attr("onchange", attr.onchange);
    }

    /**
     * Prepares the focus event handlers, appending them to the given
     * StringBuffer.
     */
    protected prepareFocusEvents(handlers: StringBuffer) {
        const {attr, doDisabled, doReadonly} = this;

        handlers.attr("onblur", attr.onblur);
        handlers.attr("onfocus", attr.onfocus);

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
        handlers.attr("bundle", attr.bundle);
        handlers.attr("dir", attr.dir);
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
        handlers.attr(name, value);
    }

    /**
     * Returns the closing brace for an input element
     */
    protected getElementClose() {
        return ">";
    }
}
