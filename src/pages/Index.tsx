
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-purple-100 p-4 rounded-full mb-4">
                <Icon name="BookOpen" className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat">Профессиональное обучение</h3>
              <p className="text-gray-600 font-rubik">Наши курсы разработаны опытными дизайнерами с учетом современных требований индустрии.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 p-4 rounded-full mb-4">
                <Icon name="LayoutGrid" className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat">Практические навыки</h3>
              <p className="text-gray-600 font-rubik">Вы создадите реальные проекты, которые сможете добавить в свое портфолио.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-orange-100 p-4 rounded-full mb-4">
                <Icon name="Clock" className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-montserrat">Гибкий график</h3>
              <p className="text-gray-600 font-rubik">Учитесь в удобное для вас время, без привязки к конкретному расписанию.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold font-montserrat">Популярные курсы</h2>
            <Button variant="outline" className="hidden md:flex">
              Все курсы <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 h-48 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" 
                    alt="UI/UX дизайн" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-2">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mr-2">UI/UX</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Начальный</Badge>
                </div>
                <CardTitle>Основы UI/UX дизайна</CardTitle>
                <CardDescription>Изучите основы пользовательского интерфейса и опыта, создайте свой первый проект.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Icon name="Clock" className="mr-2 h-4 w-4" />
                  <span>8 недель</span>
                  <Icon name="Users" className="ml-4 mr-2 h-4 w-4" />
                  <span>852 студента</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <span className="text-gray-500 text-sm line-through mr-2">15 000 ₽</span>
                  <span className="text-purple-600 font-semibold">12 000 ₽</span>
                </div>
                <Button variant="outline">Подробнее</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 h-48 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=800&auto=format&fit=crop" 
                    alt="Веб-дизайн" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-2">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200 mr-2">Веб-дизайн</Badge>
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">Средний</Badge>
                </div>
                <CardTitle>Современный веб-дизайн</CardTitle>
                <CardDescription>Создавайте современные адаптивные веб-сайты с использованием актуальных технологий.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Icon name="Clock" className="mr-2 h-4 w-4" />
                  <span>10 недель</span>
                  <Icon name="Users" className="ml-4 mr-2 h-4 w-4" />
                  <span>1024 студента</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <span className="text-purple-600 font-semibold">16 000 ₽</span>
                </div>
                <Button variant="outline">Подробнее</Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4 h-48 rounded-md overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=800&auto=format&fit=crop" 
                    alt="Графика и иллюстрация" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex mb-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mr-2">Иллюстрация</Badge>
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Продвинутый</Badge>
                </div>
                <CardTitle>Графика и иллюстрация</CardTitle>
                <CardDescription>Освойте навыки создания профессиональных цифровых иллюстраций и графики.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Icon name="Clock" className="mr-2 h-4 w-4" />
                  <span>12 недель</span>
                  <Icon name="Users" className="ml-4 mr-2 h-4 w-4" />
                  <span>695 студентов</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div>
                  <span className="text-purple-600 font-semibold">19 000 ₽</span>
                </div>
                <Button variant="outline">Подробнее</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">
              Все курсы <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Teachers Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 font-montserrat text-center">Наши преподаватели</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((teacher, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="mb-4 relative overflow-hidden rounded-full w-32 h-32">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 font-montserrat">{teacher.name}</h3>
                <p className="text-purple-600 mb-2">{teacher.role}</p>
                <p className="text-gray-500 text-sm">{teacher.experience}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline">
              Все преподаватели <Icon name="ChevronRight" className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center">
                  <span className="text-white font-bold">D</span>
                </div>
                <h2 className="text-xl font-bold font-montserrat">DesignMaster</h2>
              </div>
              <p className="text-gray-400 mb-4">
                Обучаем дизайну с 2015 года. Наша миссия — делать качественное образование доступным для всех.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Facebook" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Instagram" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Twitter" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Icon name="Youtube" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Курсы</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">UI/UX Дизайн</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Веб-дизайн</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Графический дизайн</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Иллюстрация</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">3D моделирование</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Компания</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Отзывы</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Блог</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 font-montserrat">Контакты</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Icon name="MapPin" className="mr-2 h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">Москва, ул. Дизайнеров, 42</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Phone" className="mr-2 h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-start">
                  <Icon name="Mail" className="mr-2 h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">info@designmaster.ru</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2025 DesignMaster. Все права защищены.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
