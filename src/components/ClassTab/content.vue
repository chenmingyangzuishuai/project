<template>
    <div>
         <section>
              <div v-for='item in list'>
                      <dt  v-if='item.Records.length == 1'>
                          <img :src=item.Records[0].PictureWebp>
                      </dt>
                      <dd v-else>
                          <span v-for='i in item.Records'>{{
                              i.SlideName
                          }}</span>
                      </dd>
              </div>

         </section>
    </div>
</template>
<script>

 export default {
    data () {
        return {
            list:''
        }
    },
    components:{

    },
    methods:{
        fun:function(){
            this.$http.get('/api/fenlei').then(function(res){
                console.log(res.data.data.data)
                this.list=res.data.data.data
            })
        }
    },
    created () {
        this.fun()
    }
 }
</script>
<style lang="less" scoped>
body,html{
  width:100%;
  height:100%
}
body{
  width: 100%;
  position:absolute;
  left:0;
  top:0;
  display:flex;
  flex-direction:column;
}
header{
  width: 100%;
  height: 50px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  font-size:14px;
  p{
     span{
        &:nth-child(1){
            padding-right: 30px;
        }
     }
  }
}
.active{
    border-bottom: 3px solid #000;
}
section{
    width: 100%;
    padding-bottom: 50px;
    div{
      width: 100%;
         dt{
            width: 100%;
            img{
              width: 100%;
            }
         }
         dd{
            margin-top: 10px;
            margin-bottom: 10px;
            width: 100%;
            display:flex;
            flex-wrap:wrap;
            span{
              padding:10px;
              border:1px solid #ccc;
              font-size:13px;
              margin-bottom: 10px;
              margin-left: 10px;
              text-align:center;
            }
         }

    }

}

</style>
