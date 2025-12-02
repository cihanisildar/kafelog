"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tag, Clock, Star, MapPin, Coffee, TrendingUp, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { useCampaigns } from "@/hooks/useCampaigns";
import { PerformanceDebug } from "@/components/PerformanceDebug";

const categories = [
  { id: "all", name: "Tümü", icon: Coffee },
  { id: "PROMOTION", name: "İndirimler", icon: Tag },
  { id: "EVENT", name: "Etkinlik", icon: Sparkles },
  { id: "ANNOUNCEMENT", name: "Duyuru", icon: TrendingUp },
];

export default function CampaignsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Fetch campaigns from API - reduced limit for better performance
  const { data, isLoading, error } = useCampaigns({
    status: "ACTIVE",
    type: selectedCategory !== "all" ? (selectedCategory as "PROMOTION" | "EVENT" | "ANNOUNCEMENT") : undefined,
    page: 1,
    limit: 20 // Reduced from 50 to improve load time
  });

  const campaigns = data?.campaigns || [];
  const featuredCampaigns = campaigns.slice(0, 2);

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <PerformanceDebug component="Campaigns" isLoading={isLoading} />
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

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 text-orange-500 animate-spin" />
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <AlertCircle className="h-16 w-16 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bir hata oluştu</h3>
              <p className="text-gray-600">Kampanyalar yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>
            </div>
          )}

          {/* Featured Campaigns */}
          {!isLoading && !error && selectedCategory === "all" && featuredCampaigns.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Sparkles className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Öne Çıkan Kampanyalar</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {featuredCampaigns.map((campaign) => (
                  <div
                    key={campaign.id}
                    className="relative bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl shadow-2xl overflow-hidden group"
                  >
                    <div className="relative p-8">
                      {/* Type Badge */}
                      <div className="absolute top-6 right-6 bg-white rounded-full px-6 py-3 shadow-lg">
                        <span className="text-lg font-bold text-orange-600">
                          {campaign.campaignType === "PROMOTION" ? "İndirim" : campaign.campaignType === "EVENT" ? "Etkinlik" : "Duyuru"}
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
                            <Clock className="h-5 w-5" />
                            <span>Başlangıç: {formatDate(campaign.startDate)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-white">
                            <Clock className="h-5 w-5" />
                            <span>Bitiş: {formatDate(campaign.endDate)}</span>
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
          {!isLoading && !error && (
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
          )}

          {/* All Campaigns Grid */}
          {!isLoading && !error && campaigns.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header with gradient background */}
                  <div className="relative h-32 bg-gradient-to-br from-orange-500 to-amber-600">
                    <div className="absolute top-3 right-3 bg-white text-orange-600 px-4 py-2 rounded-full font-bold shadow-lg text-sm">
                      {campaign.campaignType === "PROMOTION" ? "İndirim" : campaign.campaignType === "EVENT" ? "Etkinlik" : "Duyuru"}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-xl font-bold text-white line-clamp-2">
                        {campaign.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {campaign.description}
                    </p>

                    {/* Campaign Info */}
                    <div className="space-y-2 mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Başlangıç: {formatDate(campaign.startDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">Bitiş: {formatDate(campaign.endDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Tag className="h-4 w-4 text-orange-500" />
                        <span className="text-sm font-medium">{campaign.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && !error && campaigns.length === 0 && (
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
