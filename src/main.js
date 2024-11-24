import '@/assets/main.css'
import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';
import AOS from 'aos';
import data from './locales/common.json'

AOS.init()

console.log(data)

import { createApp } from 'vue'
import { createI18n } from "vue-i18n";
import App from './App.vue'
import router from './router'

const app = createApp(App)

const i18n = createI18n({
    messages: data,
})

app.use(router).use(i18n)

app.mount('#app')