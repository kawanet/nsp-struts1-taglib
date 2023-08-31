import {PropertyUtilsBean} from "./PropertyUtilsBean.js";

export class BeanUtilsBean {
    static instance: BeanUtilsBean;

    static getInstance() {
        return BeanUtilsBean.instance ??= new BeanUtilsBean();
    }

    propertyUtilsBean: PropertyUtilsBean;

    getPropertyUtils() {
        return this.propertyUtilsBean ??= new PropertyUtilsBean();
    }
}
