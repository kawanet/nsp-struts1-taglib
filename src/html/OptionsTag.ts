import type {Struts1Html} from "../../index.js";
import { PropertyUtils } from "../util/PropertyUtils.js";
import { StringBuffer } from "../util/StringBuffer.js";
import {TagSupport} from "../util/TagSupport.js";
import { TagUtils } from "../util/TagUtils.js";
import { Constants } from "./Constants.js";
import { SelectTag } from "./SelectTag.js";

/**
 * <html:options>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/OptionsTag.java
 */
export class OptionsTag extends TagSupport<Struts1Html.OptionsTagAttr> {
    protected attr: Struts1Html.OptionsTagAttr;

    render() {
        const {attr} = this;

        // Acquire the select tag we are associated with
        const selectTag: SelectTag = this.context[Constants.SELECT_KEY];

        if (selectTag == null) {
            throw new Error("Options tag must be nested in a Select tag");
        }

        const sb = new StringBuffer();

        // If a collection was specified, use that mode to render options
        if (attr.collection != null) {
            const collIterator = this.getIterator(attr.collection, null);

            for (const bean of collIterator) {
                let value = null;
                let label = null;

                try {
                    value = PropertyUtils.getProperty(bean, attr.property);

                    if (value == null) {
                        value = "";
                    }
                } catch (e) {
                    throw Error(`Cannot access property ${attr.property} for bean under name ${attr.collection}`);
                }

                try {
                    if (attr.labelProperty != null) {
                        label = PropertyUtils.getProperty(bean, attr.labelProperty);
                    } else {
                        label = value;
                    }

                    if (label == null) {
                        label = "";
                    }
                } catch (e) {
                    throw Error(`Cannot access property ${attr.labelProperty} for bean under name ${attr.collection}`);
                }

                const stringValue = value.toString();

                this.addOption(sb, stringValue, label.toString(),
                    selectTag.isMatched(stringValue));
            }
        }
        // Otherwise, use the separate iterators mode to render options
        else {
            // Construct iterators for the values and labels collections
            const valuesIterator = this.getIterator(attr.name, attr.property);
            let labelsIterator = null;

            if ((attr.labelName != null) || (attr.labelProperty != null)) {
                labelsIterator = this.getIterator(attr.labelName, attr.labelProperty);
            }

            // Render the options tags for each element of the values coll.
            for (let i = 0; i < valuesIterator.length; i++) {
                let valueObject = valuesIterator[i];
                if (valueObject == null) {
                    valueObject = "";
                }

                let value = valueObject.toString();
                let label = value;

                if ((labelsIterator != null) && labelsIterator.length) {
                    let labelObject = labelsIterator[i];

                    if (labelObject == null) {
                        labelObject = "";
                    }

                    label = labelObject.toString();
                }

                this.addOption(sb, value, label, selectTag.isMatched(value));
            }
        }

        return sb.toString()
    }

    /**
     * Add an option element to the specified StringBuffer based on the
     * specified parameters. <p> Note that this tag specifically does not
     * support the <code>styleId</code> tag attribute, which causes the HTML
     * <code>id</code> attribute to be emitted.  This is because the HTML
     * specification states that all "id" attributes in a document have to be
     * unique.  This tag will likely generate more than one
     * <code>option</code> element element, but it cannot use the same
     * <code>id</code> value.  It's conceivable some sort of mechanism to
     * supply an array of <code>id</code> values could be devised, but that
     * doesn't seem to be worth the trouble.
     */
    protected addOption(sb: StringBuffer, value: string, label: string,
        matched: boolean): void {
        const {attr} = this;

        sb.append("<option value=\"");

        if (attr.filter) {
            sb.append(TagUtils.getInstance().filter(value));
        } else {
            sb.append(value);
        }

        sb.append("\"");

        if (matched) {
            sb.append(" selected=\"selected\"");
        }

        if (attr.style != null) {
            sb.append(" style=\"");
            sb.append(TagUtils.getInstance().filter(attr.style));
            sb.append("\"");
        }

        if (attr.styleClass != null) {
            sb.append(" class=\"");
            sb.append(TagUtils.getInstance().filter(attr.styleClass));
            sb.append("\"");
        }

        sb.append(">");

        if (attr.filter) {
            sb.append(TagUtils.getInstance().filter(label));
        } else {
            sb.append(label);
        }

        sb.append("</option>\n");
    }

    /**
     * Return an iterator for the option labels or values, based on our
     * configured properties.
     */
    protected getIterator(name: string, property: string): any[] {
        // Identify the bean containing our collection
        let beanName = name;

        if (beanName == null) {
            beanName = Constants.BEAN_KEY;
        }

        const bean =
            TagUtils.getInstance().lookup(this.context, beanName, null);

        if (bean == null) {
            throw new Error(`Cannot find bean under name ${beanName}`);
        }

        // Identify the collection itself
        let collection = bean;

        if (property != null) {
            try {
                collection = PropertyUtils.getProperty(bean, property);

                if (collection == null) {
                    throw new Error(`Property ${property} returned a null value`);
                }
            } catch (e) {
                throw new Error(`Cannot access property ${property} for bean under name ${name}`);
            }
        }

        // TODO
        // Construct and return an appropriate iterator
        // if (collection.getClass().isArray()) {
        //     collection = Arrays.asList((Object[]) collection);
        // }

        // if (collection instanceof Collection) {
        //     return (((Collection) collection).iterator());
        // } else if (collection instanceof Iterator) {
        //     return ((Iterator) collection);
        // } else if (collection instanceof Map) {
        //     return (((Map) collection).entrySet().iterator());
        // } else if (collection instanceof Enumeration) {
        //     return new IteratorAdapter((Enumeration) collection);
        // } else {
        //     throw new JspException(messages.getMessage("optionsTag.iterator",
        //             collection.toString()));
        // }
        return collection as any[];
    }
}
