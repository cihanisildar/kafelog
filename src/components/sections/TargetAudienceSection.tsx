import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { IconUsers, IconSchool, IconHome2, IconHeartHandshake, IconBuildingStore, IconChefHat } from "@tabler/icons-react";

const audiences = [
  {
    title: "Turistler ve Gezginler",
    description: "Yeni şehirlerde yerel lezzetleri keşfetmek isteyenler için ideal rehber",
    icon: IconUsers,
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    title: "Öğrenciler",
    description: "Bütçe dostu mekanları ve öğrenci indirimlerini kolayca bulun",
    icon: IconSchool,
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-600",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    title: "Aileler",
    description: "Çocuk dostu mekanlar ve özel aile etkinlikleri için öneriler",
    icon: IconHome2,
    gradient: "from-purple-500/20 to-pink-500/20",
    iconColor: "text-purple-600",
    bgGradient: "from-purple-50 to-pink-50",
  },
  {
    title: "Emekliler",
    description: "Sakin ve konforlu mekanlar, özel indirimler ve etkinlikler",
    icon: IconHeartHandshake,
    gradient: "from-amber-500/20 to-orange-500/20",
    iconColor: "text-amber-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
  {
    title: "Yeni İşletmeler",
    description: "Dijital varlığınızı güçlendirin ve hedef kitlenize ulaşın",
    icon: IconBuildingStore,
    gradient: "from-red-500/20 to-rose-500/20",
    iconColor: "text-red-600",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    title: "Yeme-İçme Tutkunları",
    description: "Yeni lezzetler keşfedin, deneyimlerinizi paylaşın",
    icon: IconChefHat,
    gradient: "from-indigo-500/20 to-violet-500/20",
    iconColor: "text-indigo-600",
    bgGradient: "from-indigo-50 to-violet-50",
  },
];

const TargetAudienceSection = () => {
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
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl mb-6">
            <IconUsers className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-blue-600">
            Kimler İçin?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            KafeLog, farklı ihtiyaç ve beklentilere sahip her kesimden kullanıcı için
            özelleştirilmiş çözümler sunar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="h-full"
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card 
                className={cn(
                  "group h-full backdrop-blur-sm bg-gradient-to-br",
                  audience.bgGradient,
                  "hover:shadow-xl transition-all duration-300",
                  "border-0 overflow-hidden"
                )}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className={cn(
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6",
                      "bg-gradient-to-br", audience.gradient
                    )}>
                      <audience.icon className={cn("w-8 h-8", audience.iconColor)} stroke={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-primary transition-colors">
                      {audience.title}
                    </h3>
                    <p className="text-gray-600">
                      {audience.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="mt-16 text-center"
        >
          <p className="text-2xl text-gray-600 font-light italic max-w-4xl mx-auto">
            &ldquo;Her damak tadına, her bütçeye, her yaşam tarzına uygun öneriler&rdquo;
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TargetAudienceSection; 