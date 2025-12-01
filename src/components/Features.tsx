"use client";

import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import Image from "next/image";

const features = [
  {
    title: "Uygun Mekan Bulma",
    description: "Kullanıcılar kendi tercih ve ihtiyaçlarına tam olarak uyan mekanları kolayca bulabilir.",
  },
  {
    title: "Detaylı Bilgilere Erişim",
    description: "Menü içeriği, fiyat aralığı ve diğer önemli bilgilere anında ulaşın.",
  },
  {
    title: "Özel İhtiyaçlar",
    description: "Alerjen bilgisi, çocuk dostu mekanlar ve engelli erişimi filtrelemeleri ile özel ihtiyaçlarınızı karşılayın.",
  },
  {
    title: "Güncel Promosyonlar",
    description: "İlgi alanlarınıza uygun etkinlik ve indirimlerden anında haberdar olun.",
  },
];

const Features = () => {
  return (
    <div className="w-full py-20 lg:py-40 bg-background">
      <div className="container mx-auto">
        <div className="grid border rounded-lg container p-8 md:p-12 lg:p-16 grid-cols-1 gap-12 items-center lg:grid-cols-2">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div>
                <Badge variant="outline">Platform</Badge>
              </div>
              <div className="flex gap-3 flex-col">
                <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight max-w-xl text-left font-light">
                  Neden Kafelog&apos;u <span className="font-medium italic">Tercih Etmelisiniz?</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Yapay zeka algoritmalarımızla kişisel tercihlerinize en uygun mekanları keşfetmenizi sağlıyoruz.
                </p>
              </div>
            </div>
            <div className="grid lg:pl-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-row gap-6 items-start">
                  <Check className="w-4 h-4 mt-2 text-primary flex-shrink-0" />
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">{feature.title}</p>
                    <p className="text-muted-foreground text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-md aspect-square w-full overflow-hidden relative">
            <Image
              src="/cozy-coffee-shop-interior.jpg"
              alt="Cozy coffee shop interior"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
