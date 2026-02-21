'use client'; // Wajib untuk CSR 

import { useState, useEffect } from 'react';
import { getAllProducts, Product } from '@/utils/api';
import SearchBar from '@/components/SearchBar';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { useNotification } from '@/context/NotificationContext';

export default function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const { showNotification } = useNotification(); // Menggunakan Context API 

  // Effect untuk mengambil data saat komponen dimuat (CSR) 
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError(true);
        showNotification('Gagal mengambil data produk', 'error');
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();
  }, [showNotification]);

  // Fungsi filter di sisi klien (CSR)
  const handleSearch = (query: string) => {
    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Pencarian Inventaris (CSR)</h1>
        <p className="text-gray-600">Gunakan fitur ini untuk mencari produk secara instan di sisi klien.</p>
      </header>

      <SearchBar onSearch={handleSearch} />

      {error && (
        <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">
          Terjadi kesalahan saat memuat data. [cite: 39]
        </div>
      )}

      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{product.title}</h3>
                  <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-bold text-blue-600">${product.price}</p>
                  <button 
                    onClick={() => showNotification(`Detail ${product.title} disalin!`)}
                    className="text-xs text-gray-400 hover:text-blue-500 underline mt-2"
                  >
                    Salin ID
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20 text-gray-400">
              Tidak ada produk yang sesuai dengan pencarian Anda.
            </div>
          )}
        </div>
      )}

    </div>
  );
}