import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";
import {PrepareBeanAction} from "./lib/PrepareBeanAction.js";

const TITLE = "test/bean/WriteTagTest.ts";

interface Context extends PrepareBeanAction {
    //
}

/**
 * <bean:write>
 *
 * @see https://github.com/apache/struts1/blob/trunk/apps/cookbook/src/main/webapp/jsp/bean/Bean.jsp
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    const ctx = new PrepareBeanAction();

    it("1. Display bean properties", async () => {
        let render = nsp.parse('Boolean: <bean:write name="example" property="booleanValue" />').toFn<Context>();
        assert.equal(render(ctx), "Boolean: false");

        render = nsp.parse('Double: <bean:write name="example" property="doubleValue" />').toFn<Context>();
        assert.equal(render(ctx), "Double: 45213.451");

        render = nsp.parse('Float: <bean:write name="example" property="floatValue" />').toFn<Context>();
        assert.equal(render(ctx), "Float: -123.582");

        render = nsp.parse('Integer: <bean:write name="example" property="intValue" />').toFn<Context>();
        assert.equal(render(ctx), "Integer: 256");

        render = nsp.parse('Long integer: <bean:write name="example" property="longValue" />').toFn<Context>();
        assert.equal(render(ctx), "Long integer: 1321546");

        render = nsp.parse('Short integer: <bean:write name="example" property="shortValue" />').toFn<Context>();
        assert.equal(render(ctx), "Short integer: 257");

        render = nsp.parse('String: <bean:write name="example" property="stringValue" />').toFn<Context>();
        assert.equal(render(ctx), "String: Hello, world!");
    });

    it("3. Display values from collections, arrays and nested beans", async () => {
        let render = nsp.parse('List entry: <bean:write name="example" property="list[2]" />').toFn<Context>();
        assert.equal(render(ctx), "List entry: List entry #3");

        render = nsp.parse('Array entry: <bean:write name="example" property="array[3]" />').toFn<Context>();
        assert.equal(render(ctx), "Array entry: Black");
    });

    it("4. Filtering HTML tags in output", async () => {
        let render = nsp.parse('Filtered text: <bean:write name="example" property="html"/>').toFn<Context>();
        assert.equal(render(ctx), 'Filtered text: &lt;p&gt;This is a &lt;strong&gt;simple&lt;/strong&gt; example of &lt;em&gt;HTML&lt;/em&gt; formatted text.&lt;/p&gt;');

        render = nsp.parse('Unfiltered text: <bean:write name="example" property="html" filter="false"/>').toFn<Context>();
        assert.equal(render(ctx), 'Unfiltered text: <p>This is a <strong>simple</strong> example of <em>HTML</em> formatted text.</p>');
    });
});
