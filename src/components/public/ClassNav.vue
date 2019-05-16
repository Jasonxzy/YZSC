<template>
  <nav class="menu">
    <div class="center">
      <ul class="menus">
        <li>
          <a href="#" title="元祖商城">元祖商城</a>
        </li>
        <li></li>
        <li>
          <a href="#" title="品牌故事">品牌故事</a>
        </li>
        <li>
          <a href="#" title="元祖推荐">元祖推荐</a>
        </li>
        <li></li>
        <li></li>
      </ul>
      <span class="clear"></span>
      <div class="submenu">
        <div class="menutitle">
          <span class="empty-nav-item">全部商品分类</span>
          <ul class="nav">
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard0" style="background-position: 0px 0px;"></span>
                <a href="#">元祖端午季</a>
              </strong>
              <a href="#">纸质提货券</a>
              <a href="#">端午礼盒</a>
              <a href="#">电子提货券</a>
              </li>
            <li>
              <strong>
                <span class="icon1 wizard1" style="background-position: 0px 0px;"></span>
                <a href="#">元祖梦蛋糕</a>
              </strong>
              <a href="#">母亲节专款</a>
              <a href="#">鲜奶蛋糕</a>
              <a href="#">巧克力蛋糕</a>
              <a href="#">慕思蛋糕</a>
              <a href="#">多层蛋糕</a>
            </li>
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard2" style="background-position: 0px 0px;"></span>
                <a href="#">冰品季</a>
              </strong>
              <a href="#">冰淇淋蛋糕</a>
              <a href="#">冰品点心</a>
            </li>
            <li>
              <strong>
                <span class="icon1 wizard3" style="background-position: 0px 0px;"></span>
                <a href="#">元祖礼盒</a>
              </strong>
              <a href="#">水果礼盒</a>
              <a href="#">糕点礼盒</a>
            </li>
            <li class="hui_bg">
              <strong>
                <span class="icon1 wizard4" style="background-position: 0px 0px;"></span>
                <a href="#">精致西点</a>
              </strong>
              <a href="#">小慕思类</a>
              <a href="#">西点卷类</a>
              <a href="#">麻糬类</a>
              <a href="#">其他</a>
            </li>
            <li>
              <strong>
                <span class="icon1 wizard5" style="background-position: 0px 0px;"></span>
                <a href="#">元祖卡券</a>
              </strong>
              <a href="#">礼卡</a>
              <a href="#">水果券</a>
              <a href="#">西点券</a>
              <a href="#">蛋糕券</a>
              <a href="#">电子券</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
    export default {}
</script>
<style>
  .menu{
    height: 40px;
    min-width: 1200px;
    margin: 0 auto;
    z-index: 50000;
    position: relative;
    background-color: #ffffff;
    border-bottom: 2px solid #e4004f;
    width: 1200px;
  }
  .menu .center{
    position: relative;
  }
  .center {
    width: 1196px;
    margin: 0 auto;
  }
  .center .menus{
    float: left;
    padding-left: 215px;
  }
  .menus li{
    float: left;
    background: url(./img/1.gif) no-repeat right center;
  }
  .menus li a{
    float: left;
    width: 117px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
  }
  .menus li a:hover{
    color: #e93d6d;
  }
  a {
    color: #4f4f4f;
    text-decoration: none;
    background-color: transparent;
  }
  .submenu{
    max-height: 478px;
    overflow: hidden;
    width: 225px;
    position: absolute;
    top: 0px;
    left: -2px;
    z-index: 50000;
  }
  .submenu .menutitle{
    overflow: hidden;
    cursor: pointer;
    background-color: #e9004f;
    text-align: center;
  }
  .empty-nav-item{
    color: #FFFFFF;
    height: 40px;
    font-size: 16px;
    font-weight: normal;
    line-height: 40px;
  }
  .submenu .menutitle .nav {
    background-color: #ffffff;
    text-align: left;
    display: none;
  }
  .submenu .menutitle .nav li.hui_bg {
    background-color: #eeeeee;
  }
  .submenu .menutitle .nav li {
    padding: 10px 0 9px 34px;
    position: relative;
  }
  .submenu .menutitle .nav li strong {
    height: 27px;
    line-height: 27px;
    overflow: hidden;
    font-size: 13px;
    font-weight: normal;
    display: block;
  }
  .submenu .wizard0{
    background-image: url('./img/-.png');
    background-size: 22px 22px;
  }
  .submenu .wizard1{
    background-image: url('./img/-Much-.png');
  }
  .submenu .wizard2{
    background-image: url('./img/-.jpg');
    background-size: 22px 22px;
  }
  .submenu .wizard3{
    background-image: url('./img/-1.png');
    background-size: 22px 22px;
  }
  .submenu .wizard4{
    background-image: url('./img/-2.png');
    background-size: 22px 22px;
  }
  .submenu .wizard5{
    background-image: url('./img/-3.png');
    background-size: 22px 22px;
  }
  .submenu .menutitle .nav li span.icon1 {
    background-position: 0px 6px;
  }
  .submenu .menutitle .nav li a {
    line-height: 20px;
    display: inline-block;
    color: #6b6b6b;
    margin-right: 5px;
  }
  .submenu:hover .nav{
    display: block;
  }
  .submenu .menutitle .nav li a:hover {
    color: #e70050;
  }
  .submenu .menutitle .nav li span {
    width: 22px;
    height: 22px;
    position: absolute;
    top: 15px;
    left: 6px;
  }

</style>
