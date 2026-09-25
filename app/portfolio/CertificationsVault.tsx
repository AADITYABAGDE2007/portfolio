"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CERTIFICATES = [
  {
    n: "01",
    name: "CS50P Python",
    issuer: "Harvard University",
    tag: "Verified Credential",
    color: "#e8172c",
    desc: "Harvard University's CS50 certification in Python covering functions, variables, conditionals, loops, exceptions, libraries, unit tests, file I/O, and OOP.",
    certificateUrl: "/certificates/cs50p-python-certificate.pdf"
  },
  {
    n: "02",
    name: "NPTEL Python",
    issuer: "IIT Madras / NPTEL",
    tag: "Academic Honors",
    color: "#22c55e",
    desc: "Rigorous academic certification from NPTEL demonstrating advanced proficiency in Python and data science workflows.",
    certificateUrl: "/certificates/nptel-python-data-science.pdf"
  },
  {
    n: "03",
    name: "Happieloop ML Internship",
    issuer: "Happieloop Tech",
    tag: "Industry Internship",
    color: "#e8172c",
    desc: "Official completion of the Machine Learning internship, validating real-world data pipeline and model training skills.",
    certificateUrl: "/certificates/happieloop-ml-internship.pdf"
  },
  {
    n: "04",
    name: "Qskill Frontend Internship",
    issuer: "SR INDIA / Qskill",
    tag: "Industry Internship",
    color: "#3b82f6",
    desc: "Recognition of internship completion, proving expertise in React.js, Tailwind, and cross-device optimization.",
    certificateUrl: "/certificates/qskill-frontend-internship.pdf"
  },
  {
    n: "05",
    name: "Deloitte Data Analytics",
    issuer: "Deloitte & Forage",
    tag: "Enterprise Simulation",
    color: "#facc15",
    desc: "Virtual experience program by Forage & Deloitte, simulating enterprise-level data analytics tasks.",
    certificateUrl: "/certificates/deloitte-data-analytics.pdf"
  },
  {
    n: "06",
    name: "Infosys DevOps",
    issuer: "Infosys Springboard",
    tag: "Professional Cert",
    color: "#d97706",
    desc: "Professional certification from Infosys Springboard covering modern DevOps practices and pipelines.",
    certificateUrl: "/certificates/infosys-devops.pdf"
  },
  {
    n: "07",
    name: "Infosys Python",
    issuer: "Infosys Springboard",
    tag: "Professional Cert",
    color: "#14b8a6",
    desc: "Professional certification from Infosys Springboard covering Python programming and software design.",
    certificateUrl: "/certificates/infosys-python.pdf"
  },
];

export default function CertificationsSection() {
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
    <section id="certifications" ref={ref} className="relative overflow-hidden" style={{ background: "#040608" }}>
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.25), transparent)" }} />

      <div className="relative z-10 py-20 sm:py-24 md:py-28">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div>
              <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
                style={{ fontSize: 10, letterSpacing: "0.7em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif", marginBottom: 14 }}>
                Proof of Progress
              </motion.p>
              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.08 }}
                style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
                CERTIFIED<br /><span className="red-gradient">MASTERY.</span>
              </motion.h2>
            </div>
            <div className="flex flex-col gap-4">
              <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
                style={{ maxWidth: 420, fontSize: 12, lineHeight: 1.9, color: "rgba(240,240,240,0.3)", fontFamily: "sans-serif" }}>
                Continuous learning and professional validation. A curated collection of the most impactful credentials.
              </motion.p>
              <div className="hidden sm:flex items-center gap-2 self-start lg:self-end">
                <button
                  onClick={() => scroll("left")}
                  className="w-9 h-9 border border-white/10 hover:border-[var(--red)] flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                  aria-label="Scroll certifications left"
                >
                  &larr;
                </button>
                <button
                  onClick={() => scroll("right")}
                  className="w-9 h-9 border border-white/10 hover:border-[var(--red)] flex items-center justify-center text-white/60 hover:text-white transition-colors duration-300"
                  aria-label="Scroll certifications right"
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
          <style>{`.cert-scroll::-webkit-scrollbar { display: none; }`}</style>

          {CERTIFICATES.map((v, i) => (
            <motion.div
              key={v.name}
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.07 * i }}
              className="group flex-shrink-0 flex flex-col"
              style={{
                scrollSnapAlign: "start",
                width: "clamp(250px, 82vw, 380px)",
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                padding: "36px 32px",
                position: "relative",
                overflow: "hidden",
                cursor: "default",
              }}
            >
              {/* Top accent line — color */}
              <div className="absolute inset-x-0 top-0 h-0.5 transition-opacity duration-500"
                style={{ background: v.color, opacity: 0.5 }}
                />
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${v.color}12 0%, transparent 70%)` }} />

              {/* Number */}
              <div style={{ fontSize: 10, fontWeight: 700, fontFamily: "sans-serif", letterSpacing: "0.25em", color: "rgba(255,255,255,0.15)", marginBottom: 28 }}>
                {v.n}
              </div>

              {/* Name */}
              <h3 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 16 }}>
                {v.name}
              </h3>

              {/* Description */}
              <p style={{ fontSize: 12, color: "rgba(240,240,240,0.32)", fontFamily: "sans-serif", lineHeight: 1.85, marginBottom: 36, minHeight: 80 }}>
                {v.desc}
              </p>

              <a
                href={v.certificateUrl}
                target="_blank"
                rel="noreferrer"
                className="group/certificate relative inline-flex w-full items-center justify-center gap-2 overflow-hidden transition-colors duration-500 text-white hover:text-black"
                style={{
                  border: `1px solid ${v.color}80`,
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
                  className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/certificate:translate-y-0"
                  style={{ background: v.color }}
                />
                <span className="relative z-10">VIEW CERTIFICATE <span aria-hidden>↗</span></span>
              </a>

              {/* Professional Issuer & Credential Status */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 14, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: v.color, boxShadow: `0 0 8px ${v.color}` }} />
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: v.color, fontFamily: "sans-serif" }}>
                    {v.issuer}
                  </span>
                </div>
                <span style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(240,240,240,0.35)", fontFamily: "sans-serif" }}>
                  {v.tag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 1, delay: 0.6 }}
          className="flex items-center gap-3 px-6 md:px-12 mt-6"
          style={{ paddingLeft: "clamp(24px, 5vw, 80px)" }}>
          <div style={{ height: 1, width: 40, background: "rgba(232,23,44,0.3)" }} />
          <span style={{ fontSize: 9, letterSpacing: "0.45em", textTransform: "uppercase", color: "rgba(240,240,240,0.2)", fontFamily: "sans-serif" }}>
            Scroll to explore
          </span>
        </motion.div>
      </div>

      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.2), transparent)" }} />
    </section>
  );
}
