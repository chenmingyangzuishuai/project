<template>
 <header class="aa">
      <input type='text' placeholder='搜索宝贝'>
      <a href='javascript:;'>搜索</a>
 </header>
</template>
<script>
</script>
<style lang='less' scoped>
.aa{
  width: 100%;
  height: 44px;
  background: #242424;
  display:flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  input{
     flex: 1;
     background: #1a1a1a;
     border:none;
     color: #fff;
     height:60%
  }
  a{
    width: 10%;
    text-align:center;
    color: #ffffff;
  }
}
</style>
