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

types/index.d.ts: index.ts
	./node_modules/.bin/tsc --outDir tmp/ --declaration --emitDeclarationOnly $<
	perl -pe 's#(type \{) +(.*?) +(})#$$1$$2$$3#; s#( from ".)/src/([a-z]+.)#$$1/struts-$$2#' < tmp/index.d.ts > $@
	/bin/rm -f tmp/*.d.ts tmp/*/*.d.ts

test-title:
	perl -i -pe 's#^const TITLE =.*#const TITLE = "$$ARGV";#' test/*.ts test/**/*.ts
	/bin/rm -fr cjs/test esm/test

LICENSE:
	curl -so $@ https://raw.githubusercontent.com/apache/struts1/trunk/core/src/main/resources/LICENSE.txt

clean:
	/bin/rm -fr esm/*/ cjs/*/ esm/*.js cjs/*.js types/index.d.ts

.PHONY: all clean test
