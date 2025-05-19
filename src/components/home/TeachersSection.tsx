
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

type TeacherProps = {
  name: string;
  role: string;
  image: string;
  experience: string;
};

const Teacher = ({ name, role, image, experience }: TeacherProps) => (
  <div className="flex flex-col items-center text-center group">
    <div className="mb-4 relative overflow-hidden rounded-full w-32 h-32">
      <img 
        src={image} 
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
    </div>
    <h3 className="text-xl font-semibold mb-1 font-montserrat">{name}</h3>
    <p className="text-purple-600 mb-2">{role}</p>
    <p className="text-gray-500 text-sm">{experience}</p>
  </div>
);

const TeachersSection = () => {
  const teachers: TeacherProps[] = [
    {
      name: "Анна Смирнова",
      role: "UI/UX Дизайнер",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&auto=format&fit=crop",
      experience: "8 лет опыта"
    },
    {
      name: "Дмитрий Волков",
      role: "Веб-дизайнер",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=300&auto=format&fit=crop",
      experience: "12 лет опыта"
    },
    {
      name: "Елена Петрова",
      role: "Графический дизайнер",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=300&auto=format&fit=crop",
      experience: "10 лет опыта"
    },
    {
      name: "Антон Соколов",
      role: "Иллюстратор",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop",
      experience: "15 лет опыта"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 font-montserrat text-center">Наши преподаватели</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <Teacher key={index} {...teacher} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="outline">
            Все преподаватели <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
