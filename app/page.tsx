import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 text-center">
      <Navbar />
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Ocak Teknoloji'ye Hoş Geldiniz</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Ankara&apos;da elektronik cihazlarınız için güvenilir ve hızlı teknik servis çözümleri sunuyoruz.
      </p>
      <img src="/dummy-image.jpg" alt="Hizmet" className="w-64 h-64 object-cover rounded-lg shadow-md mb-6" />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Hemen Hizmet Al
      </button>
    </main>
  );
}