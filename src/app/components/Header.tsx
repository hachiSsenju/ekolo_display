import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/images/logo.png";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#apropos" },
  { label: "Solution", href: "#solution" },
  { label: "Impact", href: "#impact" },
  { label: "Prototypes", href: "#prototypes" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
          ? "rgba(255, 255, 255, 0.03)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
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
          <img src={logo} alt="EKOLO Logo" className="h-16 w-auto object-contain" />
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
        <button
          onClick={() => handleNav("#prototypes")}
          className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm text-white transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
            boxShadow: "0 0 20px rgba(31,175,90,0.35)",
          }}
        >
          Voir les prototypes
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
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
            style={{ background: "rgba(5, 14, 8, 0.95)", backdropFilter: "blur(20px)" }}
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-white/70 hover:text-[#1FAF5A] transition-colors text-left text-sm"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNav("#prototypes")}
                className="mt-2 px-5 py-2.5 rounded-full text-sm text-white text-center"
                style={{
                  background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
                }}
              >
                Voir les prototypes
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}