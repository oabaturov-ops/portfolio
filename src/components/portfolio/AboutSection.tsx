"use client";

import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

export default function AboutSection() {
  const { t } = useLang();

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          {t("about.title")}
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          <div>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed mb-6">
              {t("about.p1")}
            </p>
            <p className="text-lg md:text-xl text-[var(--muted)] leading-relaxed">
              {t("about.p2")}
            </p>
          </div>
          <div className="space-y-5">
            {[
              { num: "3+", label: t("about.years") },
              { num: "10+", label: t("about.projects") },
              { num: "100%", label: t("about.commitment") },
              { num: "24h", label: t("about.response") },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex items-center gap-5 bg-[var(--card)] border border-[var(--border)] rounded-2xl p-5"
              >
                <span className="text-3xl md:text-4xl font-bold text-[var(--accent)] min-w-[80px]">
                  {item.num}
                </span>
                <span className="text-[var(--muted)]">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}