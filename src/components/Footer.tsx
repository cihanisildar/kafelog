import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTwitter,
  IconMapPin,
  IconPhone,
  IconMail,
  IconCoffee,
  IconArrowRight,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50/80 to-gray-100/90">
      {/* Modern geometric patterns */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black_100%)] opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-blue-100/[0.02] to-primary/[0.02]" />
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_top_center,transparent,white)] opacity-60" />
      </div>
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-white/80 backdrop-blur-sm shadow-md border border-gray-100/50 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                <IconCoffee className="h-6 w-6 text-primary transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" />
              </div>
              <span className="text-2xl font-bold bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-primary/70">
                KafeLog
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-md text-sm">
              Türkiye&apos;nin özgün yeme-içme kültürünü dijital dünyaya taşıyan
              yerli bir teknoloji çözümü
            </p>
            
            {/* Newsletter Section */}
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-gray-900">
                Bültenimize Katılın
              </h4>
              <div className="flex gap-2 max-w-md">
                <Input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="bg-white/80 backdrop-blur-sm border-gray-200 focus:border-primary focus-visible:ring-primary/20 rounded-lg h-10 px-3"
                />
                <Button 
                  variant="default" 
                  className="bg-primary hover:bg-primary/90 transition-all duration-300 rounded-lg px-4 h-10 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
                >
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-3 pt-1">
              {[
                { icon: IconBrandInstagram, label: "Instagram", color: "hover:text-pink-500", bg: "hover:bg-pink-50" },
                { icon: IconBrandFacebook, label: "Facebook", color: "hover:text-blue-500", bg: "hover:bg-blue-50" },
                { icon: IconBrandTwitter, label: "Twitter", color: "hover:text-sky-400", bg: "hover:bg-sky-50" },
              ].map((social) => (
                <HoverCard key={social.label}>
                  <HoverCardTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className={cn(
                        "h-10 w-10 p-0 rounded-xl transition-all duration-500",
                        "hover:scale-110 hover:shadow-lg",
                        "bg-white/80 backdrop-blur-sm border border-gray-100/50",
                        social.color,
                        social.bg
                      )}
                    >
                      <social.icon className="h-5 w-5 transition-all duration-300" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit p-2.5 text-xs bg-white/80 backdrop-blur-sm border-gray-100/50">
                    <p>Bizi {social.label}&apos;da takip edin</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              Hızlı Bağlantılar
            </h3>
            <div className="flex flex-col space-y-2">
              {["Menü", "Hakkımızda", "Şubelerimiz", "Kariyer", "İletişim"].map(
                (item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="group justify-start px-3 h-9 text-gray-600 hover:bg-white/80 hover:shadow-md rounded-lg transition-all duration-300"
                    asChild
                  >
                    <Link href="#" className="flex items-center">
                      <span className="inline-flex items-center transition-all duration-300 group-hover:translate-x-1.5 text-sm">
                        {item}
                      </span>
                    </Link>
                  </Button>
                )
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-4">
            <h3 className="text-base font-semibold text-gray-900 mb-4">
              İletişim
            </h3>
            <div className="space-y-2">
              {[
                {
                  icon: IconMapPin,
                  content: "Kahve Sokak No:123, İstanbul",
                  href: "#",
                  color: "group-hover:text-rose-500",
                  bg: "hover:bg-rose-50",
                },
                {
                  icon: IconPhone,
                  content: "0212 345 67 89",
                  href: "tel:+902123456789",
                  color: "group-hover:text-green-500",
                  bg: "hover:bg-green-50",
                },
                {
                  icon: IconMail,
                  content: "iletisim@kafelog.com",
                  href: "mailto:iletisim@kafelog.com",
                  color: "group-hover:text-blue-500",
                  bg: "hover:bg-blue-50",
                },
              ].map((contact) => (
                <Button
                  key={contact.content}
                  variant="ghost"
                  className={cn(
                    "group w-full justify-start gap-3 text-gray-600 rounded-lg h-9",
                    "transition-all duration-300 hover:bg-white/80 hover:shadow-md",
                    contact.bg
                  )}
                  asChild
                >
                  <a href={contact.href} className="flex items-center py-2">
                    <span className={cn(
                      "transition-all duration-300 group-hover:scale-110",
                      contact.color
                    )}>
                      <contact.icon className="h-4 w-4" />
                    </span>
                    <span className="transition-all duration-300 group-hover:translate-x-1.5 text-sm">
                      {contact.content}
                    </span>
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-gray-100/30 bg-gradient-to-b from-white/50 to-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} KafeLog. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:gap-8">
              {[
                "Gizlilik Politikası",
                "Kullanım Koşulları",
                "Çerez Politikası",
              ].map((policy) => (
                <Button
                  key={policy}
                  variant="link"
                  className="group text-xs text-gray-500 transition-all duration-300 h-auto p-0 hover:text-primary"
                  asChild
                >
                  <Link href="#">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-0.5">
                      {policy}
                    </span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
