
'use client';
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600">Ocak Teknoloji</div>
      <div className="space-x-4">
        <Link href="/" className="text-gray-700 hover:text-blue-500">Ana Sayfa</Link>
        <Link href="/services" className="text-gray-700 hover:text-blue-500">Hizmetler</Link>
        <Link href="/products" className="text-gray-700 hover:text-blue-500">Ürünler</Link>
        <Link href="/contact" className="text-gray-700 hover:text-blue-500">İletişim</Link>
      </div>
    </nav>
  );
}
