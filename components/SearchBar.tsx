'use client';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        className="w-full p-4 pl-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
        placeholder="Cari produk berdasarkan nama..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <span className="absolute left-3 top-4 text-gray-400">
        🔍
      </span>
    </div>
  );
}