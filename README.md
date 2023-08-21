# nsp-struts1-taglib

[![Node.js CI](https://github.com/kawanet/nsp-struts1-taglib/workflows/Node.js%20CI/badge.svg?branch=main)](https://github.com/kawanet/nsp-struts1-taglib/actions/)
[![npm version](https://img.shields.io/npm/v/nsp-struts1-taglib)](https://www.npmjs.com/package/nsp-struts1-taglib)

[NSP](https://github.com/kawanet/nsp-server-pages) taglib for Apache Struts1 Tag Library

- `<bean:xxx/>`
- `<html:xxx/>`
- `<logic:xxx/>`
- See [TypeScript declaration files](https://github.com/kawanet/nsp-struts1-taglib/blob/main/types/) for API detail.

## SYNOPSIS

```js
import {createNSP} from "nsp-server-pages";
import {beanTags, htmlTags, logicTags} from "nsp-struts1-taglib";

const nsp = createNSP();

nsp.addTagLib({ns: "bean", tag: beanTags});
nsp.addTagLib({ns: "html", tag: htmlTags});
nsp.addTagLib({ns: "logic", tag: logicTags});

const render = await nsp.loadJSP("template.jsp");

console.log(await render({...}));
```

## COMMONJS

- Both ES Modules and CommonJS supported.

```js
const {createNSP} = require("nsp-server-pages");
const {cTags, fmtTags, fnFunctions} = require("nsp-jstl-taglib");
```

## LINKS

- https://github.com/kawanet/nsp-server-pages
- https://github.com/kawanet/nsp-struts1-taglib
- https://github.com/kawanet/nsp-jstl-taglib
- https://www.npmjs.com/package/nsp-struts1-taglib
- https://github.com/apache/struts1
- https://github.com/apache/struts1/tree/trunk/taglib/src/main/java/org/apache/struts/taglib
- https://github.com/apache/struts1/tree/trunk/taglib/src/main/resources/META-INF/tld

## LICENSE

```js
// SPDX-License-Identifier: Apache-2.0
```
