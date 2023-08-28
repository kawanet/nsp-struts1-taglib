/**
 * @see https://github.com/kawanet/nsp-struts1-taglib
 */
import {Struts1Bean} from "./types/struts-bean.js";
import {Struts1Html} from "./types/struts-html.js";
import {Struts1Logic} from "./types/struts-logic.js";

export {Struts1Bean, Struts1Html, Struts1Logic};

export const beanTags: Struts1Bean.beanTags = {
    cookie: null, // TODO
    define: null, // TODO
    header: null, // TODO
    include: null, // TODO
    message: null, // TODO
    page: null, // TODO
    parameter: null, // TODO
    resource: null, // TODO
    size: null, // TODO
    struts: null, // TODO
    write: null, // TODO
};

export const htmlTags: Struts1Html.htmlTags = {
    base: null, // TODO
    button: null, // TODO
    cancel: null, // TODO
    checkbox: null, // TODO
    errors: null, // TODO
    file: null, // TODO
    form: null, // TODO
    frame: null, // TODO
    hidden: null, // TODO
    html: null, // TODO
    image: null, // TODO
    img: null, // TODO
    javascript: null, // TODO
    label: null, // TODO
    link: null, // TODO
    param: null, // TODO
    messages: null, // TODO
    multibox: null, // TODO
    option: null, // TODO
    options: null, // TODO
    optionsCollection: null, // TODO
    password: null, // TODO
    radio: null, // TODO
    reset: null, // TODO
    rewrite: null, // TODO
    select: null, // TODO
    submit: null, // TODO
    text: null, // TODO
    textarea: null, // TODO
    xhtml: null, // TODO
};

export const logicTags: Struts1Logic.logicTags = {
    empty: null, // TODO
    equal: null, // TODO
    forward: null, // TODO
    greaterEqual: null, // TODO
    greaterThan: null, // TODO
    iterate: null, // TODO
    lessEqual: null, // TODO
    lessThan: null, // TODO
    match: null, // TODO
    messagesNotPresent: null, // TODO
    messagesPresent: null, // TODO
    notEmpty: null, // TODO
    notEqual: null, // TODO
    notMatch: null, // TODO
    notPresent: null, // TODO
    present: null, // TODO
    redirect: null, // TODO
};
