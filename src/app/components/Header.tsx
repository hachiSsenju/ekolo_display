import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";

export function Header() {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: t("header.nav.home"), href: "#accueil" },
    { label: t("header.nav.about"), href: "#apropos" },
    { label: t("header.nav.solution"), href: "#solution" },
    { label: t("header.nav.impact"), href: "#impact" },
    { label: t("header.nav.prototypes"), href: "#prototypes" },
    { label: t("header.nav.partners") || "Partenaires", href: "#partenaires" },
    { label: t("header.nav.contact"), href: "#contact" },
  ];

  const handleLanguageToggle = () => {
    i18n.changeLanguage(i18n.language.startsWith('fr') ? 'en' : 'fr');
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(5,14,8,0.92)"
          : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "none",
        boxShadow: scrolled ? "0 10px 40px rgba(0,0,0,0.3)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#accueil")}
          className="flex items-center group cursor-pointer"
        >
          <img src={logo} alt="EKOLO Logo" className="h-10 w-auto object-contain" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-white/70 hover:text-[#1FAF5A] transition-colors duration-200 text-sm tracking-wide"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={handleLanguageToggle}
            className="flex items-center gap-1 text-white/70 hover:text-white transition-colors text-sm uppercase font-semibold tracking-wider"
          >
            <Globe className="w-4 h-4" />
            {(i18n.language || "fr").substring(0, 2)}
          </button>
          <button
            onClick={() => handleNav("#prototypes")}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
              boxShadow: "0 0 20px rgba(31,175,90,0.35)",
            }}
          >
            {t("header.cta_prototypes")}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-4 text-white">
          <button
            onClick={handleLanguageToggle}
            className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-1 uppercase font-semibold"
          >
            <Globe className="w-4 h-4" />
            {(i18n.language || "fr").substring(0, 2)}
          </button>
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(5, 14, 8, 0.97)" }}
          >
            <div className="px-6 py-6 flex flex-col">
              {navLinks.map((link, idx) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="w-full text-left py-3.5 text-white/80 hover:text-[#1FAF5A] transition-colors text-base font-medium flex items-center gap-3"
                  style={{
                    borderBottom: idx < navLinks.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#1FAF5A] opacity-50 flex-shrink-0" />
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#prototypes")}
                className="mt-5 w-full px-5 py-3 rounded-xl text-white text-sm font-semibold text-center transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
                  boxShadow: "0 0 20px rgba(31,175,90,0.3)",
                }}
              >
                {t("header.cta_prototypes")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}