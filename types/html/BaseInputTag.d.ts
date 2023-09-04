import { BaseHandlerTag } from "./BaseHandlerTag.js";
import { BaseInputTagAttr } from "./BaseInputTagAttr.js";
export declare abstract class BaseInputTag<A extends Partial<BaseInputTagAttr>> extends BaseHandlerTag<A> {
    protected attr: A;
    /**
     * The name of the bean containing our underlying property.
     */
    protected name: string;
}
