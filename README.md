# lw-vue-plus

## 介绍

> 基于 vue3 + element-plus + ts + vite5 二次封装组件

可查看 [详细组件案例文档](https://wocwin.github.io/t-ui-plus/) 预览

<p align="center">
  <a href="https://github.com/vuejs/vue" target="_blank">
    <img src="https://img.shields.io/badge/vue-3.2.36-brightgreen.svg" alt="vue3">
  </a>
  <a href="https://gitee.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://gitee.com/wocwin/t-ui-plus/badge/star.svg?theme=dark" alt="t-ui-plus">
  </a>
   <a href="https://github.com/wocwin/t-ui-plus/stargazers" target="_blank">
    <img src="https://img.shields.io/github/stars/Twtcer/lw-vue-plus.svg" alt="t-ui-plus">
  </a>
   <a href="https://www.npmjs.com/package/@landwind/t-ui-plus" target="_blank">
      <img alt="npm" src="https://img.shields.io/npm/v/@landwind/lw-vue-plus.svg" />
    </a>
</p>
 
## 安装

```shell
pnpm i @landwind/lw-vue-plus
```

## 全局注册

> ### 前提：须先全局注册Element-plus组件库后再注册此组件

```js
// 在main.js/main.ts中按下引入
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import locale from "element-plus/es/locale/lang/zh-cn";
// element-plus图标
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import LwVuePlus from '@landwind/lw-vue-plus'
import '@landwind/lw-vue-plus/lib/style.css'
const app = createApp(App)
// 注册所有图标
  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
  }
  // 注册ElementPlus
  app.use(ElementPlus, {
    locale // 语言设置
    // size: Cookies.get('size') || 'medium' // 尺寸设置
  });
app.use(LwVuePlus)
app.mount('#app')
```

## 按需引入

```js
// 在main.js中按下引入
import '@landwind/lw-vue-plus/lib/style.css'
// 单个.vue文件引入
<script setup lang="ts">
  import {TDetail, TForm} from "@landwind/lw-vue-plus"
</script>
```
## 全部组件如下
```json
TLayoutPage, // 布局页面
TLayoutPageItem, // 布局页面子项
TAdaptivePage, // 一屏组件（继承TTable 及 TQueryCondition 组件的所有属性、事件、插槽、方法）
TQueryCondition, // 查询条件
TTable, // 表格
TForm, // 表单
TSelectTable, // 下拉选择表格
TSelect, // 下拉选择
TDetail, // 详情
TButton, // 防抖按钮
TStepWizard, // 步骤条
TTimerBtn, // 定时按钮
TModuleForm, // 模块表单/详情
TDatePicker, // 日期选择器
TRadio, // 单选
TCheckbox, // 多选
TChart, // 图表
TTabs // 标签页
```
 
## 组件类型智能提示

```js
// 需要在使用的项目的tsconfig.json文件中添加以下
compilerOptions：{
  "types": [
      "@landwind/lw-vue-plus/components.d.ts",
    ],
}

``` 
## 安装依赖
> ### 注意: node版本建议安装 [Node.js 16.x+](https://nodejs.org/en)、[pnpm 7.x+](https://github.com/pnpm/pnpm/)

```shell
npm install -g pnpm

pnpm i 

```

## 本地调试组件文档
> docs项目(文档demo示例)基于vue3+vite项目

```shell

pnpm docs:dev

```

# 感谢

## 贡献

<a href="https://github.com/wocwin/t-ui-plus/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=wocwin/t-ui-plus" alt="contributors" />
</a>

 # 参考
- https://blog.csdn.net/cwin8951?type=blog
- [element-plus](https://github.com/element-plus/element-plus)

## Git 提交规范

- `ci`: ci 配置文件和脚本的变动;
- `chore`: 构建系统或辅助工具的变动;
- `fix`: 代码 BUG 修复;
- `feat`: 新功能;
- `perf`: 性能优化和提升;
- `refactor`: 仅仅是代码变动，既不是修复 BUG 也不是引入新功能;
- `style`: 代码格式调整，可能是空格、分号、缩进等等;
- `docs`: 文档变动;
- `test`: 补充缺失的测试用例或者修正现有的测试用例;
- `revert`: 回滚操作;

