"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Star, Coffee, Search } from "lucide-react";
import { useBusinesses } from "@/hooks/useBusinesses";

export default function CafesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<"all" | "open" | "nearby">("all");

  // Fetch businesses from API
  const { data, isLoading, error } = useBusinesses({
    status: "APPROVED",
    page: 1,
    limit: 50
  });

  // Filter cafes based on search and selected filter
  const filteredCafes = (data?.businesses || []).filter((cafe) => {
    const matchesSearch = cafe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cafe.addressObj.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cafe.addressObj.district.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesFilter =
      selectedFilter === "all" ? true :
        selectedFilter === "open" ? cafe.isOpenNow :
          selectedFilter === "nearby" ? true : // You can add distance calculation later
            true;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-gray-900 mb-4">
              Kafeler
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Şehrin en iyi kahve mekanlarını keşfedin ve favori kafeleri bulun
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Kafe veya bölge ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedFilter("all")}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${selectedFilter === "all"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  Tümü
                </button>
                <button
                  onClick={() => setSelectedFilter("open")}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${selectedFilter === "open"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  Açık
                </button>
                <button
                  onClick={() => setSelectedFilter("nearby")}
                  className={`px-4 py-3 rounded-xl font-medium transition-all ${selectedFilter === "nearby"
                    ? "bg-orange-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  Yakın
                </button>
              </div>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <Coffee className="h-16 w-16 text-orange-500 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kafeler yükleniyor...
              </h3>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 bg-red-50 rounded-2xl">
              <Coffee className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Bir hata oluştu
              </h3>
              <p className="text-gray-600">
                Kafeler yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.
              </p>
            </div>
          )}

          {/* Cafes Grid */}
          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCafes.map((cafe) => (
                <div
                  key={cafe.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative h-48 bg-gray-200">
                    {cafe.isOpenNow ? (
                      <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        Açık
                      </div>
                    ) : (
                      <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                        Kapalı
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {cafe.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {cafe.description}
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="font-semibold text-gray-900">{(cafe.averageRating ?? 0).toFixed(1)}</span>
                      </div>
                      <span className="text-gray-500 text-sm">({cafe.reviewCount ?? 0} değerlendirme)</span>
                    </div>

                    {/* Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{cafe.addressObj.district}, {cafe.addressObj.city}</span>
                      </div>
                      {cafe.amenities && cafe.amenities.length > 0 && (
                        <div className="flex items-center gap-2 text-gray-600">
                          <Coffee className="h-4 w-4" />
                          <span className="text-sm">{cafe.amenities.slice(0, 3).join(", ")}</span>
                        </div>
                      )}
                    </div>

                    {/* Action Button */}
                    <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all">
                      Detayları Gör
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && !error && filteredCafes.length === 0 && (
            <div className="text-center py-12">
              <Coffee className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kafe bulunamadı
              </h3>
              <p className="text-gray-600">
                Farklı arama terimleri veya filtreler deneyin
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
