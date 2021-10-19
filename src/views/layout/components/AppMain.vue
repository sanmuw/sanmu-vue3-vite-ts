<template>
  <section class="app-main">
    <router-view v-if="$route.meta.keepAlive" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </router-view>

    <router-view v-if="!$route.meta.keepAlive" v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive>
          <component :is="Component" :key="$route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </section>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStore } from '@/store/index'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'AppMain',
  setup() {
    // store 中获取当前路由以及所有的路由对象；
    const store = useStore()

    const router = useRouter()
    // mothods


    return {
    }
  }
})
</script>
<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: white;
}
.fixed-header + .app-main {
  padding-top: 50px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
