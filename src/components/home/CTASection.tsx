
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 font-montserrat">Готовы начать свой путь в дизайне?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Присоединяйтесь к нашему сообществу дизайнеров и начните осваивать навыки, которые изменят вашу карьеру
        </p>
        <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50">
          Записаться на курс
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
