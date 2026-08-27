"use client";
import { useLang } from "./LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  { title: "furshet-perm.ru", desc: "Catering service with menu, cart, and admin panel", tags: ["Next.js", "Supabase", "Tailwind"] },
  { title: "esquirecourt.ru", desc: "Legal services website with contact forms", tags: ["Next.js", "TypeScript", "Supabase"] },
  { title: "olegwebsolutions.ru", desc: "Web studio portfolio with comments system", tags: ["Next.js", "shadcn/ui", "Supabase"] },
  { title: "Telegram Bot", desc: "Business bot for client communication", tags: ["Node.js", "Telegram API", "Express"] },
  { title: "Tasks API", desc: "REST API with CRUD and token auth", tags: ["Express.js", "Supabase", "REST"] },
  { title: "Notes App", desc: "Desktop note-taking app with local storage", tags: ["Tauri", "JavaScript", "Rust"] },
];

export default function ProjectsSection() {
  const { t } = useLang();
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % projects.length);
  const prev = () => setIndex((index - 1 + projects.length) % projects.length);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold mb-12 text-center">
          <span className="font-mono text-sm opacity-40 block mb-2">// {t("projectsTitle").toLowerCase()}</span>
          {t("projectsTitle")}
        </motion.h2>
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div key={index} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.3 }}
              className="rounded-2xl p-8 border" style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold">{projects[index].title}</h3>
                <ExternalLink size={20} className="opacity-40 mt-1" />
              </div>
              <p className="opacity-60 mb-6">{projects[index].desc}</p>
              <div className="flex gap-2 flex-wrap">
                {projects[index].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full text-sm font-mono" style={{ background: "var(--accent-light)", color: "var(--accent)" }}>{tag}</span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-8">
            <button onClick={prev} className="p-3 rounded-full border transition-colors hover:bg-white/10" style={{ borderColor: "var(--border)" }}><ChevronLeft /></button>
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} className="w-2 h-2 rounded-full transition-all" style={{ background: i === index ? "var(--accent)" : "var(--border)", transform: i === index ? "scale(1.5)" : "scale(1)" }} />
              ))}
            </div>
            <button onClick={next} className="p-3 rounded-full border transition-colors hover:bg-white/10" style={{ borderColor: "var(--border)" }}><ChevronRight /></button>
          </div>
        </div>
      </div>
    </section>
  );
}