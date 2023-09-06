interface Converter {
    convert(value: any): any;
}

export class ConvertUtilsBean {

    private converters: { [key: string]: Converter } = {
        string: {convert: (value: any) => `${value}`},
    };

    public lookup(clazz: string): Converter {
        return this.converters[clazz];
    }

    public convert(value: any): string {
        if (value == null) {
            return null;
        } else {
            if (Array.isArray(value)) {
                if (value.length < 1) {
                    return null;
                } else {
                    value = value[0];
                    if (value == null) {
                        return null;
                    } else {
                        const converter = this.lookup("string");
                        return converter.convert(value);
                    }
                }
            } else {
                const converter = this.lookup("string");
                return converter.convert(value);
            }
        }
    }
}
