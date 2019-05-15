<template>
  <div>
    <div class="Shopshow float-l">
      <div class="Product">
        <div class="productleft float-l">
          <div class="shopimg">
            <img src="" />放图片的
          </div>
          <div class="carousel">
            <div class=""> <左移动 </div>
            <div class=""> 中间图片 </div>
            <div class=""> 右移动> </div>
          </div>
        </div>
        <div class="productright float-r">商品信息文字</div>
      </div>
      <div class="ProductShow">下面的图片展示</div>
    </div>
    <div class="Maylove float-r">右边的喜欢</div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .Shopshow{
    width: 991px;
  }
  .Maylove{
    width: 190px;
  }
  .Product{
    width: 991px;
    height: 600px;
  }
  .productleft{
    width: 477px;
  }
  .productright{
    width: 428px;
    height: 554px;
  }
  .shopimg{
    width: 450px;
    height: 450px;
  }
  .carousel{
    width: 477px;
    height: 69px;
  }
</style>
