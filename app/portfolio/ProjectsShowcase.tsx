"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { PROJECTS } from "./projectsData";

export default function PowersSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden" style={{ background: "#040608" }}>
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 60px, rgba(232,23,44,0.012) 61px)",
      }} />
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.3), transparent)" }} />

      <div className="relative z-10 py-20 sm:py-24 md:py-28">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-12 sm:mb-16" style={{ paddingLeft: "clamp(24px, 5vw, 80px)" }}>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
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
            <div className="flex flex-col gap-4">
              <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
                style={{ maxWidth: 420, fontSize: 13, lineHeight: 1.85, color: "rgba(240,240,240,0.35)", fontFamily: "sans-serif" }}>
                The tools are only the beginning. Click any project to inspect its architecture, problem statement, and technical breakdown.
              </motion.p>
              <div className="hidden sm:flex items-center gap-2 self-start lg:self-end">
                <button
                  onClick={() => scroll("left")}
                  className="w-9 h-9 border border-white/10 hover:border-[var(--red)] flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                  aria-label="Scroll projects left"
                >
                  &larr;
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-9 h-9 border border-white/10 hover:border-[var(--red)] flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                  aria-label="Scroll projects right"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 sm:pb-6"
          style={{
            paddingLeft: "clamp(24px, 5vw, 80px)",
            paddingRight: "clamp(24px, 5vw, 80px)",
            scrollSnapType: "x mandatory",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.07 * i }}
              className="flex-shrink-0"
              style={{
                scrollSnapAlign: "start",
                width: "clamp(250px, 82vw, 360px)",
              }}
            >
              <div
                className="group flex flex-col h-full text-left"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                  display: "flex",
                }}
              >
                {/* Clickable Card Link Overlay */}
                <Link
                  href={`/projects/${p.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View details for ${p.title}`}
                />

                {/* Top red accent */}
                <div className="absolute inset-x-0 top-0 h-0.5 pointer-events-none"
                  style={{ background: "linear-gradient(90deg, var(--red), transparent)", opacity: 0.5 }} />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,23,44,0.08) 0%, transparent 70%)" }} />

                {/* Top row: Number & View Details tag */}
                <div className="flex items-center justify-between mb-7 pointer-events-none">
                  <div style={{ fontSize: 10, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: "0.25em", color: "rgba(232,23,44,0.4)" }}>
                    {p.n}
                  </div>
                  <div className="text-[9px] tracking-[0.2em] uppercase text-white/30 group-hover:text-[var(--red)] transition-colors duration-300 font-sans flex items-center gap-1">
                    <span>Details</span> &rarr;
                  </div>
                </div>

                {/* Title */}
                <h3 className="pointer-events-none" style={{ fontSize: "clamp(20px, 2.5vw, 28px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: 16 }}>
                  {p.title}
                </h3>

                {/* Description */}
                <p className="pointer-events-none" style={{ fontSize: 12, color: "rgba(240,240,240,0.32)", fontFamily: "sans-serif", lineHeight: 1.85, marginBottom: 28, minHeight: 70 }}>
                  {p.desc}
                </p>

                {/* View Details Button with Slide Effect */}
                <div
                  className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden transition-colors duration-500 text-white group-hover:text-black pointer-events-none"
                  style={{
                    border: "1px solid rgba(232,23,44,0.4)",
                    background: "rgba(232,23,44,0.05)",
                    fontFamily: "sans-serif",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.18em",
                    padding: "10px 14px",
                    marginTop: "auto",
                    marginBottom: 20,
                    whiteSpace: "nowrap",
                  }}
                >
                  <span
                    className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0"
                    style={{ background: "var(--red)" }}
                  />
                  <span className="relative z-10 transition-colors duration-500 group-hover:text-black flex items-center gap-1.5">
                    VIEW PROJECT DETAILS <span aria-hidden>&rarr;</span>
                  </span>
                </div>

                {/* Stat */}
                <div className="pointer-events-none" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20, display: "flex", flexDirection: "column" }}>
                  <div className="red-gradient" style={{ fontSize: "clamp(32px, 4vw, 48px)", fontWeight: 900, fontFamily: "sans-serif", letterSpacing: "-0.03em", lineHeight: 1, minHeight: "2em", display: "flex", alignItems: "flex-start" }}>
                    {p.stat}
                  </div>
                  <div style={{ fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(240,240,240,0.2)", fontFamily: "sans-serif", marginTop: 6 }}>
                    {p.statLabel}
                  </div>
                </div>

                {/* Corner GitHub Button (z-20 above link overlay) */}
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-0 right-0 bg-white flex items-end justify-end opacity-80 hover:opacity-100 transition-all duration-300 group/btn cursor-pointer z-20"
                  style={{
                    width: 44,
                    height: 44,
                    borderTopLeftRadius: "100%",
                    paddingRight: 10,
                    paddingBottom: 8,
                    textDecoration: "none",
                  }}
                  aria-label={`View ${p.title} on GitHub`}
                >
                  <span className="text-[var(--red)] text-lg font-bold transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300">
                    &#8599;
                  </span>
                </a>
              </div>
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
