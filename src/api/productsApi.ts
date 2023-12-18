import type {ProductsApiResponse, Product} from '@/types/product';
import {fetchHelper} from '@/helpers/fetchHelper';

const API_BASE_URL = 'https://dummyjson.com/products';

export async function fetchProducts(searchParams?: { title?: string, brand?: string }): Promise<ProductsApiResponse> {
  const queryParams = new URLSearchParams(searchParams).toString();
  const query = queryParams ? `?${queryParams}` : '';
  return fetchHelper(`${API_BASE_URL}${query}`);
}

export async function fetchProductDetails(id: string): Promise<Product> {
  return fetchHelper(`${API_BASE_URL}/${id}`);
}