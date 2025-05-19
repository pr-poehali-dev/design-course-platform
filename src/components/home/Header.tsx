
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center">
            <span className="text-white font-bold">D</span>
          </div>
          <h1 className="text-xl font-bold font-montserrat">DesignMaster</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-rubik">Главная</a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-rubik">Курсы</a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-rubik">Преподаватели</a>
          <a href="#" className="text-gray-700 hover:text-purple-600 transition-colors font-rubik">О нас</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:flex">
            Войти
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Начать обучение
          </Button>
          <button className="md:hidden">
            <Icon name="Menu" className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
