import type {IncomingHttpHeaders} from "http";
import type {NSP} from "nsp-server-pages";
import type {HttpServletRequest} from "./HttpServletRequest.js";

type ParsedUrlQuery = { [key: string]: string | string[] };

interface PartialRequest {
    headers?: IncomingHttpHeaders;
    query?: ParsedUrlQuery;
}

/**
 * A bridge implementation from NSP to Tomcat Catalina
 *
 * @see https://github.com/apache/tomcat/blob/main/java/org/apache/catalina/connector/Request.java
 */
export class Request implements HttpServletRequest {
    constructor(protected readonly app: NSP.App, protected readonly context: any) {
        //
    }

    protected getRequest(): PartialRequest {
        const request = this.app.store<PartialRequest>(this.context, "req").get();

        if (!request) {
            throw new Error(`request not stored in context`);
        }

        return request;
    }

    getHeader(name: string): string {
        const {headers} = this.getRequest();
        const item = headers[name] ?? headers[name?.toLowerCase()];
        if (item == null) return;

        if ("object" === typeof item) return item[0];

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

        if ("object" === typeof item) return item[0]; // Partial<ArrayLike>

        return item;
    }

    getParameterValues(name: string): string[] {
        const {query} = this.getRequest();
        const item = query?.[name];
        if (item == null) return;

        if ("object" === typeof item) return item;

        return [item];
    }
}
