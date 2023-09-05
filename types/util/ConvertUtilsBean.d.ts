interface Converter {
    convert(value: any): any;
}
export declare class ConvertUtilsBean {
    private converters;
    lookup(clazz: string): Converter;
    convert(value: any): string;
}
export {};
