import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockList from '../views/StockList.vue'
import StockOrder from '../views/StockOrder.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/stocks',
    name: 'stocks',
    component: StockList
  },
  {
    path: '/order',
    name: 'order',
    component: StockOrder
  },

];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
