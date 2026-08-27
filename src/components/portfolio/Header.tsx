"use client";
import { useLang } from "./LanguageContext";
import { Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const { lang, toggleLang, t } = useLang();
  const { theme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#about", label: t("about") },
    { href: "#projects", label: t("projects") },
    { href: "#skills", label: t("skills") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md" style={{ background: "var(--background)CC", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold" style={{ color: "var(--accent)" }}>OA</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm hover:opacity-100 opacity-60 transition-opacity">{l.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={toggleLang} className="p-2 rounded-lg hover:opacity-70 transition-opacity"><Globe size={18} /></button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2 rounded-lg hover:opacity-70 transition-opacity">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2">☰</button>
        </div>
      </div>
      {menuOpen && (
        <motion.nav initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="md:hidden px-6 pb-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm opacity-60">{l.label}</a>
          ))}
        </motion.nav>
      )}
    </header>
  );
}