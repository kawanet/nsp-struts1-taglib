import type {Struts1Bean} from "../types/struts-bean.js";
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

const beanTags: Struts1Bean.beanTags = {
    cookie: CookieTag,
    define: DefineTag,
    header: HeaderTag,
    include: IncludeTag,
    message: MessageTag,
    page: PageTag,
    parameter: ParameterTag,
    resource: ResourceTag,
    size: SizeTag,
    struts: StrutsTag,
    write: WriteTag,
};

export {Struts1Bean, beanTags};
