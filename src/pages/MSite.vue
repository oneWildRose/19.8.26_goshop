<template>
  <div class="msite">
    <!--首页头部-->
    <top :title="address.name">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </top>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorysArr.length">   <!-- Swiper的容器类名 -->
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(categorys, index) in categorysArr" :key="index">
            <a href="javascript:" class="link_to_food" v-for="(category, index) in categorys" :key="index">
              <div class="food_container">
                <img :src="baseImageUrl + category.image_url">
              </div>
              <span>{{ category.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="../assets/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <!-- shopList组件 -->
      <shoplist></shoplist>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import top from '@/components/top.vue'
import shoplist from '@/components/shopList.vue'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      baseImageUrl: 'https://fuss10.elemecdn.com'
    }
  },
  computed: { // 计算属性
    ...mapState(['address', 'categorys']),

    /**
     * 根据categorys一维数组生成一个二维数组
     * 小数组中的元素个数最大是8
     * */
    categorysArr() {
      const { categorys } = this
      // 准备空的二维数组
      let arr = []
      // 准备一个小数组，最大长度是8
      let minArr = []
        // 便利categorys
      categorys.forEach(item => {
          // 如果当前小数组已经满了，就创建一个新的
        if (minArr.length == 8) {
          minArr = []
        }
          // 如果minArr是空的，将小数组保存到大数组中
        if(minArr.length == 0) {
          arr.push(minArr)
        }
          // 将当前分类保存到小数组中
        minArr.push(item)
      })
      return arr
    }
  },
  mounted() {
    // 获取食品列表
    this.$store.dispatch('getCategorys')
  },
  updated() {
    var mySwiper = new Swiper ('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      }
    })
  },
  components: { // 子组件挂载
    top,
    shoplist
  },
}
</script>

<style lang="stylus" scoped>
@import '../assets/mixins.styl'
  .msite
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
      
</style>