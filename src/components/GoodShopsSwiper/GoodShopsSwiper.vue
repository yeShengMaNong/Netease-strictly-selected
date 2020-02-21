<template>
<div class="swiperNav">
<div class="swiper-container">
    <div class="swiper-wrapper" >
        <div class="swiper-slide" style="width: 168px" v-for="(item, index) in SwiperData" :key="index">
            <div class="item" v-for="(i , index) in item" :key="index">
                <img :src="i && i.picUrl" alt="">
                <div class="title">
                    <p>{{i && i.mainTitle}}</p >
                    <span></span>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-pagination">
    
    </div>
</div>
</div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import { mapState } from "vuex";
import _ from 'lodash'
export default {
  data() {
    return {
      SwiperData:[],
      a:1
    }
  },
  mounted() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          slidesPerView: "auto",
          // spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      })
  },
  computed: {
    ...mapState(['GoodShop'])
  },
  watch:{
    GoodShop(){
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          slidesPerView: "auto",
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          }
        });
      })
      const {navList} = this.$store.state.GoodShop
      this.SwiperData = _.chunk(navList,2)
    }
  }
};
</script>

<style lang="stylus">
.swiperNav
    width 100%
    height 173px
    margin-bottom 20px
    box-sizing border-box
    padding 0 20px
    position relative

    .swiper-container
        width calc(100% - 40px)
        height 540px
        background-color #fff
        border-radius 15px
        position absolute
        bottom 10px
        left 50%
        transform translateX(-50%)
        .swiper-wrapper
            width auto !important
            .swiper-slide
                width 180px!important
                height 470px
                box-sizing border-box
                padding 36px 6px 6px 6px
                .item
                    width 168px
                    height 200px
                    &:nth-child(1)
                        margin-bottom 28px
                    img
                        width 120px
                        height 120px
                        margin 0 auto 8px
                        margin-left 5px
                    .title
                        display block
                        width 168px
                        height 72px

                        text-align center
                        p
                            line-height 40px
                            font-weight 600
                            font-size 30px
                            margin-left -40px
                        span
                            color #666
</style>