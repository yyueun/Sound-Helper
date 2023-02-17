<template>
  <div>
    <stock-list></stock-list>
  </div>
</template>

<script>
import StockList from './StockList.vue'

export default {
  components: {StockList},
  data() {
    return {}
  },
  
}
</script>


<style>
div {
  width: 320px;
  height: 500px;
  background-image: url('C:\Users\user\Desktop\Sound-Helper\soundhelper-vue\public\menu.JPG');
  margin: auto;
  display: block;
}
</style>