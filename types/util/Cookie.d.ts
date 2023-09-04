/**
 * @see https://github.com/apache/tomcat/blob/main/java/jakarta/servlet/http/Cookie.java
 */
export declare class Cookie {
    protected name: string;
    protected value: string;
    constructor(name: string, value: string);
    getName(): string;
    getValue(): string;
}
