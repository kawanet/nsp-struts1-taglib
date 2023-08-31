import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:size>
 *
 * Define a scripting variable that will contain the number of elements found
 * in a specified array, Collection, or Map.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/SizeTag.java
 */
export class SizeTag extends TagSupport<Struts1Bean.SizeTagAttr> {
    protected attr: Struts1Bean.SizeTagAttr;

    render() {
        throw new Error("Not implemented: <bean:size>");
        return null as string; // TODO
    };
}
