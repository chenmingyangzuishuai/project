<template>
  <div class='list'>
      <ul>
         <li v-for='item in list'><img :src=item.PictureWebp><p>{{item.SlideName}}</p></li>
      </ul>
  </div>
</template>
<script>
export default {
    data () {
       return {
          list:''
       }
    },
    methods:{
      fun:function(){
        this.$http.get('/api/banner').then(function(res){
            this.list=res.data.data.data[1].Records
        })
      }
    },
    created () {
      this.fun()
    }
}

</script>
<style lang='less'>
  .list{
    width: 100%;
    list-style:none;
    background: #ffffff;
    ul{
      width: 100%;
      height: 90px;
      display:flex;
      li{
        flex: 1;
        img{
          width: 100%;
        }
        p{
          text-align:center;
        }
      }
    }
  }
</style>
