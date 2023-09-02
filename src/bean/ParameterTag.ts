import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

type ParsedUrlQuery = { [key: string]: string | string[] };

/**
 * <bean:parameter>
 *
 * Define a scripting variable based on the value(s) of the specified
 * parameter received with this request.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/ParameterTag.java
 */
export class ParameterTag extends TagSupport<Struts1Bean.ParameterTagAttr> {
    protected attr: Struts1Bean.ParameterTagAttr;

    render() {
        const {multiple} = this.attr;

        if (multiple) {
            this.handleMultipleHeaders();
        } else {
            this.handleSingleHeader();
        }
    }

    private getQuery(): ParsedUrlQuery {
        const query = this.tag.app.store<ParsedUrlQuery>(this.context, "query").get();

        if (!query) {
            throw new Error(`query: ParsedUrlQuery not stored in context`);
        }

        return query;
    }

    private getParameterValues(name: string): string[] {
        const item = this.getQuery()?.[name];

        if (item == null) return;

        if ("object" === typeof item) return item;

        return [item];
    }

    private getParameter(name: string): string {
        const item = this.getQuery()?.[name];

        if (item == null) return;

        if ("object" === typeof item) return item[0]; // Partial<ArrayLike>

        return item;
    }

    protected handleMultipleHeaders() {
        const {id, name, value} = this.attr;

        let items = this.getParameterValues(name);

        if (!items?.length && value) {
            items = [value];
        }

        if (!items?.length) {
            throw new Error(`No header ${name} was included in this request`);
        }

        this.context[id] = items;
    }

    protected handleSingleHeader() {
        const {id, name, value} = this.attr;

        let item = this.getParameter(name);

        if (!item && value) {
            item = value;
        }

        if (!item) {
            throw new Error(`No parameter ${name} was included in this request`);
        }

        this.context[id] = item;
    }
}
