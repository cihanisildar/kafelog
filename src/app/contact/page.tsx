"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto URL with form data
    const mailtoUrl = `mailto:officialcihan0248@gmail.com?subject=${encodeURIComponent(
      `KafeLog İletişim Formu: ${formData.subject}`
    )}&body=${encodeURIComponent(
      `İsim: ${formData.name}\nE-posta: ${formData.email}\n\nMesaj:\n${formData.message}`
    )}`;

    // Open default email client
    window.location.href = mailtoUrl;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-background bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-100/50 via-background to-background">
      <div className="container mx-auto px-4 py-24 max-w-6xl relative">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:radial-gradient(white,transparent_70%)] pointer-events-none" />
        
        <div className="space-y-24">
          {/* Hero Section */}
          <section className="text-center relative">
            <div className="mb-12 transform hover:scale-110 transition-transform duration-300 ease-in-out">
              <Mail size={64} className="text-amber-600 mx-auto drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
            </div>
            <h1 className="text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 transition-all duration-300">
              İletişime Geçin
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sorularınız veya önerileriniz için bizimle iletişime geçebilirsiniz
            </p>
          </section>

          {/* Contact Form */}
          <section className="max-w-2xl mx-auto">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50/80 to-amber-100/40 shadow-lg backdrop-blur-sm border border-amber-200/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-amber-900 mb-2">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-amber-900 mb-2">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-amber-900 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-amber-900 mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white/80"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-amber-600 to-amber-500 text-white font-medium hover:from-amber-700 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  E-posta Uygulamasını Aç
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 