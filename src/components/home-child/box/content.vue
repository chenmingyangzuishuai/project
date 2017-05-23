<template>
  <div class='content'>
      <div class='title'>{{list.Title}}</div>
      <div class='anyone'>
          <router-link v-for='item in list.Products' :to="'/detail/'+item.ProductID"  @click='fun(item)'>
              <dt>
                  <img v-lazy=item.PicturesWebp>
              </dt>
              <dd>
                  <p>{{item.Subject}}</p>
                  <span>￥{{item.FinalPrice}}</span>
              </dd>
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
      props:['list'],
      methods:{

      },
      updated () {
          console.log(this.list)
      }
}
</script>
<style lang='less' scoped>
.content{
  .title{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align:center;
    background: #f5f5f5;
  }
  .anyone{
    display:flex;
    flex-wrap:wrap;
    padding-bottom: 50px;
    align-items:center;
    a{
      display:block;
      width:50%;
      color: #000;
      dt{
        width: 100%;
        height: 150px;
        img{
          width: 100%;
          height: 150px;
        }
      }
      dd{
        width: 100%;
        p{
          width: 80%;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          padding-top:10px;
          padding-left:10%;
        }
        span{
          padding-top:10px;
        }
      }
    }

  }
}

</style>
