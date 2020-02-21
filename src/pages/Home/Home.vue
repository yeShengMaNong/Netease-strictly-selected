<template>
<div class="project">
 <div id="home">
    <div class="titleSearch">
      <div class="item logo">
        <a href>
          <img src="./img/logo.png" alt />
        </a>
      </div>
      <div class="item search" @click="toSearch('/search')">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品,共20260款好物</span>
      </div>
      <div class="item dl">登录</div>
          <!--  -->
    </div>
    <div class="navBS">
    <div class="left">
      <ul class="lll">
        <li  @click="isClass" :class="{libottom:isActive}">推荐</li>
        <li v-for="(item, index) in data" :key="index" @click="clickIndex(index)" :class="{libottom:Index === index}">{{item.name}}</li>
      </ul>
    </div >
  </div>
</div>


<div v-if="tuijdata">
  <RemContent/>
</div>
  
</div>
</template>
<script type="text/ecmascript-6">

import BScroll from "better-scroll";
import {mapState} from 'vuex'
import RemContent from '../../components/Remcontent/Remcontent'

export default {
  components:{
    RemContent,
  },
  data() {
    return {
      HomeData:[],
      isActive:true,
      Index:undefined,
      focusList:[],
      isSearch:true
    }
  },
  methods:{
    //to search页面
    toSearch(value){
      this.$router.push(value)
    },

    clickIndex(event){
      this.isActive = false
      if(typeof event !== 'number' )
      return
      else this.Index = event
    },
   
    isClass(){
      this.isActive = !this.isActive
      this.Index = null
    }
  },
  mounted(){
      this.$store.dispatch('getIndex')
      this.$store.dispatch('getTuiJian') 

      new BScroll('.left',{
        scrollX: true,
        click: true
      })

  },
  computed:{
    ...mapState({
      data: state =>  state.IndexData,   //这个是请求 nav 的数据 已经存在vuex中
      tuijdata:state => state.tuidata.focusList
    })  
  },
  watch:{
    IndexData(){
       this.$nextTick(() => {
        new BScroll('.left',{
          scrollX: true,
          // click: true
        })
      });
    }
  }
};
</script>

<style lang="stylus">
@import '../../common/index.styl'
.project
  width 100%
  background #eee
  #home 
    width: 100%
    height: 87px
    background #fff
    .titleSearch
      padding 0 10px
      display flex
      padding 20px 20px
      .logo
        img
          width: 1.84rem
          height: .53333rem
          margin-top 4px
      .search
        width 60%
        margin-left 20px
        background #ededed
        text-align center
        line-height 40px
        color #333
        span 
          font-size 30px
        .iconfont
          font-size 27px
          // vertical-align middle
      .dl
        color #DD1A21
        width 74px
        height 40px
        border 2px solid #DD1A21
        border-radius 3px
        line-height 40px
        text-align center
        margin-left 40px
        font-size 26px
    .navBS
      width 100%
      background red
      .left
        background #fff
        overflow hidden
        .lll
          width 1320px
          padding 10px 20px
          height 50px
          // white-space nowrap
      
          li
            display inline
            font-size 28px
            padding 0 20px
            &.libottom
              bottom-border-12px(#DD1A21)
            
</style>

