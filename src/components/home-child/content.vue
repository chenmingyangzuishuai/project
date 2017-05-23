<template>
  <div class='content'>
      <div class='title'>大家都在买</div>
      <div class='anyone'>
        <router-link v-for='item in content' :to="'/detail/'+item.ProductID">
          <dl>
              <dt>
                  <img v-lazy=item.PicturesWebp>
              </dt>
              <dd>
                  <p>{{item.Subject}}</p>
                  <span>￥{{item.FinalPrice}}</span>
              </dd>
          </dl>
        </router-link>
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
      methods:{
          fun:function(){
              this.$http.get('/api/content').then(function(res){
                    this.content=res.data.data.data[0].Products
              })
          }
      },
      created () {
          this.fun()
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
    a{
      display:block;
      width:50%;
      color:black;
      dt{
        width: 100%;
        img{
          width: 100%;
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
