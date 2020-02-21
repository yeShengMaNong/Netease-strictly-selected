<template>
  <div id="footerbar">
    <div class="bootomNav" @click="Topath('/home')" :class="{active:$route.path == '/home'}">
      <i class="iconfont icon-shouye1"></i>
      <span>首页</span>
    </div>
     <div class="bootomNav" @click="Topath('/classify')" :class="{active:$route.path == '/classify'}">
      <i class="iconfont icon-liebiao"></i>
      <span>分类</span>
    </div>
     <div class="bootomNav" @click="Topath('/shoop')" :class="{active:$route.path == '/shoop'}">
      <i class="iconfont icon-fenlei"></i>
      <span>值得买</span>
    </div>
     <div class="bootomNav" @click="Topath('/shoopcar')" :class="{active:$route.path == '/shoopcar'}">
      <i class="iconfont icon-gouwuche"></i>
      <span>购物车</span>
    </div>
     <div class="bootomNav" @click="Topath('/personal')" :class="{active:$route.path == '/personal'}">
      <i class="iconfont icon-geren"></i>
      <span>个人</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      Topath(PathValue){
        if(PathValue !== this.$route.path)    
        this.$router.push(PathValue)
      }
    }
  }
</script>

<style lang="stylus">
#footerbar
  // height 100px
  display flex
  position fixed
  width 100%
  text-align  center
  left 0
  bottom 0
  background #fff
  border-top 1px solid #d9d9d9
  box-sizing border-box
  .bootomNav
    display flex
    width 20%
    flex-direction column
    &.active
      color red
    span
      font-size 24px
      margin-bottom 10px
    .iconfont
      margin-top 5px
      line-height 50px
      font-size 40px
</style>
