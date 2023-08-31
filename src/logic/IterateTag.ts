import type {Struts1Logic} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";
import {StringBuffer} from "../util/StringBuffer.js";

/**
 * <logic:iterate>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/IterateTag.java
 */
export class IterateTag extends BodyTagSupport<Struts1Logic.IterateTagAttr> {
    protected attr: Struts1Logic.IterateTagAttr;

    async render() {
        const {context} = this;
        const {collection, name, property, id, indexId, offset} = this.attr;

        const array: any[] = collection ?? context[name] ?? context[property];
        const start = +offset || 0;
        const end = array?.length;
        if (!end) return;

        const buffer = new StringBuffer();

        for (let i = start; i < end; i++) {
            if (indexId) context[indexId] = i;
            if (id) context[id] = array[i];
            buffer.append(await this.getBody());
        }

        return buffer.toString();
    };
}
