"use client";

import Features from "@/components/Features";
import Navbar from "@/components/Navbar";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";
import { Footer } from "@/components/ui/footer";
import { Instagram, Twitter, Linkedin, Coffee, Search, MapPin, Star } from "lucide-react";
import Image from "next/image";

// Sample testimonials data
const testimonials = [
  {
    text: "Kafelog sayesinde müşterilerimizle çok daha iyi iletişim kuruyoruz. Dijital menümüz ve analitik panelimiz işimizi kolaylaştırdı.",
    image: "https://avatar.vercel.sh/cafe1",
    name: "Ayşe Yılmaz",
    role: "Kafe Sahibi"
  },
  {
    text: "Favori kafelerimde ne olup bittiğini takip edebiliyorum. Kampanyalardan haberdar oluyorum ve puanlarımı kolayca görüyorum.",
    image: "https://avatar.vercel.sh/user1",
    name: "Mehmet Demir",
    role: "Müşteri"
  },
  {
    text: "Müşteri sadakati programımız Kafelog ile çok daha etkili. Detaylı raporlar işletme kararlarımızı yönlendiriyor.",
    image: "https://avatar.vercel.sh/cafe2",
    name: "Zeynep Kaya",
    role: "İşletme Müdürü"
  },
  {
    text: "QR menü sistemi müşterilerimize harika bir deneyim sunuyor. Sipariş süresi yarı yarıya düştü!",
    image: "https://avatar.vercel.sh/cafe3",
    name: "Can Özdemir",
    role: "Restoran Sahibi"
  },
  {
    text: "Kampanyaları kaçırmıyorum ve her ziyaretimde puan kazanıyorum. Uygulama çok kullanıcı dostu!",
    image: "https://avatar.vercel.sh/user2",
    name: "Elif Arslan",
    role: "Müşteri"
  },
  {
    text: "Envanter yönetimi ve raporlama özellikleri gerçekten işimizi kolaylaştırdı. Kafelog'a geçtiğimize çok memnunuz.",
    image: "https://avatar.vercel.sh/cafe4",
    name: "Burak Şahin",
    role: "Kafe Müdürü"
  },
  {
    text: "Dijital sadakat kartı özelliği harika! Artık cüzdanımda plastik kartlar taşımıyorum.",
    image: "https://avatar.vercel.sh/user3",
    name: "Selin Yıldız",
    role: "Müşteri"
  },
  {
    text: "Müşteri analitiği sayesinde hangi ürünlerin daha çok tercih edildiğini görebiliyoruz. Stok planlaması çok daha kolay oldu.",
    image: "https://avatar.vercel.sh/cafe5",
    name: "Ahmet Koç",
    role: "İşletme Sahibi"
  },
  {
    text: "Rezervasyon sistemi ve bildirimler sayesinde favori kafeme kolayca yer ayırtabiliyorum. Çok pratik!",
    image: "https://avatar.vercel.sh/user4",
    name: "Deniz Aydın",
    role: "Müşteri"
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

// Mock data for recommended cafes
const recommendedCafes = [
  {
    id: 1,
    name: "Arabica Coffee House",
    location: "Kadıköy, İstanbul",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    description: "Özel kahve çekirdekleri ve samimi atmosfer"
  },
  {
    id: 2,
    name: "Brew & Bloom",
    location: "Beyoğlu, İstanbul",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop",
    description: "Modern tasarım ve lezzetli brunch seçenekleri"
  },
  {
    id: 3,
    name: "Espresso Lab",
    location: "Nişantaşı, İstanbul",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=300&fit=crop",
    description: "Barista şampiyonlarının hazırladığı kahveler"
  },
  {
    id: 4,
    name: "The Coffee Studio",
    location: "Beşiktaş, İstanbul",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
    description: "Çalışmak için ideal sessiz ortam"
  },
  {
    id: 5,
    name: "Roast & Toast",
    location: "Cihangir, İstanbul",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=400&h=300&fit=crop",
    description: "Kendi kavurduğumuz taze kahve çekirdekleri"
  },
  {
    id: 6,
    name: "Mokka Bistro",
    location: "Moda, İstanbul",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop",
    description: "Deniz manzarası eşliğinde kahve keyfi"
  },
];

// Hero Section with Background Image and Search Bar
function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Gemini_Generated_Image_wrnbo1wrnbo1wrnb.png"
          alt="Coffee shop interior"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <Navbar transparent />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-white mb-4">
              <span className="font-medium italic">Her Kesimin</span>
              <br />
              Lezzet Pusulası
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg font-light text-white/80 mb-6 leading-relaxed max-w-xl mx-auto">
              Kafelog ile en sevdiğiniz kafeleri keşfedin, favori içeceklerinizi bulun ve benzersiz deneyimler yaşayın.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-500 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300" />
                <div className="relative flex items-center bg-white/95 backdrop-blur-md rounded-xl shadow-2xl overflow-hidden border border-white/20">
                  <Search className="ml-4 h-5 w-5 text-gray-400 flex-shrink-0" />
                  <input
                    type="text"
                    placeholder="Kafe adı, konum veya içecek arayın..."
                    className="flex-1 px-3 py-3 bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none text-sm"
                  />
                  <button className="m-2 px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-amber-700 transition-all duration-200 shadow-lg hover:shadow-xl flex-shrink-0 text-sm">
                    Ara
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Recommended Cafes Section
function RecommendedCafes() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Önerilen <span className="font-medium italic">Kafeler</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Size özel seçtiğimiz popüler kafeleri keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedCafes.map((cafe) => (
            <div
              key={cafe.id}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 cursor-pointer"
            >
              {/* Cafe Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={cafe.image}
                  alt={cafe.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-semibold text-gray-900">{cafe.rating}</span>
                </div>
              </div>

              {/* Cafe Info */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-500 transition-colors">
                  {cafe.name}
                </h3>

                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{cafe.location}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cafe.description}
                </p>

                {/* Hover Effect Arrow */}
                <div className="mt-4 flex items-center gap-2 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Detayları Gör</span>
                  <svg
                    className="h-4 w-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            Kullanıcılarımız <span className="font-medium italic">Ne Diyor?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kafelog&apos;u kullanan işletmeler ve müşterilerin deneyimlerini keşfedin.
          </p>
        </div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} duration={19} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn} duration={17} className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}

// Footer configuration
const footerConfig = {
  logo: <Coffee className="h-6 w-6" />,
  brandName: "Kafelog",
  socialLinks: [
    {
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/kafelog",
      label: "Instagram"
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      href: "https://twitter.com/kafelog",
      label: "Twitter"
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/company/kafelog",
      label: "LinkedIn"
    }
  ],
  mainLinks: [
    { href: "#features", label: "Özellikler" },
    { href: "#testimonials", label: "Referanslar" },
    { href: "#pricing", label: "Fiyatlandırma" },
    { href: "#contact", label: "İletişim" }
  ],
  legalLinks: [
    { href: "/privacy", label: "Gizlilik Politikası" },
    { href: "/terms", label: "Kullanım Koşulları" },
    { href: "/cookies", label: "Çerez Politikası" }
  ],
  copyright: {
    text: `© ${new Date().getFullYear()} Kafelog. Tüm hakları saklıdır.`,
    license: "MIT License"
  }
};

export default function Home() {
  return (
    <main>
      <Hero />
      <RecommendedCafes />
      <Features />
      <Testimonials />
      <Footer {...footerConfig} />
    </main>
  );
}
