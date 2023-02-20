import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StockList from '../views/StockList.vue'
<<<<<<< HEAD
import StockOrder from '../views/StockOrder.vue'
=======
>>>>>>> a1ff6a794a2f847acf73c3600618c7ceabd28d60

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
<<<<<<< HEAD
  {
    path: '/order',
    name: 'order',
    component: StockOrder
  },

=======
>>>>>>> a1ff6a794a2f847acf73c3600618c7ceabd28d60
];


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
