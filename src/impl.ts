import {BaseFieldTag} from "./html/BaseFieldTag.js";
import {BaseHandlerTag} from "./html/BaseHandlerTag.js";
import {BaseInputTag} from "./html/BaseInputTag.js";
import {CompareTagBase} from "./logic/CompareTagBase.js";
import {ConditionalTagBase} from "./logic/ConditionalTagBase.js";
import {BodyTagSupport} from "./util/BodyTagSupport.js";
import {StringBuffer} from "./util/StringBuffer.js";
import {TagSupport} from "./util/TagSupport.js";

/**
 * @example
 * import {struts1Impl} from "nsp-struts1-taglib/impl";
 */

export declare namespace Struts1Impl {
    interface struts1Impl {
        bean: bean;
        html: html;
        util: util;
        logic: logic;
    }

    interface bean {
        // none
    }

    interface html {
        BaseFieldTag: typeof BaseFieldTag;
        BaseHandlerTag: typeof BaseHandlerTag;
        BaseInputTag: typeof BaseInputTag;
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

const bean: Struts1Impl.bean = {
    // none
};

const html: Struts1Impl.html = {
    BaseFieldTag,
    BaseHandlerTag,
    BaseInputTag,
};

const logic: Struts1Impl.logic = {
    CompareTagBase,
    ConditionalTagBase,
};

const util: Struts1Impl.util = {
    BodyTagSupport,
    StringBuffer,
    TagSupport,
};

export const struts1Impl: Struts1Impl.struts1Impl = {
    bean,
    html,
    logic,
    util,
};
