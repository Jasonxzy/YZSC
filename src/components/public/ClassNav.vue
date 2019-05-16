<template>
  <nav class="menu">
    <div class="center">
      <div class="menus"></div>
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
</style>
