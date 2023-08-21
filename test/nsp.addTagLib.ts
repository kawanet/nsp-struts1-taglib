import {createNSP} from "nsp-server-pages";
import {beanTags, htmlTags, logicTags} from "../src/index.js";

const TITLE = "nsp.addTagLib.ts";

describe(TITLE, () => {
    /**
     * this is a test just to import the taglib but not to run it
     */
    it("nsp.addTagLib", async () => {
        const nsp = createNSP();
        nsp.addTagLib({ns: "bean", tag: beanTags});
        nsp.addTagLib({ns: "html", tag: htmlTags});
        nsp.addTagLib({ns: "logic", tag: logicTags});
    });
});
