import type {NSP} from "nsp-server-pages";
import type {HttpServletRequest} from "./HttpServletRequest.js";
import {Request} from "./Request.js";

export abstract class TagSupport<A> implements NSP.TagClass {
    protected attr: A;
    private request: HttpServletRequest;

    constructor(protected tag: NSP.TagDef<A>, protected context: any) {
        this.attr = tag.attr(context);
        return this;
    }

    /**
     * concrete class must implement this method to provide the content.
     */
    abstract render(): string | Promise<string> | void | Promise<void>;

    /**
     * this returns the body of the tag.
     */
    protected getBody(): string | Promise<string> {
        return this.tag.body(this.context);
    }

    /**
     * a bridge to HttpServletRequest
     */
    protected getRequest(): HttpServletRequest {
        return this.request ??= new Request(this.tag.app, this.context);
    }
}
