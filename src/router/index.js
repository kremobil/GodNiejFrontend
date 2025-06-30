import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from "@/views/AboutUsView.vue";
import InitiativesView from "@/views/InitiativesView.vue";
import InitiativeView from "@/views/InitiativeView.vue";
import WorkshopsRegisterView from "@/views/WorkshopsRegisterView.vue";
import ReadRecommendationsView from "@/views/ReadRecommendationsView.vue";
import OurPatronessView from "@/views/OurPatronessView.vue";
import ThanksForRegisterView from "@/views/ThanksForRegisterView.vue";
import DocumentsView from "@/views/DocumentsView.vue";
import PageNotFoundView from "@/views/PageNotFoundView.vue";
import ReadRecomendationsWorkInProgress from '@/views/ReadRecomendationsWorkInProgress.vue';
import ReadReccomendationSingleView from '@/views/ReadReccomendationSingleView.vue';

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
      path: '/inicjatywy/zapisy/:slug',
      name: 'registers',
      component: WorkshopsRegisterView
    },
    {
      path: '/warte_przeczytania',
      name: 'read recommendations',
      component: ReadRecomendationsWorkInProgress
    },
    {
      path: '/warte_przeczytania/:slug',
      name: 'read recommendation',
      component: ReadRecomendationsWorkInProgress
    },
    {
      path: '/1a9c4ffa-f1c5-47b6-8a19-6d9743eca37e',
      name: 'read recommendations demo',
      component: ReadRecommendationsView
    },
    {
      path: '/1a9c4ffa-f1c5-47b6-8a19-6d9743eca37e/:slug',
      name: 'read recommendation demo',
      component: ReadReccomendationSingleView
    },
    {
      path: '/patronka',
      name: 'our patroness',
      component: OurPatronessView
    },
    {
      path: '/inicjatywy/zapisy/dziekujemy',
      name: "thank you",
      component: ThanksForRegisterView
    },
    {
      path: '/dokumenty',
      name: 'documents',
      component: DocumentsView
    },
    {
      path: '/404',
      name: 'page not found',
      component: PageNotFoundView
    },
    {
      path: '/:pathMatch(.*)*',
      name: "not declared route",
      redirect: to => ({ path: '/404' })
    },
  ]
})

export default router
