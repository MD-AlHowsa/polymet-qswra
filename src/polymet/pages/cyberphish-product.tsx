import { useLanguage } from "@/polymet/components/language-context";
import { products } from "@/polymet/data/qswra-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Shield, CheckCircle, Star, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CyberPhishProduct() {
  const { getText, isRTL } = useLanguage();
  const product = products.find((p) => p.id === "cyberphish");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">
          {getText("المنتج غير موجود", "Product not found")}
        </h1>
      </div>
    );
  }

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative container mx-auto px-4 py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600/20 to-cyan-600/20" />

          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 text-sm">
              {getText(product.status, product.statusEn)}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            {getText(product.nameAr, product.name)}
          </h1>

          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {getText(product.description, product.descriptionEn)}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg"
            >
              {getText("طلب عرض تجريبي", "Request Demo")}
              <ArrowIcon className="h-4 w-4 mr-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:border-teal-400 dark:text-teal-400"
              asChild
            >
              <Link to="/#contact">{getText("تواصل معنا", "Contact Us")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hero Image Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-teal-900 to-cyan-900">
            <img
              src="https://v3.fal.media/files/zebra/vyg2WmSUgomyfKWvM0SkJ.jpeg"
              alt={getText("منصة سايبر فيش", "CyberPhish Platform")}
              className="w-full h-[400px] md:h-[500px] object-cover opacity-90"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {getText(
                    "الحقبة الجديدة من التدريب على الأمن السيبراني",
                    "The New Era Of Cyber Awareness Training"
                  )}
                </h3>
                <p className="text-white/80 text-sm">
                  {getText(
                    "أسرع طريقة للامتثال لللوائح في أقل من ساعة",
                    "The fastest way to comply with regulations in less than hour"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-600 mb-2">2H</div>
              <p className="text-gray-600 dark:text-gray-400">
                {getText("للإنجاز", "to complete")}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-600 mb-2">05</div>
              <p className="text-gray-600 dark:text-gray-400">
                {getText("لغات متاحة", "Languages Available")}
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">∞</div>
              <p className="text-gray-600 dark:text-gray-400">
                {getText("تحميل فوري للشهادة", "Instant certificate download")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100 mb-4">
              {getText("الخدمات", "SERVICES")}
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              {getText(
                "حافظ على أمان بياناتك مع تدريب الأمن السيبراني",
                "Keep Data Safe And Secure With Cybersecurity Training"
              )}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-teal-600">
                  {getText("تدريب", "Train")}
                </CardTitle>
                <CardDescription>
                  {getText(
                    "توفير تدريب تفاعلي للتوعية من خلال وحدات التعلم المصغرة والفيديوهات",
                    "providing interactive awareness training through micro-learning modules and videos"
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-teal-600 hover:text-teal-700 p-0"
                >
                  {getText("اقرأ المزيد", "Read More")} →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-teal-500 to-cyan-600 text-white hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{getText("تصيد", "Phish")}</CardTitle>
                <CardDescription className="text-teal-100">
                  {getText(
                    "إنشاء وأتمتة سيناريوهات تصيد واقعية لاختبار وتثقيف الموظفين",
                    "Create and automate realistic phishing scenarios to test and educate employees"
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-white hover:text-teal-100 p-0"
                >
                  {getText("اقرأ المزيد", "Read More")} →
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-teal-50 dark:bg-teal-900/20 hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-teal-600">
                  {getText("تقرير", "Report")}
                </CardTitle>
                <CardDescription>
                  {getText(
                    "احصل على البيانات التي تحتاجها لتحديد نقاط الضعف الأمنية",
                    "Get the data you need to identify security weaknesses"
                  )}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  className="text-teal-600 hover:text-teal-700 p-0"
                >
                  {getText("اقرأ المزيد", "Read More")} →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="container mx-auto px-4 py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            {getText("نهجنا في الأمن السيبراني", "Our Approach to security")}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {getText(
              "عملية التوعية بالأمن السيبراني مصممة لتقديم نتائج عالية الجودة وشاملة. تتكون من المراحل الرئيسية التالية",
              "Our cybersecurity awareness process is designed to provide high-quality, comprehensive results. It consists of the following key phases"
            )}
          </p>

          <div className="relative">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="w-32 h-0.5 bg-teal-200 mx-4" />

              <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="w-32 h-0.5 bg-teal-200 mx-4" />

              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-xl font-semibold text-teal-600 mb-2">
                {getText(
                  "تدريب التوعية بالأمن السيبراني وعروض التصيد",
                  "Cybersecurity Awareness Training Presentations"
                )}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-teal-50 dark:bg-teal-900/20">
              <TabsTrigger
                value="features"
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                {getText("المميزات", "Features")}
              </TabsTrigger>
              <TabsTrigger
                value="benefits"
                className="data-[state=active]:bg-teal-600 data-[state=active]:text-white"
              >
                {getText("الفوائد", "Benefits")}
              </TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {(
                  getText(product.features, product.featuresEn) as string[]
                ).map((feature, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-teal-500 hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-600" />

                        {feature}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {(
                  getText(product.benefits, product.benefitsEn) as string[]
                ).map((benefit, index) => (
                  <Card
                    key={index}
                    className="border-l-4 border-l-cyan-500 hover:shadow-md transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Star className="h-5 w-5 text-cyan-600" />

                        {benefit}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-teal-600 via-cyan-600 to-emerald-600 text-white shadow-2xl">
            <CardHeader>
              <CardTitle className="text-3xl">
                {getText("جاهز للبدء؟", "Ready to Get Started?")}
              </CardTitle>
              <CardDescription className="text-teal-100 text-lg">
                {getText(
                  "احصل على عرض تجريبي مجاني لمنصة سايبر فيش واكتشف كيف يمكنها تحسين الأمن السيبراني في مؤسستك",
                  "Get a free demo of CyberPhish platform and discover how it can improve cybersecurity in your organization"
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-teal-600 hover:bg-gray-50 shadow-lg"
                >
                  {getText("ابدأ الآن", "Start Now")}
                  <ArrowIcon className="h-4 w-4 mr-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-teal-600"
                  asChild
                >
                  <Link to="/">
                    {getText("العودة للرئيسية", "Back to Home")}
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
