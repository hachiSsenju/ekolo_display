import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Heart, Factory, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import adapmeLogo from "../../assets/images/adapme.png";
import gerexatlas from "../../assets/images/gerexatlas.png";

/* ─── Partner logos for the carousel ─── */
interface Partner {
  name: string;
  url: string;
  type: "image" | "icon";
  logo?: string;
  icon?: any;
  color?: string;
}

const PARTNERS: Partner[] = [
  { name: "ADAPME", logo: adapmeLogo, type: "image", url: "https://samapme.adepme.sn" },
  { name: "GEREX ATLAS", logo: gerexatlas, type: "image", url: "https://gerexatlas.com" },
  // { name: "Institutions Gouvernementales", icon: Building2, color: "#1FAF5A", type: "icon", url: "#" },
  // { name: "ONG & Associations", icon: Heart, color: "#f7c59f", type: "icon", url: "#" },
  // { name: "Industriels", icon: Factory, color: "#a78bfa", type: "icon", url: "#" },
  // { name: "Innovateurs", icon: Star, color: "#3dd9eb", type: "icon", url: "#" },
];

/* Duplicate for seamless infinite scroll */
const CAROUSEL_ITEMS = [...PARTNERS];

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
      {/* Subtle ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(31,175,90,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* ── Section header ── */}
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
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)", fontWeight: 800 }}
          >
            {t("partnerships.title")}
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("partnerships.subtitle")}
          </p>
        </motion.div>

        {/* ── Animated logo carousel ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mb-20 overflow-hidden"
        >
          {/* Fade edges removed as requested */}

          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
            style={{ width: "max-content" }}
          >
            {CAROUSEL_ITEMS.map((partner, idx) => (
              <a
                key={idx}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex flex-col items-center justify-center gap-4 px-12 py-8 min-w-[260px] cursor-pointer hover:bg-white/10 transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {partner.type === "image" ? (
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-28 w-auto object-contain"
                    style={{ filter: "brightness(1.1) drop-shadow(0 0 8px rgba(31,175,90,0.3))" }}
                  />
                ) : (
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{
                      background: `${partner.color}20`,
                      border: `1px solid ${partner.color}40`,
                    }}
                  >
                    {partner.icon && (
                      <partner.icon className="w-8 h-8" style={{ color: partner.color }} />
                    )}
                  </div>
                )}
                <span className="text-white/70 text-xs font-semibold text-center whitespace-nowrap">
                  {partner.name}
                </span>
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Category cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
                  className="group relative rounded-2xl p-9 transition-all duration-300 hover:translate-y-[-4px]"
                  style={{
                    background: "rgba(15,30,20,0.85)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${c.color}25 0%, ${c.color}12 100%)`,
                      border: `1px solid ${c.color}40`,
                      boxShadow: `0 8px 16px ${c.color}15`,
                    }}
                  >
                    <Icon className="w-9 h-9" style={{ color: c.color }} />
                  </div>

                  {/* Content */}
                  <h3
                    className="text-white mb-3"
                    style={{ fontWeight: 700, fontSize: "1.35rem", lineHeight: 1.3 }}
                  >
                    {c.title}
                  </h3>
                  <p className="text-white/65 text-base" style={{ lineHeight: 1.7 }}>
                    {c.desc}
                  </p>

                  {/* Hover glow */}
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