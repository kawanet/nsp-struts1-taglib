import type {NSP} from "nsp-server-pages";
import type {BaseHandlerTagAttr} from "./BaseHandlerTagAttr.js";
import {StringBuffer} from "./StringBuffer.js";

export abstract class BaseHandlerTag<A extends Partial<BaseHandlerTagAttr>> {
    /**
     * Indicates whether 'disabled' is a valid attribute.
     */
    protected doDisabled: boolean = true;

    /**
     * Indicates whether 'readonly' is a valid attribute.
     */
    protected doReadonly: boolean = false;

    constructor(protected app: NSP.App, protected attr: A, protected context: any) {
        //
    }

    doErrorsExist(): boolean {
        return false;
    }

    prepareStyles() {
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

    prepareEventHandlers() {
        const handlers = new StringBuffer();

        this.prepareMouseEvents(handlers);
        this.prepareKeyEvents(handlers);
        this.prepareTextEvents(handlers);
        this.prepareFocusEvents(handlers);

        return handlers.toString();
    }

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

    protected prepareKeyEvents(handlers: StringBuffer) {
        const {attr} = this;

        handlers.attr("onkeydown", attr.onkeydown);
        handlers.attr("onkeyup", attr.onkeyup);
        handlers.attr("onkeypress", attr.onkeypress);
    }

    protected prepareTextEvents(handlers: StringBuffer) {
        const {attr} = this;

        handlers.attr("onselect", attr.onselect);
        handlers.attr("onchange", attr.onchange);
    }

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

    protected prepareInternationalization(handlers: StringBuffer) {
        const {attr} = this;
        handlers.attr("bundle", attr.bundle);
        handlers.attr("dir", attr.dir);
    }

    prepareOtherAttributes(_: StringBuffer): void {
        //
    }
}
