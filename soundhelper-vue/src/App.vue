<template>
<<<<<<< HEAD
    <div id="app">
        <router-view/>
    </div>
=======
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
>>>>>>> a1ff6a794a2f847acf73c3600618c7ceabd28d60
</template>
  
<script>
import HomeView from './views/HomeView.vue'

export default {
  name: 'App',
  components: {
    HomeView,
  },
  data() {
    return {};
  },
};
</script>
  
  
<style>
#app {
    width: 320px;
    height: 568px;
}
</style>