import {strict as assert} from "assert";
import {createNSP} from "nsp-server-pages";
import {beanTags} from "../../index.js";
import {PrepareBeanAction} from "./lib/PrepareBeanAction.js";

const TITLE = "test/bean/SizeTagTest.ts";

interface Context {
    bean?: Bean;
}

interface Bean {
    stringArray: string[];
}

/**
 * <bean:size>
 */
describe(TITLE, () => {
    const nsp = createNSP();

    nsp.addTagLib({ns: "bean", tag: beanTags});

    it('stringSize', async () => {
        const src: string = '[<bean:size id="stringSize" name="bean" property="stringArray" />][${stringSize}]';

        const render = nsp.parse(src).toFn<Context>();

        let ctx: Context;

        // Cannot find bean: bean
        ctx = {};
        await assert.rejects(async () => render(ctx));

        ctx = {bean: {stringArray: ["foo", "bar", "buz"]}};
        assert.equal(await render(ctx), '[][3]');
    });

    it('listSize', async () => {
        const src: string = '<bean:size name="example" property="list" id="listSize" />List size: ${listSize}';

        const render = nsp.parse(src).toFn<PrepareBeanAction>();

        const ctx = new PrepareBeanAction();

        assert.equal(await render(ctx), 'List size: 4');
    });
});
