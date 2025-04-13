"use client";

import { motion } from "framer-motion";
import {
  IconCoffee,
  IconClock,
  IconStar,
  IconUsers,
} from "@tabler/icons-react";
import { Button } from "./ui/button";

const features = [
  {
    title: "Uygun Mekan Bulma Zorluğu",
    description:
      "Kullanıcılar kendi tercih ve ihtiyaçlarına tam olarak uyan mekanları bulmakta zorlanmaktadır.",
    icon: IconCoffee,
  },
  {
    title: "Bilgi Eksikliği",
    description:
      "Mekanlara gitmeden önce menü içeriği, fiyat aralığı gibi önemli bilgilere erişim sınırlıdır.",
    icon: IconClock,
  },
  {
    title: "Özel İhtiyaçların Karşılanamaması",
    description:
      "Alerjen bilgisi, çocuk dostu mekanlar, engelli erişimine uygun yerler gibi özel ihtiyaçlara yönelik filtreleme seçenekleri yetersizdir.",
    icon: IconStar,
  },
  // {
  //   title: "Bütçe Uyumsuzluğu",
  //   description: "Ziyaret edilecek mekanın fiyat aralığını önceden bilememek, bütçe planlamasını zorlaştırmaktadır.",
  //   icon: IconStar,
  // },
  {
    title: "Güncel Promosyon ve Etkinliklerden Haberdar Olamama",
    description:
      "Kullanıcılar ilgi alanlarına uygun etkinlik ve indirimlerden genellikle haberdar olamamaktadır.",
    icon: IconUsers,
  },
];

const Features = () => {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4"
          >
            Neden Bizi Tercih Etmelisiniz?
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Yapay zeka algoritmalarımızla kişisel tercihlerinize en uygun
            mekanları keşfetmenizi sağlıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-amber-600" stroke={1.5} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-3 rounded-full font-medium hover:from-amber-600 hover:to-amber-700 transition-all duration-300 shadow-md hover:shadow-lg text-lg">
            Hemen Sıraya Katıl
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
