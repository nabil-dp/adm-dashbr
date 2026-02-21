import { Product } from '@/utils/api';

async function getProductsByCategory(slug: string): Promise<Product[]> {
  const res = await fetch(`https://fakestoreapi.com/products/category/${slug}`);
  if (!res.ok) throw new Error('Gagal mengambil data kategori');
  return res.json();
}

// Tambahkan async pada props params
export default async function CategoryDetailPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  // Await params terlebih dahulu sebelum mengakses propertinya
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  const products = await getProductsByCategory(slug);

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 capitalize text-blue-600">
        {/* Pastikan slug ada sebelum menggunakan replace */}
        Kategori: {slug ? decodeURIComponent(slug) : 'Memuat...'}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div key={p.id} className="card p-4 flex flex-col h-full">
            <div className="h-40 w-full relative mb-4">
               <img 
                src={p.image} 
                alt={p.title} 
                className="h-full w-full object-contain" 
              />
            </div>
            <h3 className="font-semibold line-clamp-2 mb-2 flex-grow">{p.title}</h3>
            <p className="text-blue-600 font-bold text-lg">${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}