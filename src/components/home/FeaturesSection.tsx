
import Icon from "@/components/ui/icon";

type FeatureProps = {
  icon: string;
  title: string;
  description: string;
  bgColor: string;
  iconColor: string;
};

const Feature = ({ icon, title, description, bgColor, iconColor }: FeatureProps) => (
  <div className="flex flex-col items-center text-center">
    <div className={`${bgColor} p-4 rounded-full mb-4`}>
      <Icon name={icon} className={`h-8 w-8 ${iconColor}`} />
    </div>
    <h3 className="text-xl font-semibold mb-3 font-montserrat">{title}</h3>
    <p className="text-gray-600 font-rubik">{description}</p>
  </div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: "BookOpen",
      title: "Профессиональное обучение",
      description: "Наши курсы разработаны опытными дизайнерами с учетом современных требований индустрии.",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    },
    {
      icon: "LayoutGrid",
      title: "Практические навыки",
      description: "Вы создадите реальные проекты, которые сможете добавить в свое портфолио.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобное для вас время, без привязки к конкретному расписанию.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Почему выбирают нас</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
