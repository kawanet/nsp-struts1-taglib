import type {Struts1Logic} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {TagUtils} from "../util/TagUtils.js";

const isArrayLike = <T = any>(v: any): v is ArrayLike<T> => (!!v && "object" === typeof v && "number" === typeof v.length);

const isEmpty = (v: any): v is null => (v == null || v === "");

/**
 * <logic:iterate>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/IterateTag.java
 */
export class IterateTag extends BodyTagSupport<Struts1Logic.IterateTagAttr> {
    protected attr: Struts1Logic.IterateTagAttr;

    async render() {
        const {context} = this;
        const {id, indexId, offset, length} = this.attr;

        const array = this.getCollection();
        const start = +offset || 0;
        const end = (!isEmpty(length) ? start + (+length || 0) : array?.length);

        const buffer = new StringBuffer();

        for (let i = start; i < end; i++) {
            if (indexId) context[indexId] = i;
            if (id) context[id] = array[i];
            buffer.append(await this.getBody());
        }

        return buffer.toString();
    }

    protected getCollection(): ArrayLike<any> {
        const {context} = this;
        const {name, property, scope} = this.attr;

        let collection = this.attr.collection;

        if (!collection) {
            collection = TagUtils.getInstance().lookup(context, name, property, scope);
        }

        if (isArrayLike(collection)) {
            return collection;
        }

        throw new Error(`Invalid collection for name ${name} property ${property}`);
    }
}
