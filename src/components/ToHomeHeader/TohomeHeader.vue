<template>
  <div id="header">
    <div class="headerConter">
      <div class="headerConterLeft">
        <i class="iconfont icon-shouye1" @click="toPages('/home')"></i> 
      </div>
      <span>值得买</span>
      <div class="headerConterRight">
        <i class="iconfont icon-sousuo" @click="toPages('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="toPages('/shoopcar')"></i>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      toPages(value){
        this.$router.push(value)
      }
    }
  }
</script>

<style lang="stylus">
#header
  width 100%
  height 100px
  padding 0 20px
  box-sizing border-box
  .headerConter
    height 100%
    width 100%
    line-height 50px
    text-align center
    .headerConterLeft
      float left
    .headerConterRight
      float right
      .icon-sousuo
        margin-right 20px
    span
      float left
      margin-left 260px
      line-height 100px
      font-size 34px
    .iconfont
      font-size 50px
      height 100px
      line-height 100px
      vertical-align middle
</style>
