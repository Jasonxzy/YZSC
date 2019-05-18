<template>
  <div id="container">
    <!--顶部导航-->
    <TopNavigation/>
    <!--搜索部分-->
    <search/>
    <!--分类导航部分-->
    <ClassNav/>
    <span class="clear"></span>
    <!--首页轮播位置-->
    <div class="banner">
      <el-carousel>
        <el-carousel-item v-for="(item,index) in imglist" :key="index">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
    <span class="clear"></span>
    <!--轮播结束-->
    <div id="Sequence">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">综合排序</el-menu-item>
        <el-submenu index="2">
          <template slot="title">价格</template>
          <el-menu-item index="2-1">价格（由低到高）</el-menu-item>
          <el-menu-item index="2-2">价格（由高到低）</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">销量</template>
          <el-menu-item index="3-1">销量（由低到高）</el-menu-item>
          <el-menu-item index="3-2">销量（由高到低）</el-menu-item>
        </el-submenu>
      </el-menu>
      <div class="line">
        <div class="Products">
          <a href="#" class="photo">
            <img title="芝兰玉叶慕思蛋糕" alt="芝兰玉叶慕思蛋糕" src="./img/100001442_M.jpg" />
          </a>
          <div class="ms">
            <h5>
              <a href="#"> 芝兰玉叶慕思蛋糕</a>
            </h5>
            <P>干酪慕思，布朗尼饼干底</P>
            <P class="spec">规格：6号、8号</P>
          </div>
           <strong class="price">¥198.00<span>/6号</span></strong>
          <a href="#" class="btn_minxi">立即购买</a>
        </div>
      </div>
    </div>
    <span class="clear"></span>
    <!--底部部分&侧边导航部分-->
    <BottomNav/>
  </div>
</template>
<script>
import banner1 from './img/4e1ba6692b4dedcc9aefdf81441e7e0.jpg'
import banner2 from './img/-20190501134142.jpg'
import banner3 from './img/WechatIMG249.png'
import TopNavigation from '../public/TopNavigation.vue'
import search from '../public/search.vue'
import ClassNav from '../public/ClassNav.vue'
import BottomNav from '../public/BottomNavigation.vue'
export default {
  components: {
    TopNavigation,
    search,
    ClassNav,
    BottomNav
  },
   data () {
     return {
       imglist: [banner1, banner2, banner3],
       activeIndex: '1'
     }
   },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style>
  #container{
    width: 1200px;
    margin: 0 auto;
  }
  #Sequence {
    width: 990px;
    height: 39px;
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    box-sizing: content-box;
    margin-top: 15px;
  }
  .el-menu--horizontal>.el-menu-item.is-active {
    border-bottom: 2px solid #C5023A;
    color: #000;
  }
  .el-menu--horizontal>.el-submenu.is-active .el-submenu__title {
    border-bottom: 2px solid #C5023A;
    color: #303133;
  }
  .el-menu--horizontal>.el-menu-item{
    height: 39px;
    line-height: 39px;
  }
  .el-menu.el-menu--horizontal{
    height: 39px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 39px;
    line-height: 39px;
  }
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 120px;
  }
  /*单件商品部分*/
  .Products {
    padding: 20px 0;
    height: 150px;
    background: #fff;
    box-sizing: content-box;
    border-bottom: 1px solid #e1e1e1;
  }
  .Products .photo {
    margin: 0 22px 0 5px;
    float: left;
    width: 150px;
    height: 150px;
    display: inline;
  }
  a {
    color: #4f4f4f;
    text-decoration: none;
  }
  .Products .photo img {
    width: 100%;
    height: 100%;
    display: block;
  }
  img {
    border: none;
    vertical-align: middle;
  }
  .Products .ms {
    width: 450px;
    float: left;
    font-size: 14px;
    padding-right: 80px;
    padding-top: 15px;
  }
  .Products .ms h5 {
    height: 22px;
    line-height: 22px;
    overflow: hidden;
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
    font-weight: 700;
  }
  .Products .ms p {
    line-height: 20px;
    color: #3c3c3c;
    height: 40px;
    overflow: hidden;
  }
  .Products .ms p.spec {
    margin-top: 20px;
  }
  strong {
    font-weight: 700;
  }
  .Products strong.price {
    float: left;
    width: 179px;
    font-size: 24px;
    color: #e93d6d;
    margin-top: 50px;
  }
  .Products strong.price span {
    font-size: 15px;
    font-weight: normal;
  }
  .Products .btn_minxi {
    margin: 50px 43px 0 0;
    float: right;
    width: 127px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 16px;
    color: #fff;
    background-color: #e50150;
    display: inline;
  }
  .Products .btn_minxi:hover {
    background-color: #fe0259;
  }
</style>
