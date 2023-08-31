import type {Struts1Logic} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";

/**
 * <logic:iterate>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/IterateTag.java
 */
export class IterateTag extends BodyTagSupport<Struts1Logic.IterateTagAttr> {
    protected attr: Struts1Logic.IterateTagAttr;

    render() {
        throw new Error("Not implemented: <logic:iterate>");
        return null as string; // TODO
    };
}
