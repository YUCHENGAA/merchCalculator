<template>
  <div class="site-shell">
    <Header />

    <main class="main-content" :class="{ 'has-cart': $route.path !== '/' }">
      <router-view />
      <BackToTop position="fixed" />
    </main>
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import BackToTop from "./components/BackToTop.vue";
</script>

<style>
body {
  max-width: 480px;
  margin: 0 auto;
  background-color: #f7f8fa; /* Vant 預設淺灰底色 */
  min-height: 100vh;
}

.catalog-view {
  min-height: 0;
}

.product-scrollbar {
  max-height: calc(100svh - 220px);
  overflow-y: auto;
  overscroll-behavior: contain;
  scrollbar-width: thin;
  scrollbar-color: rgba(122, 91, 167, 0.35) transparent;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px 4px 12px;
}
</style>
