import { BeanUtilsBean } from "./BeanUtilsBean.js";

export class BeanUtils {
    public static getArrayProperty(bean: any, name: string): any[] {
        return BeanUtilsBean.getInstance().getArrayProperty(bean, name);
    }
}
