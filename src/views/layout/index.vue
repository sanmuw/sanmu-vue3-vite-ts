<template>
  <div :class="classObj" class="app-wrapper">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <!--Navbar-->
      <div :class="{ 'fixed-header': fixedHeader, 'hide-header': hideHeader }">
        <navbar :primary="primary" />
      </div>
      <!--AppMain-->
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  computed,
  toRefs,
  ref,
  watchEffect,
} from "vue";
import { useStore } from "@/store/index";

import useResize from "@/hooks/useResize";
import Navbar from './components/Navbar.vue'
import Sidebar from './components/Sidebar/index.vue'
import AppMain from './components/AppMain.vue'

export default defineComponent({
  name: "Layout",
  components: {
    Navbar,
    Sidebar,
    AppMain,
  },
  setup() {
    useResize();
    const store = useStore();
    const colors = reactive({
      primary: "#fff",
    });

    const opened = computed(() => store.getters["appModule/getSidebarState"]);
    const hideHeader = computed(
      () => store.getters["settingsModule/getHideHeaderState"]
    );
    const fixedHeader = computed(
      () => store.getters["settingsModule/getFixedHeaderState"]
    );

    // const withoutAnimation = computed(() => store.getters['appModule/getSidebarAnimation'])
    const classObj = computed(() => ({
      hideSidebar: !opened.value,
      openSidebar: opened.value,
      // withoutAnimation: withoutAnimation.value,
    }));
    /**
     * @description 监听device && opend
     * */
    watchEffect(() => {});

    /**
     * @description 切换内容显示
     */
    const handleHeaderChange = () => {
      // 改变state
      store.dispatch("settingsModule/toToggleHeader");
    };
    /**
     * @description 是否固定头部
     */

    const handleFixedHeaderChange = () => {
      // 改变state
      store.dispatch("settingsModule/toToggleFixedHeader");
    };
    const handleSidebarLogoChange = () => {
      // 改变state
      store.dispatch("settingsModule/toToggleSidebarLogo");
    };
    return {
      opened,
      hideHeader,
      fixedHeader,
      handleHeaderChange,
      handleFixedHeaderChange,
      handleSidebarLogoChange,
      classObj,
      ...toRefs(colors),
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";
@import "@/styles/variables.scss";
.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
  // overflow: scroll;
}

// .hide-header {
//   display: none;
// }
.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
  transition: width 0.28s;
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}
</style>
