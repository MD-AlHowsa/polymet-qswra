import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  SendIcon,
  MessageSquareIcon,
  CalendarIcon,
} from "lucide-react";
import { useLanguage } from "@/polymet/components/language-context";

export default function QswraContact() {
  const { getText, isRTL } = useLanguage();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      company: formData.get("company"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    // Create mailto link
    const subject = encodeURIComponent("New Contact Form Submission");
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
        `Email: ${data.email}\n` +
        `Phone: ${data.phone}\n` +
        `Company: ${data.company}\n` +
        `Service: ${data.service}\n` +
        `Message: ${data.message}`
    );

    console.warn(
      "Prevented assignment: `window.location.href = `mailto:sales@qswra.com?subject=${subject}&body=${body}``"
    ) /*TODO: Do not use window.location for navigation. Use react-router instead.*/;
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            {getText("تواصل معنا", "Contact Us")}
          </Badge>
          <h2 className="text-4xl font-bold mb-4">
            {getText(
              "ابدأ رحلتك نحو الأمان الرقمي",
              "Start Your Digital Security Journey"
            )}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {getText(
              "تواصل مع فريق خبرائنا للحصول على استشارة مجانية وتعرف على كيفية حماية مؤسستك",
              "Contact our team of experts for a free consultation and learn how to protect your organization"
            )}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageSquareIcon className="h-6 w-6 text-blue-500" />

                {getText("أرسل لنا رسالة", "Send Us a Message")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {getText("الاسم الكامل", "Full Name")}
                    </label>
                    <Input
                      name="name"
                      placeholder={getText(
                        "أدخل اسمك الكامل",
                        "Enter your full name"
                      )}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {getText("البريد الإلكتروني", "Email Address")}
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="example@company.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {getText("رقم الهاتف", "Phone Number")}
                    </label>
                    <Input name="phone" placeholder="+966 5X XXX XXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      {getText("اسم الشركة", "Company Name")}
                    </label>
                    <Input
                      name="company"
                      placeholder={getText("اسم شركتك", "Your company name")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {getText("نوع الخدمة المطلوبة", "Service Type Required")}
                  </label>
                  <select
                    name="service"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option>
                      {getText("اختر نوع الخدمة", "Select service type")}
                    </option>
                    <option>
                      CyberPhish -{" "}
                      {getText(
                        "نظام التوعية الأمنية",
                        "Security Awareness System"
                      )}
                    </option>
                    <option>
                      Phish Agent -{" "}
                      {getText("وكيل الذكاء الاصطناعي", "AI Agent")}
                    </option>
                    <option>
                      {getText("استشارة أمنية", "Security Consultation")}
                    </option>
                    <option>{getText("حلول مخصصة", "Custom Solutions")}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    {getText("تفاصيل الطلب", "Request Details")}
                  </label>
                  <Textarea
                    name="message"
                    placeholder={getText(
                      "أخبرنا عن احتياجاتك وكيف يمكننا مساعدتك...",
                      "Tell us about your needs and how we can help you..."
                    )}
                    rows={4}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg py-3"
                >
                  {getText("إرسال الرسالة", "Send Message")}
                  <SendIcon className={`h-5 w-5 ${isRTL ? "mr-2" : "ml-2"}`} />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                      <MailIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {getText("البريد الإلكتروني", "Email Address")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        info@qswra.com
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        sales@qswra.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900 rounded-xl">
                      <PhoneIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {getText("الهاتف", "Phone")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        +966 11 XXX XXXX
                      </p>
                      <p className="text-sm text-gray-500">
                        {getText(
                          "الأحد - الخميس: 9:00 - 18:00",
                          "Sunday - Thursday: 9:00 - 18:00"
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                      <MapPinIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">
                        {getText("العنوان", "Address")}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {getText(
                          "الرياض، المملكة العربية السعودية",
                          "Riyadh, Kingdom of Saudi Arabia"
                        )}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Card */}
            <Card className="border-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
              <CardContent className="p-6 text-center">
                <CalendarIcon className="h-12 w-12 text-blue-500 mx-auto mb-4" />

                <h3 className="text-xl font-semibold mb-2">
                  {getText("احجز استشارة مجانية", "Book a Free Consultation")}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {getText(
                    "احصل على تقييم مجاني لوضع الأمن السيبراني في مؤسستك",
                    "Get a free assessment of your organization's cybersecurity posture"
                  )}
                </p>
                <Button variant="outline" className="w-full">
                  {getText("احجز موعد", "Book Appointment")}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="outline" className="py-2 px-4">
              🕒 {getText("استجابة خلال 24 ساعة", "24-hour response")}
            </Badge>
            <Badge variant="outline" className="py-2 px-4">
              🎯 {getText("استشارة مخصصة", "Customized consultation")}
            </Badge>
            <Badge variant="outline" className="py-2 px-4">
              🔒 {getText("سرية تامة", "Complete confidentiality")}
            </Badge>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            {getText(
              "فريقنا جاهز لمساعدتك في بناء دفاعات سيبرانية قوية لمؤسستك",
              "Our team is ready to help you build strong cyber defenses for your organization"
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
