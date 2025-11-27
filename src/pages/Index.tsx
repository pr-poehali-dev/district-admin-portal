import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuthenticated');
    const user = localStorage.getItem('username');
    
    if (!isAuth) {
      navigate('/login');
    } else {
      setUsername(user || '');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigate('/login');
  };

  const news = [
    {
      id: 1,
      title: 'Прием граждан по вопросам благоустройства',
      date: '25 ноября 2025',
      category: 'Важное',
      excerpt: 'Глава администрации проведет личный прием граждан по вопросам благоустройства территории.'
    },
    {
      id: 2,
      title: 'Изменения в графике работы отдела ЗАГС',
      date: '23 ноября 2025',
      category: 'Объявления',
      excerpt: 'С 1 декабря отдел ЗАГС переходит на обновленный график работы.'
    },
    {
      id: 3,
      title: 'Итоги конкурса социальных проектов',
      date: '20 ноября 2025',
      category: 'Новости',
      excerpt: 'Подведены итоги районного конкурса социальных проектов за 2025 год.'
    }
  ];

  const services = [
    { 
      title: 'Получение справок',
      icon: 'FileText',
      description: 'Справки о регистрации, составе семьи'
    },
    { 
      title: 'Градостроительство',
      icon: 'Building2',
      description: 'Разрешения на строительство'
    },
    { 
      title: 'Социальная поддержка',
      icon: 'Users',
      description: 'Льготы и выплаты населению'
    },
    { 
      title: 'Земельные вопросы',
      icon: 'MapPin',
      description: 'Аренда и продажа земельных участков'
    },
    { 
      title: 'Жилищные программы',
      icon: 'Home',
      description: 'Программы обеспечения жильем'
    },
    { 
      title: 'Прием граждан',
      icon: 'Calendar',
      description: 'Запись на личный прием'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <Icon name="Shield" size={32} className="text-primary" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Администрация</h1>
                <p className="text-sm opacity-90">Районного округа</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Icon name="User" size={20} />
                <span className="text-sm">{username}</span>
              </div>
              <Button
                variant="secondary"
                size="sm"
                onClick={handleLogout}
              >
                <Icon name="LogOut" size={18} className="mr-2" />
                Выход
              </Button>
            </div>
          </div>
          
          <nav className="mt-6 flex gap-2 border-t border-white/20 pt-4">
            <Button
              variant={activeSection === 'main' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('main')}
              className={activeSection === 'main' ? '' : 'text-white hover:bg-white/10'}
            >
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button
              variant={activeSection === 'news' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('news')}
              className={activeSection === 'news' ? '' : 'text-white hover:bg-white/10'}
            >
              <Icon name="Newspaper" size={18} className="mr-2" />
              Новости
            </Button>
            <Button
              variant={activeSection === 'services' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('services')}
              className={activeSection === 'services' ? '' : 'text-white hover:bg-white/10'}
            >
              <Icon name="Briefcase" size={18} className="mr-2" />
              Услуги
            </Button>
            <Button
              variant={activeSection === 'contacts' ? 'secondary' : 'ghost'}
              onClick={() => setActiveSection('contacts')}
              className={activeSection === 'contacts' ? '' : 'text-white hover:bg-white/10'}
            >
              <Icon name="Phone" size={18} className="mr-2" />
              Контакты
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {activeSection === 'main' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="bg-accent text-accent-foreground border-2 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertCircle" size={24} />
                  Важная информация
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">
                  Уважаемые жители! В связи с предстоящими праздниками график работы администрации будет изменен. 
                  Подробную информацию можно уточнить по телефону приемной.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="FileText" size={40} className="text-primary mb-2" />
                  <CardTitle>Электронные услуги</CardTitle>
                  <CardDescription>Быстрое получение справок онлайн</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Перейти к услугам</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Calendar" size={40} className="text-primary mb-2" />
                  <CardTitle>Запись на прием</CardTitle>
                  <CardDescription>Личный прием граждан</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">Записаться</Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name="Phone" size={40} className="text-primary mb-2" />
                  <CardTitle>Горячая линия</CardTitle>
                  <CardDescription>Круглосуточная поддержка</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">8-800-000-00-00</Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Последние новости</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {news.slice(0, 3).map(item => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <Badge className="w-fit mb-2">{item.category}</Badge>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {item.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeSection === 'news' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Новости и объявления</h2>
            {news.map(item => (
              <Card key={item.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge>{item.category}</Badge>
                    <span className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Clock" size={14} />
                      {item.date}
                    </span>
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4">{item.excerpt}</p>
                  <Button variant="outline">
                    Читать полностью
                    <Icon name="ChevronRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeSection === 'services' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Государственные и муниципальные услуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Icon name={service.icon as any} size={40} className="text-primary mb-3" />
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Подробнее
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'contacts' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6">Контактная информация</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" size={24} className="text-primary" />
                    Адрес администрации
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg">123456, Россия, г. Город, ул. Центральная, д. 1</p>
                  
                  <Separator />
                  
                  <div>
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Phone" size={18} className="text-primary" />
                      Телефоны:
                    </p>
                    <p>Приемная: +7 (495) 123-45-67</p>
                    <p>Факс: +7 (495) 123-45-68</p>
                    <p>Горячая линия: 8-800-000-00-00</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Mail" size={18} className="text-primary" />
                      Email:
                    </p>
                    <p>admin@rayon.gov.ru</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-semibold mb-2 flex items-center gap-2">
                      <Icon name="Clock" size={18} className="text-primary" />
                      Режим работы:
                    </p>
                    <p>Понедельник - Четверг: 9:00 - 18:00</p>
                    <p>Пятница: 9:00 - 17:00</p>
                    <p>Обед: 13:00 - 14:00</p>
                    <p>Суббота, Воскресенье - выходной</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Users" size={24} className="text-primary" />
                    Руководство
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="font-bold text-lg">Иванов Иван Иванович</p>
                    <p className="text-muted-foreground mb-2">Глава администрации</p>
                    <p className="text-sm">Телефон: +7 (495) 123-45-70</p>
                    <p className="text-sm">Email: ivanov@rayon.gov.ru</p>
                  </div>

                  <Separator />

                  <div>
                    <p className="font-bold text-lg">Петрова Мария Сергеевна</p>
                    <p className="text-muted-foreground mb-2">Заместитель главы администрации</p>
                    <p className="text-sm">Телефон: +7 (495) 123-45-71</p>
                    <p className="text-sm">Email: petrova@rayon.gov.ru</p>
                  </div>

                  <Separator />

                  <Button className="w-full">
                    <Icon name="Calendar" size={18} className="mr-2" />
                    Записаться на прием
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <div className="aspect-video bg-gray-300 rounded flex items-center justify-center">
                  <Icon name="Map" size={48} className="text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-secondary text-secondary-foreground mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О нас</h3>
              <p className="text-sm opacity-90">
                Администрация районного округа обеспечивает решение вопросов местного значения 
                в интересах населения.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Полезные ссылки</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline opacity-90">Госуслуги</a></li>
                <li><a href="#" className="hover:underline opacity-90">Официальный портал</a></li>
                <li><a href="#" className="hover:underline opacity-90">Открытые данные</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Следите за нами</h3>
              <div className="flex gap-4">
                <Icon name="Facebook" size={24} className="cursor-pointer hover:opacity-70" />
                <Icon name="Twitter" size={24} className="cursor-pointer hover:opacity-70" />
                <Icon name="Instagram" size={24} className="cursor-pointer hover:opacity-70" />
              </div>
            </div>
          </div>
          <Separator className="my-6 bg-white/20" />
          <p className="text-center text-sm opacity-75">
            © 2025 Администрация районного округа. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;