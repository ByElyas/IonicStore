import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },

  {
    path: '/catalogue/grid',
    component: () => import ('../views/CatalogueGrid.vue')
  },

  {
    path: '/catalogue/list',
    component: () => import ('../views/CatalogueList.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/Folder.vue')
  },
  {
    path: '/catalogue/add',
    component: () => import ('../components/AddProduct.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
