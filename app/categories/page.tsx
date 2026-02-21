import { getCategories } from '@/utils/api';
import Link from 'next/link';

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-white mb-2">Kategori Produk</h1>
        <p className="text-gray-400">Pilih kategori untuk melihat produk terkait (SSG Implementation).</p>
      </header>
      
      {/* Grid Kontainer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <Link 
            key={cat} 
            href={`/categories/${cat}`} 
            className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-8 
                       transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]
                       flex flex-col items-center justify-center text-center overflow-hidden"
          >
            {/* Dekorasi kartu - Efek cahaya saat hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            {/* Ikon Kategori */}
            <div className="text-5xl mb-6 transform transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
              📦
            </div>

            {/* Label Kategori */}
            <h2 className="text-xl font-bold text-gray-100 capitalize mb-2 group-hover:text-blue-400 transition-colors">
              {cat}
            </h2>

            {/* Sub-teks */}
            <p className="text-sm text-gray-500 group-hover:text-gray-400">
              Klik untuk jelajahi koleksi
            </p>

            {/* Panah Indikator (Muncul saat hover) */}
            <div className="mt-4 opacity-0 transform translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 text-blue-500 font-bold">
              Lihat Detail →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}