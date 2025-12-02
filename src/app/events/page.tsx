"use client";

import React, { useState } from "react";
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
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useEvents } from "@/hooks/useEvents";

const categories = [
  { id: "all", name: "Tümü", icon: Calendar },
  { id: "workshop", name: "Workshop", icon: Coffee },
  { id: "music", name: "Müzik", icon: Music },
  { id: "tasting", name: "Tadım", icon: Coffee },
  { id: "social", name: "Sosyal", icon: Users },
  { id: "art", name: "Sanat", icon: Palette },
];

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Fetch events from API - reduced limit for better performance
  const { data, isLoading, error } = useEvents({
    status: "upcoming",
    eventType: selectedCategory !== "all" ? selectedCategory : undefined,
    page: 1,
    limit: 20 // Reduced from 50 to improve load time
  });

  const events = data?.events || [];
  const featuredEvents = events.slice(0, 3);

  // Helper function to format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // Helper function to format time
  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Helper function to format price
  const formatPrice = (price: number, isFree: boolean) => {
    if (isFree) return "Ücretsiz";
    return `${price} TL`;
  };

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
              <p className="text-gray-600">Etkinlikler yüklenirken bir sorun oluştu. Lütfen daha sonra tekrar deneyin.</p>
            </div>
          )}

          {/* Featured Events */}
          {!isLoading && !error && selectedCategory === "all" && featuredEvents.length > 0 && (
            <div className="mb-12">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="h-6 w-6 text-orange-500" />
                <h2 className="text-2xl font-bold text-gray-900">Yaklaşan Öne Çıkan Etkinlikler</h2>
              </div>

              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {featuredEvents.slice(0, 1).map((event) => (
                    <React.Fragment key={event.id}>
                      <div className="relative h-96 lg:h-auto bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                          <div className="inline-block bg-orange-500 px-3 py-1 rounded-full text-sm font-medium mb-3">
                            Öne Çıkan
                          </div>
                          <h3 className="text-3xl font-bold mb-2">{event.title}</h3>
                          <p className="text-white/90 mb-4 line-clamp-3">{event.description}</p>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              {formatDate(event.eventDate)}
                            </div>
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4" />
                              {formatTime(event.eventDate)}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <Users className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Kapasite</p>
                              <p className="text-sm text-gray-600">{event.attendees} / {event.capacity} katılımcı</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="h-5 w-5 text-orange-500 mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-medium text-gray-900">Süre</p>
                              <p className="text-sm text-gray-600">{event.durationMinutes} dakika</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 rounded-xl p-4 mb-6">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600">Katılım Ücreti:</span>
                            <span className="text-2xl font-bold text-orange-600">
                              {formatPrice(event.price, event.isFree)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
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

          {/* Events Grid */}
          {!isLoading && !error && events.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header with gradient background */}
                  <div className="relative h-48 bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center">
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg font-bold text-orange-600 text-sm">
                      {formatPrice(event.price, event.isFree)}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <h3 className="text-xl font-bold text-white line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">{formatDate(event.eventDate)}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">{formatTime(event.eventDate)} ({event.durationMinutes} dk)</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Users className="h-4 w-4 text-orange-500" />
                        <span className="text-sm">{event.attendees}/{event.capacity} katılımcı</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* No Results */}
          {!isLoading && !error && events.length === 0 && (
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
