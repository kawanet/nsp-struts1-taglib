import {CookieTag} from "./bean/CookieTag.js";
import {DefineTag} from "./bean/DefineTag.js";
import {HeaderTag} from "./bean/HeaderTag.js";
import {IncludeTag} from "./bean/IncludeTag.js";
import {MessageTag} from "./bean/MessageTag.js";
import {PageTag} from "./bean/PageTag.js";
import {ParameterTag} from "./bean/ParameterTag.js";
import {ResourceTag} from "./bean/ResourceTag.js";
import {SizeTag} from "./bean/SizeTag.js";
import {StrutsTag} from "./bean/StrutsTag.js";
import {WriteTag} from "./bean/WriteTag.js";
import {BaseFieldTag} from "./html/BaseFieldTag.js";
import {BaseHandlerTag} from "./html/BaseHandlerTag.js";
import {BaseInputTag} from "./html/BaseInputTag.js";
import {BaseTag} from "./html/BaseTag.js";
import {ButtonTag} from "./html/ButtonTag.js";
import {CancelTag} from "./html/CancelTag.js";
import {CheckboxTag} from "./html/CheckboxTag.js";
import {ErrorsTag} from "./html/ErrorsTag.js";
import {FileTag} from "./html/FileTag.js";
import {FormTag} from "./html/FormTag.js";
import {FrameTag} from "./html/FrameTag.js";
import {HiddenTag} from "./html/HiddenTag.js";
import {HtmlTag} from "./html/HtmlTag.js";
import {ImageTag} from "./html/ImageTag.js";
import {ImgTag} from "./html/ImgTag.js";
import {JavascriptValidatorTag} from "./html/JavascriptValidatorTag.js";
import {LabelTag} from "./html/LabelTag.js";
import {LinkTag} from "./html/LinkTag.js";
import {MessagesTag} from "./html/MessagesTag.js";
import {MultiboxTag} from "./html/MultiboxTag.js";
import {OptionsCollectionTag} from "./html/OptionsCollectionTag.js";
import {OptionsTag} from "./html/OptionsTag.js";
import {OptionTag} from "./html/OptionTag.js";
import {ParamTag} from "./html/ParamTag.js";
import {PasswordTag} from "./html/PasswordTag.js";
import {RadioTag} from "./html/RadioTag.js";
import {ResetTag} from "./html/ResetTag.js";
import {RewriteTag} from "./html/RewriteTag.js";
import {SelectTag} from "./html/SelectTag.js";
import {SubmitTag} from "./html/SubmitTag.js";
import {TextareaTag} from "./html/TextareaTag.js";
import {TextTag} from "./html/TextTag.js";
import {XhtmlTag} from "./html/XhtmlTag.js";
import {CompareTagBase, CompareTagBaseAttr as _CompareTagBaseAttr} from "./logic/CompareTagBase.js";
import {ConditionalTagBase, ConditionalTagBaseAttr as _ConditionalTagBaseAttr} from "./logic/ConditionalTagBase.js";
import {EmptyTag} from "./logic/EmptyTag.js";
import {EqualTag} from "./logic/EqualTag.js";
import {ForwardTag} from "./logic/ForwardTag.js";
import {GreaterEqualTag} from "./logic/GreaterEqualTag.js";
import {GreaterThanTag} from "./logic/GreaterThanTag.js";
import {IterateTag} from "./logic/IterateTag.js";
import {LessEqualTag} from "./logic/LessEqualTag.js";
import {LessThanTag} from "./logic/LessThanTag.js";
import {MatchTag} from "./logic/MatchTag.js";
import {MessagesNotPresentTag} from "./logic/MessagesNotPresentTag.js";
import {MessagesPresentTag} from "./logic/MessagesPresentTag.js";
import {NotEmptyTag} from "./logic/NotEmptyTag.js";
import {NotEqualTag} from "./logic/NotEqualTag.js";
import {NotMatchTag} from "./logic/NotMatchTag.js";
import {NotPresentTag} from "./logic/NotPresentTag.js";
import {PresentTag} from "./logic/PresentTag.js";
import {RedirectTag} from "./logic/RedirectTag.js";
import {BodyTagSupport} from "./util/BodyTagSupport.js";
import {StringBuffer} from "./util/StringBuffer.js";
import {TagSupport} from "./util/TagSupport.js";
import {TagUtils} from "./util/TagUtils.js";

export declare namespace struts1Impl.logic {
    type CompareTagBaseAttr = _CompareTagBaseAttr;
    type ConditionalTagBaseAttr = _ConditionalTagBaseAttr;
}

/**
 * @example
 * import {struts1Impl} from "nsp-struts1-taglib/impl";
 *
 * export class MyTag extends struts1Impl.util.TagSupport<any> {
 *     protected attr: { value: string };
 *
 *     render(): string | Promise<string> | void | Promise<void> {
 *         const {value} = this.attr;
 *
 *         return value;
 *     }
 * }
 */
export const struts1Impl = {
    bean: {
        CookieTag,
        DefineTag,
        HeaderTag,
        IncludeTag,
        MessageTag,
        PageTag,
        ParameterTag,
        ResourceTag,
        SizeTag,
        StrutsTag,
        WriteTag,
    },
    html: {
        BaseFieldTag,
        BaseHandlerTag,
        BaseInputTag,
        BaseTag,
        ButtonTag,
        CancelTag,
        CheckboxTag,
        ErrorsTag,
        FileTag,
        FormTag,
        FrameTag,
        HiddenTag,
        HtmlTag,
        ImageTag,
        ImgTag,
        JavascriptValidatorTag,
        LabelTag,
        LinkTag,
        MessagesTag,
        MultiboxTag,
        OptionTag,
        OptionsCollectionTag,
        OptionsTag,
        ParamTag,
        PasswordTag,
        RadioTag,
        ResetTag,
        RewriteTag,
        SelectTag,
        SubmitTag,
        TextTag,
        TextareaTag,
        XhtmlTag,
    },
    logic: {
        CompareTagBase,
        ConditionalTagBase,
        EmptyTag,
        EqualTag,
        ForwardTag,
        GreaterEqualTag,
        GreaterThanTag,
        IterateTag,
        LessEqualTag,
        LessThanTag,
        MatchTag,
        MessagesNotPresentTag,
        MessagesPresentTag,
        NotEmptyTag,
        NotEqualTag,
        NotMatchTag,
        NotPresentTag,
        PresentTag,
        RedirectTag,
    },
    util: {
        BodyTagSupport,
        StringBuffer,
        TagSupport,
        TagUtils,
    },
};
