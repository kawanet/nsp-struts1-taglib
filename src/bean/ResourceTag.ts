import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:resource>
 *
 * Define a scripting variable based on the contents of the specified web
 * application resource.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/ResourceTag.java
 */
export class ResourceTag extends TagSupport<Struts1Bean.ResourceTagAttr> {
    protected attr: Struts1Bean.ResourceTagAttr;

    render() {
        throw new Error("Not implemented: <bean:resource>"); // TODO
    };
}
