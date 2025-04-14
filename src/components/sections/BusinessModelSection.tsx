import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { 
  IconBuildingStore, IconBuildingSkyscraper, IconShoppingBag
} from "@tabler/icons-react";

const businessModels = [
  {
    title: "Abonelik Modeli",
    description: "İşletmeler için gelişmiş analitik ve özel özellikler sunan premium üyelik sistemi",
    icon: IconBuildingStore,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-purple-600/20",
  },
  {
    title: "Kurumsal Çözümler",
    description: "Büyük ölçekli kahve zincirleri için özelleştirilmiş entegrasyon ve yönetim araçları",
    icon: IconBuildingSkyscraper,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-blue-600/20",
  },
  {
    title: "Pazar Entegrasyonu",
    description: "Kahve ekipmanları ve özel ürünlerin satışından komisyon bazlı gelir modeli",
    icon: IconShoppingBag,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-50",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-emerald-600/20",
  },
];

const BusinessModelSection = () => {
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
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-3xl mb-6">
            <IconBuildingStore className="w-10 h-10 text-purple-500" stroke={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Ticari Potansiyel
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            KafeLog, yenilikçi iş modeli ile hem işletmelere hem de kullanıcılara değer katmayı
            hedefliyor
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/[0.08] via-blue-500/[0.08] to-purple-500/[0.08] blur-3xl -z-10" />
          {businessModels.map((model, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative"
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={cn(
                "absolute -inset-1 rounded-[2rem] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10",
                model.gradientFrom,
                model.gradientTo
              )} />
              <div className="bg-white rounded-2xl p-8 shadow-lg relative">
                <div className={cn(
                  "w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300",
                  model.bgColor,
                  "group-hover:bg-gradient-to-br",
                  model.gradientFrom,
                  model.gradientTo
                )}>
                  <model.icon className={cn("w-7 h-7", model.iconColor)} stroke={1.5} />
                </div>
                <h3 className={cn(
                  "text-xl font-semibold mb-3 transition-colors duration-300",
                  model.iconColor
                )}>
                  {model.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {model.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default BusinessModelSection; 