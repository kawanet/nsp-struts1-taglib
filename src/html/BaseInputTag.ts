import {BaseHandlerTag} from "./BaseHandlerTag.js";
import {BaseInputTagAttr} from "./BaseInputTagAttr.js";

export abstract class BaseInputTag<A extends Partial<BaseInputTagAttr>> extends BaseHandlerTag<A> {
    protected attr: A;

    // TODO
}
