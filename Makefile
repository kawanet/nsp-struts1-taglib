#!/usr/bin/env bash -c make

all: test-title types/index.d.ts types/impl.d.ts esm/index.js cjs/index.js esm/test/synopsis.test.js cjs/test/synopsis.test.js LICENSE

test: test-esm test-cjs

test-esm: all
	./node_modules/.bin/mocha esm/test --recursive

test-cjs: all
	./node_modules/.bin/mocha cjs/test --recursive

cjs/%.js: ./%.ts
	./node_modules/.bin/tsc -p tsconfig-cjs.json

esm/%.js: %.ts
	./node_modules/.bin/tsc -p tsconfig.json

tmp/types/%.d.ts: %.ts
	/bin/rm -fr tmp/types/
	./node_modules/.bin/tsc --outDir tmp/types/ --declaration --emitDeclarationOnly $<

types/index.d.ts: tmp/types/index.d.ts
	perl -pe 's#( from ".)/src/(bean|html|logic)#$$1/struts-$$2#; \
	' < $< > $@

types/impl.d.ts: tmp/types/src/impl.d.ts
	cp $< $@
	/bin/rm -fr types/util
	cp -pR tmp/types/src/util types/

test-title:
	perl -i -pe 's#^const TITLE =.*#const TITLE = "$$ARGV";#' test/*.ts test/**/*.ts
	/bin/rm -fr cjs/test esm/test

LICENSE:
	curl -so $@ https://raw.githubusercontent.com/apache/struts1/trunk/core/src/main/resources/LICENSE.txt

clean:
	/bin/rm -fr esm/*/ cjs/*/ esm/*.js cjs/*.js types/index.d.ts

.PHONY: all clean test
