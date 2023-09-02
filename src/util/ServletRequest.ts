/**
 * Minimal interface for HttpServletRequest
 *
 * @see https://github.com/apache/tomcat/blob/main/java/jakarta/servlet/ServletRequest.java
 */
export interface ServletRequest {
    /**
     * Returns the value of a request parameter as a <code>String</code>, or <code>null</code> if the parameter does not
     * exist. Request parameters are extra information sent with the request. For HTTP servlets, parameters are
     * contained in the query string or posted form data.
     */
    getParameter(name: string): string;

    /**
     * Returns an <code>Enumeration</code> of <code>String</code> objects containing the names of the parameters
     * contained in this request. If the request has no parameters, the method returns an empty
     * <code>Enumeration</code>.
     */
    getParameterValues(name: string): string[];
}
