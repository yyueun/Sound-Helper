import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockList from '../views/StockList.vue'
import PopUp from '../views/PopUp.vue'
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
  {
    path: '/popup',
    name: 'popup',
    component: PopUp
  },
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
