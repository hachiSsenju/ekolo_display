import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Smartphone, LayoutDashboard, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const MOBILE_IMG = "https://images.unsplash.com/photo-1739269552506-377309b10c7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwd29tYW4lMjBzbWFydHBob25lJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzIwNTYwNDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const ANALYTICS_IMG = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGFuYWx5dGljcyUyMHNjcmVlbiUyMG1vbml0b3J8ZW58MXx8fHwxNzcyMDQ2OTY5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Prototypes() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

  const prototypes = [
    {
      icon: Smartphone,
      tag: t("prototypes.cards.0.tag"),
      title: t("prototypes.cards.0.title"),
      desc: t("prototypes.cards.0.desc"),
      img: MOBILE_IMG,
      color: "#1FAF5A",
      badge: t("prototypes.cards.0.badge"),
      href: "https://mobil.figma.site",
    },
    {
      icon: LayoutDashboard,
      tag: t("prototypes.cards.1.tag"),
      title: t("prototypes.cards.1.title"),
      desc: t("prototypes.cards.1.desc"),
      img: ANALYTICS_IMG,
      color: "#a78bfa",
      badge: t("prototypes.cards.1.badge"),
      href: "https://admindashboards.figma.site/",
    },
  ];

  return (
    <section
      id="prototypes"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute top-0 right-0 w-96 h-96"
        style={{
          background: "radial-gradient(circle, rgba(31,175,90,0.08) 0%, transparent 70%)",
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
            {t("prototypes.badge")}
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            {t("prototypes.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("prototypes.subtitle")}
          </p>
          <div 
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm"
            style={{ 
              background: "rgba(31,175,90,0.12)", 
              border: "1px solid rgba(31,175,90,0.25)",
              color: "#1FAF5A"
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1FAF5A] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1FAF5A]"></span>
            </span>
            {t("prototypes.interactive")}
          </div>
        </motion.div>

        {/* Grid with 2 cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {prototypes.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.15 }}
            >
              <PrototypeCard proto={p} t={t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PrototypeCard({
  proto,
  t,
}: {
  proto: any;
  t: any;
}) {
  const Icon = proto.icon;

  return (
    <div
      className="relative rounded-3xl overflow-hidden group cursor-pointer h-full transition-all duration-500 hover:scale-[1.02]"
      style={{
        background: "rgba(10,25,15,0.92)",
        border: `1px solid rgba(255,255,255,0.10)`,
        boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
        minHeight: 380,
      }}
    >
      {/* Background image */}
      <img
        src={proto.img}
        alt={proto.title}
        className="w-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-110 h-full"
        style={{ opacity: 0.25 }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, rgba(5,14,8,0.4) 0%, rgba(5,14,8,0.2) 100%)`,
        }}
      />

      {/* Colored border glow on hover */}
      <div
        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: `1px solid ${proto.color}50`, boxShadow: `inset 0 0 40px ${proto.color}10` }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full p-8">
        {/* Tag */}
        <div className="flex items-center justify-between mb-4">
          <div
            className="flex items-center gap-2 px-3 py-1 rounded-full text-xs"
            style={{
              background: `${proto.color}18`,
              border: `1px solid ${proto.color}35`,
              color: proto.color,
            }}
          >
            <Icon className="w-3 h-3" />
            {proto.tag}
          </div>
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.4)" }}
          >
            {proto.badge}
          </span>
        </div>

        <div className="flex-1">
          <h3
            className="text-white mb-3"
            style={{ fontWeight: 700, fontSize: "1.3rem" }}
          >
            {proto.title}
          </h3>
          <p
            className="text-white/45 text-sm"
            style={{ lineHeight: 1.7 }}
          >
            {proto.desc}
          </p>
        </div>

        {/* CTA */}
        <a
          href={proto.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-sm transition-all duration-300 hover:gap-3 self-start"
          style={{
            background: `${proto.color}20`,
            border: `1px solid ${proto.color}40`,
            color: proto.color,
          }}
        >
          {t("prototypes.cta")}
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}