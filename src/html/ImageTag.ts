import type {Struts1Html} from "../../index.js";
import { ResponseUtils } from "../util/ResponseUtils.js";
import { StringBuffer } from "../util/StringBuffer.js";
import { prepareAttribute } from "./BaseHandlerTag.js";
import {SubmitTag} from "./SubmitTag.js";

/**
 * <html:image>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/ImageTag.java
 */
export class ImageTag extends SubmitTag {
    protected attr: Struts1Html.ImageTagAttr;

    /**
     * The module-relative URI of the image.
     */
    protected page: string = null;

    /**
     * Render the opening element.
     */
    protected getElementOpen(): string {
        return "<input type=\"image\"";
    }

    /**
     * Render the button attributes
     */
    protected prepareButtonAttributes(results: StringBuffer): void {
        const {attr} = this;
        const tmp = this.src();

        if (tmp != null) {
            prepareAttribute(results, "src", ResponseUtils.encodeURL(tmp));
        }

        prepareAttribute(results, "align", attr.align);
        prepareAttribute(results, "border", attr.border);
        prepareAttribute(results, "value", attr.value);
        prepareAttribute(results, "accesskey", attr.accesskey);
        prepareAttribute(results, "tabindex", attr.tabindex);
    }

    /**
     * Return the base source URL that will be rendered in the
     * <code>src</code> property for this generated element, or
     * <code>null</code> if there is no such URL.
     */
    protected src(): string {
        // Deal with a direct context-relative page that has been specified
        const {attr} = this;
        if (this.page != null) {
            if ((this.src != null) || (attr.srcKey != null)
                || (attr.pageKey != null)) {
                throw new Error("You must specify exactly one of src, srcKey, page, or pageKey");
            }

            // TODO
        }

        // Deal with an indirect context-relative page that has been specified
        if (attr.pageKey != null) {
            if ((attr.src != null) || (attr.srcKey != null)) {
                throw new Error("imgTag.src"); // TODO
            }

            // TODO
        }

        // Deal with an absolute source that has been specified
        if (attr.src != null) {
            if (attr.srcKey != null) {
                throw new Error("imgTag.src"); // TODO
            }

            return (attr.src);
        }

        // Deal with an indirect source that has been specified
        if (attr.srcKey == null) {
            throw new Error("imgTag.src"); // TODO
        }

        // TODO
        // return TagUtils.getInstance().message(this.context, attr.bundle,
        //     attr.locale, attr.srcKey);
    }
}
