import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import App from './App.vue'
import { key, store } from './store/index';
import router from './router/index';
import '@/styles/index.scss'; // global css
import '@/permission';
// ElementPlus 样式通过CDN的方式引入来加样式文件，提高应用加载速度；
import 'element-plus/theme-chalk/index.css';


createApp(App).use(store, key).use(router).use(ElementPlus).mount('#app')