import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Impact } from "./components/Impact";
import { Prototypes } from "./components/Prototypes";
import { Partnerships } from "./components/Partnerships";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const PLATFORM_BG = "https://images.unsplash.com/photo-1771350386143-20e64673331e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2l0eSUyMHNreWxpbmUlMjBtb2Rlcm4lMjBidWlsZGluZ3N8ZW58MXx8fHwxNzcyMDczOTQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
    >
      {/* Background image fixed */}
      <div className="fixed inset-0 z-0">
        <img
          src={PLATFORM_BG}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.75) 100%)",
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Problem />
          <Solution />
          <Impact />
          <Prototypes />
          <Partnerships />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}