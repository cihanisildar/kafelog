"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Coffee,
  Music,
  Palette,
} from "lucide-react";

const events = [
  {
    id: 1,
    title: "Latte Art Workshop",
    description: "Profesyonel barista eşliğinde latte art sanatını öğrenin. Başlangıç seviyesi için idealdir.",
    cafe: "Kahve Diyarı",
    cafeImage: "/images/9315654.jpg",
    date: "15 Aralık 2024",
    time: "14:00 - 16:00",
    location: "Kadıköy, İstanbul",
    attendees: 12,
    maxAttendees: 15,
    price: "₺250",
    category: "workshop",
    featured: true,
  },
  {
    id: 2,
    title: "Canlı Caz Akşamı",
    description: "Ünlü caz sanatçıları eşliğinde kahvenizin tadını çıkarın.",
    cafe: "Espresso Lab",
    cafeImage: "/images/6242778.jpg",
    date: "18 Aralık 2024",
    time: "19:00 - 22:00",
    location: "Beşiktaş, İstanbul",
    attendees: 28,
    maxAttendees: 40,
    price: "₺150",
    category: "music",
    featured: true,
  },
  {
    id: 3,
    title: "Kahve Tadım Etkinliği",
    description: "Dünyanın farklı bölgelerinden gelen kahveleri profesyonel tadım teknikleriyle deneyimleyin.",
    cafe: "Cafe Noir",
    cafeImage: "/cozy-coffee-shop-interior.jpg",
    date: "20 Aralık 2024",
    time: "15:00 - 17:00",
    location: "Nişantaşı, İstanbul",
    attendees: 8,
    maxAttendees: 12,
    price: "₺300",
    category: "tasting",
    featured: false,
  },
  {
    id: 4,
    title: "Kitap Kulübü Buluşması",
    description: "Bu ayın kitabını kahve eşliğinde tartışacağız: 'Sabahın Köründe'",
    cafe: "Bean & Cup",
    cafeImage: "/images/9315654.jpg",
    date: "22 Aralık 2024",
    time: "18:00 - 20:00",
    location: "Cihangir, İstanbul",
    attendees: 15,
    maxAttendees: 20,
    price: "Ücretsiz",
    category: "social",
    featured: false,
  },
  {
    id: 5,
    title: "Kahve Demleme Teknikleri",
    description: "V60, Chemex ve French Press ile profesyonel demleme teknikleri öğrenin.",
    cafe: "Roastery House",
    cafeImage: "/images/6242778.jpg",
    date: "25 Aralık 2024",
    time: "10:00 - 12:00",
    location: "Etiler, İstanbul",
    attendees: 6,
    maxAttendees: 10,
    price: "₺200",
    category: "workshop",
    featured: true,
  },
  {
    id: 6,
    title: "Resim & Kahve Atölyesi",
    description: "Akrilik boya ile kahve temalı resimler çizin ve kahvenizi yudumlarken sanatla iç içe olun.",
    cafe: "The Coffee Corner",
    cafeImage: "/cozy-coffee-shop-interior.jpg",
    date: "28 Aralık 2024",
    time: "13:00 - 16:00",
    location: "Şişli, İstanbul",
    attendees: 10,
    maxAttendees: 15,
    price: "₺350",
    category: "art",
    featured: false,
  },
];

const categories = [
  { id: "all", name: "Tümü", icon: Calendar },
  { id: "workshop", name: "Workshop", icon: Coffee },
  { id: "music", name: "Müzik", icon: Music },
  { id: "tasting", name: "Tadım", icon: Coffee },
  { id: "social", name: "Sosyal", icon: Users },
  { id: "art", name: "Sanat", icon: Palette },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredEvents = events.filter(
    (event) => selectedCategory === "all" || event.category === selectedCategory
  );

  const featuredEvents = events.filter((e) => e.featured);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-gray-900 mb-4">
              Etkinlikler
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kahve severler için özel etkinlikler, workshoplar ve sosyal buluşmalar
            </p>
          </div>

          {/* Featured Events */}
          {selectedCategory === "all" && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Yaklaşan Öne Çıkan Etkinlikler</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {featuredEvents.slice(0, 1).map((event) => (
                    <div key={event.id} className="relative h-96 lg:h-auto">
                      <Image
                        src={event.cafeImage}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <div className="inline-block bg-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-3">
                          Öne Çıkan
                        </div>
                        <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                        <p className="text-white/90 mb-4">{event.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {event.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="p-8 flex flex-col justify-center">
                    {featuredEvents.slice(0, 1).map((event) => (
                      <div key={event.id}>
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Coffee className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">{event.cafe}</p>
                              <p className="text-sm text-gray-600">{event.location}</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 rounded-xl p-4 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Katılım Ücreti:</span>
                            <span className="text-2xl font-bold text-orange-600">{event.price}</span>
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>
                </div>
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
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${selectedCategory === category.id
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

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={event.cafeImage}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  {event.featured && (
                    <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Öne Çıkan
                    </div>
                  )}
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg font-bold text-orange-600">
                    {event.price}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Coffee className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">{event.cafe}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Etkinlik bulunamadı
              </h3>
              <p className="text-gray-600">
                Bu kategoride henüz etkinlik bulunmuyor
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
