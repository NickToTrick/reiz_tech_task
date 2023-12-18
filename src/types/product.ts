export interface ProductsApiResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
  stock: number;
  rating: number;
}