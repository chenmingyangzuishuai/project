<template>
<div class='content'>
    <dl v-for='item in list'>
        <router-link :to="'/detail/'+item.ProductID">
        <dt><img :src=item.PicturesWebp></dt>
        <dd>
            <p>{{item.Subject}}</p>
            <span>￥{{item.FinalPrice}}</span>
        </dd>
        </router-link>
    </dl>
</div>
</template>
<script>
  export default {
      props:['list'],
      methods:{
          fun:function(){
              console.log(this.list)
          }
      }
  }

</script>
<style scoped lang='less'>
 .content{
      width: 100%;
      display:flex;
      flex-wrap:wrap;
      background: #f5f5f5;
      margin-bottom: 50px;
      dl{
        width: 49%;
        background: #fff;
        margin-bottom: 2%;
        dt{
          width: 100%;
          img{
            width: 100%;
          }
        }
        dd{
          width: 100%;
          p{
            width: 90%;
            padding-left: 5%;
            overflow:hidden;
            white-space:nowrap;
            text-overflow:ellipsis;
          }
        }
        &:nth-child(even){
          margin-left:1%
        }
        &:nth-child(odd){
          margin-right:1%
        }
      }

  }
</style>
