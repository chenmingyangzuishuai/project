<template>
      <meizhuang :list=list></meizhuang>
</template>
<script>
import meizhuang from '@/components/home-child/box/content.vue'
export default {
      data () {
          return {
             list:''
          }
      },
      methods:{
          fun:function(){
              this.$http.get('/api/gehu/'+this.$route.params.id).then(function(res){
                    this.list=res.data.data.data[0]
                    console.log(res.data.data.data[0])
              })
          }
      },
      created () {
          this.fun()
      },
      components:{
          meizhuang:meizhuang
      }
  }
</script>
<style>

</style>
