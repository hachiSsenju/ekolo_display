import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AlertTriangle, Users, Clock, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const POLLUTION_IMG = "https://images.unsplash.com/photo-1662611527358-7855c4fe8398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd2FzdGUlMjBwb2xsdXRpb24lMjBzdHJlZXRzfGVufDF8fHx8MTc3MjA1NjE0NHww&ixlib=rb-4.1.0&q=80&w=1080";
const GARBAGE_IMG = "https://images.unsplash.com/photo-1758061398870-a86a0fa1a6c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2ElMjBnYXJiYWdlJTIwdXJiYW4lMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NzIwNTYxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080";

export function Problem() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const problems = [
    {
      icon: AlertTriangle,
      title: t("problem.list.0.title"),
      desc: t("problem.list.0.desc"),
      color: "#ff6b35",
    },
    {
      icon: Users,
      title: t("problem.list.1.title"),
      desc: t("problem.list.1.desc"),
      color: "#f7c59f",
    },
    {
      icon: Clock,
      title: t("problem.list.2.title"),
      desc: t("problem.list.2.desc"),
      color: "#e8c547",
    },
    {
      icon: Database,
      title: t("problem.list.3.title"),
      desc: t("problem.list.3.desc"),
      color: "#8ecae6",
    },
  ];

  return (
    <section
      id="apropos"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]"
        style={{
          background: "radial-gradient(ellipse, rgba(31,175,90,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
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
            {t("problem.badge")}
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            {t("problem.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("problem.subtitle")}
          </p>
        </motion.div>

        {/* Main content */}
        <div className="space-y-16">
          {/* Images section - Full width showcase */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  border: "1px solid rgba(255,107,53,0.2)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={POLLUTION_IMG}
                  alt="Pollution urbaine en Afrique"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,14,8,0.8) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2"
                    style={{ background: "rgba(255,107,53,0.2)", border: "1px solid rgba(255,107,53,0.3)" }}
                  >
                    <AlertTriangle className="w-3.5 h-3.5 text-[#ff6b35]" />
                    <span className="text-[#ff6b35] text-xs font-semibold">{t("problem.cards.pollution.badge")}</span>
                  </div>
                  <h3 className="text-white" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                    {t("problem.cards.pollution.title")}
                  </h3>
                  <p className="text-white/50 text-sm">{t("problem.cards.pollution.desc")}</p>
                </div>
              </div>

              <div
                className="relative rounded-3xl overflow-hidden group"
                style={{
                  border: "1px solid rgba(255,107,53,0.2)",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.5)",
                }}
              >
                <img
                  src={GARBAGE_IMG}
                  alt="Gestion des déchets urbains"
                  className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(5,14,8,0.8) 0%, transparent 50%)",
                  }}
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-2"
                    style={{ background: "rgba(232,197,71,0.2)", border: "1px solid rgba(232,197,71,0.3)" }}
                  >
                    <Database className="w-3.5 h-3.5 text-[#e8c547]" />
                    <span className="text-[#e8c547] text-xs font-semibold">{t("problem.cards.garbage.badge")}</span>
                  </div>
                  <h3 className="text-white" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                    {t("problem.cards.garbage.title")}
                  </h3>
                  <p className="text-white/50 text-sm">{t("problem.cards.garbage.desc")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Problem cards - Grid layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {problems.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    className="group relative rounded-2xl p-6 transition-all duration-300 hover:translate-y-[-4px]"
                    style={{
                      background: "rgba(15,30,20,0.85)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${p.color}20 0%, ${p.color}10 100%)`,
                        border: `1px solid ${p.color}35`,
                        boxShadow: `0 8px 16px ${p.color}15`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: p.color }} />
                    </div>

                    {/* Content */}
                    <h3
                      className="text-white mb-2"
                      style={{ fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.3 }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-white/50 text-sm" style={{ lineHeight: 1.7 }}>
                      {p.desc}
                    </p>

                    {/* Hover glow effect */}
                    <div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 50% 0%, ${p.color}08 0%, transparent 70%)`,
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}