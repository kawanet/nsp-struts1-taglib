import {BaseInputTag} from "./BaseInputTag.js";
import type {BaseInputTagAttr} from "./BaseInputTagAttr.js";

export abstract class BaseFieldTag<A extends Partial<BaseFieldTagAttr>> extends BaseInputTag<A> {
    protected attr: A;

    protected abstract type: string;

    // TODO
}

interface BaseFieldTagAttr extends BaseInputTagAttr {
    accept?: string;

    redisplay?: string;
}
