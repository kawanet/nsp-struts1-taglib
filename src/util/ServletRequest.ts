/**
 * Minimal interface for HttpServletRequest
 *
 * @see https://github.com/apache/tomcat/blob/main/java/jakarta/servlet/ServletRequest.java
 */
export interface ServletRequest {
    getParameter(name: string): string;

    getParameterValues(name: string): string[];
}
