import {BeanUtilsBean} from "./BeanUtilsBean.js";

const isMapLike = (bean: any): bean is Map<any, any> => ("function" === typeof bean.get && bean.get.length > 0);

const getterMethod = (key: string) => key.replace(/^[a-z]/, v => `get${v.toUpperCase()}`);

const hasGetter = (bean: any, getter: string) => ("function" === typeof bean[getter]);

export class PropertyUtilsBean {
    static getInstance(): PropertyUtilsBean {
        return BeanUtilsBean.getInstance().getPropertyUtils();
    }

    getProperty<T>(bean: any, name: string): T {
        const array = String(name).split(/\.|\[(\d+)]/).filter(v => (v != null && v !== ""));

        for (const key of array) {
            if (key === "") continue;

            if (bean == null) {
                throw new Error(`Cannot find property: ${name}`);
            }

            if (bean[key] == null) {
                const getter = getterMethod(key);
                if (hasGetter(bean, getter)) {
                    bean = bean[getter]();
                    continue;
                } else if (isMapLike(bean)) {
                    bean = bean.get(key);
                    continue;
                }
            }

            bean = bean[key];
        }

        return bean as T;
    }

    getNestedProperty<T>(bean: any, name: string): T {
        return this.getProperty(bean, name);
    }
}
