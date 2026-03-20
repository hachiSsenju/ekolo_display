import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Target, Users, Leaf, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Impact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const impacts = [
    {
      icon: Target,
      title: t("impact.cards.0.title"),
      description: t("impact.cards.0.description"),
      color: "#1FAF5A",
    },
    {
      icon: Users,
      title: t("impact.cards.1.title"),
      description: t("impact.cards.1.description"),
      color: "#3dd9eb",
    },
    {
      icon: Leaf,
      title: t("impact.cards.2.title"),
      description: t("impact.cards.2.description"),
      color: "#a78bfa",
    },
    {
      icon: Zap,
      title: t("impact.cards.3.title"),
      description: t("impact.cards.3.description"),
      color: "#f7c59f",
    },
  ];

  return (
    <section
      id="impact"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      {/* Grid bg pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(31,175,90,1) 1px, transparent 1px), linear-gradient(90deg, rgba(31,175,90,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(31,175,90,0.07) 0%, transparent 70%)",
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
            {t("impact.badge")}
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            {t("impact.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("impact.subtitle")}
          </p>
        </motion.div>

        {/* Impact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impacts.map((impact, i) => {
            const Icon = impact.icon;
            return (
              <motion.div
                key={impact.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.12 }}
                className="relative rounded-3xl p-8 group hover:scale-105 transition-transform duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, ${impact.color}12 0%, transparent 70%)`,
                  }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{
                    background: `${impact.color}18`,
                    border: `1px solid ${impact.color}35`,
                    boxShadow: `0 0 20px ${impact.color}15`,
                  }}
                >
                  <Icon className="w-6 h-6" style={{ color: impact.color }} />
                </div>

                <div className="text-white mb-3 text-center" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  {impact.title}
                </div>
                <div className="text-white/50 text-sm text-center" style={{ lineHeight: 1.6 }}>
                  {impact.description}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Vision statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 rounded-3xl p-8 text-center"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <h3 className="text-white mb-4" style={{ fontWeight: 700, fontSize: "1.3rem" }}>
            {t("impact.vision_title")}
          </h3>
          <p className="text-white/60 max-w-3xl mx-auto" style={{ lineHeight: 1.8, fontSize: "1.05rem" }}>
            {t("impact.vision_desc")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}