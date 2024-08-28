import { createApp } from "vue";
import "./style.css";
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
import App from "./App.vue";
import LwPlus from "@lw8/lw-vue-plus";

createApp(App)
.use(ElementPlus,{locale: zhCn})
.use(LwPlus)
.mount("#app");
