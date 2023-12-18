<script setup lang="ts">
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {useProductsStore} from '@/stores/useProductsStore';
import type {Product} from '@/types/product';

const route = useRoute();
const store = useProductsStore();
const productDetails = computed<Product | null>(() => store.currentProduct);

store.fetchProduct(<string>route.params.id);
</script>

<template>
  <div class="product-details">
    <router-link to="/" @click="store.currentProduct = null">Back</router-link>
    <h2>Product Details</h2>
    <ul v-if="productDetails" class="details-list">
      <li v-for="(value, key) in productDetails" :key="key" class="details-item">
        <strong class="product-title">{{ key }}: </strong>
        <template v-if="key === 'images'">
          <ul class="images-list list-reset">
            <li v-for="(link, index) in value" :key="index">
              <span>{{ index + 1 }}: </span>
              <a :href="link" target="_blank">{{ link }}</a>
            </li>
          </ul>
        </template>
        <template v-else-if="key === 'thumbnail'">
          <a :href="value.toString()">{{ value.toString() }}</a>
        </template>
        <template v-else>
          {{ value }}
        </template>
      </li>
    </ul>
    <div v-else class="loading-message">
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 1rem;
  margin-top: 1rem;
}

.product-details {
  height: 100%;
  padding: 20px;
  background-color: #fff;
  border-radius: 3px;
}

.details-list {
  list-style: none;
  padding: 0;
}

.details-item {
  margin-bottom: 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.product-title {
  display: inline-block;
  margin-right: 10px;
}

.images-list {
  > li {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
}

.loading-message {
  margin-top: 20px;
}
</style>
