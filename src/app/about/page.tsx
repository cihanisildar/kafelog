"use client";

import {
  Coffee,
  Code2,
  Smartphone,
  Heart,
  Database,
  Cloud,
  Layout,
  Cpu,
  Brain,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-background to-background">
      <div className="container mx-auto px-4 py-24 max-w-6xl relative">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none" />
        <div className="space-y-24">
          {/* Hero Section */}
          <section className="text-center relative">
            <div className="mb-12 transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <Code2 size={64} className="text-amber-600 mx-auto drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
              Geliştirici Ekibimiz
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Modern teknolojiler ve yapay zeka çözümleriyle KafeLog'u geliştiren ekibimiz
            </p>
          </section>

          {/* Team Section */}
          <section>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="group p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/40 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-amber-200/10 hover:scale-[1.02]">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
                    <Code2 className="w-10 h-10 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-amber-900">Cihan IŞILDAR</h3>
                    <p className="text-amber-700">Full Stack & AI Mühendisi</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">Uzmanlık Alanları</h4>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Web Uygulamaları Geliştirme
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Veritabanı Tasarımı ve Optimizasyonu
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Yapay Zeka ve Makine Öğrenmesi
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Cloud Mimarisi ve DevOps
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">Teknoloji Yığını</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Next.js</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">TypeScript</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Node.js</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">PostgreSQL</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Docker</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">AWS</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">TensorFlow</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">PyTorch</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/40 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm border border-amber-200/10 hover:scale-[1.02]">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center">
                    <Smartphone className="w-10 h-10 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-amber-900">Arda NAR</h3>
                    <p className="text-amber-700">Mobil & ML Geliştirici</p>
                  </div>
                </div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">Uzmanlık Alanları</h4>
                    <ul className="space-y-2 text-amber-700">
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Cross-Platform Mobil Geliştirme
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        UI/UX Tasarımı ve Implementasyonu
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Mobil ML Modelleri Entegrasyonu
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1 h-4 rounded-sm bg-amber-600/40"></span>
                        Performans Optimizasyonu
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">Teknoloji Yığını</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">React Native</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Flutter</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">TypeScript</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Firebase</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">Redux</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">GraphQL</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">TensorFlow Lite</span>
                      <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm">CoreML</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack Overview */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500 hover:from-amber-600 hover:to-amber-700 transition-all duration-300">
                Teknoloji Altyapımız
              </h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
                Modern ve ölçeklenebilir teknolojilerle geliştirilen KafeLog
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 space-y-6 bg-white rounded-xl border border-amber-100 hover:border-amber-200 transition-all duration-300">
                  <div className="p-3 bg-amber-50 rounded-lg w-fit">
                    <Layout className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">Next.js</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">React</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">TypeScript</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 space-y-6 bg-white rounded-xl border border-amber-100 hover:border-amber-200 transition-all duration-300">
                  <div className="p-3 bg-amber-50 rounded-lg w-fit">
                    <Smartphone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Mobile</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">React Native</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">Flutter</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">Firebase</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 space-y-6 bg-white rounded-xl border border-amber-100 hover:border-amber-200 transition-all duration-300">
                  <div className="p-3 bg-amber-50 rounded-lg w-fit">
                    <Database className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">Node.js</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">PostgreSQL</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">GraphQL</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative p-6 space-y-6 bg-white rounded-xl border border-amber-100 hover:border-amber-200 transition-all duration-300">
                  <div className="p-3 bg-amber-50 rounded-lg w-fit">
                    <Brain className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-4">AI/ML</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">TensorFlow</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">PyTorch</span>
                      <span className="px-3 py-1.5 rounded-full bg-amber-100 text-amber-800 text-sm whitespace-nowrap">OpenAI</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-100 to-amber-50 px-8 py-4 rounded-full text-amber-600 border border-amber-200 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm hover:scale-105 group">
              <Heart className="w-6 h-6" />
              <span className="text-lg font-medium">
                Modern Teknolojiler ve Yapay Zeka ile Geliştirildi
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
