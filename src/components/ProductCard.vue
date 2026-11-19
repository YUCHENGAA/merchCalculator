<template>
  <article class="product-card">
    <img v-if="image" class="product-image" :src="image" :alt="name" />

    <div class="product-info">
      <h5 class="product-name">{{ name }}</h5>
      <p>美金/韓元/台幣</p>
      <p class="product-price">
        {{ price }}/{{ koreanPrice }}/{{ taiwanesePrice }}
      </p>

      <div class="quantity-control">
        <el-input-number
          v-model="quantity"
          :min="0"
          :max="maxQuantity"
          :step="1"
          :precision="0"
          :aria-label="`${name}數量`"
        />
      </div>
    </div>
  </article>
</template>

<script setup>
import { computed, watch } from "vue";

const props = defineProps({
  image: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: [Number, String],
    required: true,
  },
  koreanPrice: {
    type: [Number, String],
    default: "",
  },
  taiwanesePrice: {
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

const maxQuantity = computed(() =>
  Number.isFinite(props.max) ? Math.max(0, Math.floor(props.max)) : Infinity,
);

const quantity = computed({
  get: () => normalizeQuantity(props.modelValue),
  set: setQuantity,
});

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
  gap: 16px;
  padding: 16px;
  border: 1px solid #e5e4e7;
  border-radius: 12px;
  background: #fff;
}

.product-image {
  width: 112px;
  height: 112px;
  flex: 0 0 112px;
  border-radius: 8px;
  object-fit: cover;
}

.product-info {
  min-width: 0;
  flex: 1;
}

.product-name {
  margin: 0 0 8px;
  font-size: 18px;
  font-weight: 600;
  overflow-wrap: anywhere;
}

.quantity-control {
  width: 140px;
}

@media (max-width: 480px) {
  .product-image {
    width: 88px;
    height: 88px;
    flex-basis: 88px;
  }
}
</style>
