/**
 * Converts a value to a boolean.
 */
export const toBoolean = (value: any): boolean => (value == null || value === "") ? null : ("false" === value) ? false : !!value;
