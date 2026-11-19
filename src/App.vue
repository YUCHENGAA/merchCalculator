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

