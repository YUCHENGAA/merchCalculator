<template>
  <div class="catalog-view anniversaryCelebration">
    <h3>終熾完結紀念慶典系列</h3>

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
            :images="product.images"
            :name="product.name"
            :price="`¥${product.price}`"
          />
        </template>
      </div>
    </div>

    <CartSummary :items="products" currency="JPY" />
  </div>
</template>

<script setup>
import { ref } from "vue";

import CartSummary from "../../../components/JPCartSummary.vue";
import ProductCard from "../../../components/ProductCard.vue";
import { products as anniversaryProducts } from "../../../data/anniversaryCelebration.js";

const products = ref(anniversaryProducts.map((product) => ({ ...product })));
</script>
