import '@/assets/main.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init()

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')