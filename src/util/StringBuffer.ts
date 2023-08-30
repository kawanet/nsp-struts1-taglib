import {$$} from "telesy";

export class StringBuffer {
    protected buffer: string[] = [];

    append(str: string) {
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
        return this.buffer.join("");
    }
}
