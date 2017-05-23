<template>
  <div class='bitch'>
              <div class='title'>
                  严选品牌
              </div>
              <div class='images'>
                  <div class='one'>
                    <img src='//img.haimi.com/FojyqPOoPcb_iozPd2n0Nj7Gz4ij'>
                    <img src='//img.haimi.com/FhUaqFBlvdqeBwftFyzC5e7GDQnn' class='two'>
                  </div>
                  <img src='//img.haimi.com/FjtR_vZBEQTrHyw5IAcUmvUtHqZ7' class='three'>
              </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              imgs:[]
          }
      },
      methods:{
          fun:function(){
              this.$http.get('/api/banner').then(function(res){
                    this.imgs=res.data.data.data[4].Records

              })
          }
      },
      created () {
          this.fun()
      }

  }

</script>
<style lang='less'>
 .bitch{
   width: 100%;
   .title{
     width: 100%;
     height: 50px;
     line-height: 50px;
     text-align:center;
     font-size:14px;
   }
   .images{
     display:flex;
     height: 200px;
     .one{
       width: 50%;
       height: 50%;
       img{
         width: 100%;
         height: 100%;
       }
     }
     .three{
       width: 50%
     }
   }
 }
</style>
