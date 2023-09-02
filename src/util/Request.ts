import type {IncomingHttpHeaders} from "http";
import type {NSP} from "nsp-server-pages";
import {Cookie} from "./Cookie.js";
import type {HttpServletRequest} from "./HttpServletRequest.js";

type ParsedUrlQuery = { [key: string]: string | string[] };

interface PartialRequest {
    headers?: IncomingHttpHeaders;
    query?: ParsedUrlQuery;

    /**
     * @see https://www.npmjs.com/package/cookie-parser
     * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/cookie-parser/index.d.ts
     */
    cookies?: { [key: string]: string };
}

/**
 * A bridge implementation from NSP to Tomcat Catalina
 *
 * @see https://github.com/apache/tomcat/blob/main/java/org/apache/catalina/connector/Request.java
 */
export class Request implements HttpServletRequest {
    private cookies: Cookie[];

    constructor(protected readonly app: NSP.App, protected readonly context: any) {
        //
    }

    getCookies(): Cookie[] {
        return this.cookies ??= bakeCookies(this.getRequest());
    }

    getHeader(name: string): string {
        const {headers} = this.getRequest();
        const item = headers[name] ?? headers[name?.toLowerCase()];
        if (item == null) return;

        if (Array.isArray(item)) return item[0];

        return item;
    }

    getHeaders(name: string): string[] {
        const {headers} = this.getRequest();
        const item = headers[name] ?? headers[name?.toLowerCase()];
        if (item == null) return;

        if ("object" === typeof item) return item; // Partial<ArrayLike>

        return [item];
    }

    getParameter(name: string): string {
        const {query} = this.getRequest();
        const item = query?.[name];
        if (item == null) return;

        if (Array.isArray(item)) return item[0];

        return item;
    }

    getParameterValues(name: string): string[] {
        const {query} = this.getRequest();
        const item = query?.[name];
        if (item == null) return;

        if ("object" === typeof item) return item; // Partial<ArrayLike>

        return [item];
    }

    protected getRequest(): PartialRequest {
        const request = this.app.store<PartialRequest>(this.context, "req").get();

        if (!request) {
            throw new Error(`request not stored in context`);
        }

        return request;
    }
}

const bakeCookies = (req: PartialRequest): Cookie[] => {
    const cookies: { [key: string]: string } = req.cookies || {};
    const items: Cookie[] = [];

    Object.keys(cookies).map(key => {
        const value = cookies[key];
        if (Array.isArray(value)) {
            value.forEach(value => items.push(new Cookie(key, value)));
        } else {
            items.push(new Cookie(key, value));
        }
    });

    return items;
};
