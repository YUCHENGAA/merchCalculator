<template>
  <header class="app-header">
    <!-- Logo -->
    <div class="logo">
      <span class="logo-title">周邊計算機</span>
      <span class="logo-subtitle">POPUP STORE</span>
    </div>

    <!-- Hamburger Button -->
    <van-button
      class="menu-button"
      plain
      hairline
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
    </van-button>
  </header>

  <!-- Navigation Drawer -->
  <van-popup
    v-model:show="drawerVisible"
    position="right"
    :style="{ width: '82%', maxWidth: '360px', height: '100%' }"
  >
    <div class="drawer-content">
      <div class="drawer-header">
        <span>MENU</span>
        <van-button
          class="drawer-close"
          plain
          hairline
          icon="cross"
          aria-label="關閉選單"
          @click="drawerVisible = false"
        />
      </div>

      <van-divider />

      <nav class="drawer-menu" aria-label="主要選單">
        <van-cell
          title="首頁"
          :class="{ active: $route.path === '/' }"
          @click="navigate('/')"
        />

        <van-collapse v-model="activeNames">
          <van-collapse-item name="bomtoon" title="Bomtoon系列快閃">
            <van-cell
              title="2027 SEASON’S GREETINGS"
              :class="{ active: $route.path === '/bomtoonGreetings' }"
              @click="navigate('/bomtoonGreetings')"
            />
          </van-collapse-item>
          <van-collapse-item name="lezhin" title="Lezhin系列快閃">
            <van-cell
              title="World Tour2"
              :class="{ active: $route.path === '/worldtour' }"
              @click="navigate('/worldtour')"
            />
            <van-cell
              title="𝟐𝟎𝟐𝟕 𝑺𝒆𝒂𝒔𝒐𝒏’𝒔 𝑮𝒓𝒆𝒆𝒕𝒊𝒏𝒈𝒔"
              :class="{ active: $route.path === '/lezhinGreetings' }"
              @click="navigate('/lezhinGreetings')"
            />
          </van-collapse-item>
          <van-collapse-item name="lebom" title="LEBOM咖啡廳">
            <van-cell
              title="女僕系列2"
              :class="{ active: $route.path === '/salon2' }"
              @click="navigate('/salon2')"
            />
          </van-collapse-item>
        </van-collapse>

        <van-cell
          title="WEFESTA"
          :class="{ active: $route.path === '/wefesta' }"
          @click="navigate('/wefesta')"
        />

        <van-collapse v-model="activeNames">
          <van-collapse-item name="jp" title="日本動漫">
            <van-cell
              title="終熾完結紀念慶典系列"
              :class="{ active: $route.path === '/anniversaryCelebration' }"
              @click="navigate('/anniversaryCelebration')"
            />
          </van-collapse-item>
        </van-collapse>
      </nav>
    </div>
  </van-popup>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const drawerVisible = ref(false);
const activeNames = ref([]);

function navigate(path) {
  drawerVisible.value = false;
  router.push(path);
}
</script>

<style scoped>
.app-header {
  height: 64px;
  padding: 0 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
}

.logo {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.logo-title {
  font-size: 20px;
  font-weight: 800;
  letter-spacing: 0.04em;
  color: #40364d;
}

.logo-subtitle {
  font-size: 9px;
  letter-spacing: 2px;
  color: #9a91a3;
}

.menu-button {
  text-align: left;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(88, 73, 117, 0.1);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.72);
  color: #665775;
  box-shadow: 0 6px 18px rgba(73, 54, 107, 0.06);
}

.drawer-content {
  padding: 10px 5px;
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: #4d4458;
}

.drawer-menu {
  --van-collapse-item-content-padding: 8px 16px;
}

.drawer-close {
  width: 44px;
  height: 44px;
  border: 0;
  color: #665775;
}

.drawer-menu :deep(.van-cell),
.drawer-menu :deep(.van-collapse-item__title) {
  color: #62596c;
  font-size: 15px;
  border-radius: 10px;
  text-align: left;
}

.drawer-menu :deep(.van-cell.active) {
  color: #66507f;
  background: #eee8f5;
  font-weight: 800;
}

@media (max-width: 700px) {
  .app-header {
    height: 64px;
  }

  .logo-title {
    font-size: 18px;
  }
}
</style>
