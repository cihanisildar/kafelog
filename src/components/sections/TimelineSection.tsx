import { Timeline } from "@/components/ui/timeline";
import { Card } from "@/components/ui/card";
import {
  CalendarDays,
  CheckCircle,
  Code2,
  Rocket,
  Target,
  Users,
  Store,
  Building2,
  ShoppingBag,
} from "lucide-react";
import { motion } from "framer-motion";

const timelineSteps = [
  {
    title: "Araştırma ve Planlama",
    content: (
      <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Target className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Kapsamlı pazar analizi yaparak hedef kitlemizi belirleyeceğiz.
              Kullanıcı ihtiyaçlarını derinlemesine araştırıp, teknik
              gereksinimleri detaylı bir şekilde planlayacağız. Bu aşamada,
              rakip analizi ve pazar fırsatlarının değerlendirilmesi de
              yapılacak.
            </p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    title: "Prototip Geliştirme",
    content: (
      <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Code2 className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Modern teknolojiler kullanarak temel uygulama mimarisini
              oluşturacağız. Kullanıcı dostu arayüzler tasarlanacak ve
              işletmeler için yönetim paneli geliştirilecek. Güvenlik ve
              performans öncelikli olarak ele alınacak.
            </p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    title: "Beta Sürüm ve Pilot Test",
    content: (
      <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Users className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Seçili kullanıcı grubuyla beta testleri gerçekleştireceğiz.
              İşletmelerle pilot uygulamalar yaparak sistemin gerçek ortamda
              performansını ölçeceğiz. Kullanıcı deneyimi ve işletme ihtiyaçları
              hakkında detaylı geri bildirimler toplayacağız.
            </p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    title: "Geliştirme ve İyileştirme",
    content: (
      <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <Rocket className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Beta sürecinden elde edilen veriler doğrultusunda yapay zeka
              algoritmalarımızı optimize edeceğiz. Kullanıcı deneyimini
              iyileştirmek için arayüz güncellemeleri yapacak ve yeni özellikler
              ekleyeceğiz. Sistem performansı ve güvenlik önlemleri
              güçlendirilecek.
            </p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    title: "Dijital Pazarlama ve Lansman",
    content: (
      <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <CalendarDays className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Kapsamlı bir dijital pazarlama stratejisi ile platformumuzu
              tanıtacağız. Sosyal medya kampanyaları ve influencer iş birlikleri
              ile geniş kitlelere ulaşacağız. "Yeni Mekanlar Vitrini"
              özelliğimizle işletmelere özel lansman fırsatları sunacağız.
            </p>
          </div>
        </div>
      </Card>
    ),
  },
  {
    title: "Büyüme ve Sürdürülebilirlik",
    content: (
      <Card className="p-6 backdrop-blur-sm bg-white/50 dark:bg-black/50 hover:shadow-lg transition-all">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10">
            <CheckCircle className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Veriye dayalı büyüme stratejileri ile kullanıcı tabanımızı
              genişleteceğiz. İşletmelerle çapraz promosyonlar ve özel
              kampanyalar düzenleyerek sürdürülebilir bir ekosistem
              oluşturacağız. Yeni şehirlere açılım planları ve uluslararası
              pazar araştırmaları yapacağız.
            </p>
          </div>
        </div>
      </Card>
    ),
  },
];

export function TimelineSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f1f1_1px,transparent_1px),linear-gradient(to_bottom,#f1f1f1_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl">🗓️</span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Proje Takvimi
            </h2>
          </div>
          <p className="max-w-[700px] text-muted-foreground">
            KafeLog'un gelişim sürecini ve önemli kilometre taşlarını takip
            edin. Her aşamada kullanıcı odaklı ve yenilikçi çözümler sunmayı
            hedefliyoruz.
          </p>
        </div>

        <div className="mt-16">
          <Timeline data={timelineSteps} />
        </div>

        <div className="mt-24 relative overflow-hidden">
          {/* Animated background gradients */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-transparent rounded-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.primary.100/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,theme(colors.primary.200/0.1),transparent_50%)]" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
