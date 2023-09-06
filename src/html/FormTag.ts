import type {Struts1Html} from "../../index.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {TagSupport} from "../util/TagSupport.js";
import {TagUtils} from "../util/TagUtils.js";
import {prepareAttribute as renderAttribute} from "./BaseHandlerTag.js";

/**
 * <html:form>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/FormTag.java
 */
export class FormTag extends TagSupport<Struts1Html.FormTagAttr> {
    protected static lineEnd = "\n";

    protected attr: Struts1Html.FormTagAttr;

    /**
     * A postback action URL to which this form should be submitted, if any.
     */
    private postbackAction: string;

    /**
     * The name of the form bean to (create and) use. This is either the same
     * as the 'name' attribute, if that was specified, or is obtained from the
     * associated <code>ActionMapping</code> otherwise.
     */
    protected beanName: string;

    render() {
        const start = this._doStartTag();
        const body = this.getBody();
        const end = this._doEndTag();
        return this.tag.app.concat(start, body, end);
    }

    /**
     * Render the beginning of this form.
     */
    private _doStartTag() {
        // Look up the form bean name, scope, and type if necessary
        this.lookup();

        // Create an appropriate "form" element based on our parameters
        const results = new StringBuffer();

        results.append(this.renderFormStartElement());

        results.append(this.renderToken());

        this.initFormBean();

        return results.toString();
    }

    /**
     * Render the end of this form.
     */
    private _doEndTag() {
        const {attr} = this;

        // Render a tag representing the end of our current form
        const results = new StringBuffer("</form>");

        // Render JavaScript to set the input focus if required
        if (attr.focus) {
            results.append(this.renderFocusJavascript());
        }

        return results.toString();
    }

    /**
     * Locate or create the bean associated with our form.
     */
    protected initFormBean() {
        // TODO
    }

    /**
     * Generates the opening <code>&lt;form&gt;</code> element with
     * appropriate attributes.
     */
    protected renderFormStartElement() {
        const {attr} = this;
        const results = new StringBuffer("<form");

        // render attributes
        this.renderName(results);

        renderAttribute(results, "method", attr.method || "post");
        this.renderAction(results);
        renderAttribute(results, "accept-charset", attr.acceptCharset);
        renderAttribute(results, "class", attr.styleClass);
        renderAttribute(results, "dir", attr.dir);
        renderAttribute(results, "enctype", attr.enctype);
        renderAttribute(results, "lang", attr.lang);
        renderAttribute(results, "onreset", attr.onreset);
        renderAttribute(results, "onsubmit", attr.onsubmit);
        renderAttribute(results, "style", attr.style);
        renderAttribute(results, "target", attr.target);

        // Hook for additional attributes
        this.renderOtherAttributes(results);

        results.append(">");

        return results.toString();
    }

    /**
     * Renders the name of the form.  If XHTML is set to true, the name will
     * be rendered as an 'id' attribute, otherwise as a 'name' attribute.
     */
    protected renderName(results: StringBuffer): void {
        const {attr} = this;

        if (this.isXhtml()) {
            renderAttribute(results, "id", this.beanName);
        } else {
            renderAttribute(results, "name", this.beanName);
            renderAttribute(results, "id", attr.styleId);
        }
    }

    /**
     * Renders the action attribute
     */
    protected renderAction(results: StringBuffer): void {
        const {attr} = this;
        const calcAction = attr.action || this.postbackAction;

        results.append(" action=\"");
        results.append(TagUtils.getInstance().filter(calcAction));
        results.append("\"");
    }

    /**
     * 'Hook' to enable this tag to be extended and additional attributes
     * added.
     */
    protected renderOtherAttributes(_: StringBuffer): void {
        // NOP
    }

    /**
     * Generates a hidden input field with token information, if any. The
     * field is added within a div element for HTML 4.01 Strict compliance.
     */
    protected renderToken(): string {
        return; // TODO
    }

    /**
     * Generates javascript to set the initial focus to the form element given
     * in the tag's "focus" attribute.
     */
    protected renderFocusJavascript() {
        const {lineEnd} = FormTag;
        const {attr} = this;
        const isXhtml = this.isXhtml();

        const results = new StringBuffer();

        results.append(lineEnd);
        results.append("<script type=\"text/javascript\"");

        if (!isXhtml && attr.scriptLanguage) {
            results.append(" language=\"JavaScript\"");
        }

        results.append(">");
        results.append(lineEnd);

        // xhtml content should emit CDATA section
        // but html content should use the browser hiding trick
        results.append(isXhtml ? "//<![CDATA[" : "<!--");
        results.append(lineEnd);

        // Construct the index if needed and insert into focus statement
        let index: string | Promise<string>;
        if (attr.focusIndex) {
            const sb = new StringBuffer("[");
            sb.append(attr.focusIndex);
            sb.append("]");
            index = sb.toString();
        }

        // Construct the control name that will receive focus.
        const focusControl = new StringBuffer("document.forms[\"");
        focusControl.append(this.beanName);
        focusControl.append("\"].elements[\"");
        focusControl.append(attr.focus);
        focusControl.append("\"]");
        focusControl.append(index);

        results.append("  var focusControl = ");
        results.append(focusControl.toString());
        results.append(";");
        results.append(lineEnd);
        results.append(lineEnd);

        results.append("  if (focusControl != null && ");
        results.append("focusControl.type != \"hidden\" && ");
        results.append("!focusControl.disabled && ");
        results.append("focusControl.style.display != \"none\") {");
        results.append(lineEnd);

        results.append("     focusControl");
        results.append(".focus();");
        results.append(lineEnd);

        results.append("  }");
        results.append(lineEnd);

        results.append("//");
        results.append(isXhtml ? "]]>" : "-->");
        results.append(lineEnd);

        results.append("</script>");
        results.append(lineEnd);

        return results.toString();
    }

    /**
     * Look up values for the <code>name</code>, <code>scope</code>, and
     * <code>type</code> properties if necessary.
     */
    protected lookup(): void {
        // TODO
    }

    protected isXhtml() {
        return false;
    }
}
