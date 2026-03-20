import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Camera, Brain, BarChart2, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

const MOBILE_IMG = "https://images.unsplash.com/photo-1739269552506-377309b10c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIwNTYwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const ANALYTICS_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMHNjcmVlbiUyMG1vbml0b3J8ZW58MXx8fHwxNzcyMDQ2OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Solution() {
  const { t } = useTranslation();

  const steps = [
    {
      icon: Camera,
      number: "01",
      title: t("solution.steps.0.title"),
      desc: t("solution.steps.0.desc"),
      color: "#1FAF5A",
    },
    {
      icon: Brain,
      number: "02",
      title: t("solution.steps.1.title"),
      desc: t("solution.steps.1.desc"),
      color: "#3dd9eb",
    },
    {
      icon: BarChart2,
      number: "03",
      title: t("solution.steps.2.title"),
      desc: t("solution.steps.2.desc"),
      color: "#a78bfa",
    },
    {
      icon: Zap,
      number: "04",
      title: t("solution.steps.3.title"),
      desc: t("solution.steps.3.desc"),
      color: "#f7c59f",
    },
  ];
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <section
      id="solution"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(31,175,90,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm text-[#1FAF5A] mb-4"
            style={{ background: "rgba(31,175,90,0.1)", border: "1px solid rgba(31,175,90,0.2)" }}
          >
            {t("solution.badge")}
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            {t("solution.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("solution.subtitle")}
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line removed */}

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* Number bubble */}
                  <div className="flex justify-start lg:justify-center mb-6">
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center relative"
                      style={{
                        background: `${step.color}18`,
                        border: `1px solid ${step.color}40`,
                        boxShadow: `0 0 20px ${step.color}20`,
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: step.color }} />
                      <span
                        className="absolute -top-3 -right-3 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{
                          background: step.color,
                          color: "#050e08",
                          fontWeight: 800,
                          fontSize: "0.65rem",
                        }}
                      >
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    className="rounded-2xl p-6 h-full transition-all duration-300 group-hover:translate-y-[-4px]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: `1px solid rgba(255,255,255,0.07)`,
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <h3
                      className="text-white mb-3"
                      style={{ fontWeight: 700, fontSize: "1rem" }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-white/45 text-sm" style={{ lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom image showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-28 grid lg:grid-cols-2 gap-8"
        >
          {[
            { img: MOBILE_IMG, label: t("solution.bottom_cards.mobile.title"), sub: t("solution.bottom_cards.mobile.desc") },
            { img: ANALYTICS_IMG, label: t("solution.bottom_cards.analytics.title"), sub: t("solution.bottom_cards.analytics.desc") },
          ].map((item) => (
            <div
              key={item.label}
              className="relative rounded-3xl overflow-hidden group"
              style={{
                border: "1px solid rgba(31,175,90,0.2)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
              }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,14,8,0.9) 0%, rgba(5,14,8,0.2) 60%, transparent 100%)",
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-2"
                  style={{ background: "rgba(31,175,90,0.2)", border: "1px solid rgba(31,175,90,0.3)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1FAF5A]" />
                  <span className="text-[#1FAF5A] text-xs">EKOLO</span>
                </div>
                <h3 className="text-white" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                  {item.label}
                </h3>
                <p className="text-white/50 text-sm">{item.sub}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}