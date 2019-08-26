<template>
  <div id="app">
    
    <router-view/>
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',
  components: {
    Footer
  }
};
</script>

<style lang='stylus'>
  #app
    width 100%
    height 100%
    background #f5f5f5
</style>
