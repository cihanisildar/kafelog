"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Star, Navigation, Coffee, X } from "lucide-react";
import Image from "next/image";

// Mock data for cafes
const cafes = [
  {
    id: 1,
    name: "Kahve Diyarı",
    image: "/images/9315654.jpg",
    rating: 4.8,
    reviews: 124,
    address: "Kadıköy, İstanbul",
    lat: 40.9905,
    lng: 29.0257,
    openNow: true,
    specialty: "Filtre Kahve",
  },
  {
    id: 2,
    name: "Espresso Lab",
    image: "/images/6242778.jpg",
    rating: 4.6,
    reviews: 89,
    address: "Beşiktaş, İstanbul",
    lat: 41.0425,
    lng: 29.0073,
    openNow: true,
    specialty: "Espresso",
  },
  {
    id: 3,
    name: "Cafe Noir",
    image: "/cozy-coffee-shop-interior.jpg",
    rating: 4.9,
    reviews: 156,
    address: "Nişantaşı, İstanbul",
    lat: 41.0518,
    lng: 28.9947,
    openNow: false,
    specialty: "Cold Brew",
  },
  {
    id: 4,
    name: "Bean & Cup",
    image: "/images/9315654.jpg",
    rating: 4.7,
    reviews: 98,
    address: "Cihangir, İstanbul",
    lat: 41.0329,
    lng: 28.9842,
    openNow: true,
    specialty: "Latte Art",
  },
];

export default function MapPage() {
  const [selectedCafe, setSelectedCafe] = useState<typeof cafes[0] | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-gray-900 mb-4">
              Harita
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Yakınınızdaki kafeleri harita üzerinde görüntüleyin
            </p>
          </div>

          {/* Map Container */}
          <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Map Placeholder */}
            <div className="relative h-[600px] bg-gradient-to-br from-gray-100 to-gray-200">
              {/* Map Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-12 h-full">
                  {[...Array(144)].map((_, i) => (
                    <div key={i} className="border border-gray-400" />
                  ))}
                </div>
              </div>

              {/* Center Location Indicator */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full animate-ping" />
                  <div className="relative bg-orange-500 rounded-full p-3">
                    <Navigation className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              {/* Cafe Markers */}
              {cafes.map((cafe, index) => (
                <button
                  key={cafe.id}
                  onClick={() => setSelectedCafe(cafe)}
                  className="absolute group"
                  style={{
                    top: `${30 + index * 15}%`,
                    left: `${20 + index * 15}%`,
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-2 bg-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white rounded-full p-2 shadow-lg border-2 border-orange-500 group-hover:scale-110 transition-transform">
                      <Coffee className="h-5 w-5 text-orange-500" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                  </div>
                </button>
              ))}

              {/* Map Info Overlay */}
              <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg px-4 py-2 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span className="font-medium text-gray-900">{cafes.length} Kafe</span>
              </div>

              {/* Map Controls */}
              <div className="absolute top-4 right-4 bg-white rounded-xl shadow-lg p-2 flex flex-col gap-2">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-2xl font-light">+</span>
                </button>
                <div className="w-full h-px bg-gray-200" />
                <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <span className="text-2xl font-light">−</span>
                </button>
              </div>

              {/* Note about map integration */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-blue-50 border border-blue-200 rounded-xl px-4 py-2">
                <p className="text-sm text-blue-800">
                  💡 Google Maps veya Mapbox entegrasyonu eklenebilir
                </p>
              </div>
            </div>

            {/* Selected Cafe Card */}
            {selectedCafe && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                  <button
                    onClick={() => setSelectedCafe(null)}
                    className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors z-10"
                  >
                    <X className="h-4 w-4 text-gray-600" />
                  </button>

                  <div className="flex gap-4 p-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-xl overflow-hidden">
                      <Image
                        src={selectedCafe.image}
                        alt={selectedCafe.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {selectedCafe.name}
                      </h3>

                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="font-semibold text-gray-900 text-sm">
                            {selectedCafe.rating}
                          </span>
                        </div>
                        <span className="text-gray-500 text-xs">
                          ({selectedCafe.reviews})
                        </span>
                        {selectedCafe.openNow && (
                          <span className="text-green-600 text-xs font-medium">
                            • Açık
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                        <MapPin className="h-3 w-3" />
                        <span className="text-xs">{selectedCafe.address}</span>
                      </div>

                      <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-2 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all text-sm">
                        Yol Tarifi Al
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Cafe List Below Map */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {cafes.map((cafe) => (
              <button
                key={cafe.id}
                onClick={() => setSelectedCafe(cafe)}
                className={`bg-white rounded-xl shadow-lg p-4 text-left hover:shadow-xl transition-all ${
                  selectedCafe?.id === cafe.id ? "ring-2 ring-orange-500" : ""
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={cafe.image}
                      alt={cafe.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-900 mb-1 truncate">
                      {cafe.name}
                    </h4>
                    <div className="flex items-center gap-1 mb-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-900">
                        {cafe.rating}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 truncate">
                      {cafe.address}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
