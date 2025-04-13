"use client";

import { BackgroundLines } from "@/components/ui/background-lines";
import Features from "@/components/Features";
import useLenis from "@/hooks/useLenis";
export default function Home() {
  useLenis();

  return (
    <main>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Her Kesimin <br /> Lezzet Pusulası
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          Kafelog, kafelerin dijital varlıklarını, veri analitiğini ve etkileşim
          araçlarını bir araya getirerek hem müşteriye hem işletmeye benzersiz
          bir ekosistem sunar.  
        </p>
      </BackgroundLines>
      <Features />
    </main>
  );
}
