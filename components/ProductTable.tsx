interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: { count: number };
}

export default function ProductTable({ products }: { products: Product[] }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">ID</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Produk</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Kategori</th>
            <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Harga</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50 transition">
              <td className="px-6 py-4 text-sm text-gray-900">{product.id}</td>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.title}</td>
              <td className="px-6 py-4 text-sm text-gray-500 capitalize">{product.category}</td>
              <td className="px-6 py-4 text-sm font-bold text-green-600">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}