import type {NSP} from "nsp-server-pages";

export abstract class TagSupport<A> implements NSP.TagClass {
    protected attr: A;

    /**
     * concrete class must implement this method to provide the content.
     */
    abstract render(): string | Promise<string>;

    constructor(protected tag: NSP.TagDef<A>, protected context: any) {
        this.attr = tag.attr(context);
        return this;
    }

    /**
     * this returns the body of the tag.
     */
    protected getBody(): string | Promise<string> {
        return this.tag.body(this.context);
    }
}
