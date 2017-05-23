<template>
<div>
    <div class='wrapper'>
    <div class='swiper-container'>
        <div class='swiper-wrapper'>
            <div class='swiper-slide' v-for='item in bannerlist'>
                  <img :src=item.picture />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    <div class='name'>{{name}}</div>
    <div class='price'><ul><li><span>￥{{FinalAmount}}</span><span>￥{{FinalPrice}}</span></li><li>月销{{SoldNum}}件</li></ul></div>
    <div class='other'>
        邮费0元
    </div>
    <div class='Promises'>
        <ul><li v-for='i in Promises'>{{i}}</li></ul>
    </div>
    <div class='total'>
        <p><span>夏季限时特价</span><i>></i></p>
        <p><span>请选择：颜色分类</span><i>></i></p>
    </div>
    <div class='tell'>
        <div class='honey'>
          <span>宝贝评分</span>
          <span></span>
          <span>{{ProductScore}}分</span>
        </div>
        <div class='info'>
          <div class='info-content' v-for='item in TopReviews'>
              <p><img :src=item.Buyer.Avatar><span>{{item.Buyer.NickName}}</span><b>{{item.CreateTime}}</b></p>
              <div class='pinglun'>{{item.BuyerNote}}</div>
              <div class='imgs'>
                <img src='//img.haimi.com/Fnftcu-Xh3_zGak_K_DmB7_q1q_b?imageView2/1/w/100/h/100'>
                <img src='//img.haimi.com/Fnftcu-Xh3_zGak_K_DmB7_q1q_b?imageView2/1/w/100/h/100'>
                <img src='//img.haimi.com/Fnftcu-Xh3_zGak_K_DmB7_q1q_b?imageView2/1/w/100/h/100'>
                <img src='//img.haimi.com/Fnftcu-Xh3_zGak_K_DmB7_q1q_b?imageView2/1/w/100/h/100'>
              </div>
          </div>
        </div>
        <div class='anymore'>
            全部评价({{ReviewCount}})
        </div>
    </div>

    <div class='yanxuan'>
        <dl>
            <dt><img src='//img.haimi.com/FvfydT6_Ns4g4HtqgojwY36mFbkn'></dt>
            <dd><span>海密严选</span><p>由海蜜严选直接销售，提供物流与售后服务</p></dd>
        </dl>
    </div>
    <div class='bigcontent'>
        <p class='title'>商品详情</p>

    </div>
    <div v-html='Descriptioin' id='wu'>

    </div>
    </div>
