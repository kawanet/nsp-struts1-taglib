import {BaseHandlerTagAttr} from "./BaseHandlerTagAttr.js";

/**
 * attributes commonly used by child classes of BaseInputTag
 */
export interface BaseInputTagAttr extends BaseHandlerTagAttr {
    /**
     * Autocomplete non standard attribute
     */
    autocomplete?: string;

    /**
     * The number of character columns for this field, or negative for no
     * limit.
     */
    cols?: string;

    /**
     * The maximum number of characters allowed, or negative for no limit.
     */
    maxlength?: string;

    /**
     * The name of the field (and associated property) being processed.
     */
    property?: string;

    /**
     * The number of rows for this field, or negative for no limit.
     */
    rows?: string;

    /**
     * The value for this field, or <code>null</code> to retrieve the
     * corresponding property from our associated bean.
     */
    value?: string;
}
