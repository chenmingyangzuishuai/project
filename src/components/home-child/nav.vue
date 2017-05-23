<template>
  <nav>
    <router-link v-for='item in navdata' :to="'/Home'+item.Link+'/'+item.NavID" active-class='active'>{{item.Title}}</router-link>
  </nav>
</template>
<script>
export default {
  data () {
     return{
         navdata:''
     }
  },
  mounted () {
      this.getnavdata();
      this.show();
  },
  methods:{
    getnavdata:function(){
        this.$http.get('/api/navlist').then(function(res){
            this.navdata=res.data.data.data
            console.log(this.navdata)
        })

    },
    show:function(){
        var nav=document.querySelector('nav');
        window.addEventListener('scroll',function(e){
             if(document.body.scrollTop>44){
                nav.className='flxed'
             }else{
                nav.className=''
             }
        })
    }
  }
}
</script>
<style lang='less'>
  nav{
    display:-webkit-box;
    height: 44px;
    align-items:center;
    width: 100%;
    overflow-x:scroll;
    a{
       width: 50px;
       height: 100%;
       display:block;
       line-height: 44px;
       text-align:center;
       color: black;
       box-sizing:border-box;
    }
    .active{
       border-bottom: 2px solid black
    }
  }
  .flxed{
    position:fixed;
    top:0;
    z-index:100;
    background: #fff;
  }
</style>
