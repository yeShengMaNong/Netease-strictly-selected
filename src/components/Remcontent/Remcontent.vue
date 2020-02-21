<template>
  <div id="rembox">
  
    <div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in remNeedData.focusList" :key="index">
          <img class="imm" :src="item.picUrl" alt="">
        </div>
    </div>

    <div class="swiper-pagination"></div>

    </div>

    <!--  -->
    <div class="remTitle">
      <ul>
        <li v-for="(item, index) in remNeedData.policyDescList" :key="index">
          <i>
            <img :src="item.icon" alt="">
          </i>
          <span>{{item.desc}}</span>
        </li>
      </ul>
    </div>
    <!--  -->
    <div class="shoplist">
      <ul class="list">
        <li class="item" v-for="(item, index) in remNeedData.kingKongModule.kingKongList" :key="index">
          <img :src="item.picUrl" alt="">
          <span>{{item.text}}</span>
        </li>
      </ul>
    </div>

    <!-- 边框部分 -->
    <div class="conn">
      <div class="conter">
        <a class="top" href="" v-for="(item, index) in remdata[0].cells" :key="index">
          <img class="topimg" :src="item.picUrl" alt="">
          <div class="pos">
            
          </div>
        </a>
        <div  class="bottom">
          <ul>
            <li class="first" v-for="(item, index) in remdata[1].cells" :key="index">
              <a href="">
                <img :src="item.picUrl" alt="" class="fitstimg">
              </a>
            </li>
            <li v-for="(item, index) in remdata[2].cells" :key="index">
                 <a href="">
                <img :src="item.picUrl" alt="">
              </a>
            </li>
             <li v-for="(item, index) in remdata[3].cells" :key="index">
                 <a href="">
                <img :src="item.picUrl" alt="">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 新人专享礼 -->
  
 <div class="newPerson">
      <h2>- 新人专享礼 -</h2>
      <div class="newPersonBox">
        <div class="left"></div>
        <div class="right">
          <div class="right1">
            <a href="">
              <img  class="price" :src="indexActivityModule[0].showPicUrl" alt="">
              <p>{{indexActivityModule[0].title}}</p>
              <br>
              <br>
              <p class="p2">{{indexActivityModule[0].subTitle}}</p>
            </a>
          </div>
          <div class="right2">
            <a href="">
              <img src="" alt="">
              <p class="p1">{{indexActivityModule[1].title}}</p>
              <br>
              <p class="p2">{{indexActivityModule[1].tag}}</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- 热销 -->
      <div class="rex">
        <h3 class="title">类目热销榜</h3>
        <div class="List">
          <a :href="item.targetUrl" v-for="(item, index) in categoryList" :key="index">
              <p>{{item.categoryName}}</p>
              <img :src="item.picUrl" alt="">
          </a>
        </div>
      </div>


      <!-- 限时购 -->
      <div class="timeshopbox">
        <div class="shopbox">
          <div class="shoptitle">
            <h2>限时购 </h2>
            <p>更多></p>
          </div>
          <div class="shopwarp" v-for="(item, index) in itemList" :key="index">
            <div class="shopconter">
            <img :src="item.picUrl" alt="">
          </div>
          <div class="shopPrice">
            <span>¥{{item.activityPrice}}</span><span>¥{{item.originPrice}}</span>
          </div>
          </div>
         
        </div>
      </div>


     

      <!-- 新品首发 -->
      <div class="newbox">
        <div class="newconter">
         <div class="newtitle">
           <h2>新品首发</h2>
           <span>更多></span>
         </div>
          <ul>
            <li v-for="(item, index) in newItemList" :key="index">
              <a href="">
                <img :src="item.listPicUrl" alt="">
              </a>
              <div class="news">
              <span>{{item.name}}</span>
              <p>¥{{69}}</p>
              </div>
             
            </li>
          </ul>
        </div>
      </div>

      <!-- fotter -->

      <div class="footer">
        <div class="footerconter">
          <ul>
            <li v-for="(item, index) in sceneLightShopping" :key="index">
                <p class="title">{{item.styleItem.title}}</p>
                <p class="desc">{{item.styleItem.desc}}</p>
                <img :src="item.styleItem.picUrlList[0]" alt="">
                <img :src="item.styleItem.picUrlList[1]" alt="">
            </li>
          </ul>
        </div>
      </div>

      <!--  -->
      <footer>
        <div class="conter">
          <a>下载APP</a>
          <a>电脑版</a>
          <p>网易公司版权所有 © 1997-2020</p>
          <p>食品经营许可证：JY13301080111719</p>
        </div>
      </footer>
    </div>



</template>

<script type="text/ecmascript-6"> 
import {mapState } from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
  export default {

    data() {
      return {
        newData:[]
      }
    },
    async mounted(){
      var mySwiper = new Swiper ('.swiper-container', {
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      
      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },
      
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },

        
      })    

      this.$store.dispatch('getClassReXiao')  
      this.$store.dispatch('getNewDatas')
    
    },
    
    computed:{
      ...mapState({
        remNeedData:state => state.tuidata,
        remdata : state => state.remdata,
        indexActivityModule : state => state.indexActivityModule,
        categoryList: state => state.categoryList,
        itemList : state => state.tuidata.flashSaleModule.itemList,
        newItemList:state => state.newItemList,
        sceneLightShopping : state=> state.tuidata.sceneLightShoppingGuideModule
      })
    },

    watch:{
      remNeedData(){
        
      }
    }
  }
</script>



