"use client";

import BusinessModelSection from "@/components/sections/BusinessModelSection";
import KeyFeaturesSection from "@/components/sections/KeyFeaturesSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import UniqueValueSection from "@/components/sections/UniqueValueSection";
import { BackgroundLines } from "@/components/ui/background-lines";
import { WaitlistForm } from "@/components/WaitlistForm";
import useLenis from "@/hooks/useLenis";

export default function Home() {
  useLenis();

  return (
    <main className="pt-16 md:pt-0">
      {/* Hero Section */}
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4 min-h-[90vh] md:min-h-[80vh]">
        <div className="max-w-4xl mx-auto w-full space-y-6 md:space-y-8">
          <h1 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Her Kesimin <br className="sm:hidden" /> Lezzet Pusulası
          </h1>
          <p className="max-w-xl mx-auto text-base sm:text-lg text-neutral-700 dark:text-neutral-400 text-center leading-relaxed">
            Kafelog, kafelerin dijital varlıklarını, veri analitiğini ve etkileşim
            araçlarını bir araya getirerek hem müşteriye hem işletmeye benzersiz
            bir ekosistem sunar.
          </p>
          <div className="flex justify-center pt-4">
            <WaitlistForm className="w-full sm:w-auto" />
          </div>
        </div>
      </BackgroundLines>

      {/* Main Content */}
      <div className="relative z-10">
        <ProblemSection />
        <SolutionSection />
        <KeyFeaturesSection />
        <TargetAudienceSection />
        <UniqueValueSection />
        <TimelineSection />
        <BusinessModelSection />
      </div>
    </main>
  );
}
