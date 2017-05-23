<template>
    <div>
        <div class='title'>
            请输入手机号码验证码直接登录
        </div>
        <div class='tel'>
            <span>手机号：</span>
            <input type='text' v-model='tel'>
        </div>
        <div class='random'>
            <span>验证码：</span>
            <input type='text' v-model='random'>
            <span @click='send()' id='send'>发送验证码</span>
        </div>
        <div class='btn' @click='login()'>
            登陆
        </div>
    </div>
</template>
<script>
  export default {
      data (){
          return {
              tel:'',
              random:'',
              num:60
          }
      },
      methods:{
          login:function(){
              var storage=window.localStorage;
               storage.setItem('tel',this.tel);
               storage.setItem('random',this.random)
               console.log(storage)
          },
          send:function(){
                        var send=document.querySelector('#send')
                        console.log(send)
                        var that=this;
                        setInterval(function(){
                            that.num--;
                            send.innerHTML=that.num + '秒后重新发送';
                        },1000)
           }


      }

  }
</script>
<style lang='less' scoped>
  .title{
      width: 100%;
      height: 37px;
      line-height: 37px;
      text-align:center;
      color: #991f33;
      background: #fff9f3;
      font-size:14px;
  }

  .tel,.random{
      width: 90%;
      margin-left:5%;
      height: 37px;
      border-bottom: 1px solid #ccc;
      line-height:37px;
      display:flex;
      padding-top: 10px;
      justify-content:space-bewteen;
      input{
        border:none;
      }

  }
  .btn{
      width: 90%;
      margin-left:5%;
      height: 37px;
      color: #fff;
      background: #991f33;
      line-height: 37px;
      margin-top:20px;
  }
</style>
