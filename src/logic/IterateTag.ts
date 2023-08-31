import type {Struts1Logic} from "../../index.js";
import {BodyTagSupport} from "../util/BodyTagSupport.js";
import {StringBuffer} from "../util/StringBuffer.js";

const isArrayLike = <T = any>(v: any): v is ArrayLike<T> => ("object" === typeof v && "number" === typeof v.length);

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

        const array: any[] = this.getCollection();
        const start = +offset || 0;
        const end = (!isEmpty(length) ? start + (+length || 0) : array?.length);

        const buffer = new StringBuffer();

        for (let i = start; i < end; i++) {
            if (indexId) context[indexId] = i;
            if (id) context[id] = array[i];
            buffer.append(await this.getBody());
        }

        return buffer.toString();
    };

    protected getCollection(): any[] {
        let collection = this.attr.collection;
        const {name, property} = this.attr;

        if (!collection) {
            collection = this.getTarget();
        }

        if (Array.isArray(collection)) {
            return collection;
        }

        if (isArrayLike(collection)) {
            return collection;
        }

        throw new Error(`Invalid collection for name ${name} property ${property}`);
    }

    protected getTarget(): any[] {
        const {context} = this;
        const {name, property} = this.attr;

        if (name) {
            if (property) {
                return context[name]?.[property];
            } else {
                return context[name];
            }
        }

        throw new Error(`No collection found for name ${name} property ${property}`);
    }
}
