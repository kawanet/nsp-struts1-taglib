/**
 * @see https://github.com/kawanet/nsp-struts1-taglib
 */

import {beanTags as _beanTags, Struts1Bean} from "./src/bean.js";
import {htmlTags as _htmlTags, Struts1Html} from "./src/html.js";
import {logicTags as _logicTags, Struts1Logic} from "./src/logic.js";

// namespaces
export {Struts1Bean, Struts1Html, Struts1Logic};

// taglib implementations
export const beanTags = _beanTags;
export const htmlTags = _htmlTags;
export const logicTags = _logicTags;
