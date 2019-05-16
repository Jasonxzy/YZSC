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
            <div class="shop-title fonts-16">雪麻糬</div>
            <div class="shop-name fonts-12 lightgrey margin-B-15">糯米拥抱冰淇淋</div>
            <div class="shop-price margin-B-15 ">
              <div class="fonts-14 float-l lightgrey">优惠价:</div>
              <div class="fonts-24 red2 float-l fontw">￥15.00</div>
            </div>
            <div class="shop-specifications margin-B-15 lightgrey">
              <div class="fonts-14 float-l">选择规格: </div>
              <div class="fonts-12 float-l choose">
                <ul >
                  <li><a href="">芒果味</a></li>
                  <li><a href="">蓝莓味</a></li>
                  <li><a href="">草莓味</a></li>
                </ul>
              </div>
            </div>
            <div class="shop-number">
              <div class="fonts-14 float-l shu">数量:</div>
              <ul><li>
                <div class="float-l shop-number-left">
                  <input type="" value="1"/>
                </div>
                <div class="float-r shop-number-right">
                  <span class="add" >+</span>
                  <span class="less" >-</span>
                </div>
              </li></ul>
              <div class="buy fonts-20 float-l red2 buypinkred">立即购买</div>
              <div class="join fonts-20 float-l white joinred">加入购物车</div>
            </div>
            <div class="shop-service fonts-12">
              服务承诺：
              <img src="http://mall.ganso.com.cn/_ui/hepimages/00.gif"/>
              精选食材
            </div>
            <div class=""></div>
          </div>
        </div>
        <!--大图展示-->
        <div class="ProductShow">下面的图片展示</div>
      </div>
      <!--内容右边的猜你喜欢-->
      <div class="Maylove float-r allcolor">右边的喜欢</div>
     </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less"  scoped>
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
       border:1px solid red;
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
          border:1px solid blueviolet;
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
            height: 25px;
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
                padding: 3px 10px;
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
            height: 25px;
            line-height: 25px;
            ul li{
              float: left;
              border:1px solid #ddd;
              background: #fff;
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
          }
        }
      }
    }
    .Maylove{
      width: 190px;
    }
  }
</style>
