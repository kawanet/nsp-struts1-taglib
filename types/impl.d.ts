import { CompareTagBase } from "./logic/CompareTagBase.js";
import { ConditionalTagBase } from "./logic/ConditionalTagBase.js";
import { BodyTagSupport } from "./util/BodyTagSupport.js";
import { StringBuffer } from "./util/StringBuffer.js";
import { TagSupport } from "./util/TagSupport.js";
/**
 * @example
 * import {struts1Impl} from "nsp-struts1-taglib/impl";
 */
export declare namespace Struts1Impl {
    interface struts1Impl {
        util: util;
        logic: logic;
    }
    interface logic {
        CompareTagBase: typeof CompareTagBase;
        ConditionalTagBase: typeof ConditionalTagBase;
    }
    interface util {
        BodyTagSupport: typeof BodyTagSupport;
        StringBuffer: typeof StringBuffer;
        TagSupport: typeof TagSupport;
    }
}
export declare const struts1Impl: Struts1Impl.struts1Impl;
