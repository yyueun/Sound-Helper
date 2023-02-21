<template>
  <div id="menu">
    <router-link to="/stocks">
      <button id="sound_mode" @click='goToStockList'>Sound Mode</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    goToStockList() {
      this.$router.push('/stocks')
    }
  }
}
</script>


<style>
#menu {
  width: 320px;
  height: 568px;
  background-image: url('../assets/menu.png');
  margin: auto;
  display: block;
}

#sound_mode {
  position: absolute;
  width: 65px;
  height: 65px;
  left: 5px;
  top: 452px;
  background-color: #41FFCF;
  border: none;
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