// import
import type { Component, App } from "vue"
import { debounce, throttle, formatNumber } from "./utils"

import LwLayoutPage from "./layout-page"
import LwLayoutPageItem from "./layout-page-item"
import LwQueryCondition from "./query-condition"
import LwTable from "./table"
import LwForm from "./form"
import LwSelect from "./select"
import LwSelectLwable from "./select-table"
import LwDetail from "./detail"
import LwButton from "./button"
import LwStepWizard from "./step-wizard"
import LwTimerButton from "./button-timer"
import LwModuleForm from "./module-form"
import LwAdaptivePage from "./adaptive-page"
import LwDatePicker from "./date-picker"
import LwRadio from "./radio"
import LwCheckbox from "./checkbox"
import LwChart from "./chart"
import LwTabs from "./tabs"

// 组件列表
const components: {
  [propName: string]: Component
} = {
  LwLayoutPage,
  LwForm,
  LwLayoutPageItem,
  LwQueryCondition,
  LwTable,
  LwSelectLwable,
  LwSelect,
  LwDetail,
  LwButton,
  LwStepWizard,
  LwTimerButton,
  LwModuleForm,
  LwAdaptivePage,
  LwDatePicker,
  LwRadio,
  LwCheckbox,
  LwChart,
  LwTabs
}

// 注册插件
const installComponents: any = (app: App) => {
  for (const key in components) {
    app.component(key, components[key])
  }
}

// vue 插件注册实现
const install: any = (app: any, router?: any) => {
  installComponents(app)
}
// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}

// 导出单个，按需使用
export {
  LwLayoutPage,
  LwLayoutPageItem,
  LwQueryCondition,
  LwTable,
  LwForm,
  LwSelect,
  LwSelectLwable,
  LwDetail,
  LwButton,
  LwStepWizard,
  LwTimerButton,
  LwModuleForm,
  LwAdaptivePage,
  LwDatePicker,
  LwRadio,
  LwCheckbox,
  LwChart,
  LwTabs
}

// 导出公共方法
export { throttle, debounce, formatNumber }

// 导出组件，使用Vue.use(xxx)安装
export default {
  install
}
