import type {Struts1Bean} from "../types/struts-bean.js";
import {cookieTag} from "./bean/CookieTag.js";
import {defineTag} from "./bean/DefineTag.js";
import {headerTag} from "./bean/HeaderTag.js";
import {includeTag} from "./bean/IncludeTag.js";
import {messageTag} from "./bean/MessageTag.js";
import {pageTag} from "./bean/PageTag.js";
import {parameterTag} from "./bean/ParameterTag.js";
import {resourceTag} from "./bean/ResourceTag.js";
import {sizeTag} from "./bean/SizeTag.js";
import {strutsTag} from "./bean/StrutsTag.js";
import {writeTag} from "./bean/WriteTag.js";

const beanTags: Struts1Bean.beanTags = {
    cookie: cookieTag,
    define: defineTag,
    header: headerTag,
    include: includeTag,
    message: messageTag,
    page: pageTag,
    parameter: parameterTag,
    resource: resourceTag,
    size: sizeTag,
    struts: strutsTag,
    write: writeTag,
};

export {Struts1Bean, beanTags};
