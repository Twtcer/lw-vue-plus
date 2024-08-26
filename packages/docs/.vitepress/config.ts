import { defineConfig } from "vitepress"

export default defineConfig({
  title: "lw-vue-plus组件文档",
  description: "基于vue3和element-plus二次封装组件实例",
  lang: "cn-ZH",
  base: "/lw-vue-plus/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.ico",
    siteTitle: "VuePlus基础组件文档",
    outline: 3,
    socialLinks: [{ icon: "github", link: "https://github.com/Twtcer/lw-vue-plus" }],
    nav: [
      {
        text: "安装指南",
        link: "/components/"
      },
      { text: "基础组件", link: "/components/TSelect/base.md" },
      {
        text: "GitHub地址",
        link: "https://github.com/Twtcer/lw-vue-plus"
      },
      {
        text: "Gitee码云地址",
        link: "https://gitee.com/twtcer/lw-vue-plus"
      },
      {
        text: "博客",
        items: [
          { text: "cnblogs", link: "https://cnblogs.com/landwind" },
          {
            text: "掘金",
            link: "https://juejin.cn/user/3263006244608253/posts"
          }
        ]
      }
    ],
    sidebar: {
      "/components": [
        {
          text: "布局组件",
          items: [
            { text: "条件筛选", link: "/components/TSelect/base.md" },
            { text: "整页", link: "/components/TSelect/base.md" },
          ]
        },
        {
          text: "基础组件",
          items: [
            { text: "下拉选择组件", link: "/components/TSelect/base.md" },
            { text: "详情组件", link: "/components/TDetail/base.md" },
            { text: "Button组件", link: "/components/TButton/base.md" },
            { text: "Radio组件", link: "/components/TRadio/base.md" },
            { text: "多选框组组件", link: "/components/TCheckbox/base.md" },
            { text: "日期组件", link: "/components/TDatePicker/base.md" },
            { text: "Tabs组件", link: "/components/TTabs/base.md" },
            { text: "步骤组件", link: "/components/TStepWizard/base.md" }
          ]
        },
        {
          text: "复杂组件",
          items: [
            {
              text: "TAdaptivePage组件",
              link: "/components/TAdaptivePage/base.md"
            },
            { text: "Chart图表组件", link: "/components/TChart/base.md" },
            {
              text: "下拉选择表格组件",
              link: "/components/TSelectTable/base.md"
            },
            {
              text: "条件查询组件",
              link: "/components/TQueryCondition/base.md"
            },
            { text: "表单组件", link: "/components/TForm/base.md" },
            { text: "模块表单组件", link: "/components/TModuleForm/base.md" },
            { text: "table组件", link: "/components/TTable/base.md" }
          ]
        },
        {
          text: "数据展示",
          items: [
            { text: "Table 表格", link: "components/Table/base.md" },

          ]
        }
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => {
      // md.use(demoblockPlugin),
      // {
      //   customClass: "demoblock-custom"
      // }
    }
  }
})
