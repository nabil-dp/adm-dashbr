// utils/api.ts

const BASE_URL = 'https://fakestoreapi.com';

/**
 * Fungsi helper untuk menangani fetch data dengan error handling.
 * Menggunakan pendekatan modular agar kode lebih bersih.
 */
async function fetcher<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Gagal memuat data dari API: ${response.statusText}`);
  }

  return response.json();
}

// utils/api.ts

// Definisikan kontrak data sesuai respons dari API publik [cite: 27]
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

// ... kode fetcher sebelumnya ...

// Berikan tipe kembalian Promise<Product[]>


// 1. Fungsi untuk SSG (Static Site Generation) - Ambil Kategori 
export async function getCategories(): Promise<string[]> {
  return fetcher<string[]>('/products/categories');
}

// 2. Fungsi untuk SSR (Server-Side Rendering) - Ambil Semua Produk 
// Kita tambahkan cache: 'no-store' agar selalu mengambil data terbaru dari server [cite: 23, 28]
export async function getAllProducts(): Promise<Product[]> {
  return fetcher<Product[]>('/products', { cache: 'no-store' });
}

// 3. Fungsi untuk CSR (Client-Side Rendering) - Detail Produk Tunggal [cite: 24]
export async function getProductById(id: string | number) {
  return fetcher(`/products/${id}`);
}

// 4. Simulasi Mutasi Data (Untuk State Management / Fitur Tambahan) [cite: 30, 31]
export async function deleteProduct(id: number) {
  return fetcher(`/products/${id}`, {
    method: 'DELETE',
  });
}