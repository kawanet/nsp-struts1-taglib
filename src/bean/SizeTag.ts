import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

const isArrayLike = <T = any>(v: any): v is ArrayLike<T> => ("object" === typeof v && "number" === typeof v.length);

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

    render(): string {
        const {id} = this.attr;

        const collection = this.getCollection();

        this.context[id] = collection?.length;

        return null;
    };

    protected getCollection(): any[] {
        let collection = this.attr.collection;
        const {name} = this.attr;

        if (!collection) {
            collection = this.getTarget();
        }

        if (Array.isArray(collection)) {
            return collection;
        }

        if (isArrayLike(collection)) {
            return collection;
        }

        throw new Error(`No valid collection specified for size tag: ${name}`);
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

        throw new Error(`No valid collection specified for size tag: ${name}`);
    }
}
