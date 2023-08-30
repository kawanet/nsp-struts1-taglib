import type {NSP} from "nsp-server-pages";
import type {Struts1Html} from "../../index.js";
import {BaseHandlerTag} from "../util/BaseHandlerTag.js";
import {StringBuffer} from "../util/StringBuffer.js";

/**
 * <html:link>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/LinkTag.java
 */
export const linkTag: NSP.TagFn<Struts1Html.LinkTagAttr> = (tag) => {
    return (context) => {

        const attr = tag.attr(context);

        const handler = new BaseHandlerTag(tag.app, attr, context);

        const results = new StringBuffer();
        results.append("<a");
        results.attr("name", attr.name);
        results.attr("href", calculateURL(attr));
        results.attr("target", attr.target);
        results.attr("accesskey", attr.accesskey);
        results.attr("tabindex", attr.tabindex);
        results.append(handler.prepareStyles());
        results.append(handler.prepareEventHandlers());
        handler.prepareOtherAttributes(results);
        results.append(">");

        return tag.app.concat(results.toString(), tag.body(context), "</a>");
    };
};

const calculateURL = (attr: Struts1Html.LinkTagAttr) => {
    if (attr.action) {
        throw new Error(`Not supported: action="${attr.action}"`);
    }

    return attr.page;
};
