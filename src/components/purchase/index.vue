<template>
  <div>
    <!--内容页头部-->
    <div class="YZ-top fonts-12 allcolor">
      <a href="#">主页</a>
      >
      <a href="#">元祖商城</a>
      >
      <a href="#">冰品季</a>
      >
      <a href="#">冰品点心</a>
      >
      <a href="#">糯米拥抱冰淇淋</a>
    </div>
    <!--内容页内容部分-->
    <div class="YZ-bottom allcolor">
      <!--内容左边的商品详情-->
      <div class="Shopshow float-l allcolor">
        <!--商品详情-->
        <div class="Product">
          <!--图片展示和左右点击-->
          <div class="productleft float-l">
            <div class="shopimg">
              <img src="http://pic.ganso.com.cn/images1/100000769/100000769_L.jpg" />
            </div>
            <div class="puchase-carousel padding-T-20">
              <div class="puchase-carousel-left float-l"> <img src="http://mall.ganso.com.cn/_ui/hepimages/left.gif" /> </div>
              <div class="puchase-carousel-content float-l">
                <ul>
                  <li><img src="http://pic.ganso.com.cn/images1/100000768/100000768_L.jpg" /> </li>
                  <li><img src="http://pic.ganso.com.cn/images2/100000768/100000768_L.jpg" /> </li>
                  <li><img src="http://pic.ganso.com.cn/images3/100000768/100000768_L.jpg" /> </li>
                </ul>
              </div>
              <div class="puchase-carousel-right float-r"> <img src="http://mall.ganso.com.cn/_ui/hepimages/right.gif" /> </div>
            </div>
          </div>
          <!--商品信息-->
          <div class="productright float-r fontf">
            <div class="shop-title fonts-16 lightgrey">雪麻糬</div>
            <div class="shop-name fonts-12 lightgray margin-B-15">糯米拥抱冰淇淋</div>
            <div class="shop-price margin-B-25 ">
              <div class="fonts-14 float-l lightgray">优惠价: </div>
              <div class="fonts-24 red2 float-l fontw padding-L-10">￥15.00</div>
            </div>
            <div class="shop-specifications margin-B-25 lightgray">
              <div class="fonts-14 float-l">选择规格: </div>
              <div class="fonts-12 float-l choose">
                <ul >
                  <li><a href="#">芒果味</a></li>
                  <li><a href="#">蓝莓味</a></li>
                  <li><a href="#">草莓味</a></li>
                </ul>
              </div>
            </div>
            <div class="shop-number margin-B-25">
              <div class="fonts-14 float-l shu lightgray">数量:</div>
              <ul><li>
                <div class="float-l shop-number-left">
                  <input type="" value="1"/>
                </div>
                <div class="float-r shop-number-right">
                  <span class="add" >+</span>
                  <span class="less" >-</span>
                </div>
              </li></ul>
              <button class="buy fonts-20 float-l red2 buypinkred">立即购买</button>
              <button class="join fonts-20 float-l white joinred">加入购物车</button>
            </div>
            <div class="shop-service fonts-12 margin-B-20">
              服务承诺：
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              精选食材
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              品质保证
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              五星服务
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              贴心宅配
            </div>
            <div class="shop-collection">
              <div class="Serial-number padding-L-10 lightgrey">商品编号：100000786</div>
              <a href="#"><img src="http://mall.ganso.com.cn/_ui/hepimages/icon_sc.gif" />
                <span class="float-r">收藏</span>
              </a>
            </div>
          </div>
        </div>
        <!--大图展示-->
        <div class="ProductShow" id="app">
          <ul class="productshow-tab gray">
            <li ><a href="#">商品介绍</a> </li>
            <li ><a href="#">商品评价</a></li>
            <!--<li @click="cur=0" :class="{active:cur==0}"><a href="#">商品介绍</a> </li>-->
            <!--<li @click="cur=1" :class="{active:cur==1}"><a href="#">商品评价</a></li>-->
          </ul>
          <div  class="productshow-tabbody">
            <div class="productshow-tabbody-content">
              <span>保冷包新旧交替中，随机出货，商品以实物为主</span>
              <img src="http://pic.ganso.com.cn/description/100000770_1.jpg">
              <img src="http://pic.ganso.com.cn/description/100000770_2.jpg">
              <img src="http://pic.ganso.com.cn/description/100000770_3.jpg">
              <img src="http://pic.ganso.com.cn/description/100000770_4.jpg">
              <img src="http://pic.ganso.com.cn/description/100000770_5.jpg">
            </div>
          </div>
          <!--<div v-show="cur==1">sdfsdf</div>-->
        </div>
      </div>
      <!--内容右边的猜你喜欢-->
      <div class="Maylove float-r allcolor">
        <div class="Maylove-nav white deeppinkred margin-B-10 fonts-14 fontw">猜你喜欢</div>
        <ul>
          <li>
            <a href="#"><img src="http://pic.ganso.com.cn/images1/100000027/100000027_M.jpg" /> </a>
            <div class="love-money fontw fonts-12 red2">￥258.00</div>
            <div class="love-name">甜蜜如心鲜奶蛋糕</div>
          </li>
          <li>
            <a href="#"><img src="http://pic.ganso.com.cn/images1/100001236/100001236_M.jpg" /> </a>
            <div class="love-money fontw fonts-12 red2">￥258.00</div>
            <div class="love-name">甜蜜如心鲜奶蛋糕</div>
          </li>
          <li>
            <a href="#"><img src="http://pic.ganso.com.cn/images1/100000027/100000027_M.jpg" /> </a>
            <div class="love-money fontw fonts-12 red2">￥258.00</div>
            <div class="love-name">甜蜜如心鲜奶蛋糕</div>
          </li>
          <li>
            <a href="#"><img src="http://pic.ganso.com.cn/images1/100001236/100001236_M.jpg" /> </a>
            <div class="love-money fontw fonts-12 red2">￥258.00</div>
            <div class="love-name">甜蜜如心鲜奶蛋糕</div>
          </li>
          <li>
            <a href="#"><img src="http://pic.ganso.com.cn/images1/100000027/100000027_M.jpg" /> </a>
            <div class="love-money fontw fonts-12 red2">￥258.00</div>
            <div class="love-name">甜蜜如心鲜奶蛋糕</div>
          </li>
          <li>
            <a href="#"><img src="http://pic.ganso.com.cn/images1/100001236/100001236_M.jpg" /> </a>
            <div class="love-money fontw fonts-12 red2">￥258.00</div>
            <div class="love-name">甜蜜如心鲜奶蛋糕</div>
          </li>
        </ul>
      </div>
     </div>
  </div>
