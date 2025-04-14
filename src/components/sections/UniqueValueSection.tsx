import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";

const uniqueFeatures = [
  {
    title: "Türkçe Doğal Dil İşleme",
    description: "Yerel dil ve kültüre özel geliştirilmiş yapay zeka teknolojisi",
    icon: "🔤",
    highlight: "AI Powered",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Yerel Kafe ve İşletmelere Destek",
    description: "Küçük işletmelerin dijital dönüşümüne katkı ve sürdürülebilir büyüme desteği",
    icon: "🏪",
    highlight: "Local First",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Bölgesel Tatlara Göre Öneri Sistemi",
    description: "Her şehrin kendine özgü lezzetlerini keşfetme ve önerme",
    icon: "🍽️",
    highlight: "Smart Match",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Kültürel Etkinlik Entegrasyonu",
    description: "Yerel festival ve etkinliklerle entegre özel öneriler",
    icon: "🎭",
    highlight: "Culture",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
];

const stats = [
  { value: "500+", label: "Yerel İşletme", gradient: "from-blue-600 to-cyan-600" },
  { value: "50+", label: "Şehir", gradient: "from-purple-600 to-pink-600" },
  { value: "1000+", label: "Yerel Lezzet", gradient: "from-amber-600 to-orange-600" },
];

const UniqueValueSection = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <motion.div 
        className="container mx-auto px-4 relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            Yerlilik & Özgünlük
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            KafeLog, Türkiye'nin benzersiz yeme-içme kültürünü dijital dünyaya taşıyor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {uniqueFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="h-full"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className={cn(
                  "group h-full backdrop-blur-sm bg-gradient-to-br from-white/50 via-white/40 to-white/30",
                  "dark:from-black/50 dark:via-black/40 dark:to-black/30",
                  "hover:shadow-xl hover:shadow-primary/10 transition-all duration-300",
                  "border-primary/10 overflow-hidden relative"
                )}
              >
                <div className={cn(
                  "absolute top-0 right-0 px-3 py-1 rounded-bl-lg text-sm font-medium",
                  "bg-gradient-to-r", feature.gradient
                )}>
                  {feature.highlight}
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={cn(
                      "flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center",
                      "bg-gradient-to-br", feature.gradient
                    )}>
                      <span className="text-3xl">{feature.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
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
          className="mt-20 rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Yerel Değerlere Katkımız
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 rounded-xl transition-opacity duration-300"
                  style={{ backgroundImage: `linear-gradient(to right, ${stat.gradient})` }}
                />
                <p className={cn(
                  "text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r",
                  stat.gradient
                )}>
                  {stat.value}
                </p>
                <p className="text-gray-300 text-lg">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UniqueValueSection; 