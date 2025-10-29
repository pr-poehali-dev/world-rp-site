import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const stats = [
    { value: '1000+', label: 'Игроков онлайн', icon: 'Users' },
    { value: '24/7', label: 'Работа сервера', icon: 'Clock' },
    { value: '5+', label: 'Уникальных работ', icon: 'Briefcase' },
    { value: '50+', label: 'Транспорта', icon: 'Car' },
  ];

  const features = [
    {
      icon: 'Trophy',
      title: 'Развитая экономика',
      description: 'Зарабатывай, инвестируй и становись богатым в виртуальном мире',
    },
    {
      icon: 'Shield',
      title: 'Система фракций',
      description: 'Вступай в банды, полицию или мафию - выбирай свой путь',
    },
    {
      icon: 'Zap',
      title: 'Уникальные системы',
      description: 'Кастомные скрипты, которых нет на других серверах',
    },
    {
      icon: 'Heart',
      title: 'Адекватная админка',
      description: 'Опытная команда модераторов следит за порядком 24/7',
    },
  ];

  const menuItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'servers', label: 'Сервера', icon: 'Server' },
    { id: 'rules', label: 'Правила', icon: 'BookOpen' },
    { id: 'donate', label: 'Донат', icon: 'CreditCard' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center animate-glow-pulse">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">WORLD RP</h1>
            </div>
            
            <div className="hidden md:flex items-center gap-6">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>

            <Button className="bg-secondary hover:bg-secondary/90">
              <Icon name="Play" size={18} className="mr-2" />
              Играть
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-semibold">
                🔥 Лучший RolePlay сервер 2025
              </div>
              
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                Живи в мире
                <span className="gradient-text block text-glow">
                  без границ
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-lg">
                Погрузись в атмосферу настоящей ролевой игры с продуманной экономикой, 
                уникальными системами и дружным комьюнити
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-glow-pulse">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2" asChild>
                  <a href="https://discord.gg/c2C7yZuWDZ" target="_blank" rel="noopener noreferrer">
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Discord
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-primary/20 overflow-hidden relative">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.1),transparent_50%)]" />
                <img 
                  src="/placeholder.svg" 
                  alt="WORLD RP Gameplay"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Icon name="Play" size={32} className="text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-card border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h3 className="text-4xl md:text-5xl font-bold mb-4">
              Почему <span className="gradient-text">WORLD RP</span>?
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы создали идеальную платформу для ролевой игры с вниманием к каждой детали
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all group hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:animate-glow-pulse">
                  <Icon name={feature.icon as any} size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{feature.title}</h4>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-primary/20 text-center animate-fade-in">
            <div className="max-w-3xl mx-auto space-y-6">
              <h3 className="text-4xl md:text-5xl font-bold gradient-text">
                Готов начать свою историю?
              </h3>
              <p className="text-xl text-muted-foreground">
                Присоединяйся к тысячам игроков уже сегодня и создай свою легенду в WORLD RP
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6 animate-glow-pulse">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть сейчас
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  <Icon name="Download" size={20} className="mr-2" />
                  Скачать лаунчер
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <div>
                <div className="font-bold gradient-text">WORLD RP</div>
                <div className="text-sm text-muted-foreground">© 2025 Все права защищены</div>
              </div>
            </div>
            
            <div className="flex gap-4">
              <a
                href="https://discord.gg/c2C7yZuWDZ"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
              >
                <Icon name="MessageCircle" size={20} className="text-muted-foreground group-hover:text-white" />
              </a>
              <button className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Icon name="Youtube" size={20} className="text-muted-foreground group-hover:text-white" />
              </button>
              <button className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                <Icon name="Instagram" size={20} className="text-muted-foreground group-hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;