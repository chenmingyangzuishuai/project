<template>
  <div class='swiper-container'>
      <div class='swiper-wrapper'>
          <div class='swiper-slide' v-for='item in bannerlist'>
              <img :src=item.PictureWebp>
          </div>
      </div>
      <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
   data () {
        return {
            bannerlist:''
        }
   },
   methods:{
        fun:function(){
            this.$http.get('/api/banner').then(function(res){
                this.bannerlist=res.data.data.data[0].Records
            })
        },
        reload:function(){
            new Swiper('.swiper-container',{
                 autoplay:1000,
                 loop:true,
                 pagination:'.swiper-pagination'
            })
        }
   },
   created () {
        this.fun()
   },
   updated () {
        this.reload()
   }

}
</script>
<style scoped>
  .swiper-slide img{
    width: 100%;
  }
  .swiper-pagination .swiper-pagination-bullet{
    width: 10px;
    height: 3px;
    -webkit-transition:width 1s ease
  }
   .swiper-pagination .swiper-pagination-bullet-active{
    width: 20px;
    height: 3px;
   }
</style>
