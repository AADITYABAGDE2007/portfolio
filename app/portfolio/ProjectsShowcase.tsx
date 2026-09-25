"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const POWERS = [
  {
    n: "01",
    title: "Krishi-Cart",
    stat: "Full Stack",
    statLabel: "Application",
    desc: "A full-stack platform integrating frontend, backend services, and machine-learning capabilities.",
    repoLink: "https://github.com/AADITYABAGDE2007/Krishi-Cart"
  },
  {
    n: "02",
    title: "Translator",
    stat: "API Integration",
    statLabel: "Web Application",
    desc: "A multi-language translation application powered by React, Axios, and Rapid API.",
    repoLink: "https://github.com/AADITYABAGDE2007/Translator"
  },
  {
    n: "03",
    title: "Expense Tracker",
    stat: "React + Vite",
    statLabel: "Web Application",
    desc: "A responsive expense management application designed for tracking and organizing personal finances.",
    repoLink: "https://github.com/AADITYABAGDE2007/Expense-Tracker-app"
  },
  {
    n: "04",
    title: "Lost & Found",
    stat: "Flask + SQLite",
    statLabel: "Web Application",
    desc: "A web-based lost-and-found system for managing item submissions and search functionality.",
    repoLink: "https://github.com/AADITYABAGDE2007/lost-and-found"
  },
];

export default function PowersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden" style={{ background: "#040608" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(232,23,44,0.012) 61px)",
      }} />
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.3), transparent)" }} />

      <div className="relative z-10 py-20 sm:py-24 md:py-28">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-12 sm:mb-16" style={{ paddingLeft: "clamp(24px, 5vw, 80px)" }}>
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
            <div>
              <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
                style={{ fontSize: 10, letterSpacing: "0.7em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif", marginBottom: 14 }}>
                The Projects
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.08 }}
                style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
                REAL WORK.<br /><span className="red-gradient">REAL SOLUTIONS.</span>
              </motion.h2>
            </div>
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ maxWidth: 420, fontSize: 13, lineHeight: 1.85, color: "rgba(240,240,240,0.35)", fontFamily: "sans-serif" }}>
              The tools are only the beginning. What matters is what you build with them — ideas transformed into working experiences.
            </motion.p>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div
          className="flex gap-4 overflow-x-auto pb-4 sm:pb-6"
          style={{
            paddingLeft: "clamp(24px, 5vw, 80px)",
            paddingRight: "clamp(24px, 5vw, 80px)",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {POWERS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.07 * i }}
              className="group flex-shrink-0 flex flex-col"
              style={{
                scrollSnapAlign: "start",
                width: "clamp(240px, 82vw, 360px)",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top red accent */}
              <div className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: "linear-gradient(90deg, var(--red), transparent)", opacity: 0.5 }} />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,23,44,0.08) 0%, transparent 70%)" }} />

              {/* Number */}
              <div style={{ fontSize: 10, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: "0.25em", color: "rgba(232,23,44,0.3)", marginBottom: 28 }}>
                {p.n}
              </div>

              {/* Title */}
              <h3 style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 16 }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 12, color: "rgba(240,240,240,0.32)", fontFamily: "sans-serif", lineHeight: 1.85, marginBottom: 40, minHeight: 80 }}>
                {p.desc}
              </p>

              {/* Stat */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, marginTop: "auto", display: "flex", flexDirection: "column" }}>
                <div className="red-gradient" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, fontFamily: "sans-serif", letterSpacing: "-0.03em", lineHeight: 1, minHeight: "2em", display: "flex", alignItems: "flex-start" }}>
                  {p.stat}
                </div>
                <div style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,240,240,0.2)", fontFamily: "sans-serif", marginTop: 6 }}>
                  {p.statLabel}
                </div>
              </div>

              {/* Corner GitHub Button */}
              <a
                href={p.repoLink}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-0 right-0 bg-white flex items-end justify-end opacity-80 hover:opacity-100 transition-all duration-300 group/btn cursor-pointer z-20"
                style={{
                  width: 44,
                  height: 44,
                  borderTopLeftRadius: "100%",
                  paddingRight: 10,
                  paddingBottom: 8,
                }}
                aria-label={`View ${p.title} on GitHub`}
              >
                <span className="text-[var(--red)] text-lg font-bold transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                  &#8599;
                </span>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-3 mt-6"
          style={{ paddingLeft: "clamp(24px, 5vw, 80px)" }}>
          <div style={{ height: 1, width: 40, background: "rgba(232,23,44,0.3)" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(240,240,240,0.2)", fontFamily: "sans-serif" }}>
            Scroll to explore ➤
          </span>
        </motion.div>
      </div>

      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.2), transparent)" }} />
    </section>
  );
}
