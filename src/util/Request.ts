import type {IncomingHttpHeaders} from "http";
import type {NSP} from "nsp-server-pages";
import type {HttpServletRequest} from "./HttpServletRequest.js";

type ParsedUrlQuery = { [key: string]: string | string[] };

/**
 * A bridge implementation from NSP to Tomcat Catalina
 *
 * @see https://github.com/apache/tomcat/blob/main/java/org/apache/catalina/connector/Request.java
 */
export class Request implements HttpServletRequest {
    constructor(protected readonly app: NSP.App, protected readonly context: any) {
        //
    }

    private getHttpHeaders(): IncomingHttpHeaders {
        const headers = this.app.store<IncomingHttpHeaders>(this.context, "headers").get();

        if (!headers) {
            throw new Error(`headers: IncomingHttpHeaders not stored in context`);
        }

        return headers;
    }

    getHeader(name: string): string {
        const headers = this.getHttpHeaders();
        const item = headers[name] ?? headers[name?.toLowerCase()];

        if (item == null) return;

        if ("object" === typeof item) return item[0];

        return item;
    }

    getHeaders(name: string): string[] {
        const headers = this.getHttpHeaders();
        const item = headers[name] ?? headers[name?.toLowerCase()];

        if (item == null) return;

        if ("object" === typeof item) return item; // Partial<ArrayLike>

        return [item];
    }

    private getQuery(): ParsedUrlQuery {
        const query = this.app.store<ParsedUrlQuery>(this.context, "query").get();

        if (!query) {
            throw new Error(`query: ParsedUrlQuery not stored in context`);
        }

        return query;
    }

    getParameter(name: string): string {
        const item = this.getQuery()?.[name];

        if (item == null) return;

        if ("object" === typeof item) return item[0]; // Partial<ArrayLike>

        return item;
    }

    getParameterValues(name: string): string[] {
        const item = this.getQuery()?.[name];

        if (item == null) return;

        if ("object" === typeof item) return item;

        return [item];
    }
}
