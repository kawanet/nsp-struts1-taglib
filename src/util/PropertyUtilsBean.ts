import {BeanUtilsBean} from "./BeanUtilsBean.js";

export class PropertyUtilsBean {
    static getInstance(): PropertyUtilsBean {
        return BeanUtilsBean.getInstance().getPropertyUtils();
    }

    getProperty<T>(bean: any, name: string): T {
        const array = String(name).split(/\.|\[(\d+)]/).filter(v => v !== "");

        for (const key of array) {
            if (bean == null) {
                throw new Error(`Cannot find property: ${name}`);
            }

            bean = bean[key];
        }

        return bean as T;
    }

    getNestedProperty<T>(bean: any, name: string): T {
        return this.getProperty(bean, name);
    }
}
