export declare class TagUtils {
    private static instance;
    static getInstance(): TagUtils;
    encodeURL(value: string): string;
    /**
     * Filter the specified string for characters that are senstive to HTML
     * interpreters, returning the string with these characters replaced by
     * the corresponding character entities.
     */
    filter(value: string): string;
    lookup<T>(context: any, name: string, scope: string): T;
    lookup<T>(context: any, name: string, property: string, scope: string): T;
}
