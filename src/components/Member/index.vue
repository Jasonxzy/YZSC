<template>
  <div class="Member-Center">
      <div class="nav-top">
            <a>主页</a>
            <span> > </span>
            <span>我的账户</span>
      </div>
      <div class="Member clearfix">
          <div class="Center-menu fl">
            <ul>
              <li>欢迎光临元祖食品店</li>
              <li>会员中心</li>
              <li>ID:<span>15346852520</span></li>
              <li>会员等级</li>
            </ul>
            <dl>
              <dt>个人中心</dt>
              <dd>我的资料</dd>
              <dd>修改密码</dd>
              <dd>收货地址</dd>
              <dd>增值税发票</dd>
              <dd>我的电子卷</dd>
              <dd>我的积分</dd>
            </dl>
            <dl>
              <dt>购物中心</dt>
              <dd>购物车</dd>
              <dd>订单列表</dd>
              <dd>收藏列表</dd>
            </dl>
          </div>
          <div class="Member-content fr">
            <ul>
              <dt><img src="./picture/icon1.gif">资料设置</dt>
              <li>更新个人信息</li>
              <li>修改密码</li>
              <li>收货地址</li>
              <li>增值税发票</li>
            </ul>
            <ul>
              <dt><img src="./picture/icon2.gif">账户查询资</dt>
              <li>我的电子卷</li>
              <li>我的积分</li>
            </ul>
            <ul>
              <dt><img src="./picture/icon3.gif">我的收藏</dt>
              <li>我的收藏夹</li>
            </ul>
            <ul>
              <dt><img src="./picture/icon4.gif">订单管理</dt>
              <li>订单历史记录</li>
            </ul>
          </div>
      </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.Member-Center{
  width: 1200px;
  margin: auto;
}
.nav-top{
  font-size: 14px;
}
.Member{
  width: 1200px;
  margin-top: 20px;
}
.Center-menu{
  width: 200px;
}
.Member-content{
  width: 1000px;
}
.fl{
  float: left;
}
.fr{
  float: right;
}
.clearfix:active{
  content: " ";
  display: inline-block;
  clear: both;
}
.Center-menu ul{
  margin: 0;
  padding: 0;
  margin-left: 10px;
}
.Center-menu ul li{
  list-style: none;
  font-size: 14px;
  line-height: 30px;
}
.Member-content ul{
  width: 400px;
  float: left;
  margin: 30px;
  height: 180px;
}
.Member-content ul li{
  list-style: none;
  width: 100%;
  line-height: 30px;
  font-size: 14px;
}
.Center-menu  dd{
  font-size: 14px;
  line-height: 30px;
}
.Member-content dt{
  border-bottom: 1px solid #000000;
  width: 160px;
  vertical-align: middle;
}
.Member-content ul img{
  vertical-align: middle;
  padding-right: 20px;
}
</style>
