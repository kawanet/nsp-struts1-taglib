import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";
import {TagUtils} from "../util/TagUtils.js";

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

    render() {
        const {id} = this.attr;

        const collection = this.getCollection();

        this.context[id] = collection?.length;
    };

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

        throw new Error(`No valid collection specified for size tag: ${name}`);
    }
}
