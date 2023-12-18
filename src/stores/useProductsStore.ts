import {defineStore} from 'pinia';
import type {Product} from '@/types/product';
import {fetchProductDetails, fetchProducts} from '@/api/productsApi';

type SortField = 'title' | 'brand';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [] as Product[],
    currentProduct: null as Product | null,
    isFetching: false,
    searchQuery: {title: '', brand: ''},
    sortField: 'title' as SortField,
    sortOrder: 'asc' as 'asc' | 'desc',
  }),
  getters: {
    sortedProducts: (state) => {
      return state.products
        .filter((product) =>
          product.title.toLowerCase().includes(state.searchQuery.title.toLowerCase()) &&
          product.brand.toLowerCase().includes(state.searchQuery.brand.toLowerCase())
        )
        .sort((a, b) => {
          let fieldA = a[state.sortField].toLowerCase();
          let fieldB = b[state.sortField].toLowerCase();
          return state.sortOrder === 'asc' ? fieldA.localeCompare(fieldB) : fieldB.localeCompare(fieldA);
        });
    },
  },
  actions: {
    async fetchProducts() {
      this.isFetching = true;
      try {
        const response = await fetchProducts(); // Assumes that this function returns data in the specified format
        this.products = response.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.isFetching = false;
      }
    },
    async searchProducts(title: string, brand: string) {
      this.isFetching = true;
      this.searchQuery.title = title;
      this.searchQuery.brand = brand;
      try {
        const response = await fetchProducts({title, brand});
        this.products = response.products;
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        this.isFetching = false;
      }
    },
    async fetchProduct(id: string) {
      this.isFetching = true;
      try {
        this.currentProduct = await fetchProductDetails(id);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        this.isFetching = false;
      }
    },
    setSortField(field: 'title' | 'brand') {
      this.sortField = field;
    },
    toggleSortOrder() {
      this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    },
  },
});
