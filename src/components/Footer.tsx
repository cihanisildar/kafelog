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
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-amber-50/80 via-amber-100/50 to-amber-100/80 backdrop-blur-sm border-t border-amber-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 group">
              <IconCoffee className="h-8 w-8 text-amber-600 transition-transform group-hover:rotate-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
                KafeLog
              </span>
            </div>
            <p className="text-gray-600 mt-4 leading-relaxed max-w-md">
              Türkiye&apos;nin özgün yeme-içme kültürünü dijital dünyaya taşıyan
              yerli bir teknoloji çözümü
            </p>
            
            {/* Newsletter Section */}
            <div className="pt-6">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">
                Bültenimize Katılın
              </h4>
              <div className="flex gap-2 max-w-md">
                <Input 
                  type="email" 
                  placeholder="E-posta adresiniz" 
                  className="bg-white/80 border-amber-200 focus:border-amber-400 focus-visible:ring-amber-400/30"
                />
                <Button variant="default" className="bg-amber-600 hover:bg-amber-700 transition-colors">
                  <IconArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="flex space-x-4 pt-4">
              {[
                { icon: IconBrandInstagram, label: "Instagram", color: "hover:text-pink-600" },
                { icon: IconBrandFacebook, label: "Facebook", color: "hover:text-blue-600" },
                { icon: IconBrandTwitter, label: "Twitter", color: "hover:text-sky-500" },
              ].map((social) => (
                <HoverCard key={social.label}>
                  <HoverCardTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className={`h-9 w-9 p-0 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md hover:bg-white/90 ${social.color}`}
                    >
                      <social.icon className="h-5 w-5 transition-colors duration-200" />
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-fit p-2 text-sm bg-white/95">
                    <p>Bizi {social.label}&apos;da takip edin</p>
                  </HoverCardContent>
                </HoverCard>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Hızlı Bağlantılar
            </h3>
            <div className="flex flex-col space-y-2">
              {["Menü", "Hakkımızda", "Şubelerimiz", "Kariyer", "İletişim"].map(
                (item) => (
                  <Button
                    key={item}
                    variant="ghost"
                    className="group justify-start px-3 h-8 text-gray-600 hover:bg-white/60 rounded-lg transition-all duration-200"
                    asChild
                  >
                    <Link href="#" className="flex items-center">
                      <span className="inline-flex items-center transition-all duration-200 group-hover:translate-x-1">
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
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              İletişim
            </h3>
            <div className="space-y-3">
              {[
                {
                  icon: IconMapPin,
                  content: "Kahve Sokak No:123, İstanbul",
                  href: "#",
                },
                {
                  icon: IconPhone,
                  content: "0212 345 67 89",
                  href: "tel:+902123456789",
                },
                {
                  icon: IconMail,
                  content: "iletisim@kafelog.com",
                  href: "mailto:iletisim@kafelog.com",
                },
              ].map((contact) => (
                <Button
                  key={contact.content}
                  variant="ghost"
                  className="group w-full justify-start gap-3 text-gray-600 transition-all duration-200 hover:bg-white/60 rounded-lg"
                  asChild
                >
                  <a href={contact.href} className="flex items-center">
                    <span className="transition-transform duration-200 group-hover:scale-110">
                      <contact.icon className="h-5 w-5" />
                    </span>
                    <span className="transition-all duration-200 group-hover:translate-x-1">
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
      <Separator className="bg-amber-200/50" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} KafeLog. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
            {[
              "Gizlilik Politikası",
              "Kullanım Koşulları",
              "Çerez Politikası",
            ].map((policy) => (
              <Button
                key={policy}
                variant="link"
                className="group text-sm text-gray-500 transition-all duration-200 h-auto p-0"
                asChild
              >
                <Link href="#">
                  <span className="inline-block transition-transform duration-200 group-hover:-translate-y-0.5">
                    {policy}
                  </span>
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
