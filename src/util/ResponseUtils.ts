import {$$} from "telesy";

export class ResponseUtils {
    /**
     * Filter the specified string for characters that are sensitive to HTML
     * interpreters, returning the string with these characters replaced by
     * the corresponding character entities.
     */
    static filter(value: string): string {
        if (value != null) {
            if ("string" !== typeof value) {
                value = String(value);
            }
            return $$(value);
        }
    }

    /**
     * URLencodes a string assuming the character encoding is UTF-8.
     */
    static encodeURL(value: string): string {
        if (value != null) {
            return encodeURIComponent(value);
        }
    }
}
