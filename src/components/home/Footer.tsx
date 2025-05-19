
import Icon from "@/components/ui/icon";

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

const FooterSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 font-montserrat">{title}</h3>
    {children}
  </div>
);

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Youtube", href: "#" },
  ];

  const courseLinks = [
    { label: "UI/UX Дизайн", href: "#" },
    { label: "Веб-дизайн", href: "#" },
    { label: "Графический дизайн", href: "#" },
    { label: "Иллюстрация", href: "#" },
    { label: "3D моделирование", href: "#" },
  ];

  const companyLinks = [
    { label: "О нас", href: "#" },
    { label: "Преподаватели", href: "#" },
    { label: "Отзывы", href: "#" },
    { label: "Блог", href: "#" },
    { label: "Контакты", href: "#" },
  ];

  const contactInfo = [
    { icon: "MapPin", info: "Москва, ул. Дизайнеров, 42" },
    { icon: "Phone", info: "+7 (495) 123-45-67" },
    { icon: "Mail", info: "info@designmaster.ru" },
  ];

  return (
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
              {socialLinks.map((link, index) => (
                <FooterLink key={index} href={link.href}>
                  <Icon name={link.name} />
                </FooterLink>
              ))}
            </div>
          </div>
          
          <FooterSection title="Курсы">
            <ul className="space-y-2">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterSection>
          
          <FooterSection title="Компания">
            <ul className="space-y-2">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <FooterLink href={link.href}>{link.label}</FooterLink>
                </li>
              ))}
            </ul>
          </FooterSection>
          
          <FooterSection title="Контакты">
            <ul className="space-y-2">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <Icon name={item.icon} className="mr-2 h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">{item.info}</span>
                </li>
              ))}
            </ul>
          </FooterSection>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 DesignMaster. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterLink href="#">Политика конфиденциальности</FooterLink>
            <FooterLink href="#">Условия использования</FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
