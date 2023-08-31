import type {Struts1Logic} from "../../index.js";
import {ConditionalTagBase} from "./ConditionalTagBase.js";

/**
 * <logic:match>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/logic/MatchTag.java
 */
export class MatchTag extends ConditionalTagBase<Struts1Logic.MatchTagAttr> {
    protected attr: Struts1Logic.MatchTagAttr;

    protected condition(): boolean {
        const {location, value} = this.attr;

        const variable = this.getVariable();
        if (variable == null) {
            throw new Error(`Cannot compare null variable to value ${value}`);
        }

        let matched = false;
        if (location == null) {
            matched = variable.includes(value);
        } else if (location === "start") {
            matched = variable.startsWith(value);
        } else if (location === "end") {
            matched = variable.endsWith(value);
        }

        return matched;
    }

    protected getVariable(): string {
        const {context} = this;
        const {name, property} = this.attr;

        const target: any = context[name] ?? context[property]; // TODO
        if (target == null) return;

        return ("string" === typeof target) ? target : String(target);
    }
}
