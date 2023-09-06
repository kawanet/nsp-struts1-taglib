export declare class PropertyUtilsBean {
    static getInstance(): PropertyUtilsBean;
    getProperty<T>(bean: any, name: string): T;
    getNestedProperty<T>(bean: any, name: string): T;
}
