<template>
  <article class="product-card">
    <van-image
      v-if="galleryImages.length"
      class="product-image"
      :src="galleryImages[0]"
      :alt="name"
      fit="contain"
      @click="openImagePreview"
    />

    <div class="product-info">
      <h5 class="product-name">{{ name }}</h5>
      <p class="product-price">
        <span>{{ price }} /</span>
        <span v-if="displayPrimaryPrice">{{ displayPrimaryPrice }}</span>
        <span v-if="displaySecondaryPrice" class="secondary-price">
          /{{ displaySecondaryPrice }}</span
        >
      </p>

      <div class="quantity-control">
        <van-stepper
          v-model="quantity"
          :min="0"
          :max="stepperMax"
          integer
          theme="round"
          button-size="28"
          input-width="44"
          :aria-label="`${name}數量`"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, watch } from "vue";
import { showImagePreview } from "vant";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  images: {
    type: Array,
    default: () => [],
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: [Number, String],
    default: "",
    required: true,
  },
  KRPrice: {
    type: [Number, String],
    default: "",
  },
  TWPrice: {
    type: [Number, String],
    default: "",
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: Infinity,
  },
});

const emit = defineEmits(["update:modelValue"]);

const galleryImages = computed(() => {
  const images = props.images.length ? props.images : [props.image];
  return images.filter(Boolean);
});

const maxQuantity = computed(() =>
  Number.isFinite(props.max) ? Math.max(0, Math.floor(props.max)) : Infinity,
);

const stepperMax = computed(() =>
  Number.isFinite(maxQuantity.value) ? maxQuantity.value : 999999,
);

const quantity = computed({
  get: () => normalizeQuantity(props.modelValue),
  set: setQuantity,
});

const displayPrimaryPrice = computed(() => {
  if (props.KRPrice !== "") return `₩${props.KRPrice}`;
  return "";
});

const displaySecondaryPrice = computed(() => {
  if (props.TWPrice === undefined || props.TWPrice === null) return "";
  if (props.TWPrice !== "") return `NT$${props.TWPrice}`;
  return "";
});

function formatPrice(value) {
  if (typeof value === "string" && /[$₩NT$]/u.test(value)) return value;
  return `$${value}`;
}

function normalizeQuantity(value) {
  const parsedValue = Number(value);
  const parsedQuantity = Number.isFinite(parsedValue)
    ? Math.max(0, Math.floor(parsedValue))
    : 0;
  return Math.min(parsedQuantity, maxQuantity.value);
}

function setQuantity(value) {
  emit("update:modelValue", normalizeQuantity(value));
}

function openImagePreview() {
  showImagePreview({
    images: galleryImages.value,
    startPosition: 0,
    overlay: true,
    closeable: false,
    showIndex: false,
    loop: true,
    closeOnClickOverlay: true,
    overlayStyle: {
      backgroundColor: "rgba(0, 0, 0, 0.65)",
    },
  });
}

watch(
  () => [props.modelValue, maxQuantity.value],
  ([value]) => {
    const normalizedQuantity = normalizeQuantity(value);
    if (value !== normalizedQuantity) {
      emit("update:modelValue", normalizedQuantity);
    }
  },
  { immediate: true },
);
</script>

<style scoped>
.product-card {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 112px;
  padding: 10px;
  border: 1px solid rgba(88, 73, 117, 0.09);
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 8px 24px rgba(73, 54, 107, 0.06);
  transition:
    border-color 180ms ease,
    box-shadow 180ms ease,
    transform 180ms ease;
}

.product-card:hover {
  border-color: rgba(130, 105, 168, 0.18);
}

.product-image {
  width: 92px;
  height: 92px;
  flex: 0 0 92px;
  border-radius: 10px;
  cursor: zoom-in;
  background: #f4f1f7;
}

.product-info {
  min-width: 0;
  flex: 1;
  text-align: left;
}

.product-name {
  margin: 0 0 5px;
  font-size: 16px;
  font-weight: 750;
  line-height: 1.35;
  color: #302a38;
  overflow-wrap: anywhere;
}

.product-price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin: 0 0 8px;
  color: #7a5ba7;
  font-size: 15px;
  font-weight: 800;
}

.secondary-price {
  color: #91899a;
  font-size: 13px;
  font-weight: 700;
}

.quantity-control {
  width: 132px;
}

.quantity-control :deep(.van-stepper) {
  display: inline-flex;
  align-items: center;
  width: 132px;
}

.quantity-control :deep(.van-stepper__minus),
.quantity-control :deep(.van-stepper__plus) {
  color: #665775;
  background: #faf8fc;
  border: 1px solid #ebe6f0;
}

.quantity-control :deep(.van-stepper__input) {
  color: #302a38;
  background: #fff;
  border-top: 1px solid #ebe6f0;
  border-bottom: 1px solid #ebe6f0;
}

@media (min-width: 701px) {
  .product-card {
    gap: 16px;
    padding: 16px;
  }

  .product-card:hover {
    box-shadow: 0 12px 30px rgba(73, 54, 107, 0.11);
    transform: translateY(-2px);
  }

  .product-image {
    width: 112px;
    height: 112px;
    flex-basis: 112px;
  }

  .product-name {
    margin-bottom: 8px;
    font-size: 18px;
  }

  .product-price {
    margin-bottom: 12px;
  }

  .quantity-control,
  .quantity-control :deep(.van-stepper) {
    width: 144px;
  }
}
/* 圖片預覽背景 */
:global(.van-image-preview) {
  background: transparent;
}

/* 圖片展示區 */
:global(.van-image-preview__swipe) {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 中央白色展示區，不要邊框 */
:global(.van-image-preview__image) {
  background-color: #fff;
  border: none;
  box-sizing: border-box;
  border-radius: 0;
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 80vh;
}

/* 圖片維持原始比例 */
:global(.van-image-preview__image img) {
  width: auto;
  height: auto;
  max-width: 90vw;
  max-height: 80vh;
  object-fit: contain;
}
</style>
