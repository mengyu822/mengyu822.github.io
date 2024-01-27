import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入中文
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'




import scenicsSpotTop from '@/components/scenicsSpot_top/top-index.vue'
import scenicsSpotBottom from '@/components/scenicsSpot_bottom/bottom-index.vue'
import scenicsSpotContent from '@/components/scenicsSpot_content/content-index.vue'
const app = createApp(App)


app.use(createPinia())
app.use(router)


app.use(ElementPlus, {
    locale: zhCn,
  })
app.component('scenicsSpotTop', scenicsSpotTop)
app.component('scenicsSpotBottom', scenicsSpotBottom)
app.component('scenicsSpotContent', scenicsSpotContent)
app.mount('#app')
