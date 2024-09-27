import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from "@/views/AboutUsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'contact') {
      return {
        el: "#contact_us_wrapper",
        behavior: 'smooth'
      }
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/kontakt',
          name: 'contact',
          component: HomeView,
        }
      ]
    },
    {
      path: '/onas',
      name: 'about us',
      component: AboutUsView
    }
  ]
})

export default router
