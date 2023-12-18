<script setup lang="ts">
import ProductsTable from '@/components/ProductsTable.vue';
import {useProductsStore} from '@/stores/useProductsStore';

const store = useProductsStore();

store.fetchProducts()
</script>

<template>
  <h2>Products Information</h2>
  <ProductsTable :products="store.sortedProducts"/>
</template>

<style scoped lang="scss">
h2 {
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    margin-bottom: 1.2rem;
  }
}
</style>