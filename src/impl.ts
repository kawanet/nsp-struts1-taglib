import {BodyTagSupport} from "./util/BodyTagSupport.js";
import {StringBuffer} from "./util/StringBuffer.js";
import {TagSupport} from "./util/TagSupport.js";

export declare namespace Struts1Impl {
    interface struts1Impl {
        util: util;
    }

    interface util {
        BodyTagSupport: typeof BodyTagSupport;
        StringBuffer: typeof StringBuffer;
        TagSupport: typeof TagSupport;
    }
}

/**
 * interface declaration is separated to get better .d.ts declaration emitted.
 */
const util: Struts1Impl.util = {
    BodyTagSupport,
    StringBuffer,
    TagSupport,
};

export const struts1Impl: Struts1Impl.struts1Impl = {
    util,
};
