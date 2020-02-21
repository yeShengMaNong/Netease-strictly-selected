<template>
  <div id="fenlei">
    <div class="fenleiconter">
      <div class="search" @click="toSearch('/search')">
        
          <i class="iconfont icon-sousuo"></i>
          <span>搜索商品,共20260款好物</span>
       
      </div>
    </div>
      <!--left -->
    <div class="box">
      <div class="left">
        <ul class="ll">
          <li 
          @click="clickIndex({'clickActive':index, 'id':item.id})"
          :class="{active : Index === index}"
          v-for="(item, index) in leftNav" :key="index">{{item.name}}</li>
        </ul>
      </div>
      <!-- right -->
        <div class="rightbox">
          <div class="rightlist" v-if="listData">
           
            <ul>
              
               <a href="">
                 <img src="https://yanxuan.nosdn.127.net/868844d3288f130c1aa808312dbbd1d8.png" alt="">
               </a>
              <li v-for="(item, index) in listData" :key="index">
                <a href="">
                  <img :src="item.wapBannerUrl" alt="">
                   <span>{{item.name}}</span>
                </a>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
</template>

<script type="text/ecmascript-6">
// import bannerdata from '../../server/datas/rightbanner.json'
import BScroll from "better-scroll";
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        Index:null,
        firsttLiACctive:true,
        RightNeedId:null,
        listData:[],
        listBottomData:{},
        bannerIMG:[]
      }
    },
    mounted(){
      // this.bannerIMG = bannerdata
      // console.log(this.bannerIMG)
      this.$store.dispatch('getNav')
      this.$store.dispatch('getRightData')

      this.$nextTick(() => { 
          this.scroll = new BScroll('.left', {
            scrollY: true, // 纵向滑动
            click: true, //
          })
          this.scroll = new BScroll('.rightlist', {
            scrollY: true, // 纵向滑动
            click: true, //
          })
      })
      
    },
      
    methods:{

      toSearch(value){
        this.$router.push(value)
      },

      clickIndex(event){

        this.listData = this.rightData[0]
        /* 
        event.clickActive : active 依赖的数据
        */
        this.Index = event.clickActive
        this.RightNeedId = event.id
        let res = this.rightData.filter((item,index) => {
          return item.id === this.RightNeedId
        })
        let result = res[0].categoryList
        this.listData = result
   
      }
    },
    computed:{
      ...mapState({
        leftNav : state => state.leftNav,
        rightData : state => state.rightData,
        rightBottomData : state => state.rightBottomData
      }),
    },
    watch:{
      rightData(){
        const res = this.rightData[0].categoryList
        this.listData = res
      },
      rightBottomData(){
        if(this.rightBottomData.length === 8)
        this.listBottomData = this.rightBottomData
        console.log(this.listBottomData)
      }
    }
  
}
</script>

<style lang="stylus">
#fenlei
  width 100%
  height 100%
  .fenleiconter
    width 100%
    height 100%
    padding 20px 30px
    box-sizing border-box
    .search
      text-align center
      background #eee
      height 50px
      i
        font-size 30px
        vertical-align middle
      span
        text-align center
        font-size 26px
        line-height 50px
  .box
     width 162px
     height 1148px
     display inline
    .left
      float left
      width 167px
      height 1148px
      overflow hidden
      border-top 1px solid #333
      border-right 1px solid #333
      display inline-block
      ul
        // padding 60px 0 
        padding 20px 0 98px
        height 1150px
        // overflow hidden
        box-sizing border-box
        li
          font-size 28px
          padding 20px 0
          text-align center
          width 162px
          height 50px
          line-height 50px
          // box-sizing border-box
          &:nth-child(1)
          li
            margin 10px 0
          &.active 
            background #ffffff
            color #AB2B2B
            // border-left 4px solid #AB2B2B
            &:after 
              content ''
              width 5px
              height 50px
              background #AB2B2B
              position absolute
              left 0
    .rightbox
      width 582px
      height 1148px
      margin-left 160px
      .rightlist
        // width 100%
        height 1148px
        margin-left 20px
        overflow hidden
        ul
          width 528px
          overflow hidden
          margin-left 20px
          // margin-top 20px
          // height 1148px
      
          a
            img
              width 528px
              height 192px
              margin-bottom 20px
          li
            width 30%
            width 144px
            height 216px
            text-align center
            // display inline-block
            margin 0 15px
            float left
            a 
              display block
              width 144px
              height 144px
              border-radius 50%
              img
                width 144px
                height 144px
                margin-bottom 20px
              span
                color #000
                
</style>
