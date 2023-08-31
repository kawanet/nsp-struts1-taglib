import type {Struts1Logic} from "../types/struts-logic.js";
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

const logicTags: Struts1Logic.logicTags = {
    empty: EmptyTag,
    equal: EqualTag,
    forward: ForwardTag,
    greaterEqual: GreaterEqualTag,
    greaterThan: GreaterThanTag,
    iterate: IterateTag,
    lessEqual: LessEqualTag,
    lessThan: LessThanTag,
    match: MatchTag,
    messagesNotPresent: MessagesNotPresentTag,
    messagesPresent: MessagesPresentTag,
    notEmpty: NotEmptyTag,
    notEqual: NotEqualTag,
    notMatch: NotMatchTag,
    notPresent: NotPresentTag,
    present: PresentTag,
    redirect: RedirectTag,
};

export {Struts1Logic, logicTags};
