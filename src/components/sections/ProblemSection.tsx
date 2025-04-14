import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { 
  IconUsers, IconAlertTriangle, IconClock, IconWallet,
  IconTargetArrow, IconDeviceLaptop, IconBuildingStore, IconClipboardList
} from "@tabler/icons-react";

const userProblems = [
  {
    title: "Uygun mekan bulma zorluğu",
    description: "Tercihlerinize uygun mekanları bulmak için harcanan zaman ve çaba",
    icon: IconAlertTriangle,
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    title: "Menü ve fiyat bilgisi eksikliği",
    description: "Güncel menü, fiyat ve promosyon bilgilerine erişim zorluğu",
    icon: IconClipboardList,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    title: "Zaman kaybı",
    description: "Mekan araştırması ve karşılaştırması için harcanan değerli zaman",
    icon: IconClock,
    iconColor: "text-amber-500",
    bgColor: "bg-amber-50",
  },
  {
    title: "Bütçe kontrolü",
    description: "Beklenmedik fiyatlar ve bütçe planlaması zorlukları",
    icon: IconWallet,
    iconColor: "text-rose-500",
    bgColor: "bg-rose-50",
  },
];

const businessProblems = [
  {
    title: "Hedef kitleye ulaşamama",
    description: "Doğru müşteri kitlesine ulaşmada yaşanan zorluklar",
    icon: IconTargetArrow,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    title: "Dijital dönüşüm zorluğu",
    description: "Modern teknolojilere adaptasyon ve dijital varlık yönetimi",
    icon: IconDeviceLaptop,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    title: "Tanıtım eksikliği",
    description: "Promosyon ve etkinliklerin etkili tanıtılamaması",
    icon: IconBuildingStore,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    title: "Menü ve Stok Yönetimi",
    description: "Menü güncellemeleri ve stok takibinde yaşanan operasyonel zorluklar",
    icon: IconClipboardList,
    iconColor: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:24px_24px] opacity-50" />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl mb-6">
            <IconAlertTriangle className="w-8 h-8 text-red-500" stroke={1.5} />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-600">
            Neyi Çözüyoruz?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Kafe ve restoranların dijital dönüşümünü hızlandırıyor, müşteri deneyimini
            iyileştiriyoruz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* User Problems */}
          <motion.div variants={fadeInUp} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100/50 shadow-lg">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-2xl bg-red-50">
                <IconUsers className="w-6 sm:w-8 h-6 sm:h-8 text-red-500" stroke={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-red-500">
                Kullanıcıların Sorunları
              </h3>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {userProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={cn(
                    "p-2.5 sm:p-3 rounded-xl transition-all duration-300",
                    problem.bgColor,
                    "group-hover:scale-110"
                  )}>
                    <problem.icon className={cn("w-5 sm:w-6 h-5 sm:h-6", problem.iconColor)} stroke={1.5} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Business Problems */}
          <motion.div variants={fadeInUp} className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100/50 shadow-lg">
            <div className="flex items-center gap-4 mb-8 sm:mb-12">
              <div className="p-3 sm:p-4 rounded-2xl bg-blue-50">
                <IconBuildingStore className="w-6 sm:w-8 h-6 sm:h-8 text-blue-500" stroke={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-blue-500">
                İşletmelerin Sorunları
              </h3>
            </div>
            <div className="space-y-6 sm:space-y-8">
              {businessProblems.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex items-start gap-4 group"
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={cn(
                    "p-2.5 sm:p-3 rounded-xl transition-all duration-300",
                    problem.bgColor,
                    "group-hover:scale-110"
                  )}>
                    <problem.icon className={cn("w-5 sm:w-6 h-5 sm:h-6", problem.iconColor)} stroke={1.5} />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
                      {problem.title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600">
                      {problem.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ProblemSection; 