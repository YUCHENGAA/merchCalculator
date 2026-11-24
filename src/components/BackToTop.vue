<template>
  <!-- bottom 預留固定購物車摘要的高度，避免返回頂部按鈕被遮住 -->
  <button
    type="button"
    aria-label="回到頂部"
    class="back-to-top"
    :class="{ visible: isVisible }"
    @click="scrollToTop"
  >
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M18 15l-6-6-6 6" />
    </svg>
  </button>
</template>

<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isVisible = ref(false);
let scrollElement = null;
let keepHiddenUntilTop = false;

function getScrollElement() {
  return document.querySelector(".catalog-view .product-scrollbar");
}

function getScrollTop() {
  if (scrollElement) {
    return scrollElement.scrollTop;
  }
  return window.scrollY;
}

function handleScroll() {
  const scrollTop = getScrollTop();

  if (scrollTop <= 0) {
    isVisible.value = false;
    keepHiddenUntilTop = false;
    return;
  }

  if (!keepHiddenUntilTop) {
    isVisible.value = true;
  }
}

function bindScrollListener() {
  scrollElement?.removeEventListener("scroll", handleScroll);
  window.removeEventListener("scroll", handleScroll);

  scrollElement = getScrollElement();

  if (scrollElement) {
    scrollElement.addEventListener("scroll", handleScroll, { passive: true });
  } else {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }

  isVisible.value = getScrollTop() > 0;
}

function scrollToTop() {
  isVisible.value = false;
  keepHiddenUntilTop = true;

  if (scrollElement) {
    scrollElement.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

watch(
  () => route.path,
  () => nextTick(bindScrollListener),
);

onMounted(async () => {
  await nextTick();
  bindScrollListener();
});

onUnmounted(() => {
  scrollElement?.removeEventListener("scroll", handleScroll);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  right: 12px;
  bottom: calc(104px + env(safe-area-inset-bottom));
  z-index: 1100;
  visibility: hidden;
  opacity: 0;
  pointer-events: none;
  display: grid;
  transform: translateY(8px);
  transition:
    opacity 180ms ease,
    transform 180ms ease,
    visibility 180ms;
}

.back-to-top.visible {
  visibility: visible;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}

.back-to-top {
  transform: translateZ(0);
  width: 40px;
  height: 40px;
  display: grid;
  place-items: center;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: var(--brand, #7a5ba7);
  color: #fff;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 4px 12px rgb(0 0 0 / 20%);
}

.back-to-top:hover {
  background: var(--brand-dark, #584176);
}

.back-to-top:focus-visible {
  outline: 2px solid #fff;
  outline-offset: 2px;
}

@media (min-width: 701px) {
  .back-to-top {
    right: 24px;
    bottom: 180px;
  }
}
</style>
