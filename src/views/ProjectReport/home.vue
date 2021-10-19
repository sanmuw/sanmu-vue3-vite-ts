<template>
  <div>sssss</div>
</template>
<script lang="ts">
import { defineComponent, onMounted, computed, reactive, toRefs } from 'vue'

export default defineComponent({

})
</script>

<style scoped lang="stylus">
.home-container
  background #f0f5fa
  .top-container
    width 90%
    margin 0px auto
    .title
      margin-left 4.06%
      font-size 2.714em
      color #000
      margin-bottom 0
      font-weight 500
      position relative
      height -webkit-min-content
      height min-content
      cursor pointer
      text-align left
  .word-cloud-wrapper
    width 100%
    height 800px
    display flex
    margin 50px auto auto
    position relative
    flex-direction column
    padding 0
    background #f0f5fa
    overflow-x hidden
    transition all 0.3s
    .right-bottom
      background linear-gradient(130deg, #6a91ff 40%, #615edd)
      width 100%
      height 80%
      right 0
      margin-top 48px
      position absolute
    .word-sets
      width 95.8%
      height 100%
      margin-left 0
      margin-bottom 5%
      position relative
      .sets-module
        background #fff
        width 100%
        height 85%
        position relative
        box-shadow -5px 5px 15px rgba(0, 0, 0, 0.1)
        overflow hidden
  .page-title, .vue-element-plus-logo
    width 100%
    max-width 750px
    height 100%
    cursor pointer
  .el-carousel__item h3
    color #475669
    font-size 18px
    opacity 0.75
    line-height 300px
    margin 0
  .el-carousel__item:nth-child(2n)
    background-color white
  .el-carousel__item:nth-child(2n+1)
    background-color white
</style>
