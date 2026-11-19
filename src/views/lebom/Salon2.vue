<template>
  <div class="catalog-view salon2">
    <h3>女僕系列2</h3>

    <el-scrollbar class="product-scrollbar">
      <div class="product-list">
        <ProductCard
          v-for="(product, index) in products"
          :key="`${product.id}-${index}`"
          v-model="product.quantity"
          :image="product.image"
          :name="product.name"
          :price="`$${product.price}`"
          :koreanPrice="`₩${product.koreanPrice}`"
          :taiwanesePrice="`$${product.taiwanesePrice}`"
        />
      </div>
    </el-scrollbar>

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

const productImages = import.meta.glob(
  "../../assets/salon2/*.{jpg,jpeg,png,webp}",
  { eager: true, import: "default" },
);

const products = ref([
  {
    id: "salon2-acrylic-stand",
    name: "立牌",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    koreanPrice: 15000,
    taiwanesePrice: 400,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "壓克力磚",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    koreanPrice: 15000,
    taiwanesePrice: 400,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "拍立得",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "磁鐵",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "小卡",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "心型徽章",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "吊飾",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "飯有",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "Q版立牌",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "抱枕鑰匙圈",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
  {
    id: "salon2-acrylic-stand",
    name: "徽章展示架",
    image: productImages["../../assets/salon2/salon2_AcrylicStand.jpg"],
    price: 12,
    quantity: 0,
  },
]);
</script>
