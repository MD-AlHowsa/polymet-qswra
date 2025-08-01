import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ShieldIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  ArrowUpIcon,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

export default function QswraFooter() {
  const { getText, isRTL } = useLanguage();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white relative mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl">
                <img 
                  src="/qswra-lion-logo.png" 
                  alt="QSWRA Lion Logo" 
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  {getText("قسورة", "Qswra")}
                </h3>
                <p className="text-gray-400 text-sm">
                  {getText("Qswra", "Cybersecurity Solutions")}
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              {getText(
                "شركة تقنية سعودية رائدة في مجال الأمن السيبراني، نستخدم الذكاء الاصطناعي لتطوير حلول مبتكرة تحمي المؤسسات من التهديدات الرقمية.",
                "A leading Saudi technology company in cybersecurity, using artificial intelligence to develop innovative solutions that protect organizations from digital threats."
              )}
            </p>

            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                🇸🇦 {getText("شركة سعودية", "Saudi Company")}
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                🤖 {getText("مدعوم بالذكاء الاصطناعي", "AI-Powered")}
              </Badge>
              <Badge variant="secondary" className="bg-gray-800 text-gray-300">
                🛡️ {getText("أمان متقدم", "Advanced Security")}
              </Badge>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 hover:bg-gray-800"
              >
                <LinkedinIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 hover:bg-gray-800"
              >
                <TwitterIcon className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-gray-700 hover:bg-gray-800"
              >
                <GithubIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {getText("منتجاتنا", "Our Products")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  CyberPhish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                >
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  Phish Agent
                  <Badge
                    variant="secondary"
                    className="text-xs bg-orange-100 text-orange-800"
                  >
                    {getText("قريباً", "Coming Soon")}
                  </Badge>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {getText("الحلول المخصصة", "Custom Solutions")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {getText("الاستشارات الأمنية", "Security Consulting")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {getText("تواصل معنا", "Contact Us")}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MailIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-gray-300">info@qswra.com</p>
                  <p className="text-gray-400 text-sm">
                    {getText("للاستفسارات العامة", "General Inquiries")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-gray-300">+966 11 XXX XXXX</p>
                  <p className="text-gray-400 text-sm">
                    {getText("الأحد - الخميس", "Sunday - Thursday")}
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />

                <div>
                  <p className="text-gray-300">{getText("الرياض", "Riyadh")}</p>
                  <p className="text-gray-400 text-sm">
                    {getText(
                      "المملكة العربية السعودية",
                      "Kingdom of Saudi Arabia"
                    )}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-800" />

      {/* Bottom Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
            <p>
              {getText(
                "© 2024 قسورة (Qswra). جميع الحقوق محفوظة.",
                "© 2024 Qswra. All rights reserved."
              )}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                {getText("سياسة الخصوصية", "Privacy Policy")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {getText("شروط الاستخدام", "Terms of Use")}
              </a>
              <a href="#" className="hover:text-white transition-colors">
                {getText("اتفاقية الخدمة", "Service Agreement")}
              </a>
            </div>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={scrollToTop}
            className="border-gray-700 hover:bg-gray-800"
          >
            {getText("العودة للأعلى", "Back to Top")}
            <ArrowUpIcon className={`h-4 w-4 ${isRTL ? "mr-2" : "ml-2"}`} />
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed bottom-0 left-0 right-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 z-50" />
    </footer>
  );
}
