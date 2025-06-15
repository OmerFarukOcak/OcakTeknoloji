import { DeployButton } from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import { AuthButton } from "@/components/auth-button";
import { Hero } from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { ConnectSupabaseSteps } from "@/components/tutorial/connect-supabase-steps";
import { SignUpUserSteps } from "@/components/tutorial/sign-up-user-steps";
import { hasEnvVars } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Ocak Teknoloji&apos;ye Hoş Geldiniz</h1>
      <p className="text-lg text-gray-700 max-w-xl mb-6">
        Ankara’da elektronik cihazlarınız için güvenilir ve hızlı teknik servis çözümleri sunuyoruz.
      </p>
      <img src="/dummy-image.jpg" alt="Hizmet" className="w-64 h-64 object-cover rounded-lg shadow-md mb-6" />
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
        Hemen Hizmet Al
      </button>
    </main>
  );
}
