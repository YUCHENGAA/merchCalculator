<template>
  <div class="catalog-view wefesta">
    <h3>WEFESTA</h3>

    <el-scrollbar class="product-scrollbar">
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
    </el-scrollbar>

    <CartSummary
      :items="products"
      :gift-threshold="100"
      :free-shipping-threshold="46"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

import CartSummary from "../components/CartSummary.vue";
import ProductCard from "../components/ProductCard.vue";

const products = ref([
  {
    id: "",
    name: "",
    image: "",
    price: "",
    koreanPrice: "",
    taiwanesePrice: "",
    quantity: 0,
  },
]);
</script>
