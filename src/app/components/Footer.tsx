import { Leaf, Mail, Twitter, Linkedin, Github, ArrowUpRight } from "lucide-react";

const navGroups = [
  {
    title: "Plateforme",
    links: ["Accueil", "À propos", "Comment ça marche", "Impact"],
  },
  {
    title: "Prototypes",
    links: ["App Mobile", "Dashboard Admin"],
  },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer
      className="relative"
      style={{
        borderTop: "1px solid rgba(31,175,90,0.12)",
      }}
    >
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <button onClick={scrollTop} className="flex items-center gap-2 mb-5">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
                  boxShadow: "0 0 20px rgba(31,175,90,0.3)",
                }}
              >
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span
                className="text-white"
                style={{ fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.1em" }}
              >
                EKOLO
              </span>
            </button>
            <p className="text-white/35 text-sm mb-6" style={{ lineHeight: 1.7 }}>
              L'intelligence collective au service d'un monde plus propre. Signalement, analyse IA, intervention rapide.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/30 hover:text-[#1FAF5A] transition-all duration-200 hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav groups */}
          {navGroups.map((group) => (
            <div key={group.title}>
              <h4
                className="text-white mb-4 text-sm tracking-widest uppercase"
                style={{ fontWeight: 600, letterSpacing: "0.1em" }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-[#1FAF5A] transition-colors duration-200 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div
          className="mt-14 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: "rgba(31,175,90,0.07)",
            border: "1px solid rgba(31,175,90,0.18)",
          }}
        >
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-[#1FAF5A]" />
            <div>
              <div className="text-white text-sm" style={{ fontWeight: 600 }}>
                Restez informé des avancées EKOLO
              </div>
              <div className="text-white/40 text-xs">Actualités, déploiements et nouvelles fonctionnalités</div>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl text-white text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <button
              className="px-5 py-2.5 rounded-xl text-white text-sm flex items-center gap-1.5 transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
                boxShadow: "0 0 15px rgba(31,175,90,0.3)",
              }}
            >
              S'abonner
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p className="text-white/25 text-xs">
          © 2026 EKOLO — Tous droits réservés. Plateforme environnementale intelligente.
        </p>
        <div className="flex gap-6">
          {["Confidentialité", "Conditions d'utilisation", "Contact"].map((item) => (
            <a key={item} href="#" className="text-white/25 hover:text-white/50 text-xs transition-colors">
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}