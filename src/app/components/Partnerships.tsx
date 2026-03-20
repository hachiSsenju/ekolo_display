import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Heart, Factory, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Partnerships() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const categories = [
    {
      icon: Building2,
      title: t("partnerships.cards.0.title"),
      desc: t("partnerships.cards.0.desc"),
      color: "#1FAF5A",
    },
    {
      icon: Heart,
      title: t("partnerships.cards.1.title"),
      desc: t("partnerships.cards.1.desc"),
      color: "#f7c59f",
    },
    {
      icon: Factory,
      title: t("partnerships.cards.2.title"),
      desc: t("partnerships.cards.2.desc"),
      color: "#a78bfa",
    },
    {
      icon: Star,
      title: t("partnerships.cards.3.title"),
      desc: t("partnerships.cards.3.desc"),
      color: "#3dd9eb",
    },
  ];

  return (
    <section
      id="partenaires"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute bottom-0 left-0 w-96 h-96"
        style={{
          background: "radial-gradient(circle, rgba(31,175,90,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-[#1FAF5A] mb-4"
            style={{ background: "rgba(31,175,90,0.1)", border: "1px solid rgba(31,175,90,0.2)" }}
          >
            {t("partnerships.badge")}
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            {t("partnerships.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("partnerships.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="group relative rounded-2xl p-7 transition-all duration-300 hover:translate-y-[-4px]"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${c.color}20 0%, ${c.color}10 100%)`,
                      border: `1px solid ${c.color}35`,
                      boxShadow: `0 8px 16px ${c.color}15`,
                    }}
                  >
                    <Icon className="w-7 h-7" style={{ color: c.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-white mb-3"
                    style={{ fontWeight: 700, fontSize: "1.15rem", lineHeight: 1.3 }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-white/50 text-sm" style={{ lineHeight: 1.7 }}>
                    {c.desc}
                  </p>

                  {/* Hover glow effect */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at 50% 0%, ${c.color}08 0%, transparent 70%)`,
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}