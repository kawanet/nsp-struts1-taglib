import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:page>
 *
 * Define a scripting variable that exposes the requested page context item as
 * a scripting variable and a page scope bean.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/PageTag.java
 */
export class PageTag extends TagSupport<Struts1Bean.PageTagAttr> {
    protected attr: Struts1Bean.PageTagAttr;

    render() {
        throw new Error("Not implemented: <bean:page>"); // TODO
    }
}
