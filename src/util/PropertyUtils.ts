import {PropertyUtilsBean} from "./PropertyUtilsBean.js";

export class PropertyUtils {
    static getProperty<T>(bean: any, name: string): T {
        return (PropertyUtilsBean.getInstance().getProperty(bean, name));
    }
}
