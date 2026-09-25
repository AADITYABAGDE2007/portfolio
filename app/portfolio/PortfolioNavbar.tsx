"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { showToast } from "./NotificationToast";

gsap.registerPlugin(ScrollTrigger);

const LINKS: { label: string; target: string }[] = [
  { label: "Education",      target: "education" },
  { label: "Skills",         target: "skills" },
  { label: "Projects",       target: "projects" },
  { label: "Experience",     target: "experience" },
  { label: "Certifications", target: "certifications" },
  { label: "Contact",        target: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    ScrollTrigger.create({
      start: "top -60",
      onUpdate: (self) => {
        if (!navRef.current) return;
        if (self.scroll() > 60) {
          navRef.current.style.background = "rgba(4,6,8,0.94)";
          navRef.current.style.borderBottomColor = "rgba(232,23,44,0.2)";
        } else {
          navRef.current.style.background = "transparent";
          navRef.current.style.borderBottomColor = "transparent";
        }
      },
    });
  }, []);

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="fixed top-0 inset-x-0 z-50 border-b transition-all duration-500 backdrop-blur-md"
        style={{ borderBottomColor: "transparent" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
            <div className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/full_logo.webp" alt="Aaditya-Bagde" style={{ width: 32, height: 32, objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(232,23,44,0.8))" }} />
            </div>
            <div className="hidden lg:block">
              <div className="text-[10px] tracking-[0.5em] uppercase font-light" style={{ color: "rgba(240,240,240,0.5)" }}>Aaditya-Bagde</div>
              <div className="text-[9px] tracking-[0.35em] uppercase" style={{ color: "var(--red)" }}>AI & ML DEVELOPER</div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-10">
            {LINKS.map(({ label, target }) => (
              <button key={label}
                onClick={() => scrollTo(target)}
                className="text-xs tracking-[0.25em] uppercase transition-colors duration-300"
                style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(240,240,240,0.4)", fontFamily: "sans-serif" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "var(--red)")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,0.4)")}
              >{label}</button>
            ))}
          </div>

          {/* Right actions: Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <motion.a
              href="/aaditya_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, boxShadow: "0 0 24px rgba(232,23,44,0.35)" }}
              whileTap={{ scale: 0.96 }}
              className="text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase px-4 sm:px-6 py-2.5 transition-all duration-300 inline-flex items-center justify-center font-bold"
              style={{ background: "var(--red)", color: "#fff", textDecoration: "none", cursor: "pointer", fontFamily: "sans-serif" }}
            >
              View Resume
            </motion.a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden flex flex-col items-center justify-center w-10 h-10 border border-[rgba(255,255,255,0.15)] bg-[#040608]/80 text-white rounded p-2 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <span className={`block h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${isMobileOpen ? "rotate-45 translate-y-1.5 bg-[var(--red)]" : "-translate-y-1"}`} />
              <span className={`block h-0.5 w-5 bg-white transition-opacity duration-300 ease-in-out ${isMobileOpen ? "opacity-0" : "opacity-100"}`} />
              <span className={`block h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${isMobileOpen ? "-rotate-45 -translate-y-1.5 bg-[var(--red)]" : "translate-y-1"}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 inset-x-0 z-40 lg:hidden border-b border-[rgba(232,23,44,0.25)]"
            style={{ background: "rgba(4,6,8,0.98)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex flex-col py-6 px-6 gap-5">
              {LINKS.map(({ label, target }) => (
                <button
                  key={label}
                  onClick={() => {
                    setIsMobileOpen(false);
                    scrollTo(target);
                  }}
                  className="text-left text-sm tracking-[0.25em] uppercase py-2 text-white/70 hover:text-[var(--red)] border-b border-white/5 transition-colors duration-200"
                  style={{ background: "none", borderLeft: "none", borderRight: "none", borderTop: "none", fontFamily: "sans-serif" }}
                >
                  {label}
                </button>
              ))}
              <a
                href="/aaditya_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileOpen(false)}
                className="mt-2 text-center text-xs tracking-[0.25em] uppercase py-3 px-4 bg-[var(--red)] text-white font-bold transition-all duration-300 flex items-center justify-center gap-2"
                style={{ fontFamily: "sans-serif", textDecoration: "none" }}
              >
                View Resume (PDF) &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


