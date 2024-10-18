import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from "@/views/AboutUsView.vue";
import InitiativesView from "@/views/InitiativesView.vue";
import InitiativeView from "@/views/InitiativeView.vue";
import WorkshopsRegisterView from "@/views/WorkshopsRegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'contact') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            el: "#contact_us_wrapper",
            behavior: 'smooth',
            top: 92
          })
        }, 500)
      })
    } else {
      return {
        top: 0
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
    },
    {
      path: '/inicjatywy',
      name: "initiatives",
      component: InitiativesView,
    },
    {
      path: '/inicjatywy/:slug',
      name: 'initiative',
      component: InitiativeView
    },
    {
      path: '/inicjatywy/zapisy/:id',
      name: 'registers',
      component: WorkshopsRegisterView
    }
  ]
})

export default router
