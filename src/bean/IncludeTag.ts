import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:include>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/IncludeTag.java
 */
export class IncludeTag extends TagSupport<Struts1Bean.IncludeTagAttr> {
    protected attr: Struts1Bean.IncludeTagAttr;

    render() {
        throw new Error("Not implemented: <bean:include>");
        return null as string; // TODO
    };
}
