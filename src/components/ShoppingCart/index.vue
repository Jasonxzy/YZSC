<template>
  <div class="right">
    <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
    <button type="">sdfsdf</button>
    <button type="">dsfg</button>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        num8: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value)
      }
    }
  }
</script>
<style lang="less"  scoped>


</style>
