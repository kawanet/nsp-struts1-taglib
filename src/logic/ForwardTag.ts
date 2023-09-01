import type {Struts1Logic} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <logic:forward>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/ForwardTag.java
 */
export class ForwardTag extends TagSupport<Struts1Logic.ForwardTagAttr> {
    protected attr: Struts1Logic.ForwardTagAttr;

    render() {
        throw new Error("Not implemented: <logic:forward>"); // TODO
    };
}
