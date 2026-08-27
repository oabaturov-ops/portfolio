"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "ru";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  toggleLang: () => {},
  t: (k) => k,
});

export function useLang() {
  return useContext(LangContext);
}

const translations: Record<Lang, Record<string, string>> = {
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.greeting": "Hi, I'm",
    "hero.name": "Oleg Abaturov",
    "hero.description":
      "Full-Stack Developer crafting modern web apps with clean code and sharp design.",
    "hero.cta1": "View Projects",
    "hero.cta2": "Get in Touch",

    "stats.websites": "Websites",
    "stats.services": "Services",
    "stats.apps": "Desktop Apps",
    "stats.technologies": "Technologies",

    "about.title": "About Me",
    "about.p1": "I'm a full-stack developer focused on building fast, modern web applications. From landing pages to complex platforms with API integrations, I handle the entire development cycle — from first pixel to production deployment.",
    "about.p2": "My approach is simple: clean code, clear communication, and results you can measure. Every project starts with understanding your goals and ends with a solution that works for your business.",
    "about.years": "Years of experience in web development",
    "about.projects": "Completed projects and deployments",
    "about.commitment": "Commitment to every project",
    "about.response": "Average response time",

    "workflow.title": "How I Work",
    "workflow.subtitle": "A clear process from idea to launch — no surprises, just results.",
    "workflow.step1.title": "Discovery",
    "workflow.step1.desc": "We discuss your goals, audience, and requirements to define the project scope.",
    "workflow.step2.title": "Design",
    "workflow.step2.desc": "I create a visual concept with layouts, colors, and typography that match your brand.",
    "workflow.step3.title": "Development",
    "workflow.step3.desc": "Clean, modular code with real-time previews so you can track progress.",
    "workflow.step4.title": "Launch",
    "workflow.step4.desc": "Testing, deployment, and post-launch support to ensure everything runs smoothly.",

    "projects.title": "Projects",
    "projects.subtitle": "Some things I've built recently",
    "projects.view": "View Project",
    "projects.p1.title": "OWS — Web Studio",
    "projects.p1.desc": "Business website for a web consulting studio with SEO optimization.",
    "projects.p2.title": "EsquireCourt",
    "projects.p2.desc": "Law firm website with library section and appointment booking.",
    "projects.p3.title": "Furshet Perm",
    "projects.p3.desc": "Furniture store with catalog, filtering, and order form.",
    "projects.p4.title": "Telegram Bot",
    "projects.p4.desc": "Client request bot with inline menu and owner notifications.",
    "projects.p5.title": "Tasks API",
    "projects.p5.desc": "REST API with CRUD endpoints, auth, and Supabase backend.",
    "projects.p6.title": "Notes Desktop App",
    "projects.p6.desc": "Tauri desktop app with localStorage-based notes management.",

    "skills.title": "Tech Stack",
    "skills.subtitle":
      "Technologies and tools I use to bring ideas to life.",
    "skills.cat.all": "All",
    "skills.cat.frontend": "Frontend",
    "skills.cat.backend": "Backend",
    "skills.cat.tools": "Tools",
    "skills.cat.other": "Other",

    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Have a project in mind? Let's talk about it.",
    "contact.location": "Location",
    "contact.response": "Response Time",
    "contact.name": "Name",
    "contact.namePlaceholder": "Your name",
    "contact.message": "Message",
    "contact.messagePlaceholder": "Tell me about your project...",
    "contact.send": "Send Message",
  },

  ru: {
    "nav.about": "Обо мне",
    "nav.projects": "Проекты",
    "nav.skills": "Навыки",
    "nav.contact": "Контакты",

    "hero.greeting": "Привет, я",
    "hero.name": "Олег Абатуров",
    "hero.description":
      "Full-Stack разработчик, создаю современные веб-приложения с чистым кодом и продуманным дизайном.",
    "hero.cta1": "Смотреть проекты",
    "hero.cta2": "Связаться",

    "stats.websites": "Сайтов",
    "stats.services": "Сервисов",
    "stats.apps": "Десктоп-приложений",
    "stats.technologies": "Технологий",

    "about.title": "Обо мне",
    "about.p1": "Я full-stack разработчик, создаю быстрые и современные веб-приложения. От лендингов до сложных платформ с интеграцией API — веду весь цикл разработки от первого пикселя до продакшена.",
    "about.p2": "Мой подход прост: чистый код, прозрачная коммуникация и измеримые результаты. Каждый проект начинается с понимания ваших целей и заканчивается решением, которое работает на ваш бизнес.",
    "about.years": "Лет опыта в веб-разработке",
    "about.projects": "Завершённых проектов и деплоев",
    "about.commitment": "Отдача каждому проекту",
    "about.response": "Среднее время ответа",

    "workflow.title": "Как я работаю",
    "workflow.subtitle": "Чёткий процесс от идеи до запуска — без сюрпризов, только результаты.",
    "workflow.step1.title": "Анализ",
    "workflow.step1.desc": "Обсуждаем ваши цели, аудиторию и требования для определения масштаба проекта.",
    "workflow.step2.title": "Дизайн",
    "workflow.step2.desc": "Создаю визуальную концепцию с макетами, цветами и типографикой под ваш бренд.",
    "workflow.step3.title": "Разработка",
    "workflow.step3.desc": "Чистый модульный код с превью в реальном времени — вы видите прогресс.",
    "workflow.step4.title": "Запуск",
    "workflow.step4.desc": "Тестирование, деплой и поддержка после запуска — всё работает стабильно.",

    "projects.title": "Проекты",
    "projects.subtitle": "Несколько моих недавних работ",
    "projects.view": "Смотреть",
    "projects.p1.title": "OWS — Веб-студия",
    "projects.p1.desc": "Бизнес-сайт веб-консалтинговой студии с SEO-оптимизацией.",
    "projects.p2.title": "EsquireCourt",
    "projects.p2.desc": "Сайт юридической фирмы с разделом библиотеки и записью на приём.",
    "projects.p3.title": "Фуршет Пермь",
    "projects.p3.desc": "Магазин мебели с каталогом, фильтрацией и формой заказа.",
    "projects.p4.title": "Telegram-бот",
    "projects.p4.desc": "Бот для заявок клиентов с инлайн-меню и уведомлениями владельцу.",
    "projects.p5.title": "Tasks API",
    "projects.p5.desc": "REST API с CRUD-эндпоинтами, авторизацией и Supabase.",
    "projects.p6.title": "Заметки (десктоп)",
    "projects.p6.desc": "Десктоп-приложение на Tauri для управления заметками.",

    "skills.title": "Технологии",
    "skills.subtitle":
      "Инструменты и технологии, которые я использую в работе.",
    "skills.cat.all": "Все",
    "skills.cat.frontend": "Фронтенд",
    "skills.cat.backend": "Бэкенд",
    "skills.cat.tools": "Инструменты",
    "skills.cat.other": "Другое",

    "contact.title": "Связаться со мной",
    "contact.subtitle":
      "Есть идея для проекта? Давайте обсудим.",
    "contact.location": "Местоположение",
    "contact.response": "Время ответа",
    "contact.name": "Имя",
    "contact.namePlaceholder": "Ваше имя",
    "contact.message": "Сообщение",
    "contact.messagePlaceholder": "Расскажите о вашем проекте...",
    "contact.send": "Отправить",
  },
};

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = () => setLang((l) => (l === "en" ? "ru" : "en"));

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}