<template>
  <div class="star" :class="'star-' + size">
    <span class="star-item" v-for="(sc, index) in starClasses" :key="index" :class="sc"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props: {
    score: Number, // 评分
    size: Number // 图标大小
  },
  computed: {
    starClasses() {
      const { score } = this
      const scs = [] // 总个数 5个
      // 向 scs 中添加N个 'on'
      const scoreInteger = Math.floor(score) // 评分的整数
      for(let i = 0; i < scoreInteger; i++) {
        scs.push('on')
      }
      // 向 scs 中添加0或1个 'half'
      if(score - scoreInteger * 10 >= 5) {
        scs.push('half')
      }
      // 向 scs 中添加N个 'off'
      while (scs.length < 5) {
        scs.push('off')
      }
      return scs
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/mixins.styl'
  .star //2x图 3x图
    float left
    font-size 0
    .star-item
      display inline-block
      background-repeat no-repeat
    &.star-48
      .star-item
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child
          margin-right: 0
        &.on
          bg-image('../assets/stars/star48_on')
        &.half
          bg-image('../assets/stars/star48_half')
        &.off
          bg-image('../assets/stars/star48_off')
    &.star-36
      .star-item
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child
          margin-right 0
        &.on
          bg-image('../assets/stars/star36_on')
        &.half
          bg-image('../assets/stars/star36_half')
        &.off
          bg-image('../assets/stars/star36_off')
    &.star-24
      .star-item
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child
          margin-right 0
        &.on
          bg-image('../assets/stars/star24_on')
        &.half
          bg-image('../assets/stars/star24_half')
        &.off
          bg-image('../assets/stars/star24_off')
</style>