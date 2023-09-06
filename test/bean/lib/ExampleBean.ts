import type {NestedBean} from "./NestedBean.js";

/**
 * An example bean for Bean Examples
 *
 * @see https://github.com/apache/struts1/blob/trunk/apps/cookbook/src/main/java/examples/bean/ExampleBean.java
 */
export class ExamplBean {
    booleanValue = false;
    doubleValue = 45213.451;
    floatValue = -123.582;
    intValue = 256;
    longValue = 1321546;
    shortValue = 257;
    stringValue = "Hello, world!";
    dateValue = new Date();

    /** A list */
    list: any[] = [];

    /** An array */
    array: string[] = ["Red", "Green", "Blue", "Black", "Orange"];

    /** A nested bean */
    nested: NestedBean = null;

    /** HTML formatted markup */
    html =
        "<p>This is a <strong>simple</strong> example of "
        + "<em>HTML</em> formatted text.</p>";
}
