<template>
    <div>
        <section>
            <dl v-for='item in list'>
                <dt><img :src=item.PictureWebp></dt>
                <dd>
                    <p>{{item.SlideName}}</p>
                    <span>{{item.Description}}</span>
                </dd>
            </dl>

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
            this.$http.get('/api/pinpai').then(function(res){
                this.list=res.data.data.data[0].Records
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
section{
    width: 100%;
    display:flex;
    flex-wrap:wrap;
    padding-bottom: 50px;
    dl{
        width: 33.33%;
        dt{
          width: 100%;
          img{
            width: 100%;
          }
        }
        dd{
          width: 100%;
          text-align:center;
          padding-bottom: 10px;
          padding-top: 10px;
          p{
            font-size:14px;
          }
          span{
            font-size:13px;
            color: #ccc;
            display:block;
            width: 80%;
            padding-left:10%;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
        }
    }
}
</style>
