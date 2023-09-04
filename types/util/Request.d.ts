import type { NSP } from "nsp-server-pages";
import { Cookie } from "./Cookie.js";
import type { HttpServletRequest } from "./HttpServletRequest.js";
/**
 * A bridge implementation from NSP to Tomcat Catalina
 *
 * @see https://github.com/apache/tomcat/blob/main/java/org/apache/catalina/connector/Request.java
 */
export declare class Request implements HttpServletRequest {
    protected readonly app: NSP.App;
    protected readonly context: any;
    private cookies;
    constructor(app: NSP.App, context: any);
    getCookies(): Cookie[];
    getHeader(name: string): string;
    getHeaders(name: string): string[];
    getParameter(name: string): string;
    getParameterValues(name: string): string[];
    private getRequest;
}
