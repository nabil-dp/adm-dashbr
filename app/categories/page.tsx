import { getCategories } from '@/utils/api';
import Link from 'next/link';

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">Kategori Produk</h1>
      <p className="text-gray-600 mb-8">Pilih kategori untuk melihat produk terkait (SSG Implementation).</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link 
            key={cat} 
            href={`/categories/${cat}`} 
            className="card p-8 flex flex-col items-center justify-center text-center group hover:border-blue-500 transition-all cursor-pointer"
          >
            <span className="text-4xl mb-4 group-hover:scale-110 transition-transform">📦</span>
            <h2 className="capitalize font-bold text-lg text-gray-800 group-hover:text-blue-600">
              {cat}
            </h2>
            <p className="text-xs text-gray-400 mt-2">Klik untuk jelajahi</p>
          </Link>
        ))}
      </div>
    </div>
  );
}