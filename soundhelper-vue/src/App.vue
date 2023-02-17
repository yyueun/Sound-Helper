<template>
  <div>
    <stock-list></stock-list>
  </div>
</template>

<script>
import StockList from './components/StockList.vue'

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
div > button {
  width: 15px;
  height: 30px;
}
</style>


:style="{'background-image':'url(soundhelper-vue/public/menu.JPG)'}