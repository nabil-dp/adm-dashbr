
const BASE_URL = 'https://fakestoreapi.com';

async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Gagal memuat data dari API: ${response.statusText}`);
  }

  return response.json();
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getCategories(): Promise<string[]> {
  return fetcher<string[]>('/products/categories');
}

export async function getAllProducts(): Promise<Product[]> {
  return fetcher<Product[]>('/products', { cache: 'no-store' });
}

export async function getProductById(id: string | number) {
  return fetcher(`/products/${id}`);
}

export async function deleteProduct(id: number) {
  return fetcher(`/products/${id}`, {
    method: 'DELETE',
  });
}