import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, XIcon, PhoneIcon, MailIcon } from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";
import LanguageToggle from "@/polymet/components/language-toggle";
import { Link } from "react-router-dom";
import qswraLogo from "@/assets/qswra-logo-no-background.png";

interface Navigation {
  name: string;
  nameEn: string;
  href: string;
}

interface QswraHeaderProps {
  navigation: Navigation[];
}

export default function QswraHeader({ navigation }: QswraHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { getText, isRTL } = useLanguage();

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm border">
              <img src={qswraLogo} alt="QSWRA Logo" className="h-8 w-8 object-contain" />
            </div>
            <div>
              <Link to="/" className="block">
                <h1 className="text-xl font-bold">
                  {getText("قسورة", "Qswra")}
                </h1>
                <p className="text-xs text-gray-500">
                  {getText("Qswra", "قسورة")}
                </p>
              </Link>
            </div>
            <Badge
              variant="secondary"
              className="hidden sm:inline-flex text-xs"
            >
              🇸🇦 {getText("سعودية", "Saudi")}
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors"
              >
                {getText(item.name, item.nameEn)}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageToggle />

            <Button 
              variant="outline" 
              size="sm" 
              className="gap-2"
              onClick={() => window.open('tel:+966575741337', '_self')}
            >
              <PhoneIcon className="h-4 w-4" />

              {getText("اتصل بنا", "Call Us")}
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
              onClick={() => scrollToSection("#contact")}
            >
              <MailIcon className="h-4 w-4" />

              {getText("تواصل معنا", "Contact Us")}
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl shadow-sm border">
                    <img src={qswraLogo} alt="QSWRA Logo" className="h-8 w-8 object-contain" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold">
                      {getText("قسورة", "Qswra")}
                    </h2>
                    <p className="text-xs text-gray-500">
                      {getText("Qswra", "قسورة")}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <XIcon className="h-5 w-5" />
                </Button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4 mb-8">
                {navigation.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full ${isRTL ? "text-right" : "text-left"} py-3 px-4 text-lg font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-300 dark:hover:text-blue-400 dark:hover:bg-blue-950/20 rounded-lg transition-all`}
                  >
                    {getText(item.name, item.nameEn)}
                  </button>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="space-y-3">
                <div className="flex justify-center mb-4">
                  <LanguageToggle />
                </div>
                <Button 
                  variant="outline" 
                  className="w-full gap-2"
                  onClick={() => window.open('tel:+966575741337', '_self')}
                >
                  <PhoneIcon className="h-4 w-4" />

                  {getText("اتصل بنا", "Call Us")}
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 gap-2"
                  onClick={() => scrollToSection("#contact")}
                >
                  <MailIcon className="h-4 w-4" />

                  {getText("تواصل معنا", "Contact Us")}
                </Button>
              </div>

              {/* Mobile Footer */}
              <div className="mt-8 pt-8 border-t">
                <div className="text-center space-y-2">
                  <Badge variant="secondary" className="mb-2">
                    🇸🇦 {getText("شركة سعودية ناشئة", "Saudi Startup")}
                  </Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {getText(
                      "الابتكار في الأمن السيبراني بقوة الأسد",
                      "Innovation in Cybersecurity with the Power of a Lion"
                    )}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
