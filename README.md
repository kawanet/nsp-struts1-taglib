# nsp-struts1-taglib

[![Node.js CI](https://github.com/kawanet/nsp-struts1-taglib/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/kawanet/nsp-struts1-taglib/actions/)
[![npm version](https://img.shields.io/npm/v/nsp-struts1-taglib)](https://www.npmjs.com/package/nsp-struts1-taglib)

[NSP](https://github.com/kawanet/nsp-server-pages) taglib for Apache Struts1 Tag Library

- `<bean:xxx/>` - Bean taglib
- `<html:xxx/>` - HTML taglib
- `<logic:xxx/>` - Logic taglib
- See [TypeScript declaration files](https://github.com/kawanet/nsp-struts1-taglib/blob/main/types/) for API detail.

## SYNOPSIS

```js
import {createNSP} from "nsp-server-pages";
import {beanTags, htmlTags, logicTags} from "nsp-struts1-taglib";

const nsp = createNSP();

nsp.addTagLib({ns: "bean", tag: beanTags});
nsp.addTagLib({ns: "html", tag: htmlTags});
nsp.addTagLib({ns: "logic", tag: logicTags});

const render = await nsp.loadJSP("path/to/template.jsp");

const context = {};

const html = await render(context);

console.log(html);
```

## COMMONJS

- Both ES Modules and CommonJS supported.

```js
const {createNSP} = require("nsp-server-pages");
const {beanTags, htmlTags, logicTags} = require("nsp-struts1-taglib");
```

## COMPATIBILITY

35 / 58 tags implemented. Contributions for missing tags are welcome here!

## Struts Bean Tags

| Tag                | Class        | Status     | Note                                                         |
|--------------------|--------------|------------|--------------------------------------------------------------|
| `<bean:cookie>`    | CookieTag    | 👍 OK      |                                                              |
| `<bean:define>`    | DefineTag    | 👍 OK      |                                                              |
| `<bean:header>`    | HeaderTag    | 👍 OK      |                                                              |
| `<bean:include>`   | IncludeTag   | 🕑 Not Yet |                                                              |
| `<bean:message>`   | MessageTag   | 🕑 Not Yet |                                                              |
| `<bean:page>`      | PageTag      | 🕑 Not Yet |                                                              |
| `<bean:parameter>` | ParameterTag | 👍 OK      |                                                              |
| `<bean:resource>`  | ResourceTag  | 👍 OK      | implement `nsp.hook("bean:resource", (name) => string)` hook |
| `<bean:size>`      | SizeTag      | 👍 OK      |                                                              |
| `<bean:struts>`    | StrutsTag    | 🚫 N/A     | not implemented by design                                    |
| `<bean:write>`     | WriteTag     | 👍 OK      | `format=""` not supported yet                                |

### Struts HTML Tags

| Tag                        | Class                  | Status     | Note                                |
|----------------------------|------------------------|------------|-------------------------------------|
| `<html:base>`              | BaseTag                | 🕑 Not Yet |                                     |
| `<html:button>`            | ButtonTag              | 🕑 Not Yet |                                     |
| `<html:cancel>`            | CancelTag              | 🕑 Not Yet |                                     |
| `<html:checkbox>`          | CheckboxTag            | 🕑 Not Yet |                                     |
| `<html:errors>`            | ErrorsTag              | 🕑 Not Yet |                                     |
| `<html:file>`              | FileTag                | 🕑 Not Yet |                                     |
| `<html:form>`              | FormTag                | 👍 OK      | some features not supported yet     |
| `<html:frame>`             | FrameTag               | 👍 OK      |                                     |
| `<html:hidden>`            | HiddenTag              | 👍 OK      |                                     |
| `<html:html>`              | HtmlTag                | 👍 OK      | Locale not supported yet            |
| `<html:image>`             | ImageTag               | 👍 OK      | message resources not supported yet |
| `<html:img>`               | ImgTag                 | 🕑 Not Yet |                                     |
| `<html:javascript>`        | JavascriptValidatorTag | 🕑 Not Yet |                                     |
| `<html:label>`             | LabelTag               | 🕑 Not Yet |                                     |
| `<html:link>`              | LinkTag                | 👍 OK      | some features not supported yet     |
| `<html:messages>`          | MessagesTag            | 🕑 Not Yet |                                     |
| `<html:multibox>`          | MultiboxTag            | 👍 OK      |                                     |
| `<html:optionsCollection>` | OptionsCollectionTag   | 🕑 Not Yet |                                     |
| `<html:options>`           | OptionsTag             | 🕑 Not Yet |                                     |
| `<html:option>`            | OptionTag              | 👍 OK      | message resources not supported yet |
| `<html:param>`             | ParamTag               | 🕑 Not Yet |                                     |
| `<html:password>`          | PasswordTag            | 🕑 Not Yet |                                     |
| `<html:radio>`             | RadioTag               | 👍 OK      |                                     |
| `<html:reset>`             | ResetTag               | 🕑 Not Yet |                                     |
| `<html:rewrite>`           | RewriteTag             | 👍 OK      | some features not supported yet     |
| `<html:select>`            | SelectTag              | 👍 OK      |                                     |
| `<html:submit>`            | SubmitTag              | 👍 OK      |                                     |
| `<html:textarea>`          | TextareaTag            | 👍 OK      |                                     |
| `<html:text>`              | TextTag                | 👍 OK      |                                     |
| `<html:xhtml>`             | XhtmlTag               | 🕑 Not Yet |                                     |

### Struts Logic Taglib

| Tag                          | Class                 | Status     | Note                                |
|------------------------------|-----------------------|------------|-------------------------------------|
| `<logic:empty>`              | EmptyTag              | 👍 OK      |                                     |
| `<logic:equal>`              | EqualTag              | 👍 OK      |                                     |
| `<logic:forward>`            | ForwardTag            | 👍 OK      |                                     |
| `<logic:greaterEqual>`       | GreaterEqualTag       | 👍 OK      |                                     |
| `<logic:greaterThan>`        | GreaterThanTag        | 👍 OK      |                                     |
| `<logic:iterate>`            | IterateTag            | 👍 OK      |                                     |
| `<logic:lessEqual>`          | LessEqualTag          | 👍 OK      |                                     |
| `<logic:lessThan>`           | LessThanTag           | 👍 OK      |                                     |
| `<logic:match>`              | MatchTag              | 👍 OK      |                                     |
| `<logic:messagesNotPresent>` | MessagesNotPresentTag | 🕑 Not Yet | message resources not supported yet |
| `<logic:messagesPresent>`    | MessagesPresentTag    | 🕑 Not Yet | message resources not supported yet |
| `<logic:notEmpty>`           | NotEmptyTag           | 👍 OK      |                                     |
| `<logic:notEqual>`           | NotEqualTag           | 👍 OK      |                                     |
| `<logic:notMatch>`           | NotMatchTag           | 👍 OK      |                                     |
| `<logic:notPresent>`         | NotPresentTag         | 👍 OK      |                                     |
| `<logic:present>`            | PresentTag            | 👍 OK      |                                     |
| `<logic:redirect>`           | RedirectTag           | 🚫 N/A     | not implemented by design           |

### Struts Nested Taglib

Not supported yet.

## INHERITANCE

Import `struts1Impl` to inherit a class from the taglib.

```ts
import {Struts1Html} from "nsp-struts1-taglib";
import {struts1Impl} from "nsp-struts1-taglib/impl";

export class MyTextareaTag extends struts1Impl.html.TextareaTag {
    protected attr: MyTextareaTagAttr;

    render() {
        const {some} = this.attr;
        if (some) {
            // do something
        } else {
            // do something else
        }
        return super.render();
    }
}

interface MyTextareaTagAttr extends Struts1Html.TextareaTagAttr {
    some?: string; // add your custom attributes here
}
```

## LINKS

- https://github.com/kawanet/nsp-server-pages
- https://github.com/kawanet/nsp-jstl-taglib
- https://github.com/kawanet/nsp-struts1-taglib
- https://github.com/kawanet/nsp-seasar2-taglib
- https://github.com/apache/struts1
- https://github.com/apache/struts1/tree/trunk/taglib/src/main/java/org/apache/struts/taglib
- https://github.com/apache/struts1/tree/trunk/taglib/src/main/resources/META-INF/tld

## LICENSE

```js
// SPDX-License-Identifier: Apache-2.0
```
