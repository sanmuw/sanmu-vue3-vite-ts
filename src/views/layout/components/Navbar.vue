<template>
  <div class="navbar">
    <el-header height="50px">
      <hamburger id="Hamburger" :is-active="opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <breadcrumb class="breadcrumb-container" />
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="hover">
          <div class="avatar-wrapper">
            <div class="nickname">{{ nickname }}</div>
          </div>
          <template #dropdown>
            <el-dropdown-menu class="user-dropdown">
              <router-link to="/">
                <el-dropdown-item>{{ langConfig.header.user.homePage.name }}</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>
                <span style="display: block" @click="logout">{{ langConfig.header.user.logout.name }}</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import Hamburger from '@/components/Hamburger/Hamburger.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import { useRouter } from 'vue-router'
import { useStore } from '@/store/index'
import { langConfig } from '@/utils/constant/config'

export default defineComponent({
  name: 'Navbar',
  components: {
    Hamburger,
    Breadcrumb,
  },
  props: {
    primary: {
      default: '#fff',
      type: String
    }
  },
  setup() {
    const router = useRouter()
    const store = useStore()
    const opened = computed(() => store.getters['appModule/getSidebarState'])
    const nickname = computed(() => JSON.parse(localStorage.getItem('userInfo') as string)?.userName ?? 'sanmu')

    // methods
    const toggleSideBar = () => {
      store.dispatch('appModule/toggleSideBar')
    }

    const logout = () => {
      // clear()
      sessionStorage.removeItem('auth')
      sessionStorage.removeItem('accessToken')

      router.replace('/login')
    }

    return {
      nickname,
      toggleSideBar,
      opened,
      langConfig,
      logout
    }
  }
})
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.28);
  z-index: 1;

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .nickname {
    float: right;
    padding: 0px 25px 0px 25px;
    line-height: 40px;
    outline: none;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    display: flex;
    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;
        cursor: pointer;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
