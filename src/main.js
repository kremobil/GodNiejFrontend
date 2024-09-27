import '@/assets/main.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

// app.use(gsap)

app.mount('#app')