import {PropertyUtilsBean} from "./PropertyUtilsBean.js";

export class BeanUtilsBean {
    private static instance: BeanUtilsBean;

    static getInstance() {
        return BeanUtilsBean.instance ??= new BeanUtilsBean();
    }

    private propertyUtilsBean: PropertyUtilsBean;

    getPropertyUtils() {
        return this.propertyUtilsBean ??= new PropertyUtilsBean();
    }
}
