import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../views/Home.vue'
import PopupStoreA from '../views/PopupStoreA.vue'
import PopupStoreB from '../views/PopupStoreB.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/store-a',
    component: PopupStoreA
  },
  {
    path: '/store-b',
    component: PopupStoreB
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router