<style lang="stylus">
@import '../../common/index.styl'
#rembox
  margin-top 50px
  .imm
    background #fff
    width 100%
    height  370px
    margin-top 8px
    box-sizing border-box
  .remTitle
    background #fff
    padding 10px 0
    border-bottom 1px solid #333
    ul
      text-align center
      li
        text-align center
        display inline-block
        width 30%
        i
          img
            width 40px
            height 40px
            vertical-align middle
            margin-right 5px
        span
          vertical-align middle
  .shoplist
    background #fff
    width 100%
    padding 10px
    box-sizing border-box
    bottom-border-1px(#333)
    .list
      width 100%
      // display flex
      height 340px
      .item
        padding 20px
        display inline-block
        text-align center
        img
          display block
          width 100px
          height 100px
          margin-bottom 10px
  .conn
    margin-top 10px
    .conter
      .top
        display block
        position relative
        .topimg
          width 100%
        .pos
          position absolute
          left 75px
          top 32px
          width 168px
          height 168px
          background red
        
      .bottom
        margin-top -2px
        border 10px solid #1674e3
        width 100%  
        box-sizing border-box
        ul
  
          .first
            a
              .fitstimg
                width 100%
          li
            width 50%
            display inline
            a
              img
                width 50%

  .newPerson
    width 100%
    height 550px
    box-sizing border-box
    background #fff
    margin-top 20px
    padding-left 16px
    h2
      font-size 32px
      line-height 50px
      color red
      text-align center  
    .newPersonBox
      width 100%
      height 434px
      margin 10px 0
      padding 0 20px
      box-sizing border-box
      .left
        float left
        width 343px
        height 100%
        background #F9E9CF
      .right
        float left

        .right1
          width 320px
          height 215px
          background yellow
          margin-left 8px 
          margin-bottom 6px
          position relative
          .price
            width 180px
            height 200px
            margin-left 160px
            margin-top 20px
            display inline
            position absolute
          p
            font-size 32px
            display inline-block
            margin-top 20px
            margin-left 20px
          .p2
            font-size 20px
    
            margin-top -40px
          
        .right2
          margin-left 8px 
          width 320px
          height 215px
          background pink
          .p1
            margin-top 20px
            font-szie 30px
          .p2
            display inline
            background #CBB693
  // 
  
  .rex

    width 100%
    background #fff
    margin-top 20px
    padding 0 20px 20px 30px
    box-sizing border-box
    .title
      font-size 34px
      color red
      line-height 100px
    .List
      a
        text-align center
        width 165px
        height 180px
        display inline-block
        background #F5F5F5
        margin-top 5px
        margin-right 10px
        margin-bottom 5px
        img
          width 120px 
          height 120px
        &:nth-child(1)
        a
          width 340px
          height 200px
          display inline-block
          background #F9F3E4
          margin-right 10px
          position relative
          p
            position absolute
            left 10px
            top 80px
            border-bottom 4px solid #333
            padding 0 0 15px 0
          img
          &:nth-child(1)
            img
              width 200px
              height 200px
              margin-left 12 0px
        &:nth-child(2)
        a
          width 340px
          height 200px
          display inline-block
          background #EBEFF6
          position relative
          p
            position absolute
            left 10px
            top 80px
            padding 0 0 15px 0
            border-bottom 4px solid #333
          img
          &:nth-child(2)
            img
              width 200px
              height 200px
              margin-left 120px
        p 
          padding-top 20px
          // display inline-block
          color: #333;
          font-family: PingFangSC-Medium;
      
        
  .timeshopbox
    width 100%
    height 680px
    background #ffffff
    margin-top 20px
    padding 0 10px 0 30px
    box-sizing border-box
    .shopbox
      .shoptitle
        padding 30px 0
        h2
          width 90%
          float left
          font-size 32px
          p
            font-size 25px
            width 20%
            float right
            text-align right
            margin-right -10px
      .shopwarp
        display inline-block
        .shopconter
            width 216px
            height 216px
            background #eee
            margin-right 20px
            display inline-block
            img
              width 216px
              height 216px
        .shopPrice
            margin-left 20px
            margin-top 10px
            padding-bottom 30px
            p
              width 216px
              height 103px
              text-align left
              margin-left -18px
            span
              margin-right 20px
              &:nth-child(1)
              span
                color red
              &:nth-child(2)
              span
                text-decoration line-through



  .newbox
    width 100%
    background #ffffff
    margin-top 20px
    padding 0 10px 0 30px
    box-sizing border-box
    height 921px
    .newconter
      width 100%
      .newtitle
        padding 30px 0
        h2
          font-size 30px
          float left
          width 80%

        span
          display inline-block
          width 20%
          text-align right
          font-size 26px
      ul
        width 100%
        overflow hidden
        
        li
          display inline-block
          width 216px
          height 397px
          margin-right 20px
      
          .news
            // height 103px
            height 122px
            margin-top 20px
            p
              margin-top 20px
              color red
              font-size 30px
          a
            display block
            img
              width 216px
              height 216px
              background #f5f5f5
           
              

  .footer
    width 100%
    height 570px
    background #ffffff
    margin-top 20px
    padding 10px 30px 30px 26px
    box-sizing  border-box
    .footerconter
      ul
        margin-left 3px
        li
          width 342px
          height 264px
          background #eee
          margin-right 3px
          display inline-block
          padding 20px 0 0 20px
          box-sizing border-box
          margin-bottom 3px
          img
            width 150px
            height 150px
          .title
            font-size 30px
            margin-bottom 10px
          .desc
            font-size 24px
  footer
    width 100%
    height 244px
    background rgb(51, 51, 51)
    text-align center
    .conter
      padding 54px 20px 27px
      box-sizing border-box
      a
        width 170px
        display inline-block
        height 62px
        border 1px solid #fff
        line-height  62px
        color #ffffff
      p
        margin-top 20px
        color rgb(153, 153, 153)
</style>


