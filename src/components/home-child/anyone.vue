<template>
<div>
  <banner></banner>
  <list></list>
  <imgs></imgs>
  <bitch></bitch>
  <good></good>
  <japan></japan>
  <watch></watch>
  <water></water>
  <contents></contents>
  </div>
</template>
<script>
import banner from './banner.vue'
import list from './list.vue'
import imgs from './imgs.vue'
import bitch from './bitch.vue'
import good from './good.vue'
import japan from './japan.vue'
import watch from './watch.vue'
import water from './water.vue'
import content from './content.vue'
export default {
    data (){
      return {
      }
    },
    components:{
        banner:banner,
        list:list,
        imgs:imgs,
        bitch:bitch,
        good:good,
        japan:japan,
        watch:watch,
        water:water,
        contents:content
    }
}
</script>
<style></style>
