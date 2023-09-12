import type {Struts1Bean} from "../../index.js";
import {toBoolean} from "../internal/toBoolean.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <bean:resource>
 *
 * Define a scripting variable based on the contents of the specified web
 * application resource.
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/bean/ResourceTag.java
 *
 * @example
 * nsp.hook("bean:resource", (name) => {
 *     const path = `path/to/resources/${name}`;
 *     return fs.promises.readFile(path, "utf-8");
 * });
 */
export class ResourceTag extends TagSupport<Struts1Bean.ResourceTagAttr> {
    protected attr: Struts1Bean.ResourceTagAttr;

    async render() {
        const {context} = this;
        const {name, id, input} = this.attr;

        if (toBoolean(input)) {
            throw new Error(`Not implemented: <bean:resource input="true">`);
        }

        const resource = await this.tag.app.process<Promise<string>>("bean:resource", name);

        if (resource == null) {
            throw new Error(`No resource ${name} available in this application`);
        }

        context[id] = resource;
    }
}
