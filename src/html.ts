import type {Struts1Html} from "../types/struts-html.js";
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

const htmlTags: Struts1Html.htmlTags = {
    base: BaseTag,
    button: ButtonTag,
    cancel: CancelTag,
    checkbox: CheckboxTag,
    errors: ErrorsTag,
    file: FileTag,
    form: FormTag,
    frame: FrameTag,
    hidden: HiddenTag,
    html: HtmlTag,
    image: ImageTag,
    img: ImgTag,
    javascript: JavascriptValidatorTag,
    label: LabelTag,
    link: LinkTag,
    param: ParamTag,
    messages: MessagesTag,
    multibox: MultiboxTag,
    option: OptionTag,
    options: OptionsTag,
    optionsCollection: OptionsCollectionTag,
    password: PasswordTag,
    radio: RadioTag,
    reset: ResetTag,
    rewrite: RewriteTag,
    select: SelectTag,
    submit: SubmitTag,
    text: TextTag,
    textarea: TextareaTag,
    xhtml: XhtmlTag,
};

export {Struts1Html, htmlTags};
