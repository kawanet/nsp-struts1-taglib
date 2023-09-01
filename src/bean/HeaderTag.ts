import type {IncomingHttpHeaders} from "http";
import type {Struts1Bean} from "../../index.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:header>
 *
 * Define a scripting variable based on the value(s) of the specified header
 * received with this request.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/HeaderTag.java
 *
 * @example
 * app.get("/", (req, res, next) => {
 *     const render = await nsp.load("/WEB-INF/views/index.jsp");
 *
 *     const ctx = {};
 *
 *     // store request headers to context before rendering
 *     nsp.store(ctx, "headers").set(req.headers);
 *
 *     res.send(await render(ctx));
 * });
 */
export class HeaderTag extends TagSupport<Struts1Bean.HeaderTagAttr> {
    protected attr: Struts1Bean.HeaderTagAttr;

    render() {
        const {multiple} = this.attr;

        if (multiple) {
            this.handleMultipleHeaders();
        } else {
            this.handleSingleHeader();
        }
    }

    private getHeader(name: string): string | string[] {
        const headers = this.tag.app.store<IncomingHttpHeaders>(this.context, "headers").get();

        if (!headers) {
            throw new Error(`headers: IncomingHttpHeaders not stored in context`);
        }

        return headers[name] ?? headers[name?.toLowerCase()];
    }

    protected handleMultipleHeaders() {
        const {id, name, value} = this.attr;

        let items = this.getHeader(name);

        if (items && !Array.isArray(items)) {
            items = [items];
        }

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

        let item = this.getHeader(name);

        if (Array.isArray(item)) {
            item = item[0];
        }

        if (!item && value) {
            item = value;
        }

        if (!item) {
            throw new Error(`No header ${name} was included in this request`);
        }

        this.context[id] = item;
    }
}
