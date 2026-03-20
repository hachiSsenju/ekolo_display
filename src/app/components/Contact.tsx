import { useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Send, Twitter, Linkedin, Github, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Contact() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    org: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-28 overflow-hidden"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
        style={{
          background: "radial-gradient(ellipse, rgba(31,175,90,0.07) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
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
            {t("contact.badge")}
          </span>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 800 }}
          >
            {t("contact.title")}
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto" style={{ lineHeight: 1.7 }}>
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(31,175,90,0.15)" }}
                >
                  <Mail className="w-5 h-5 text-[#1FAF5A]" />
                </div>
                <div>
                  <div className="text-white text-sm" style={{ fontWeight: 600 }}>
                    {t("contact.info.email_title")}
                  </div>
                  <a
                    href="mailto:maylem@outlook.fr"
                    className="text-[#1FAF5A] text-sm hover:underline"
                  >
                    maylem@outlook.fr
                  </a>
                </div>
              </div>
              <p className="text-white/40 text-sm" style={{ lineHeight: 1.6 }}>
                {t("contact.info.email_desc")}
              </p>
            </div>

            <div
              className="p-8 rounded-3xl"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <h3 className="text-white mb-4 text-sm" style={{ fontWeight: 600 }}>
                {t("contact.info.follow")}
              </h3>
              <div className="flex gap-4">
                {[
                  { Icon: Twitter, label: "@ekolo_io", href: "#" },
                  { Icon: Linkedin, label: "EKOLO", href: "#" },
                  { Icon: Github, label: "ekolo-platform", href: "#" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm text-white/50 hover:text-[#1FAF5A] transition-all duration-200 hover:scale-105"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, rgba(31,175,90,0.08) 0%, rgba(61,217,235,0.05) 100%)",
                border: "1px solid rgba(31,175,90,0.2)",
              }}
            >
              <div className="text-[#1FAF5A] mb-2" style={{ fontWeight: 700, fontSize: "1.1rem" }}>
                {t("contact.info.call_title")}
              </div>
              <p className="text-white/50 text-sm" style={{ lineHeight: 1.6 }}>
                {t("contact.info.call_desc")}
              </p>
              <div
                className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm"
                style={{ background: "rgba(31,175,90,0.15)", color: "#1FAF5A" }}
              >
                <div className="w-2 h-2 rounded-full bg-[#1FAF5A] animate-pulse" />
                {t("contact.info.call_badge")}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              className="p-8 rounded-3xl h-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-16 h-16 text-[#1FAF5A] mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-white mb-2" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                    {t("contact.form.success.title")}
                  </h3>
                  <p className="text-white/40 text-sm">
                    {t("contact.form.success.desc")}
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-6 text-[#1FAF5A] text-sm hover:underline"
                  >
                    {t("contact.form.success.another")}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-white mb-6" style={{ fontWeight: 600, fontSize: "1.1rem" }}>
                    {t("contact.form.title")}
                  </h3>
                  {[
                    { key: "name", label: t("contact.form.fields.name.label"), type: "text", placeholder: t("contact.form.fields.name.placeholder") },
                    { key: "email", label: t("contact.form.fields.email.label"), type: "email", placeholder: t("contact.form.fields.email.placeholder") },
                    { key: "org", label: t("contact.form.fields.org.label"), type: "text", placeholder: t("contact.form.fields.org.placeholder") },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-white/60 text-sm mb-2">{label}</label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 outline-none transition-all duration-200"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        onFocus={(e) => {
                          e.target.style.border = "1px solid rgba(31,175,90,0.5)";
                          e.target.style.boxShadow = "0 0 0 3px rgba(31,175,90,0.08)";
                        }}
                        onBlur={(e) => {
                          e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                          e.target.style.boxShadow = "none";
                        }}
                        required={key !== "org"}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-white/60 text-sm mb-2">{t("contact.form.fields.message.label")}</label>
                    <textarea
                      rows={4}
                      placeholder={t("contact.form.fields.message.placeholder")}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                      onFocus={(e) => {
                        e.target.style.border = "1px solid rgba(31,175,90,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(31,175,90,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.border = "1px solid rgba(255,255,255,0.1)";
                        e.target.style.boxShadow = "none";
                      }}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-white flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #1FAF5A 0%, #0d7a3e 100%)",
                      boxShadow: "0 0 25px rgba(31,175,90,0.3)",
                    }}
                  >
                    <Send className="w-4 h-4" />
                    {t("contact.form.submit")}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}