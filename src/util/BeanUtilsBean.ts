import { ConvertUtilsBean } from "./ConvertUtilsBean.js";
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

    convertUtilsBean: ConvertUtilsBean;

    public getConvertUtils(): ConvertUtilsBean {
        return this.convertUtilsBean ??= new ConvertUtilsBean();
    }

    getArrayProperty(bean: any, name: string): any[] {
        const value = this.getPropertyUtils().getProperty(bean, name);
        if (value == null) {
            return null;
        } else if (Array.isArray(value)) {
            const values = [];

            for (const item of value) {
                if (item == null) {
                    values.push(null);
                } else {
                    values.push(this.getConvertUtils().convert(item));
                }
            }
        } else {
            const results = [this.getConvertUtils().convert(value)];
            return results;
        }
    }
}
