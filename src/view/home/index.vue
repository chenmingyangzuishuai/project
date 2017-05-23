<template>
    <div>
        <heads></heads>
        <navs></navs>
        <section>
          <router-view></router-view>
        </section>
    </div>
</template>
<script>
import swiper from '../../lib/swiper.min.js'
import head from '../../components/home-child/header.vue'
import nav from '../../components/home-child/nav.vue'
 export default {
    data () {
        return {
        }
    },
    components:{
        heads:head,
        navs:nav
    },
    methods:{

    }
 }
</script>
<style lang="less">
body,html{
  width:100%;
  height:100%
}
body{
  width: 100%;
  position:absolute;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}
section{
  flex: 1;
  overflow:scroll;
}

</style>
