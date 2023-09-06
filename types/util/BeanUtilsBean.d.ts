import { ConvertUtilsBean } from "./ConvertUtilsBean.js";
import { PropertyUtilsBean } from "./PropertyUtilsBean.js";
export declare class BeanUtilsBean {
    private static instance;
    static getInstance(): BeanUtilsBean;
    private propertyUtilsBean;
    getPropertyUtils(): PropertyUtilsBean;
    private convertUtilsBean;
    getConvertUtils(): ConvertUtilsBean;
    getArrayProperty(bean: any, name: string): any[];
    getProperty(bean: any, name: string): string;
    getNestedProperty(bean: any, name: string): string;
}
