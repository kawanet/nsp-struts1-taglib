import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:write>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/WriteTag.java
 */
export class WriteTag extends TagSupport<Struts1Bean.WriteTagAttr> {
    protected attr: Struts1Bean.WriteTagAttr;

    render() {
        throw new Error("Not implemented: <bean:write>");
        return null as string; // TODO
    };
}
