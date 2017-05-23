<template>
    <div>
         <header>
              <p>
                  <span>
                     <router-link to='/Class/first' active-class='active'>分类</router-link>
                  </span>
                  <span>
                     <router-link to='/Class/pinpai' active-class='active'>品牌</router-link>
                  </span>
              </p>
         </header>
         <router-view></router-view>
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

    },
    created () {

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
        a{
          color:#000;
        }
     }
  }
}
.active{
    padding-bottom: 10px;
    border-bottom: 2px solid #000;
}

</style>
