import type {Struts1Logic} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <logic:redirect>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/RedirectTag.java
 */
export class RedirectTag extends TagSupport<Struts1Logic.RedirectTagAttr> {
    protected attr: Struts1Logic.RedirectTagAttr;

    render() {
        throw new Error("Not implemented: <logic:redirect>"); // TODO
    }
}
