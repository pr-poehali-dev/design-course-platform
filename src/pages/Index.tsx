import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/home/Header";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PopularCoursesSection from "@/components/home/PopularCoursesSection";
import TeachersSection from "@/components/home/TeachersSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PopularCoursesSection />
      <TeachersSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
