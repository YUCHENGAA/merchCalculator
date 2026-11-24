<template>
  <div class="catalog-view salon2">
    <h3>女僕系列2</h3>
    <p>台幣為台灣場販價格</p>

    <div class="product-scrollbar">
      <div class="product-list">
        <ProductCard
          v-for="(product, index) in products"
          :key="`${product.id}-${index}`"
          v-model="product.quantity"
          :image="product.image"
          :name="product.name"
          :price="`USD${product.price}`"
          :KRPrice="`${product.KRPrice}`"
          :TWPrice="product.TWPrice"
        />
      </div>
    </div>

    <CartSummary
      :items="products"
      :gift-threshold="100"
      :free-shipping-threshold="46"
      currency="USD"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import CartSummary from "../../components/CartSummary.vue";
import ProductCard from "../../components/ProductCard.vue";
import { products as salonProducts } from "../../data/salon2.js";

const products = ref(
  salonProducts.map((product) => ({ ...product, quantity: 0 })),
);
</script>
