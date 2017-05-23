<template>
  <div id="app">
    <router-view></router-view>
    <foot></foot>
  </div>
</template>

<script>
import foot from '@/components/home-child/footer.vue'
export default {
  name: 'app',
  components:{
      foot:foot
  }
}
</script>

<style>
@import './static/css/reset.css';
body{
  width: 100%;
  height: 100%;
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
