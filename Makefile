#!/usr/bin/env bash -c make

all: test-title types/index.d.ts dts/src/impl.d.ts esm/index.js cjs/index.js esm/test/synopsis.test.js cjs/test/synopsis.test.js LICENSE

test: test-esm test-cjs

test-esm: all
	./node_modules/.bin/mocha esm/test --recursive

test-cjs: all
	./node_modules/.bin/mocha cjs/test --recursive

cjs/%.js: ./%.ts
	./node_modules/.bin/tsc -p tsconfig-cjs.json

esm/%.js: %.ts
	./node_modules/.bin/tsc -p tsconfig.json

dts/%.d.ts: %.ts
	/bin/rm -fr dts/
	./node_modules/.bin/tsc -p tsconfig-dts.json
	perl -i -pe 's#( from "..)/(types)#$$1/../$$2#;' dts/src/*.d.ts

types/index.d.ts: dts/index.d.ts
	perl -pe 's#( from ".)/src/(bean|html|logic)#$$1/struts-$$2#;' < dts/index.d.ts > types/index.d.ts

test-title:
	perl -i -pe 's#^const TITLE =.*#const TITLE = "$$ARGV";#' test/*.ts test/**/*.ts
	/bin/rm -fr cjs/test esm/test

LICENSE:
	curl -so $@ https://raw.githubusercontent.com/apache/struts1/trunk/core/src/main/resources/LICENSE.txt

clean:
	/bin/rm -fr esm/*/ cjs/*/ esm/*.js cjs/*.js types/index.d.ts dts/

.PHONY: all clean test
