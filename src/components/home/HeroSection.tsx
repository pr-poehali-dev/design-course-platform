
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat leading-tight">
              Освойте дизайн вместе с профессионалами
            </h1>
            <p className="text-lg mb-8 text-purple-100 font-rubik">
              Наши онлайн-курсы помогут вам освоить современный дизайн и стать востребованным специалистом на рынке труда.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
                Выбрать курс
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop"
              alt="Дизайнер за работой"
              className="rounded-lg shadow-2xl max-w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
