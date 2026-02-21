import { Product } from '@/utils/api';

async function getProductsByCategory(slug: string): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products/category/${slug}`);
  if (!res.ok) throw new Error('Gagal mengambil data kategori');
  return res.json();
}

export default async function CategoryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const products = await getProductsByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-white capitalize mb-2">
          Kategori: {slug ? decodeURIComponent(slug) : 'Memuat...'}
        </h1>
        <p className="text-gray-400">Menampilkan produk terbaik dalam kategori ini.</p>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((p) => (
          <div 
            key={p.id} 
            className="group bg-gray-900 border border-gray-800 rounded-2xl p-5 flex flex-col h-full 
                       transition-all duration-300 hover:border-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          >
            <div className="h-52 w-full bg-white rounded-xl mb-4 p-4 flex items-center justify-center overflow-hidden">
               <img 
                src={p.image} 
                alt={p.title} 
                className="h-full w-full object-contain transform transition-transform duration-300 group-hover:scale-110" 
              />
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-gray-100 font-semibold line-clamp-2 mb-2 group-hover:text-blue-400 transition-colors">
                {p.title}
              </h3>
              
              <div className="mt-auto">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-2xl font-bold text-blue-500">${p.price}</span>
                  <span className="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded">
                    ⭐ {p.rating.rate}
                  </span>
                </div>
            
                <button className="w-full py-2 bg-gray-800 text-gray-200 rounded-lg text-sm font-medium 
                                 hover:bg-blue-600 hover:text-white transition-colors duration-300">
                  Lihat Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}