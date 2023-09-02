/**
 * @see https://github.com/apache/tomcat/blob/main/java/jakarta/servlet/http/Cookie.java
 */

export class Cookie {
    constructor(protected name: string, protected value: string) {
        //
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }
}
