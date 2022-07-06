import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//导入vant所有组件
// import Vant from 'vant';
// import 'vant/lib/index.css';
// createApp(App).use(router).use(Vant).mount('#app')

//按需引入vant
import { vant } from '@/config/vant.config.js';
import 'vant/lib/index.css';
createApp(App).use(router).use(vant).mount('#app')


// createApp(App).use(router).use(Button).mount('#app')
// createApp(App).use(router).mount('#app')
