<template>
  <div class='search1' >
          <form action="/" class="inpu" >
          <van-search
            v-model="value"
            show-action
            placeholder="安全防护"
            @search="onSearch"
            @cancel="onCancel"
        
          />
      </form>
    <div class="conter">
      <div class="title">
        <h2>热门搜索</h2>
      </div>
      <ul>
        <li 
        v-for="(item, index) in search.hotKeywordVOList" :key="index"
        :class="{hot:item.highlight}"
        >{{item.keyword}}</li>
   
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Toast } from 'vant'
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        value:'',
        hotData:''
      }
    },
    methods:{
     
      onSearch(val) {
        Toast(val);
        console.log(val)
      },
      onCancel() {
        
        this.$router.back()
      }
    },
     mounted(){
        this.$store.dispatch('getsearchData')

        this.hotData = this.search.defaultKeyword.keyword
    },
    computed:{
      ...mapState({
        search: state => state.searchData
      })
    },
  }
</script>



<style lang="stylus" scoped>
.search1
  width 100%
  height 523px
  .van-search__action
    font-size 30px
  .van-search__content 
    background #eee
    line-height center
    height 50px
  .mint
    width 200px
    height 60px
    display block
  .conter
    padding 0 20px
    box-sizing border-box
    height 523px

    .title
      h2
        font-size 30px
        color #333
        margin-top 20px
        margin-left 10px
    ul
      li
        border 1px solid #333
        display inline-block
        padding 15px 10px
        margin 15px 10px
        &.hot
          border 1px solid red
</style>
