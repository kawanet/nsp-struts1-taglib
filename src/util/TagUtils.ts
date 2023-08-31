import {ResponseUtils} from "./ResponseUtils.js";

const isEmpty = (v: any): v is null => (v == null || v === "");

export class TagUtils {
    static instance = new TagUtils();

    static getInstance() {
        return TagUtils.instance;
    }

    encodeURL(value: string): string {
        return ResponseUtils.encodeURL(value);
    }

    /**
     * Filter the specified string for characters that are senstive to HTML
     * interpreters, returning the string with these characters replaced by
     * the corresponding character entities.
     */
    filter(value: string): string {
        return ResponseUtils.filter(value);
    }

    lookup<T>(context: any, name: string, property: string): T {
        let bean = context[name];

        if (bean == null) {
            throw new Error(`Cannot find bean: ${name}`);
        }

        if (isEmpty(property)) {
            return bean;
        }

        const array = String(property).split(/\.|\[(\d+)]/);

        for (const key of array) {
            if (bean == null) {
                throw new Error(`Cannot find bean: ${name}.${property}`);
            }

            bean = bean[key];
        }

        return bean as T;
    }
}
