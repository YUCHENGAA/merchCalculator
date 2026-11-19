<template>
  <aside class="cart-summary" aria-label="購物車摘要">
    <h2>購物車</h2>

    <div class="cart-total">
      <span>商品總計</span>
      <strong>{{ formatCurrency(total) }}</strong>
    </div>

    <section v-if="giftThreshold !== null" class="threshold">
      <div class="threshold-heading">
        <span>滿贈門檻</span>
        <strong>{{ formatCurrency(giftThreshold) }}</strong>
      </div>
      <p :class="{ achieved: giftReached }" aria-live="polite">
        {{
          giftReached
            ? "已達滿贈門檻"
            : `還差 ${formatCurrency(giftThreshold - total)} 達成滿贈`
        }}
      </p>
    </section>

    <section v-if="freeShippingThreshold !== null" class="threshold">
      <div class="threshold-heading">
        <span>免運門檻</span>
        <strong>{{ formatCurrency(freeShippingThreshold) }}</strong>
      </div>
      <p :class="{ achieved: freeShippingReached }" aria-live="polite">
        {{
          freeShippingReached
            ? "已達免運門檻"
            : `還差 ${formatCurrency(freeShippingThreshold - total)} 達成免運`
        }}
      </p>
    </section>
  </aside>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
  giftThreshold: {
    type: Number,
    default: null,
  },
  freeShippingThreshold: {
    type: Number,
    default: null,
  },
  currency: {
    type: String,
    default: "USD",
  },
});

const total = computed(() =>
  props.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
);

const giftReached = computed(() => total.value >= props.giftThreshold);
const freeShippingReached = computed(
  () => total.value >= props.freeShippingThreshold,
);

const currencyFormatter = computed(
  () =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: props.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }),
);

function formatCurrency(amount) {
  return currencyFormatter.value.format(amount);
}
</script>

<style scoped>
.cart-summary {
  position: fixed;
  z-index: 1000;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  gap: 24px;
  width: auto;
  margin: 0;
  padding: 12px 20px;
  border: 1px solid #e5e4e7;
  border-bottom: 0;
  border-radius: 0;
  background: #fff;
}

.cart-summary h2 {
  flex: 0 0 auto;
  margin: 0;
  font-size: 18px;
}

.cart-total,
.threshold-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.cart-total {
  flex: 0 0 auto;
  padding: 0;
  font-size: 16px;
  white-space: nowrap;
}

.threshold {
  flex: 1 1 0;
  min-width: 0;
  padding: 0;
}

.threshold + .threshold {
  margin: 0;
  padding-left: 20px;
  border-top: 0;
  border-left: 1px solid #e5e4e7;
}

.threshold p {
  margin-top: 4px;
  color: #777;
}

.threshold p.achieved {
  color: #2e8b57;
}

@media (max-width: 700px) {
  .cart-summary {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 20px 20px;
    padding: 10px 12px;
  }

  .cart-summary h2 {
    font-size: 16px;
  }

  .cart-total {
    justify-content: flex-end;
    font-size: 15px;
  }

  .threshold {
    font-size: 13px;
  }

  .threshold + .threshold {
    padding-left: 12px;
  }

  .threshold p {
    font-size: 12px;
  }
}
</style>
