"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import {
  User,
  Bell,
  Lock,
  Globe,
  Mail,
  Smartphone,
  Shield,
  Trash2,
  Moon,
  Eye,
} from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState("account");

  // Settings state
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [campaignNotifications, setCampaignNotifications] = useState(true);
  const [eventNotifications, setEventNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("tr");

  const tabs = [
    { id: "account", name: "Hesap", icon: User },
    { id: "notifications", name: "Bildirimler", icon: Bell },
    { id: "security", name: "Güvenlik", icon: Lock },
    { id: "preferences", name: "Tercihler", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight font-light text-gray-900 mb-4">
              Ayarlar
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hesabınızı ve tercihlerinizi yönetin
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Tabs */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-xl p-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${activeTab === tab.id
                        ? "bg-orange-50 text-orange-600"
                        : "text-gray-700 hover:bg-gray-50"
                        }`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              {/* Account Settings */}
              {activeTab === "account" && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Hesap Bilgileri</h2>

                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad
                      </label>
                      <input
                        type="text"
                        defaultValue={user?.user_metadata?.full_name || ""}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          defaultValue={user?.email || ""}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon Numarası
                      </label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          placeholder="+90 5XX XXX XX XX"
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>

                    {/* Bio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hakkında
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Kendiniz hakkında birkaç kelime yazın..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      />
                    </div>

                    {/* Save Button */}
                    <div className="flex gap-3">
                      <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all">
                        Değişiklikleri Kaydet
                      </button>
                      <button className="bg-gray-100 text-gray-700 font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-all">
                        İptal
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Notification Settings */}
              {activeTab === "notifications" && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Bildirim Tercihleri</h2>

                  <div className="space-y-6">
                    {/* Email Notifications */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">E-posta Bildirimleri</p>
                          <p className="text-sm text-gray-600">Önemli güncellemeleri e-posta ile alın</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={emailNotifications}
                          onChange={(e) => setEmailNotifications(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Push Notifications */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Bell className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Anlık Bildirimler</p>
                          <p className="text-sm text-gray-600">Mobil cihazınızda anlık bildirimler alın</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={pushNotifications}
                          onChange={(e) => setPushNotifications(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Campaign Notifications */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Kampanya Bildirimleri</p>
                        <p className="text-sm text-gray-600">Yeni kampanyalar ve indirimlerden haberdar olun</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={campaignNotifications}
                          onChange={(e) => setCampaignNotifications(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Event Notifications */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-medium text-gray-900">Etkinlik Bildirimleri</p>
                        <p className="text-sm text-gray-600">Yaklaşan etkinliklerden haberdar olun</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={eventNotifications}
                          onChange={(e) => setEventNotifications(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              {/* Security Settings */}
              {activeTab === "security" && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Güvenlik</h2>

                  <div className="space-y-6">
                    {/* Change Password */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Şifre Değiştir</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Mevcut Şifre
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Yeni Şifre
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Yeni Şifre Tekrar
                          </label>
                          <input
                            type="password"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                          />
                        </div>
                        <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-medium py-3 px-6 rounded-lg hover:from-orange-600 hover:to-amber-600 transition-all">
                          Şifreyi Güncelle
                        </button>
                      </div>
                    </div>

                    {/* Two Factor Auth */}
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <Shield className="h-5 w-5 text-gray-600" />
                          <div>
                            <p className="font-medium text-gray-900">İki Faktörlü Doğrulama</p>
                            <p className="text-sm text-gray-600">Hesabınıza ekstra güvenlik katmanı ekleyin</p>
                          </div>
                        </div>
                        <button className="bg-orange-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-orange-600 transition-all">
                          Etkinleştir
                        </button>
                      </div>
                    </div>

                    {/* Delete Account */}
                    <div className="border-t border-gray-200 pt-6">
                      <h3 className="font-semibold text-red-600 mb-4">Tehlikeli Alan</h3>
                      <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                        <div className="flex items-start gap-3 mb-4">
                          <Trash2 className="h-5 w-5 text-red-600 mt-0.5" />
                          <div>
                            <p className="font-medium text-red-900">Hesabı Sil</p>
                            <p className="text-sm text-red-700">Bu işlem geri alınamaz. Tüm verileriniz kalıcı olarak silinecektir.</p>
                          </div>
                        </div>
                        <button className="bg-red-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-700 transition-all">
                          Hesabı Sil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Preferences */}
              {activeTab === "preferences" && (
                <div className="bg-white border border-gray-200 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Tercihler</h2>

                  <div className="space-y-6">
                    {/* Language */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dil
                      </label>
                      <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        <option value="tr">Türkçe</option>
                        <option value="en">English</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </div>

                    {/* Dark Mode */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Moon className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Karanlık Mod</p>
                          <p className="text-sm text-gray-600">Gözlerinizi yoracak aydınlık tema yerine karanlık tema kullanın</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={darkMode}
                          onChange={(e) => setDarkMode(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>

                    {/* Privacy */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <Eye className="h-5 w-5 text-gray-600" />
                        <div>
                          <p className="font-medium text-gray-900">Profil Gizliliği</p>
                          <p className="text-sm text-gray-600">Profilinizi sadece arkadaşlarınıza gösterin</p>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-orange-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
