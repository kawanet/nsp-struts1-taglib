import {$$} from "telesy";
import {concat} from "./concat.js";

export class StringBuffer {
    protected buffer: (string | Promise<string>)[];

    constructor(str?: string | Promise<string>) {
        this.buffer = (str == null) ? [] : [str];
    }

    append(str: string | Promise<string>) {
        if (str != null) {
            this.buffer.push(str);
        }
    }

    attr(key: string, value: any) {
        if (value === true) {
            this.buffer.push($$` ${key}`);
        } else if (value != null) {
            this.buffer.push($$` ${key}="${String(value)}"`);
        }
    }

    toString() {
        return concat(this.buffer);
    }
}