</div>
</template>
<script>
export default {
    data () {
        return {
            bannerlist:'',
            name:'',
            FinalAmount:'',
            FinalPrice:'',
            SoldNum:'',
            Promises:'',
            ProductScore:'',
            TopReviews:'',
            ReviewCount:'',
            Descriptioin:''
        }
    },
    methods:{
        init:function(){
            new Swiper('.swiper-container',{
                pagination:'.swiper-pagination',
                loop:true,
                autoplay:1000
            })

        },
       getdata:function(){
          this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+this.$route.params.id+'&platform=WAP',{
                jsonp:'_callback'
          }).then(function(res){
              var data=res.data.data;
              this.bannerlist=JSON.parse(data.ProductPictures)
              console.log(data)
              this.name=data.Subject
              this.FinalAmount=data.FinalAmount
              this.FinalPrice=data.FinalPrice
              this.SoldNum=data.SoldNum
              this.Promises=data.Promises
              this.ProductScore=data.ProductScore
              this.TopReviews=data.TopReviews
              this.ReviewCount=data.ReviewCount
              this.Descriptioin=data.Descriptioin


          })
       }
    },
    updated () {
        this.init()
    },
    created () {
        this.getdata()
    }
}
</script>
<style lang='less'>
    .wrapper{
      padding-bottom:50px;
    }
    #wu{
      p{
        width:100%;
        img{
                width: 100%;
        }
      }

    }
    .yanxuan{
      width: 100%;
      height:60px;
      border-top: 5px solid #f5f5f5;
      border-bottom: 5px solid #f5f5f5;
      dl{
        width: 95%;
        height:100%;
        display:flex;
        align-items:center;
        padding-left: 5%;
        dt{
          width: 40px;
          height: 40px;
          padding-right: 5%;
          img{
            width: 100%;
            height: 100%;
          }
        }
        dd{
          flex:1;
          text-align:left;
          span{
            font-size:14px;
          }
        }
      }

    }
    .bigcontent{
        width: 90%;
        padding:5%;
        .title{
            width: 100%;
            height: 30px;
            line-height:30px;
            text-align:left;
        }
    }
    .info{
        width: 100%;
        .info-content{
            width: 90%;
            padding-left: 5%;
            padding-right: 5%;
            padding-bottom: 5px;
            border-bottom:1px solid #f5f5f5;
            p{
              height: 30px;
              img{
                width: 20px;
                height: 20px;
                float:left;
                padding-top:5px;
              }
              span{
                color:#ccc;
                float:left;
                line-height: 30px;
                padding-left: 20px;
              }
              b{
                float:right;
                color:#ccc;
                line-height: 30px;
              }

            }
            .pinglun{
               width: 90%;
               padding-left:5%;
               text-align:left;
               line-height:20px;
            }
            .imgs{
               height: 40px;
               img{
                  width: 40px;
                  height: 40px;
                  float:left;
                  margin-left:5px;
               }
            }
        }

    }
    .tell{
        width: 100%;
        .honey{
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align:left;
          border-bottom: 1px solid #f5f5f5;
          span{
              display:inline-block;
              margin-left:5%;
              &:nth-child(2){
                width: 60px;
                height:10px;
                background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAXZJREFUeNrMlzFOwzAUhtOC1KEnKCgTrEWCZECwcwNYYYADQOlMq3YrAlbEEXoDDlBggDNAJS7QDQES/5P+wUKunTh2kid9Suz4KZ9l58lpPMTbkUMc8PqYN/F0/mZ8vuogswImoAFkNr+Rx2g65ByDLdDlfVSlUBuMlPaYfZUJXYI1pd1hXyVC8vK+pr/PZ6ULjZYsT5tLV6qQbOATy0bvlik04eduKgXXPoR0dajF+rIL9niNMxbLOXgGM/ACpAp+5RVaV14sJJRyiZgcsi0yr5R7ouinTegMXEVhosXJCudgCAa2PTTgwNBhlVE3dWipTDL/v7JQUplldJ+9b6lcMsvqkC+p3DKmwlhUyknGVqnvCwg555qEkgJCad2EkroJ7YQQSuu0ZJ2Cp0Dn/GbO5ZJfninYJ1PDb1AaUmgB7sAmOOIxYsZ76bvlmMJ70Cb0AXo848jx4V0zVvouOKbHHO9CP8rsbzSz18WCYzeY++0i9CfAAPXVQoZab75nAAAAAElFTkSuQmCC);
                background-size: auto 10px;
              }
              &:nth-child(3){
                color: #991f33
              }
          }
        }
        .anymore{
           height: 36px;
           width: 100%;
           line-height:36px;
        }

    }
    .name{
        width: 90%;
        padding-left: 5%;
        text-align:left;
        -webkit-line-clamp:2;
        font-size:14px;
        padding-bottom: 10px;
    }
    .total{
        width: 100%;
        p{
          width: 100%;
          height: 30px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          border-bottom:5px solid #f5f5f5;
          span{
            padding-left:5%;
          }
          i{
            padding-right:5%;
            font-size:14px;
            color:#ccc;
          }
        }
    }
    .Promises{
        width: 100%;
        height: 38px;
        border-bottom: 1px solid #f5f5f5;
        ul{
           height: 100%;
           width: 95%;
           align-items:center;
           display:flex;
           padding-left:5%;
           li{
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAnpJREFUeNqsll1oTnEcx89zuEK5mJC3uEHy9twodmNjkUnUI2+JjNt5ibWZdqFJ8ja7k7ayEtOSm92x0YaSDJOYGxfCHk2UVkry+dX3cJydc55zHs+vPj31nHN+3////3v7Z67MzjoFbCFshvWwAKZABj7DEPTBLXga52R8zLPVcApWwS94AXfgk55Ph8XQAI3wCI7DvaRCE6AVauAD1EEHDEcsaBrshkPQC21QC6P+l9zAR2XQA/vgko7qbIyIo2fndMQt+rZHvkKFbCfdYEHbqRV+d5KbvXsYdshHt3yOEbIdrNCKbjjFWyfsla/WoFAF7NfWrzn/b9flq0a+/wg1w0dockpnTUqmZk8oqxS+mDIm/lOZFRGzFvnO2ks51UlHESLjdNTvYE7I86vynTOhchXjcEqRjGpmO9zVMQUtD89Nw1X+DxYhchn2wH3YAj8j3n1pGq4KK5+yTVk8D8BD2BjsAiG7KnMLrHw+fIV6339n4CA8gQ1JE8hW+wWmxqzGzv40/IDJ6n0W03XwLYGG+R4xoddK8TCz3VQqDucVm1ewVgtMYstMw46uX+1+XsSL72GNft9ClWZREpsLS+GBCXXpz60xH1idLILlEWkcZZ7PLhMa0NCyAE8q0J1HU4hMlE/LzAEv62xCzoCTJex15msmnPA3VW8y2gzaVQKRbZpNbfL9TzHWKinaVeWdRYrk1Dcfy+eYwWfnXw3PNE8uFIhZWEysBG4q7tX+mAY7w4gGVbu2bjV2LKagvYI8Cm/giL6tlK+/zTHmXleh69ZK33VrMHDdWqI6cZW5jV5M0tzrejW0rH426QJZ5dtdXrsw57e1+0j7LcAA6FyRSkLv93MAAAAASUVORK5CYII=) no-repeat  center left;
              background-size: contain;
              padding-left: 5%;
              margin-left: 5px;
           }
        }
    }
    .price{
        width: 90%;
        padding-left: 5%;
        padding-right: 5%;
        padding-bottom: 5px;;
        border-bottom:1px solid #f5f5f5;
        ul{
            width: 100%;
            display:flex;
            align-items:center;
            justify-content: space-between;
            li{
               &:nth-child(1){
                   span{
                      &:nth-child(1){
                          color: #991f33;
                          font-size: 15px;
                      }
                      &:nth-child(2){
                          padding-left:10px;
                          color: #ccc;
                          text-decoration:line-through;
                      }
                   }
               }
            }
        }
    }
    .other{
        width: 95%;
        height: 27px;
        line-height: 27px;
        text-align:left;
        color: #ccc;
        padding-left:5%;
        border-bottom:5px solid #f5f5f5
    }
    .swiper-container{
        .swiper-slide{
            width: 100%;
            background: #ccc;
            img{
                width: 80%;
            }
        }
    }
    .swiper-container .swiper-pagination .swiper-pagination-bullet{
         width: 10px;
         height: 3px;
         -webkit-transition:width 1s ease
       }
    .swiper-container .swiper-pagination .swiper-pagination-bullet-active{
     width: 20px;
     height: 3px;
    }
</style>
