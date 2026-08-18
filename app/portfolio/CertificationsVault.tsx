"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CERTIFICATES = [
  { n: "01", name: "NPTEL Python", impact: "EXTREME", level: 98, color: "#22c55e", desc: "Rigorous academic certification from NPTEL demonstrating advanced proficiency in Python and data science workflows.", certificateUrl: "/certificates/nptel-python-data-science.pdf" },
  { n: "02", name: "Happieloop ML Internship", impact: "CRITICAL", level: 95, color: "#e8172c", desc: "Official completion of the Machine Learning internship, validating real-world data pipeline and model training skills.", certificateUrl: "/certificates/happieloop-ml-internship.pdf" },
  { n: "03", name: "Qskill Frontend Internship", impact: "CRITICAL", level: 92, color: "#3b82f6", desc: "Recognition of internship completion, proving expertise in React.js, Tailwind, and cross-device optimization.", certificateUrl: "/certificates/qskill-frontend-internship.pdf" },
  { n: "04", name: "Artificial Intelligence", impact: "HIGH", level: 88, color: "#a855f7", desc: "Comprehensive certification from Simplilearn covering core AI concepts and machine learning algorithms.", certificateUrl: "/certificates/artificial-intelligence.pdf" },
  { n: "05", name: "Deloitte Data Analytics", impact: "HIGH", level: 85, color: "#facc15", desc: "Virtual experience program by Forage & Deloitte, simulating enterprise-level data analytics tasks.", certificateUrl: "/certificates/deloitte-data-analytics.pdf" },
  { n: "06", name: "Infosys DevOps", impact: "HIGH", level: 82, color: "#d97706", desc: "Professional certification from Infosys Springboard covering modern DevOps practices and pipelines.", certificateUrl: "/certificates/infosys-devops.pdf" },
  { n: "07", name: "Infosys Python", impact: "HIGH", level: 80, color: "#14b8a6", desc: "Professional certification from Infosys Springboard covering Python programming and software design.", certificateUrl: "/certificates/infosys-python.pdf" },
  { n: "08", name: "NumPy Data Science", impact: "HIGH", level: 78, color: "#f43f5e", desc: "Specialized training by Simplilearn focusing on numerical computing and arrays using Python's NumPy.", certificateUrl: "/certificates/numpy-data-science.pdf" },
  { n: "09", name: "Git Version Control", impact: "MODERATE", level: 75, color: "#f97316", desc: "Certification by Simplilearn establishing proficiency in Git version control and GitHub workflows.", certificateUrl: "/certificates/git-version-control.pdf" },
  { n: "10", name: "Python & SQL", impact: "MODERATE", level: 72, color: "#ec4899", desc: "Specialized training by Scaler combining database management with core data science operations.", certificateUrl: "/certificates/python-sql-data-science.pdf" },
  { n: "11", name: "JavaScript Essentials 2", impact: "MODERATE", level: 70, color: "#0ea5e9", desc: "Networking Academy certification by Cisco solidifying advanced ES6+ JavaScript logic and problem solving.", certificateUrl: "/certificates/javascript-essentials-2.pdf" },
  { n: "12", name: "JavaScript Essentials 1", impact: "MODERATE", level: 68, color: "#6366f1", desc: "Networking Academy certification by Cisco covering fundamental JS mechanics and browser APIs.", certificateUrl: "/certificates/javascript-essentials-1.pdf" },
  { n: "13", name: "CSS Essentials", impact: "MODERATE", level: 65, color: "#8b5cf6", desc: "Solidifying styling, responsive design, and CSS architecture principles for modern frontend development.", certificateUrl: "/certificates/css-essentials.pdf" },
  { n: "14", name: "HTML Essentials", impact: "MODERATE", level: 62, color: "#d946ef", desc: "Establishing core understanding of semantic HTML5, web accessibility, and structured markup.", certificateUrl: "/certificates/html-essentials.pdf" },
  { n: "15", name: "Data Structures in C++", impact: "BASE", level: 58, color: "#059669", desc: "Scaler Topics course focusing on algorithmic thinking and optimizing data structures using C++.", certificateUrl: "/certificates/data-structures-cpp.pdf" },
  { n: "16", name: "C Programming", impact: "BASE", level: 55, color: "#0284c7", desc: "Foundational programming certification by Simplilearn covering memory management and C basics.", certificateUrl: "/certificates/c-programming.pdf" },
  { n: "17", name: "Coding Logic Building", impact: "BASE", level: 50, color: "#dc2626", desc: "Scaler Topics free course establishing the initial foundation of programming logic for beginners.", certificateUrl: "/certificates/coding-logic-building.pdf" },
];

export default function CertificationsSection() {
  const ref = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="certifications" ref={ref} className="relative overflow-hidden" style={{ background: "#040608" }}>
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.25), transparent)" }} />

      <div className="relative z-10 py-20 sm:py-24 md:py-28">
        {/* Header */}
        <div className="px-4 sm:px-6 md:px-12 max-w-7xl mx-auto mb-12 sm:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end gap-8">
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
            <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ maxWidth: 420, fontSize: 12, lineHeight: 1.9, color: "rgba(240,240,240,0.3)", fontFamily: "sans-serif" }}>
              Continuous learning and professional validation. A curated collection of the most impactful credentials.
            </motion.p>
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
                  marginBottom: 28,
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  className="absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover/certificate:translate-y-0"
                  style={{ background: v.color }}
                />
                <span className="relative z-10">VIEW CERTIFICATE <span aria-hidden>↗</span></span>
              </a>

              {/* Threat + bar */}
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: v.color, fontFamily: "sans-serif", width: "100%", display: "flex", justifyContent: "space-between" }}>
                    <span>IMPACT: {v.impact}</span>
                    <span style={{ fontSize: 11, fontFamily: "sans-serif", color: "rgba(255,255,255,0.25)", letterSpacing: "0.05em" }}>
                      {v.level}<span style={{ fontSize: 9, color: "rgba(255,255,255,0.12)" }}>/100</span>
                    </span>
                  </span>
                </div>
                <div style={{ width: "100%", height: 2, background: "rgba(255,255,255,0.07)" }}>
                  <motion.div
                    initial={{ width: 0 }} animate={inView ? { width: `${v.level}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.2 + 0.07 * i, ease: "easeOut" }}
                    style={{ height: "100%", background: v.color, boxShadow: `0 0 8px ${v.color}80` }}
                  />
                </div>
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
