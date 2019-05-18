<template>
  <div class="content">
    <h1 class="help-center-h1">帮助中心</h1>
    <el-tabs :tab-position="tabPosition" class="tab-height">
      <!--帮助中心侧边导航-->
      <el-tab-pane label="配送范围及服务费">
        <!--配送范围及服务费tab内容-->
        <p class="fonts-16 help-center-p1">配送范围及服务费</p>
        <p class="fonts-16 help-center-p2">现有可配送城市查询 </p>
        <p class="fonts-16 help-center-p3"> http://mall.ganso.com.cn/Ganso/zh/store-finder</p>
        <table border="1" cellpadding="collapse" cellspacing="collapse" class="help-center-tb"  style="border-collapse:collapse;">
          <tr>
            <td></td>
            <td colspan="2">
              <p class="fonts-14 help-center-p4">阿萨德</p>
              <p class="fonts-14 help-center-p5">阿萨德</p>
            </td>
            <td colspan="2">
              <p class="fonts-14 help-center-p4">阿萨德</p>
              <p class="fonts-14 help-center-p5">阿萨德</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="fonts-14 help-center-p4">阿萨德</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p4">阿萨德</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p4">阿萨德</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p4">阿萨德</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p4">阿萨德</p>
            </td>
          </tr>
          <tr valign="middle">
            <td>
              <span class="fonts-14">sdh</span>
            </td>
            <td>
              <span class="fonts-14">sdh</span>
            </td>
            <td></td>
            <td>
              <span class="fonts-14">sdh</span>
              <span class="fonts-14">sdh</span>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
            <td>
              <p class="fonts-14 help-center-p2">eddd</p>
            </td>
          </tr>
        </table>
      </el-tab-pane>
      <el-tab-pane label="产品预定说明">产品预定说明</el-tab-pane>
      <el-tab-pane label="订单修改/取消/退款说明"> 订单修改/取消/退款说明</el-tab-pane>
      <el-tab-pane label="送货、收货"> 送货、收货</el-tab-pane>
      <el-tab-pane label="电子券购买/使用说明"> 电子券购买/使用说明</el-tab-pane>
      <el-tab-pane label="发票信息说明"> 发票信息说明</el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tabPosition: 'left'
    }
  }
}
</script>
<style>
  .content{
    max-width: 100%;
  }
  /*侧边导航样式*/
  .help-center-h1{
    width: 187.78px;
    font-size: 18px;
    letter-spacing: 1px;
    display: inline-block;
    border-right: 1px solid gainsboro;
    /*text-align: center;*/
    padding-left: 17px;
    padding-bottom: 5px;
  }
  .tab-height{
    height: 600px;
  }
  .el-tabs--left .el-tabs__nav-wrap.is-left::after, .el-tabs--left .el-tabs__nav-wrap.is-right::after, .el-tabs--right .el-tabs__nav-wrap.is-left::after, .el-tabs--right .el-tabs__nav-wrap.is-right::after {
    height: 100%;
    width: 1px;
    bottom: auto;
    top: 0;
  }
  .el-tabs--left .el-tabs__item.is-left {
   text-align: left;
    border-bottom: 1px dashed gainsboro;
  }
  .el-tabs__item.is-active {
    color: #e9004f;
    background-color: #f1ebf6;
  }
  .el-tabs__item:hover {
    color: #e9004f;
    background-color: #f1ebf6;
    cursor: pointer;
  }
  .el-tabs__active-bar{
    background-color: transparent;
  }
  .el-tabs__content {
    overflow: hidden;
    position: relative;
    padding-left: 30px;
  }
  /*配送范围及服务费文字样式*/
  .help-center-p1{
    font-weight: bold;
    margin-top: 10px;
  }
  .help-center-p2{
    margin-top: 25px;
    display: inline-block;
    letter-spacing: 1px;
  }
  /*配送范围及服务费表格样式*/
  .help-center-tb{
    width: 950px;
    height: 320px;
    border-collapse: collapse;
    border: 1px solid gainsboro;
    margin-top: 20px;
  }
  .help-center-p3{
    color: red;
    display: inline-block;
    padding-left: 15px;
  }
  .help-center-p4,.help-center-p5{
    font-weight: bold;
    display: inline-block;
    letter-spacing: 1px;
  }
  .help-center-p5{
    color: red;
  }
  .help-center-tb{
    text-align: center;
  }
  .help-center-red{
    color: red;
    display: inline-block;
  }
</style>
