export declare class ResponseUtils {
    /**
     * Filter the specified string for characters that are sensitive to HTML
     * interpreters, returning the string with these characters replaced by
     * the corresponding character entities.
     */
    static filter(value: string): string;
    /**
     * URLencodes a string assuming the character encoding is UTF-8.
     */
    static encodeURL(value: string): string;
}
