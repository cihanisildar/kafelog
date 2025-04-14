import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { cn } from "@/lib/utils";
import { IconRobot, IconSearch, IconDeviceMobile } from "@tabler/icons-react";

const solutions = [
  {
    title: "Kişiselleştirilmiş AI Öneriler",
    description: "Yapay zeka destekli, kullanıcı tercihlerine özel mekan önerileri",
    icon: IconRobot,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-100",
    gradientFrom: "from-blue-500/20",
    gradientTo: "to-blue-600/20",
  },
  {
    title: "Gelişmiş Filtreleme",
    description: "Alerjen, çocuk dostu, bütçe gibi detaylı filtreleme seçenekleri",
    icon: IconSearch,
    iconColor: "text-purple-500",
    bgColor: "bg-purple-100",
    gradientFrom: "from-purple-500/20",
    gradientTo: "to-purple-600/20",
  },
  {
    title: "İnteraktif Menüler",
    description: "Görsel ve detaylı menü içerikleri, fiyat karşılaştırmaları",
    icon: IconDeviceMobile,
    iconColor: "text-emerald-500",
    bgColor: "bg-emerald-100",
    gradientFrom: "from-emerald-500/20",
    gradientTo: "to-emerald-600/20",
  },
];

const SolutionSection = () => {
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
          <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl mb-6">
            <IconRobot className="w-10 h-10 text-blue-500" stroke={1.5} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            KafeLog Nasıl Çözüm Sunuyor?
          </h2>
          <p className="text-gray-600 text-lg md:text-xl">
            Yapay zeka teknolojisi ve kullanıcı odaklı tasarımımızla, hem işletmelere hem de
            müşterilere benzersiz bir deneyim sunuyoruz.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Interactive Visualization */}
          <motion.div 
            variants={fadeInUp}
            className="relative h-[500px] bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <p className="text-lg text-gray-600 mb-4">
                  İnteraktif görselleştirme burada yer alacak
                </p>
                {/* Placeholder for animation/visualization */}
                <div className="w-80 h-80 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full mx-auto flex items-center justify-center backdrop-blur-xl">
                  <span className="text-8xl animate-bounce">🎯</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Solutions List */}
          <div className="grid grid-cols-1 gap-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className={cn(
                  "absolute -inset-1 rounded-[2rem] bg-gradient-to-r opacity-0 group-hover:opacity-100 transition duration-500 blur-xl -z-10",
                  solution.gradientFrom,
                  solution.gradientTo
                )} />
                <Card 
                  className={cn(
                    "relative rounded-[1.4rem] border-0 bg-white shadow-lg",
                    "before:absolute before:inset-0 before:rounded-[1.4rem]",
                    "before:bg-gradient-to-r before:from-white/40 before:to-white/80 before:backdrop-blur-xl"
                  )}
                >
                  <CardContent className="p-8 relative">
                    <div className="flex items-start gap-6">
                      <div className={cn(
                        "p-3.5 rounded-xl transition-all duration-300",
                        solution.bgColor,
                        "group-hover:bg-gradient-to-br",
                        solution.gradientFrom,
                        solution.gradientTo
                      )}>
                        <solution.icon className={cn("w-7 h-7", solution.iconColor)} stroke={1.5} />
                      </div>
                      <div>
                        <h3 className={cn(
                          "text-xl font-semibold mb-2 transition-colors duration-300",
                          solution.iconColor
                        )}>
                          {solution.title}
                        </h3>
                        <p className="text-gray-600">
                          {solution.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default SolutionSection; 