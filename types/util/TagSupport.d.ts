import type { NSP } from "nsp-server-pages";
import type { HttpServletRequest } from "./HttpServletRequest.js";
export declare abstract class TagSupport<A> implements NSP.TagClass {
    protected tag: NSP.TagDef<A>;
    protected context: any;
    protected attr: A;
    private request;
    constructor(tag: NSP.TagDef<A>, context: any);
    /**
     * concrete class must implement this method to provide the content.
     */
    abstract render(): string | Promise<string> | void | Promise<void>;
    /**
     * this returns the body of the tag.
     */
    protected getBody(): string | Promise<string>;
    /**
     * a bridge to HttpServletRequest
     */
    protected getRequest(): HttpServletRequest;
}
