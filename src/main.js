import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css' //样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { Cloud } from "laf-client-sdk";
const app = createApp(App)

// 全局cloud
app.config.globalProperties.$cloud = new Cloud({
  baseUrl: process.env.baseUrl,
  getAccessToken: () => localStorage.getItem('access_token'),
  timeout: 10000,
});

// 全局baseUrl
app.config.globalProperties.$baseUrl = process.env.baseUrl;

//创建v-highlight全局指令
app.directive('highlight',function (el) {
    let blocks = el.querySelectorAll('pre code');
    blocks.forEach((block)=>{
      hljs.highlightBlock(block)
    })
  })

app.use(router)
app.use(ElementPlus)
app.mount('#app')