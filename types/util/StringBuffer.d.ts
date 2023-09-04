export declare class StringBuffer {
    protected buffer: (string | Promise<string>)[];
    constructor(str?: string | Promise<string>);
    append(str: string | Promise<string>): void;
    toString(): string | Promise<string>;
}