</template>
<script>
export default {
//    data:{
//    cur:0
//   }
}
</script>
<style lang="less"  scoped>
  a {
    color: #4F4F4F;
  }
  .YZ-top{
    width: 1199px;
    height: 45px;
    line-height: 45px;
    margin: 0 auto;
  }
  .YZ-bottom{
    width: 1199px;
    margin: 0 auto;
    .Shopshow{
       width: 991px;
      .Product{
        width: 991px;
        height: 600px;
        .productleft{
          width: 477px;
          .shopimg{
            width: 450px;
            height: 450px;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .puchase-carousel{
            width: 477px;
            height: 69px;
            .puchase-carousel-left{
              width: 17px;
              height: 45px;
              margin: 0 10px;
            }
            .puchase-carousel-content{
              width: 420px;
              position: relative;
              overflow: hidden;
              display: inline;
              ul{
                float: left;
                li{
                  float: left;
                  width: 84px;
                  display: inline;
                  img{
                    width: 62px;
                    height: 62px;
                    padding: 1px;
                  }
                }
              }
            }
          }
        }
        .productright{
          width: 428px;
          height: 554px;
          margin-right:40px;
          display: inline;
          .shop-title{
            height: 25px;
            line-height: 25px;
            font-weight: normal;
          }
          .shop-name{
            width: 100%;
          }
          .shop-price{
            width: 100%;
            height: 25px;
            line-height: 25px;
          }
          .shop-specifications{
            width: 100%;
            height: 30px;
            line-height: 25px;
            .choose{
              margin-left: 3px;
            }
            li{
              margin-right: 10px;
              margin-bottom: 5px;
              text-align: center;
              float: left;
              a{
                padding: 3px 15px;
                height: 21px;
                line-height: 21px;
                min-width: 53px;
                border: 1px solid #cccccc;
                font-size: 12px;
                box-sizing: content-box;
                &:hover{
                  color:#E93D6D;
                }
              }

            }
          }
          .shop-number{
            width: 100%;
            height: 35px;
            line-height: 25px;
            ul li{
              float: left;
              border:1px solid #ddd;
              background: #fff;
              color:#AEAEAE;
              margin-right: 20px;
              line-height: 38px;
              height: 38px;
              .shop-number-left{
                width: 45px;
                height: 36px;
                text-align: center;
                position: relative;
                border-right:1px solid #ddd ;
                input{
                  width: 100%;
                  height: 100%;
                  text-align: center;
                  font-size: 14px;
                  color:#AEAEAE;
                  border: 0;
                  outline: 0;
                  display: block;
                }
              }
              .shop-number-right{
                cursor: pointer;
                .add{
                  border-bottom: 1px solid #ddd;
                }
                span{
                  display: block;
                  width: 15px;
                  height: 50%;
                  line-height: 18px;
                  text-align: center;
                  font-size: 14px;
                  font-weight: 400;
                }
              }
            }
            .buy{
              margin: 0 14px 0 0;
              width: 110px;
              height: 38px;
              line-height: 38px;
              text-align: center;
              border: 1px solid #d5014b;
              display: inline;
              &:hover{
                color: black;
              }
            }
            .join{
              width: 150px;
              height: 38px;
              border: 0;
              line-height: 38px;
              padding-left: 20px;
              text-align: center;
              background-image: url(http://mall.ganso.com.cn/_ui/hepimages/icon_cart.gif);
              background-repeat: no-repeat;
              background-size:17px 17px;
              background-position: 17px;
              &:hover{
                background-color:#FE1B6A;
              }
            }

            .shu{
              letter-spacing: 5px;
            }
          }
          .shop-service{
            padding: 0 12px;
            line-height: 29px;
            color: #5a5a58;
            background-color: #f7f3e8;
            img{
              border: none;
              vertical-align: middle;
            }
          }
          .shop-collection{
            height: 20px;
            line-height: 20px;
            .Serial-number{
              float: left;
              margin-right: 30px;
              display: inline;
            }
            a{
              line-height: 20px;
              margin-right: 21px;
              cursor: pointer;
              float: left;
              &:hover{
                color:#E93D6D;
              }
            }
          }
        }
      }
      .ProductShow{
        ul{
          width: 100%;
          height: 30px;
          li{
            float: left;
            a{
              float: left;
              width: 120px;
              height: 30px;
              color: white;
              line-height: 30px;
              text-align: center;
              font-size: 14px;
              &:hover{
                background-color: #b6ab8f;
              }
            }
          }
        }
        .productshow-tabbody{
          width: 920px;
          margin: 0 auto;
          padding: 10px 0 20px 0;
          display: block;
          .productshow-tabbody-content{
            position: relative;
            padding: 10px 0 20px 0;
            text-align: left;
            span{
              font-size: medium;
              font-style: inherit;
              font-family: inherit;
              vertical-align: baseline;
              font-weight: 700;
            }
            img{
              max-width: 920px;
              /*margin: 0 auto;*/
              margin-left: 10px;
              /*消除图片缝隙：*/
              outline-width:0px;
              vertical-align:top;
            }
          }
        }
      }
    }
    .Maylove{
      width: 190px;
      .Maylove-nav{
        padding: 0 13px;
        height: 30px;
        line-height: 30px;
        position: relative;
        overflow: hidden;
      }
      ul{
        width: 170px;
        margin: 0 auto;
        li{
          width: 170px;
          margin-bottom: 10px;
          .love-money{
            height: 27px;
            line-height: 27px;
            text-align: right;
            overflow: hidden;
            display: block;
          }
          .love-name{
            height: 36px;
            line-height: 18px;
            overflow: hidden;
            font-weight: normal;
            display: block;
          }
          img{
            width: 170px;
            height: 170px;
            display: block;
          }
        }
      }
    }
  }
</style>
