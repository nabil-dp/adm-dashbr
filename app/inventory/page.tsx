import { getAllProducts, Product } from '@/utils/api';
import ProductTable from '@/components/ProductTable';

export const dynamic = 'force-dynamic';

export default async function InventoryPage() {
  try {
    const products: Product[] = await getAllProducts();

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
          <h1 className="text-3xl font-bold text-white mb-2">Manajemen Inventaris</h1>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            Total: {products.length} Item
          </span>
        </div>

        <ProductTable products={products} />
      </div>
    );
  } catch (error) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <h2 className="font-bold">Terjadi Kesalahan!</h2>
        <p>Gagal mengambil data dari API. Silakan coba segarkan halaman.</p>
      </div>
    );
  }
}