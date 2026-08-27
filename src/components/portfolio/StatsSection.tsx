"use client";
import { useLang } from "./LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { key: "websitesBuilt", value: 3, suffix: "" },
  { key: "deployedServices", value: 2, suffix: "" },
  { key: "desktopApps", value: 1, suffix: "" },
  { key: "technologies", value: 6, suffix: "+" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(start);
    }, 40);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref} className="text-5xl md:text-6xl font-bold" style={{ color: "var(--accent)" }}>{count}{suffix}</span>;
}

export default function StatsSection() {
  const { t } = useLang();
  return (
    <section className="py-40 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div key={s.key} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="rounded-xl p-6 text-center border transition-transform hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/10"
            style={{ background: "var(--card-bg)", borderColor: "var(--border)" }}>
            <Counter target={s.value} suffix={s.suffix} />
            <p className="mt-3 text-sm opacity-60">{t(s.key)}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}