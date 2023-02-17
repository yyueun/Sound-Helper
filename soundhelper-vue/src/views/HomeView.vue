<template>
  <div id="menu">
    <button id="sound_mode">Sound Mode</button>
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
#menu {
  width: 320px;
  height: 568px;
  background-image: url('C:\Users\jimin\대학교\3학년\겨울방학\신한투자증권 프로 디지털 아카데미\최종프로젝트\soundhelper-vue\public\menu.png');
  margin: auto;
  display: block;
}

#sound_mode {
  position: absolute;
  width: 65px;
  height: 65px;
  left: 13px;
  top: 460px;
  background-color: #41FFCF;
  border-radius: 12px;
  font-family: 'IBM Plex Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
}
</style>