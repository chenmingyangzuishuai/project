<template>
  <div class='imgs'>
        <img v-for='item in imgs' :src=item>
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
                  this.imgs.push(res.data.data.data[2].Records[0].PictureWebp,res.data.data.data[3].Records[0].PictureWebp)
                  console.log()
            })
        }
    },
    created () {
        this.fun()
    }

}

</script>
<style lang='less'>
  .imgs img{
    width: 100%;
  }
</style>
