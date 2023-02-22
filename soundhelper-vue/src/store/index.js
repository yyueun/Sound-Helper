import { createStore } from 'vuex'

export default createStore({
  state: {
    stocks: [
      { id: 1, name: '삼성전자', price: 63000, fluctuationRate: -1.58, marketCap: 520000000000, volume: 1000000 },
      { id: 2, name: 'LG에너지솔루션', price: 516000, fluctuationRate: -3.19, marketCap: 80000000000, volume: 500000 },
      { id: 3, name: 'SK하이닉스', price: 92500, fluctuationRate: 0.54, marketCap: 60000000000, volume: 200000 },
      { id: 4, name: '삼성바이오로직스', price: 805000, fluctuationRate: 0.75, marketCap: 450000000000, volume: 300000 },
      { id: 5, name: '삼성SDI', price: 692000, fluctuationRate: -1.56, marketCap: 450000000000, volume: 300000 },
      { id: 6, name: 'LG화학', price: 667000, fluctuationRate: -3.19, marketCap: 450000000000, volume: 300000 },
      { id: 7, name: '삼성전자우', price: 55900, fluctuationRate: 0.18, marketCap: 450000000000, volume: 300000 },
    ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
