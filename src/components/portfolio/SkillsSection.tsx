"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "./LanguageContext";

const categories = ["All", "Frontend", "Backend", "Tools", "Other"] as const;
type Category = (typeof categories)[number];

const skills: Record<Category, { name: string; icon: string }[]> = {
  All: [
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "React", icon: "⚛" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Node.js", icon: "🟢" },
    { name: "Supabase", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Git", icon: "🔀" },
    { name: "Figma", icon: "🎯" },
    { name: "Tauri", icon: "🖥" },
    { name: "Express.js", icon: "🚂" },
    { name: "Railway", icon: "🚂" },
  ],
  Frontend: [
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "TS" },
    { name: "React", icon: "⚛" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "Framer Motion", icon: "🎬" },
  ],
  Backend: [
    { name: "Node.js", icon: "🟢" },
    { name: "Express.js", icon: "🚂" },
    { name: "Supabase", icon: "⚡" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Telegram Bot API", icon: "🤖" },
  ],
  Tools: [
    { name: "Git", icon: "🔀" },
    { name: "Figma", icon: "🎯" },
    { name: "VS Code", icon: "💻" },
    { name: "Railway", icon: "☁" },
    { name: "Vercel", icon: "▲" },
  ],
  Other: [
    { name: "Tauri", icon: "🖥" },
    { name: "REST API Design", icon: "🔗" },
    { name: "Responsive Design", icon: "📱" },
    { name: "SEO", icon: "🔍" },
  ],
};

export default function SkillsSection() {
  const [active, setActive] = useState<Category>("All");
  const { t } = useLang();

  const filtered = skills[active];

  return (
    <section id="skills" className="py-36 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          {t("skills.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[var(--muted)] text-center mb-12 max-w-xl mx-auto"
        >
          {t("skills.subtitle")}
        </motion.p>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-[var(--accent)] text-white shadow-lg shadow-emerald-500/25"
                  : "bg-[var(--card)] text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              {t(`skills.cat.${cat.toLowerCase()}`)}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.03 }}
                className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center gap-3 cursor-pointer hover:border-[var(--accent)] transition-colors duration-300"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-sm font-medium text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}