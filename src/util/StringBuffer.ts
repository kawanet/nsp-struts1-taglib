import {concat} from "../internal/concat.js";

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

    toString() {
        return concat(this.buffer);
    }
}
