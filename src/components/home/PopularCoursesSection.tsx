
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import CourseCard, { CourseCardProps } from "./CourseCard";

const PopularCoursesSection = () => {
  const courses: CourseCardProps[] = [
    {
      title: "Основы UI/UX дизайна",
      description: "Изучите основы пользовательского интерфейса и опыта, создайте свой первый проект.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      tags: [
        { label: "UI/UX", bgColor: "bg-purple-100", textColor: "text-purple-800" },
        { label: "Начальный", bgColor: "bg-blue-100", textColor: "text-blue-800" }
      ],
      duration: "8 недель",
      students: 852,
      price: 12000,
      originalPrice: 15000
    },
    {
      title: "Современный веб-дизайн",
      description: "Создавайте современные адаптивные веб-сайты с использованием актуальных технологий.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop",
      tags: [
        { label: "Веб-дизайн", bgColor: "bg-orange-100", textColor: "text-orange-800" },
        { label: "Средний", bgColor: "bg-blue-100", textColor: "text-blue-800" }
      ],
      duration: "10 недель",
      students: 1024,
      price: 16000
    },
    {
      title: "Графика и иллюстрация",
      description: "Освойте навыки создания профессиональных цифровых иллюстраций и графики.",
      image: "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=800&auto=format&fit=crop",
      tags: [
        { label: "Иллюстрация", bgColor: "bg-blue-100", textColor: "text-blue-800" },
        { label: "Продвинутый", bgColor: "bg-purple-100", textColor: "text-purple-800" }
      ],
      duration: "12 недель",
      students: 695,
      price: 19000
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold font-montserrat">Популярные курсы</h2>
          <Button variant="outline" className="hidden md:flex">
            Все курсы <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline">
            Все курсы <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCoursesSection;
