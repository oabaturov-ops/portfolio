"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLang } from "./LanguageContext";

const projects = [
  {
    titleKey: "projects.p1.title",
    descKey: "projects.p1.desc",
    tags: ["Next.js", "Tailwind CSS", "SEO"],
    url: "https://olegwebsolutions.ru",
  },
  {
    titleKey: "projects.p2.title",
    descKey: "projects.p2.desc",
    tags: ["Next.js", "Supabase", "Tailwind"],
    url: "https://esquirecourt.ru",
  },
  {
    titleKey: "projects.p3.title",
    descKey: "projects.p3.desc",
    tags: ["Next.js", "Supabase", "Tailwind"],
    url: "https://furshet-perm.ru",
  },
  {
    titleKey: "projects.p4.title",
    descKey: "projects.p4.desc",
    tags: ["Node.js", "Telegram API"],
    url: "https://t.me/OlegWebConsultantBot",
  },
  {
    titleKey: "projects.p5.title",
    descKey: "projects.p5.desc",
    tags: ["Express.js", "Supabase", "Railway"],
    url: "#",
  },
  {
    titleKey: "projects.p6.title",
    descKey: "projects.p6.desc",
    tags: ["Tauri", "Rust", "JavaScript"],
    url: "#",
  },
  {
    titleKey: "projects.p7.title",
    descKey: "projects.p7.desc",
    tags: ["Word Press"],
    url: "https://furshet-159.ru",
  },
];

export default function ProjectsSection() {
  const { t } = useLang();
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    setDirection(-1);
    setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1));
  };

  const next = () => {
    setDirection(1);
    setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1));
  };

  const project = projects[current];

  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-4"
        >
          {t("projects.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[var(--muted)] text-center mb-12"
        >
          {t("projects.subtitle")}
        </motion.p>

        {/* Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
              transition={{ duration: 0.3 }}
              className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 md:p-10"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                {t(project.titleKey)}
              </h3>
              <p className="text-[var(--muted)] mb-6 text-lg">
                {t(project.descKey)}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--accent)]/10 text-[var(--accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {project.url !== "#" && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline font-medium"
                >
                  {t("projects.view")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-[var(--card)] border border-[var(--border)] flex items-center justify-center hover:border-[var(--accent)] transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-[var(--accent)] w-8"
                  : "bg-[var(--border)] hover:bg-[var(--muted)]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}