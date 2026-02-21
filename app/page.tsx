import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Random Store</h1>
      <p className="text-gray-600 mb-8">
        Selamat datang di panel inventaris produk Random Store.
      </p>
      <div className="flex gap-4">
        <Link href="/inventory" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Inventory
        </Link>
        <Link href="/categories" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
          Lihat Kategori
        </Link>
      </div>
    </div>
  );
}