<template>
    <div>
        <div class='banner'><img src='//img.haimi.com/FlwtwxXsqljJfDjPyTtAxxy6YSkA'></div>
        <contents :list=list></contents>
    </div>
</template>
<script>
import contents from '@/components/home-child/box/content.vue'
export default {
    data () {
        return {
            list:''
        }
    },
    methods:{
        fun:function(){
            this.$http.get('/api/gehu/'+this.$route.params.id).then(function(res){
               this.list=res.data.data.data[0]
            })
        }
    },
    created () {
        this.fun()
    },
    components :{
        contents:contents
    }
}

</script>
<style lang='less' scoped>
.banner{
    width: 100%;
    img{
        width: 100%;
    }
}
</style>
