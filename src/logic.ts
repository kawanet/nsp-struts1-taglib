import type {Struts1Logic} from "../types/struts-logic.js";
import {emptyTag} from "./logic/EmptyTag.js";
import {equalTag} from "./logic/EqualTag.js";
import {forwardTag} from "./logic/ForwardTag.js";
import {greaterEqualTag} from "./logic/GreaterEqualTag.js";
import {greaterThanTag} from "./logic/GreaterThanTag.js";
import {iterateTag} from "./logic/IterateTag.js";
import {lessEqualTag} from "./logic/LessEqualTag.js";
import {lessThanTag} from "./logic/LessThanTag.js";
import {matchTag} from "./logic/MatchTag.js";
import {messagesNotPresentTag} from "./logic/MessagesNotPresentTag.js";
import {messagesPresentTag} from "./logic/MessagesPresentTag.js";
import {notEmptyTag} from "./logic/NotEmptyTag.js";
import {notEqualTag} from "./logic/NotEqualTag.js";
import {notMatchTag} from "./logic/NotMatchTag.js";
import {notPresentTag} from "./logic/NotPresentTag.js";
import {presentTag} from "./logic/PresentTag.js";
import {redirectTag} from "./logic/RedirectTag.js";

const logicTags: Struts1Logic.logicTags = {
    empty: emptyTag,
    equal: equalTag,
    forward: forwardTag,
    greaterEqual: greaterEqualTag,
    greaterThan: greaterThanTag,
    iterate: iterateTag,
    lessEqual: lessEqualTag,
    lessThan: lessThanTag,
    match: matchTag,
    messagesNotPresent: messagesNotPresentTag,
    messagesPresent: messagesPresentTag,
    notEmpty: notEmptyTag,
    notEqual: notEqualTag,
    notMatch: notMatchTag,
    notPresent: notPresentTag,
    present: presentTag,
    redirect: redirectTag,
};

export {Struts1Logic, logicTags};
