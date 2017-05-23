<template>
<div class='Japan'>
      <div class='title'>
          <p>instagram最火时尚腕表</p>
          <span>Dance weligtion</span>
      </div>
      <div class='pola'>
          <ul>
              <li v-for='item in imgs'>
                  <img :src=item.PictureWebp>
                  <p>{{item.SlideName}}</p>
                  <span>{{item.Description}}</span>
              </li>
          </ul>
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
                    this.imgs=res.data.data.data[9].Records
              })
          }
      },
      created () {
          this.fun()
      }

  }

</script>
<style lang='less' scoped>
.Japan{
   width: 100%;
   border-bottom: 10px solid #f5f5f5;
   box-sizing:border-box;
   .title{
      width: 100%;
      height: 40px;
      text-align:center;
      display:flex;
      flex-direction:column;
      padding-top: 10px;
      span{
         color: #ccc;
         font-size:10px;
      }
   }
   .pola{
      width: 100%;
      ul{
          display:-webkit-box;
          width: 100%;
          overflow-x: scroll;
          li{
              width: 30%;
              text-align:center;
              img{
                width: 100%;
              }
              span{
                color: #ccc;
              }
              p{
                width: 90%;
                white-space:nowrap;
                text-overflow:ellipsis;
                overflow:hidden;
                text-align:center;
                padding-left:5%;
              }
          }
      }
   }

}
</style>
