<template>
  <div class="catalog-view bomtoonGreetings">
    <h3>2027 SEASON’S GREETINGS</h3>

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

    <CartSummary :items="products" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import CartSummary from "../../components/CartSummary.vue";
import ProductCard from "../../components/ProductCard.vue";
import { products as bomtoonProducts } from "../../data/bomtoonGreetings.js";

const products = ref(
  bomtoonProducts.map((product) => ({ ...product })),
);
</script>
