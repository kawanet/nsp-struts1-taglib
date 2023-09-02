import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:message>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/MessageTag.java
 */
export class MessageTag extends TagSupport<Struts1Bean.MessageTagAttr> {
    protected attr: Struts1Bean.MessageTagAttr;

    render() {
        throw new Error("Not implemented: <bean:message>"); // TODO
    }
}
