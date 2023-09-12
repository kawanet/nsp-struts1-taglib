import type {Struts1Html} from "../../index.js";
import {toBoolean} from "../internal/toBoolean.js";
import {StringBuffer} from "../util/StringBuffer.js";
import {TagSupport} from "../util/TagSupport.js";

/**
 * <html:html>
 *
 * @see https://github.com/apache/struts1/blob/trunk/taglib/src/main/java/org/apache/struts/taglib/html/HtmlTag.java
 */
export class HtmlTag extends TagSupport<Struts1Html.HtmlTagAttr> {
    protected attr: Struts1Html.HtmlTagAttr;

    render() {
        const start = this.renderHtmlStartElement();
        const body = this.getBody();
        const end = "</html>";

        return this.tag.app.concat(start, body, end);
    }

    protected renderHtmlStartElement() {
        const sb = new StringBuffer("<html");

        let language: string;
        let country: string;

        // TODO
        // const currentLocale: Locale = TagUtils.getInstance().getUserLocale(this.context);
        // language = currentLocale.getLanguage();
        // country = currentLocale.getCountry();

        if (language && toBoolean(this.attr.lang)) {
            sb.append(" lang=\"");
            sb.append(language);

            if (country) {
                sb.append("-");
                sb.append(country);
            }

            sb.append("\"");
        }

        sb.append(">");

        return sb.toString();
    }
}
