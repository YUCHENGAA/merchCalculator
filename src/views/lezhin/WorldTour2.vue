<template>
  <div class="catalog-view worldTour2">
    <h3>WorldTour2</h3>

    <div class="product-scrollbar">
      <div class="product-list">
        <template
          v-for="(product, index) in products"
          :key="`${product.id}-${index}`"
        >
          <ProductCard
            v-if="product.name"
            v-model="product.quantity"
            :image="product.image"
            :name="product.name"
            :price="`$${product.price}`"
            :koreanPrice="`₩${product.koreanPrice}`"
            :taiwanesePrice="`$${product.taiwanesePrice}`"
          />
        </template>
      </div>
    </div>

    <CartSummary
      :items="products"
      :gift-threshold="100"
      :free-shipping-threshold="46"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import CartSummary from "../../components/CartSummary.vue";
import ProductCard from "../../components/ProductCard.vue";
import { products as worldTourProducts } from "../../data/worldTour2.js";

const products = ref(
  worldTourProducts.map((product) => ({ ...product })),
);
</script>
