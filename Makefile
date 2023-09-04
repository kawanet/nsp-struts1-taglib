#!/usr/bin/env bash -c make

all: test-title types/index.d.ts esm/index.js cjs/index.js esm/test/synopsis.test.js cjs/test/synopsis.test.js LICENSE

test: test-esm test-cjs

test-esm: all
	./node_modules/.bin/mocha esm/test --recursive

test-cjs: all
	./node_modules/.bin/mocha cjs/test --recursive

cjs/%.js: ./%.ts
	./node_modules/.bin/tsc -p tsconfig-cjs.json

esm/%.js: %.ts
	./node_modules/.bin/tsc -p tsconfig.json

types/index.d.ts: index.ts src/impl.ts
	./node_modules/.bin/tsc --outDir tmp/types/ --declaration --emitDeclarationOnly $^
	perl -pe 's#( from ".)/src/(bean|html|logic)#$$1/struts-$$2#;' < tmp/types/index.d.ts > types/index.d.ts
	/bin/rm -fr types/html/ types/logic/ types/util/
	mkdir types/html/ types/logic/ types/util/
	cp tmp/types/src/impl.d.ts types/impl.d.ts
	cp tmp/types/src/html/Base[FHI]*.d.ts types/html/
	cp tmp/types/src/logic/Co*Base.d.ts types/logic/
	cp tmp/types/src/util/*.d.ts types/util/

test-title:
	perl -i -pe 's#^const TITLE =.*#const TITLE = "$$ARGV";#' test/*.ts test/**/*.ts
	/bin/rm -fr cjs/test esm/test

LICENSE:
	curl -so $@ https://raw.githubusercontent.com/apache/struts1/trunk/core/src/main/resources/LICENSE.txt

clean:
	/bin/rm -fr esm/*/ cjs/*/ esm/*.js cjs/*.js types/index.d.ts tmp/types/

.PHONY: all clean test
