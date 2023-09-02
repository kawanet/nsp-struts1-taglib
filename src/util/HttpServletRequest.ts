import type {ServletRequest} from "./ServletRequest.js";

/**
 * Minimal interface for HttpServletRequest
 *
 * @see https://github.com/apache/tomcat/blob/main/java/jakarta/servlet/http/HttpServletRequest.java
 */
export interface HttpServletRequest extends ServletRequest {
    getHeader(name: string): string;

    getHeaders(name: string): string[];
}
