<template>
  <div id="app">
     <router-view></router-view>
     <div v-if="$route.path === '/home'" class="kong"></div>
    <FooterBar v-show="$route.path !== '/search'"/>
  </div>
</template>

<script>

import FooterBar from './components/FooterBar/FooterBar'

export default {
  name: 'App',
  components:{
    FooterBar
  },
  mounted(){
    // console.log(this)
  }

}
</script>

<style lang="stylus">
  .kong
    height 100px
</style>

