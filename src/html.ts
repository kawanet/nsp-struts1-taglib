import type {Struts1Html} from "../types/struts-html.js";
import {baseTag} from "./html/BaseTag.js";
import {buttonTag} from "./html/ButtonTag.js";
import {cancelTag} from "./html/CancelTag.js";
import {checkboxTag} from "./html/CheckboxTag.js";
import {errorsTag} from "./html/ErrorsTag.js";
import {fileTag} from "./html/FileTag.js";
import {formTag} from "./html/FormTag.js";
import {frameTag} from "./html/FrameTag.js";
import {hiddenTag} from "./html/HiddenTag.js";
import {htmlTag} from "./html/HtmlTag.js";
import {imageTag} from "./html/ImageTag.js";
import {imgTag} from "./html/ImgTag.js";
import {javascriptTag} from "./html/JavascriptTag.js";
import {labelTag} from "./html/LabelTag.js";
import {linkTag} from "./html/LinkTag.js";
import {messagesTag} from "./html/MessagesTag.js";
import {multiboxTag} from "./html/MultiboxTag.js";
import {optionsCollectionTag} from "./html/OptionsCollectionTag.js";
import {optionsTag} from "./html/OptionsTag.js";
import {optionTag} from "./html/OptionTag.js";
import {paramTag} from "./html/ParamTag.js";
import {passwordTag} from "./html/PasswordTag.js";
import {radioTag} from "./html/RadioTag.js";
import {resetTag} from "./html/ResetTag.js";
import {rewriteTag} from "./html/RewriteTag.js";
import {selectTag} from "./html/SelectTag.js";
import {submitTag} from "./html/SubmitTag.js";
import {textareaTag} from "./html/TextareaTag.js";
import {textTag} from "./html/TextTag.js";
import {xhtmlTag} from "./html/XhtmlTag.js";

const htmlTags: Struts1Html.htmlTags = {
    base: baseTag,
    button: buttonTag,
    cancel: cancelTag,
    checkbox: checkboxTag,
    errors: errorsTag,
    file: fileTag,
    form: formTag,
    frame: frameTag,
    hidden: hiddenTag,
    html: htmlTag,
    image: imageTag,
    img: imgTag,
    javascript: javascriptTag,
    label: labelTag,
    link: linkTag,
    param: paramTag,
    messages: messagesTag,
    multibox: multiboxTag,
    option: optionTag,
    options: optionsTag,
    optionsCollection: optionsCollectionTag,
    password: passwordTag,
    radio: radioTag,
    reset: resetTag,
    rewrite: rewriteTag,
    select: selectTag,
    submit: submitTag,
    text: textTag,
    textarea: textareaTag,
    xhtml: xhtmlTag,
};

export {Struts1Html, htmlTags};
