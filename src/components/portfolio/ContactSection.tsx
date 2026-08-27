"use client";

import { motion } from "framer-motion";
import { Mail, Send, MapPin, Clock } from "lucide-react";
import { useLang } from "./LanguageContext";

export default function ContactSection() {
  const { t } = useLang();

  return (
    <section id="contact" className="py-36 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
        >
          {t("contact.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[var(--muted)] text-center mb-12"
        >
          {t("contact.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-6"
        >
          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center gap-2 text-center">
              <Mail className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm text-[var(--muted)]">Email</span>
              <span className="text-sm font-medium">
                oba12@yandex.ru
              </span>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center gap-2 text-center">
              <MapPin className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm text-[var(--muted)]">
                {t("contact.location")}
              </span>
              <span className="text-sm font-medium">Perm, Russia</span>
            </div>
            <div className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5 flex flex-col items-center gap-2 text-center">
              <Clock className="w-5 h-5 text-[var(--accent)]" />
              <span className="text-sm text-[var(--muted)]">
                {t("contact.response")}
              </span>
              <span className="text-sm font-medium">~24h</span>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-[var(--muted)] mb-2">
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>
              <div>
                <label className="block text-sm text-[var(--muted)] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-[var(--muted)] mb-2">
                {t("contact.message")}
              </label>
              <textarea
                rows={5}
                className="w-full bg-[var(--background)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[var(--accent)] transition-colors resize-none"
                placeholder={t("contact.messagePlaceholder")}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[var(--accent)] hover:brightness-110 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              {t("contact.send")}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}