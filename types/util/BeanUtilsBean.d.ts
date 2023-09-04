import { PropertyUtilsBean } from "./PropertyUtilsBean.js";
export declare class BeanUtilsBean {
    private static instance;
    static getInstance(): BeanUtilsBean;
    private propertyUtilsBean;
    getPropertyUtils(): PropertyUtilsBean;
}
