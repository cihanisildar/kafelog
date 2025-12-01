"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tag, Clock, Star, MapPin, Coffee, TrendingUp, Sparkles } from "lucide-react";
import Image from "next/image";

// Mock campaign data
const campaigns = [
  {
    id: 1,
    title: "2. Kahve %50 İndirimli",
    description: "Kahvenizi arkadaşınızla paylaşın, ikinci kahve yarı fiyatına!",
    cafe: "Kahve Diyarı",
    cafeImage: "/images/9315654.jpg",
    discount: "50%",
    validUntil: "31 Aralık 2024",
    category: "discount",
    featured: true,
    location: "Kadıköy, İstanbul",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Espresso + Tatlı Combo",
    description: "Espresso siparişinizle birlikte ücretsiz tatlı!",
    cafe: "Espresso Lab",
    cafeImage: "/images/6242778.jpg",
    discount: "Bedava",
    validUntil: "15 Aralık 2024",
    category: "combo",
    featured: true,
    location: "Beşiktaş, İstanbul",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Sabah Kahvesi İndirimi",
    description: "09:00-11:00 arası tüm filtre kahvelerde %30 indirim",
    cafe: "Cafe Noir",
    cafeImage: "/cozy-coffee-shop-interior.jpg",
    discount: "30%",
    validUntil: "20 Aralık 2024",
    category: "discount",
    featured: false,
    location: "Nişantaşı, İstanbul",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Sadakat Kartı",
    description: "5 kahve alana 6.sı bedava! Hemen katıl, puan kazan.",
    cafe: "Bean & Cup",
    cafeImage: "/images/9315654.jpg",
    discount: "1 Bedava",
    validUntil: "Süresiz",
    category: "loyalty",
    featured: false,
    location: "Cihangir, İstanbul",
    rating: 4.7,
  },
  {
    id: 5,
    title: "Öğrenci İndirimi",
    description: "Öğrenci kartı gösterene tüm içeceklerde %20 indirim",
    cafe: "Roastery House",
    cafeImage: "/images/6242778.jpg",
    discount: "20%",
    validUntil: "Süresiz",
    category: "special",
    featured: false,
    location: "Etiler, İstanbul",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Happy Hour",
    description: "16:00-18:00 arası tüm içeceklerde %25 indirim!",
    cafe: "The Coffee Corner",
    cafeImage: "/cozy-coffee-shop-interior.jpg",
    discount: "25%",
    validUntil: "Her Gün",
    category: "discount",
    featured: true,
    location: "Şişli, İstanbul",
    rating: 4.8,
  },
];

const categories = [
  { id: "all", name: "Tümü", icon: Coffee },
  { id: "discount", name: "İndirimler", icon: Tag },
  { id: "combo", name: "Kombo", icon: Sparkles },
  { id: "loyalty", name: "Sadakat", icon: TrendingUp },
  { id: "special", name: "Özel", icon: Star },
];

export default function CampaignsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCampaigns = campaigns.filter(
    (campaign) => selectedCategory === "all" || campaign.category === selectedCategory
  );

  const featuredCampaigns = campaigns.filter((c) => c.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-gray-900 mb-4">
              Kampanyalar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En yeni fırsatlar ve özel tekliflerle kahve keyfinizi katlayın
            </p>
          </div>

          {/* Featured Campaigns */}
          {selectedCategory === "all" && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan Kampanyalar</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredCampaigns.slice(0, 2).map((campaign) => (
                  <div
                    key={campaign.id}
                    className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-2xl overflow-hidden group"
                  >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <Image
                        src={campaign.cafeImage}
                        alt={campaign.cafe}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="relative p-8">
                      {/* Discount Badge */}
                      <div className="absolute top-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg">
                        <span className="text-2xl font-bold text-orange-600">
                          {campaign.discount}
                        </span>
                      </div>

                      <div className="max-w-md">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                          <Star className="h-4 w-4 text-white fill-white" />
                          <span className="text-white font-medium text-sm">Öne Çıkan</span>
                        </div>

                        <h3 className="text-3xl font-bold text-white mb-3">
                          {campaign.title}
                        </h3>
                        <p className="text-white/90 text-lg mb-6">
                          {campaign.description}
                        </p>

                        <div className="flex flex-col gap-3 mb-6">
                          <div className="flex items-center gap-2 text-white">
                            <Coffee className="h-5 w-5" />
                            <span className="font-medium">{campaign.cafe}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <MapPin className="h-5 w-5" />
                            <span>{campaign.location}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <Clock className="h-5 w-5" />
                            <span>Geçerlilik: {campaign.validUntil}</span>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-orange-500 text-white shadow-lg"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* All Campaigns Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((campaign) => (
              <div
                key={campaign.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={campaign.cafeImage}
                    alt={campaign.cafe}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    {campaign.discount}
                  </div>
                  {campaign.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="h-3 w-3 fill-current" />
                      Öne Çıkan
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {campaign.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">
                    {campaign.description}
                  </p>

                  {/* Cafe Info */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Coffee className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">{campaign.cafe}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{campaign.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">Geçerlilik: {campaign.validUntil}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredCampaigns.length === 0 && (
            <div className="text-center py-12">
              <Tag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kampanya bulunamadı
              </h3>
              <p className="text-gray-600">
                Bu kategoride henüz kampanya bulunmuyor
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
