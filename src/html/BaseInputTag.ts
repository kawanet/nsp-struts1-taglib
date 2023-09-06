import {BaseHandlerTag} from "./BaseHandlerTag.js";
import {BaseInputTagAttr} from "./BaseInputTagAttr.js";
import {Constants} from "./Constants.js";

export abstract class BaseInputTag<A extends Partial<BaseInputTagAttr>> extends BaseHandlerTag<A> {
    protected attr: A;

    /**
     * The name of the bean containing our underlying property.
     */
    protected name = Constants.BEAN_KEY;
}
