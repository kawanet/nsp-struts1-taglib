import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:struts>
 *
 * Define a scripting variable that exposes the requested Struts internal
 * configuration object.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/StrutsTag.java
 */
export class StrutsTag extends TagSupport<Struts1Bean.StrutsTagAttr> {
    protected attr: Struts1Bean.StrutsTagAttr;

    render() {
        throw new Error("Not implemented: <bean:struts>"); // TODO
    };
}
