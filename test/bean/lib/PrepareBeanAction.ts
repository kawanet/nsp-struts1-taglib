import {ExamplBean} from "./ExampleBean.js";
import {NestedBean} from "./NestedBean.js";

/**
 * @see https://github.com/apache/struts1/blob/trunk/apps/cookbook/src/main/java/examples/bean/PrepareBeanAction.java
 */

export class PrepareBeanAction {
    example: ExamplBean;

    constructor() {
        // Set-up an example bean
        const example = this.example = new ExamplBean();
        example.list.push("List entry #1");
        example.list.push("List entry #2");
        example.list.push("List entry #3");
        example.list.push("List entry #4");

        // Add a nested bean
        example.nested = new NestedBean();
    }
}
