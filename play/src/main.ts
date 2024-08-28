import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import LwUI from '@lw8/lw-vue-plus'

createApp(App)
	.use(LwUI)
	.mount('#app')
