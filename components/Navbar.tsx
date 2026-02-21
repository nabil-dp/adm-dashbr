import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 mb-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">
          Random Store
        </Link>
        <div className="flex gap-6 text-sm font-medium text-gray-700">
          <Link href="/categories" className="hover:text-blue-500 transition">
            Categories
          </Link>
          <Link href="/inventory" className="hover:text-blue-500 transition">
            Inventory
          </Link>
          <Link href="/search" className="hover:text-blue-500 transition">
            Search
          </Link>
        </div>
      </div>
    </nav>
  );
}