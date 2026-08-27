"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLang } from "./LanguageContext";

const roles = ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Node.js"];

export default function HeroSection() {
  const { t } = useLang();
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayed(current.slice(0, displayed.length + 1));
          if (displayed.length === current.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setDisplayed(current.slice(0, displayed.length - 1));
          if (displayed.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--accent) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative z-10 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[var(--accent)] text-lg md:text-xl mb-4"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          {t("hero.name")}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--muted)] mb-6 h-10"
        >
          <span className="text-[var(--accent)]">&lt;</span>
          <span className="text-[var(--foreground)]">{displayed}</span>
          <span className="text-[var(--accent)] animate-pulse">|</span>
          <span className="text-[var(--accent)]"> /&gt;</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-[var(--muted)] max-w-xl mx-auto mb-10"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="bg-[var(--accent)] hover:brightness-110 text-white font-medium px-8 py-3 rounded-xl transition-all"
          >
            {t("hero.cta1")}
          </a>
          <a
            href="#contact"
            className="border border-[var(--border)] hover:border-[var(--accent)] text-[var(--foreground)] font-medium px-8 py-3 rounded-xl transition-all"
          >
            {t("hero.cta2")}
          </a>
        </motion.div>
      </div>

      {/* Bouncing arrow */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[var(--muted)]"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}