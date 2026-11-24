<template>
  <div class="catalog-view lezhinGreetings">
    <h3>𝟐𝟎𝟐𝟕 𝑺𝒆𝒂𝒔𝒐𝒏’𝒔 𝑮𝒓𝒆𝒆𝒕𝒊𝒏𝒈𝒔</h3>

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
import { products as lezhinProducts } from "../../data/lezhinGreetings.js";

const products = ref(
  lezhinProducts.map((product) => ({ ...product })),
);
</script>
