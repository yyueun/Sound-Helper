<template>
    <div id="app">
        <HomeView/>
    </div>
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
    // components: {HomeView},
    // data() {
    //     return {}
    // },

// }
</script>
  
  
<style>
#app {
    width: 320px;
    height: 568px;
}
</style>