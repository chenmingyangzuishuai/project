<template>
  <div class='content'>
      <div class='title'>{{list.Title}}</div>
      <div class='anyone'>
          <dl v-for='item in list.Products'>
              <dt>
                  <img :src=item.PicturesWebp>
              </dt>
              <dd>
                  <p>{{item.Subject}}</p>
                  <span>￥{{item.FinalPrice}}</span>
              </dd>
          </dl>
      </div>
  </div>
</template>
<script>
  export default {
      data () {
          return {
             content:[]
          }
      },
      props:['list'],
      methods : {
          fun:function(){
              console.log(this.$route.params.id)
          }
      }
  }
</script>
<style lang='less'>
.content{
  .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align:center;
  }
  .anyone{
    display:flex;
    flex-wrap:wrap;
    padding-bottom: 50px;
    align-items:center;
    dl{
      width:50%;
      dt{
        width: 50%;
        height: 150px;
        img{
          width: 100%;
          height: 100%;
        }
      }
      dd{
        width: 100%;
        p{
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding-top:10px;
        }
        span{
          padding-top:10px;
        }
      }
    }
  }
}

</style>
