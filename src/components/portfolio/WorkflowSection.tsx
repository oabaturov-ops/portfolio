"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { useLang } from "./LanguageContext";

const steps = [
  { icon: Lightbulb, key: "workflow.step1" },
  { icon: PenTool, key: "workflow.step2" },
  { icon: Code2, key: "workflow.step3" },
  { icon: Rocket, key: "workflow.step4" },
];

export default function WorkflowSection() {
  const { t } = useLang();

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-center mb-6"
        >
          {t("workflow.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[var(--muted)] text-center mb-16 max-w-2xl mx-auto text-lg"
        >
          {t("workflow.subtitle")}
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
              className="relative bg-[var(--card)] border border-[var(--border)] rounded-2xl p-8 text-center group hover:border-[var(--accent)] transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-[var(--accent)]/10 text-[var(--accent)] mb-5 group-hover:bg-[var(--accent)] group-hover:text-white transition-all duration-300">
                <step.icon className="w-7 h-7" />
              </div>
              <div className="text-xs font-bold text-[var(--accent)] uppercase tracking-wider mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold mb-2">
                {t(`${step.key}.title`)}
              </h3>
              <p className="text-sm text-[var(--muted)] leading-relaxed">
                {t(`${step.key}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}