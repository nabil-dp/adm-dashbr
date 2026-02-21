import { getAllProducts, Product } from '@/utils/api';
import ProductTable from '@/components/ProductTable';

// Memastikan halaman selalu mengambil data terbaru dari server (SSR) [cite: 23]
export const dynamic = 'force-dynamic';

export default async function InventoryPage() {
  try {
    // Mengambil data dari API publik [cite: 27]
    const products: Product[] = await getAllProducts();

    // Validasi jika data kosong
    if (!products || products.length === 0) {
      return (
        <div className="text-center mt-10">
          <p className="text-gray-500">Tidak ada produk yang ditemukan.</p>
        </div>
      );
    }

    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Manajemen Inventaris (SSR)</h1>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Total: {products.length} Item
          </span>
        </div>

        {/* Menggunakan komponen tabel yang sudah dibuat sebelumnya */}
        <ProductTable products={products} />
        
        {/* Penjelasan Teknis untuk Video Demonstrasi [cite: 44] */}
        <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 text-sm text-yellow-700">
          <strong>Info Teknis:</strong> Halaman ini menggunakan 
          <span className="font-mono bg-yellow-100 px-1 mx-1">Server-Side Rendering (SSR)</span> 
          untuk memastikan data stok dan harga selalu sinkron dengan server API[cite: 23].
        </div>
      </div>
    );
  } catch (error) {
    // Implementasi Error Handling yang baik 
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <h2 className="font-bold">Terjadi Kesalahan!</h2>
        <p>Gagal mengambil data dari API. Silakan coba segarkan halaman.</p>
      </div>
    );
  }
}