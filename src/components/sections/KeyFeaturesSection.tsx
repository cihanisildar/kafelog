import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { IconBrain, IconFilter, IconMenu2, IconDeviceGamepad2, IconStar, IconDeviceMobile, IconBell } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Akıllı Filtreleme",
    description: "Tercihlerinize ve ihtiyaçlarınıza göre özelleştirilmiş mekan önerileri",
    icon: IconFilter,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-blue-600/20",
  },
  {
    title: "Menü & Fiyat Görselleştirme",
    description: "Detaylı menü içerikleri ve güncel fiyat bilgileri",
    icon: IconMenu2,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-purple-600/20",
  },
  {
    title: "Oyunlaştırılmış Öneri Sistemi",
    description: "Keşif puanları ve ödüllerle zenginleştirilmiş kullanıcı deneyimi",
    icon: IconDeviceGamepad2,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-100",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-emerald-600/20",
  },
  {
    title: "Mekan Geri Bildirimleri",
    description: "Gerçek kullanıcı deneyimleri ve detaylı değerlendirmeler",
    icon: IconStar,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-100",
    gradientFrom: "from-amber-500/20",
    gradientTo: "to-amber-600/20",
  },
  {
    title: "İşletme Paneli",
    description: "İşletmeler için kapsamlı yönetim ve analiz araçları",
    icon: IconDeviceMobile,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-100",
    gradientFrom: "from-rose-500/20",
    gradientTo: "to-rose-600/20",
  },
  {
    title: "Promosyon & Etkinlik Bildirimleri",
    description: "Özel fırsatlar ve etkinliklerden anında haberdar olun",
    icon: IconBell,
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-100",
    gradientFrom: "from-indigo-500/20",
    gradientTo: "to-indigo-600/20",
  },
];

const KeyFeaturesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:24px_24px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,rgba(56,189,248,0.12),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_0%_400px,rgba(168,85,247,0.12),transparent)]" />
      
      <motion.div 
        className="container mx-auto px-4 relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl mb-6">
            <IconBrain className="w-10 h-10 text-blue-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Öne Çıkan Özellikler
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Modern teknoloji ve kullanıcı deneyimi bir arada. Her özellik, sizin için özenle tasarlandı.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/[0.08] via-purple-500/[0.08] to-blue-500/[0.08] blur-3xl -z-10" />
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={cn(
                "absolute -inset-1 rounded-[2rem] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10",
                feature.gradientFrom,
                feature.gradientTo
              )} />
              <Card 
                className={cn(
                  "relative rounded-[1.4rem] border-0 bg-white shadow-lg",
                  "before:absolute before:inset-0 before:rounded-[1.4rem]",
                  "before:bg-gradient-to-r before:from-white/40 before:to-white/80 before:backdrop-blur-xl"
                )}
              >
                <CardContent className="p-8 relative">
                  <div className="flex flex-col items-start gap-4">
                    <div className={cn(
                      "p-3.5 rounded-xl transition-all duration-300",
                      feature.bgColor,
                      "group-hover:bg-gradient-to-br",
                      feature.gradientFrom,
                      feature.gradientTo
                    )}>
                      <feature.icon className={cn("w-7 h-7", feature.iconColor)} stroke={1.5} />
                    </div>
                    <div>
                      <h3 className={cn(
                        "text-xl font-semibold mb-2 transition-colors duration-300",
                        feature.iconColor
                      )}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <p className="text-2xl text-gray-600 font-light italic max-w-4xl mx-auto leading-relaxed">
            "Her özellik, kullanıcılarımızın ve işletmelerimizin ihtiyaçları düşünülerek tasarlandı.
            Sürekli gelişen teknolojimizle yeni özellikler eklemeye devam ediyoruz."
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KeyFeaturesSection; 