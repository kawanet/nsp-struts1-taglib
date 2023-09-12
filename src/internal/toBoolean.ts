/**
 * Converts a value to a boolean.
 */
export const toBoolean = (value: any): boolean =>
    (value == null || value === "") ? null :
        ("boolean" === typeof value) ? value :
            ("true" === value || 1 === +value) ? true :
                ("false" === value || 0 === +value) ? false : !!value;
