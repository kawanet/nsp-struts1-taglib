import type {Struts1Html} from "../../index.js";
import {BaseFieldTag} from "./BaseFieldTag.js";

/**
 * <html:password>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/PasswordTag.java
 */
export class PasswordTag extends BaseFieldTag<Struts1Html.PasswordTagAttr> {
    protected attr: Struts1Html.PasswordTagAttr;

    protected type = "password";

    protected doReadonly = true;

    render() {
        throw new Error("Not implemented: <html:password>"); // TODO
    }
}
