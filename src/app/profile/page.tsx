"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { User, Mail, Calendar, MapPin, Coffee, Award, Edit2, Camera } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";

export default function ProfilePage() {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);

  // Mock user stats and data
  const userStats = {
    totalVisits: 47,
    favoriteCafes: 12,
    reviewsWritten: 23,
    pointsEarned: 1250,
  };

  const recentVisits = [
    {
      id: 1,
      cafeName: "Kahve Diyarı",
      date: "2024-12-01",
      rating: 5,
      image: "/images/9315654.jpg",
    },
    {
      id: 2,
      cafeName: "Espresso Lab",
      date: "2024-11-28",
      rating: 4,
      image: "/images/6242778.jpg",
    },
    {
      id: 3,
      cafeName: "Cafe Noir",
      date: "2024-11-25",
      rating: 5,
      image: "/cozy-coffee-shop-interior.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Profile Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl shadow-xl p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Profile Picture */}
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg">
                  <User className="h-16 w-16 text-orange-500" />
                </div>
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors">
                  <Camera className="h-4 w-4 text-gray-700" />
                </button>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">
                  {user?.user_metadata?.full_name || "Kullanıcı"}
                </h1>
                <p className="text-white/90 mb-4">{user?.email}</p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start text-white/90 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Üye olma: Aralık 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>İstanbul, Türkiye</span>
                  </div>
                </div>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-white text-orange-600 px-6 py-2 rounded-lg font-medium hover:bg-orange-50 transition-all flex items-center gap-2"
              >
                <Edit2 className="h-4 w-4" />
                Profili Düzenle
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Coffee className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">{userStats.totalVisits}</p>
              <p className="text-sm text-gray-600">Toplam Ziyaret</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <svg className="h-8 w-8 text-orange-500 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <p className="text-3xl font-bold text-gray-900 mb-1">{userStats.favoriteCafes}</p>
              <p className="text-sm text-gray-600">Favori Kafe</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <svg className="h-8 w-8 text-orange-500 mx-auto mb-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              <p className="text-3xl font-bold text-gray-900 mb-1">{userStats.reviewsWritten}</p>
              <p className="text-sm text-gray-600">Değerlendirme</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
              <Award className="h-8 w-8 text-orange-500 mx-auto mb-3" />
              <p className="text-3xl font-bold text-gray-900 mb-1">{userStats.pointsEarned}</p>
              <p className="text-sm text-gray-600">Toplam Puan</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Recent Visits */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Son Ziyaretler</h2>
                <div className="space-y-4">
                  {recentVisits.map((visit) => (
                    <div
                      key={visit.id}
                      className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={visit.image}
                          alt={visit.cafeName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{visit.cafeName}</h3>
                        <p className="text-sm text-gray-600">{visit.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(visit.rating)].map((_, i) => (
                          <svg key={i} className="h-4 w-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                          </svg>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Başarımlar</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Coffee className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">İlk Kahve</p>
                    <p className="text-xs text-gray-600">İlk ziyaretiniz</p>
                  </div>

                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">Sadık Müşteri</p>
                    <p className="text-xs text-gray-600">10+ ziyaret</p>
                  </div>

                  <div className="text-center p-4 bg-gray-100 rounded-xl opacity-50">
                    <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Coffee className="h-8 w-8 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900 text-sm">Kaşif</p>
                    <p className="text-xs text-gray-600">50 kafe keşfet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* About */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Hakkında</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">E-posta</p>
                      <p className="font-medium text-gray-900">{user?.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Konum</p>
                      <p className="font-medium text-gray-900">İstanbul, Türkiye</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-gray-600">Üyelik Tarihi</p>
                      <p className="font-medium text-gray-900">Aralık 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Favorite Cafes */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Favori Kafeler</h3>
                <div className="space-y-3">
                  {recentVisits.slice(0, 3).map((cafe) => (
                    <div key={cafe.id} className="flex items-center gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={cafe.image}
                          alt={cafe.cafeName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-900 text-sm truncate">{cafe.cafeName}</p>
                        <div className="flex items-center gap-1">
                          {[...Array(cafe.rating)].map((_, i) => (
                            <svg key={i} className="h-3 w-3 text-yellow-400 fill-current" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
