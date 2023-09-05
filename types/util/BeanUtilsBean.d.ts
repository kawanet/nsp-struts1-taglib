import { ConvertUtilsBean } from "./ConvertUtilsBean.js";
import { PropertyUtilsBean } from "./PropertyUtilsBean.js";
export declare class BeanUtilsBean {
    private static instance;
    static getInstance(): BeanUtilsBean;
    private propertyUtilsBean;
    getPropertyUtils(): PropertyUtilsBean;
    convertUtilsBean: ConvertUtilsBean;
    getConvertUtils(): ConvertUtilsBean;
    getArrayProperty(bean: any, name: string): any[];
}
