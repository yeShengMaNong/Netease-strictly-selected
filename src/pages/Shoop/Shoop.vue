<template>
  <div id="GoodShop">
    <ToHomeHeader/>
    <div class="GoodConter">
      <div class="banner">
        <div class="banerIMG">
          <img src="./imgs/title.png" alt=""  class="titleIMG">
          <span>严选好物 用心生活</span>
        </div>
           <GoodShopSwiper/>
      </div>
    </div>
 
  </div>
  
</template>

<script type="text/ecmascript-6">
import ToHomeHeader from '../../components/ToHomeHeader/TohomeHeader'
import GoodShopSwiper from '../../components/GoodShopsSwiper/GoodShopsSwiper'
import {mapState} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {
    data() {
      return {
        
      }
    },
    components:{
      ToHomeHeader,
      GoodShopSwiper
    },
    mounted(){
      this.$store.dispatch('getZhiDe')
      this.$store.dispatch('getPuBu')
   
    },
    //抽取 vuex中网易值得买接口数据
    computed:{
      ...mapState({
        ShoopData: state => state.GoodShop    //网易值得买接口数据
      })
    },
    watch:{
  
    }
  }
</script>

<style lang="stylus">
#GoodShop
  background #eee
  width 100%
  height 1200px
  .GoodConter
    width 100%
    .banner
      .banerIMG
        width 100%
        height 520px
        background-image:url('./imgs/banner.png')
        position relative
        .titleIMG
          width 130px
          height 70px
          margin-top 40px
          .a
            width 100%
            height 500px
            background red
        span
          font-size 30px
          color #fff
          position absolute
          top 67px
          margin-left 10px    
</style>
