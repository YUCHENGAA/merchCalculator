<template>
  <header class="app-header">
    <!-- Logo -->
    <div class="logo">
      <span class="logo-title">周邊計算機</span>
      <span class="logo-subtitle">POPUP STORE</span>
    </div>

    <!-- Hamburger Button -->
    <el-button
      class="menu-button"
      text
      @click="drawerVisible = true"
      aria-label="開啟選單"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </el-button>
  </header>

  <!-- Navigation Drawer -->
  <el-drawer
    v-model="drawerVisible"
    direction="rtl"
    size="75%"
    :with-header="false"
    :show-close="false"
  >
    <div class="drawer-content">
      <div class="drawer-header">
        <span>MENU</span>

        <el-button text @click="drawerVisible = false" aria-label="關閉選單">
          <el-icon :size="24">
            <Close />
          </el-icon>
        </el-button>
      </div>

      <el-divider />

      <el-menu
        :default-active="$route.path"
        router
        @select="drawerVisible = false"
        class="drawer-menu"
      >
        <el-menu-item index="/">
          <span>首頁</span>
        </el-menu-item>

        <el-sub-menu index="/bomtoon">
          <template #title>
            <span>Bomtoon系列快閃</span>
          </template>
          <el-menu-item index="/bomtoonGreetings">
            <span>2027 SEASON’S GREETINGS</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/lezhin">
          <template #title>
            <span>Lezhin系列快閃</span>
          </template>
          <el-menu-item index="/worldtour">
            <span>World Tour2</span>
          </el-menu-item>
          <el-menu-item index="/lezhinGreetings">
            <span>𝟐𝟎𝟐𝟕 𝑺𝒆𝒂𝒔𝒐𝒏’𝒔 𝑮𝒓𝒆𝒆𝒕𝒊𝒏𝒈𝒔</span>
          </el-menu-item>
        </el-sub-menu>

        <el-sub-menu index="/lebom">
          <template #title>
            <span>LEBOM咖啡廳</span>
          </template>
          <el-menu-item index="/salon2">
            <span>女僕系列2</span>
          </el-menu-item>
        </el-sub-menu>

        <el-menu-item index="/wefesta">
          <span>WEFESTA</span>
        </el-menu-item>
      </el-menu>
    </div>
  </el-drawer>
</template>

<script setup>
import { ref } from "vue";

import { Close } from "@element-plus/icons-vue";

const drawerVisible = ref(false);
</script>

<style scoped>
.app-header {
  height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border-bottom: 1px solid #eeeeee;
}

.logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-title {
  font-size: 18px;
  font-weight: 700;
  color: #333333;
}

.logo-subtitle {
  font-size: 9px;
  letter-spacing: 2px;
  color: #999999;
}

.menu-button {
  color: #333333;
}

.drawer-content {
  padding: 10px 5px;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 2px;
}

.drawer-menu {
  border-right: none;
}

.drawer-menu :deep(.el-menu-item) {
  height: 56px;
  font-size: 16px;
}

.drawer-menu :deep(.el-menu-item.is-active) {
  color: #409eff;
  background: #ecf5ff;
  border-radius: 8px;
}
</style>
