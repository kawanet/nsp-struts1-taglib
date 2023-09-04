import type { Cookie } from "./Cookie.js";
import type { ServletRequest } from "./ServletRequest.js";
/**
 * Minimal interface for HttpServletRequest
 *
 * @see https://github.com/apache/tomcat/blob/main/java/jakarta/servlet/http/HttpServletRequest.java
 */
export interface HttpServletRequest extends ServletRequest {
    /**
     * Returns an array containing all of the <code>Cookie</code> objects the client sent with this request. This method
     * returns <code>null</code> if no cookies were sent.
     */
    getCookies(): Cookie[];
    /**
     * Returns the value of the specified request header as a <code>String</code>. If the request did not include a
     * header of the specified name, this method returns <code>null</code>. If there are multiple headers with the same
     * name, this method returns the first head in the request. The header name is case insensitive. You can use this
     * method with any request header.
     */
    getHeader(name: string): string;
    /**
     * Returns all the values of the specified request header as an <code>Enumeration</code> of <code>String</code>
     * objects.
     */
    getHeaders(name: string): string[];
}
