<script setup lang="ts">
import {computed, ref} from 'vue';
import {useProductsStore} from '@/stores/useProductsStore';
import {debounce} from 'lodash-es';
import Loader from "@/components/common/Loader.vue";

const store = useProductsStore();
const searchQuery = ref({title: '', brand: ''});

const products = computed(() => store.sortedProducts);

const sort = (field: 'title' | 'brand') => {
  store.setSortField(field);
  store.toggleSortOrder();
};

const debouncedSearch = debounce(() => {
  store.searchProducts(searchQuery.value.title, searchQuery.value.brand);
}, 600);

const performSearch = () => {
  debouncedSearch();
};
</script>

<template>
  <div class="products-table-wrapper">
    <div class="search-fields">
      <div class="search-holder">
        <label for="title">
          <h4>Title</h4>
        </label>
        <input
            id="title"
            type="text"
            placeholder="Enter Title"
            :value="searchQuery?.title"
            @input="performSearch"
        />
      </div>
      <div class="search-holder">
        <label for="brand">
          <h4>Brand</h4>
        </label>
        <input
            id="brand"
            type="text"
            placeholder="Enter Brand"
            :value="searchQuery?.brand"
            @input="performSearch"
        />
      </div>
    </div>
    <div class="products-table-holder">
      <Loader :isLoading="store?.isFetching"/>
      <table class="products-table">
        <thead>
        <tr>
          <th>
            <input class="custom-checkbox" type="checkbox"/>
            <span @click="sort('title')">
                Title
              </span>
          </th>
          <th>
              <span @click="sort('brand')">
                Brand
              </span>
          </th>
          <th><span>Price</span></th>
          <th><span>Category</span></th>
          <th><span>Stock</span></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>
            <input class="custom-checkbox" type="checkbox"/>
            <router-link :to="`/products/${product?.id}`">{{ product?.title }}</router-link>
          </td>
          <td>{{ product?.brand }}</td>
          <td>{{ product?.price }}</td>
          <td>{{ product?.category }}</td>
          <td>{{ product?.stock }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.search-fields {
  display: flex;
  gap: 1.4rem;
  margin-bottom: 2rem;
  @media (max-width: 767px) {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 479px) {
    flex-wrap: wrap;
  }

  input {
    width: 266px;
    @media (max-width: 767px) {
      width: 100%;
    }
  }
}

.search-holder {
  @media (max-width: 767px) {
    width: 50%;
  }
  @media (max-width: 479px) {
    width: 100%;
  }
}

h4 {
  margin-bottom: 1rem;
  @media (max-width: 767px) {
    margin-bottom: .6rem;
  }
}

.products-table-wrapper {
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.products-table-holder {
  flex-grow: 1;
  overflow: auto;
}

.products-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 3px;
  overflow: hidden;

  th, td {
    background-color: #fff;
    border-bottom: 1px solid #F2F2F2;
    padding: 22px 25px;
    vertical-align: middle;
  }

  th {
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    color: #000;
    text-align: left;
    position: sticky;
    top: 0;
    z-index: 1;

    > span {
      cursor: pointer;
    }
  }

  tr {
    &:hover {
      background-color: #ddd;
    }
  }

  a {
    color: #007bff;
  }
}

.custom-checkbox {
  top: 4px;
  margin-right: 27px;
  @media (max-width: 767px) {
    margin-right: 15px;
  }
}

.sort-arrow {
  position: relative;
  top: -2px;
  font-weight: 500;
}
</style>