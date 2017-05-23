<template>
        <div class='good'>
            <div class='title'>
                 推荐好物
            </div>
            <div class='zishengtang'>
              <img v-for='item in imgs' :src=item.PictureWebp>
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
                  this.imgs=res.data.data.data[5].Records
            })
        }
    },
    created () {
        this.fun()
    }

}
</script>
<style lang='less'>
.good{
  .title{
      width: 100%;
      height: 50px;
      line-height: 50px;
      text-align:center;
      font-size:14px;
   }
  .zishengtang{
      display:flex;
      flex-wrap:wrap;
      img{
        width: 50%;
        height: 120px;
      }
  }
}
</style>
