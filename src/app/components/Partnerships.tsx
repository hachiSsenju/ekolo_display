import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Building2, Heart, Factory, Star } from "lucide-react";

const TEAM_IMG = "https://images.unsplash.com/photo-1742996111692-2d924f12a058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwYnVzaW5lc3MlMjBwYXJ0bmVyc2hpcCUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMDU2MTkxfDA&ixlib=rb-4.1.0&q=80&w=1080";

const categories = [
  {
    icon: Building2,
    title: "Municipalités",
    desc: "Nous recherchons des collaborations avec les autorités locales africaines pour des projets pilotes et un déploiement terrain.",
    color: "#1FAF5A",
  },
  {
    icon: Heart,
    title: "ONG & Associations",
    desc: "Opportunités de partenariat avec des organisations environnementales pour amplifier l'impact sur le terrain.",
    color: "#f7c59f",
  },
  {
    icon: Factory,
    title: "Entreprises",
    desc: "Ouverture aux entreprises intéressées par des solutions environnementales et RSE en Afrique.",
    color: "#a78bfa",
  },
  {
    icon: Star,
    title: "Sponsors & Investisseurs",
    desc: "Recherche d'investissements pour accélérer le développement et le déploiement de la plateforme en Afrique.",
    color: "#3dd9eb",
  },
];

export function Partnerships() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });

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
            Opportunités de partenariat
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            Construisons ensemble l'avenir
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            EKOLO est à la recherche de partenaires stratégiques pour transformer la gestion environnementale urbaine en Afrique.
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