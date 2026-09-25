"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const EXPERIENCES = [
  {
    role: "Machine Learning Intern",
    company: "Happieloop Technologies",
    date: "May 2026 — Jun 2026",
    bullets: [
      "Increased model reliability by building structured data-cleaning pipelines in Python (Pandas/NumPy).",
      "Improved model iteration speed by developing and evaluating classification models with Scikit-learn following standard ML workflows.",
    ],
    align: "left",
    tech: "PYTHON, PANDAS, NUMPY, SCIKIT-LEARN",
  },
  {
    role: "Front-End Development Intern",
    company: "Qskill Program, SR INDIA",
    date: "Jan 2026 — Feb 2026",
    bullets: [
      "Improved cross-device load performance by ~30% using React.js and Tailwind CSS.",
      "Optimized client-side API data fetching and state caching with Axios interceptors, reducing perceived latency by ~15%.",
      "Strengthened debugging accuracy and turnaround time in live sprints.",
    ],
    align: "right",
    tech: "REACT.JS, TAILWIND CSS, AXIOS",
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" ref={ref} className="relative overflow-hidden" style={{ background: "#040608" }}>
      {/* Top Divider */}
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.3), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
        
        {/* Header - Kept in its original position on the left */}
        <div className="mb-24">
          <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
            style={{ fontSize: 10, letterSpacing: "0.7em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif", marginBottom: 14 }}>
            EXPERIENCE
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.85, delay: 0.08 }}
            style={{ fontSize: "clamp(34px, 6vw, 80px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.92 }}>
            PROFESSIONAL<br /><span className="red-gradient">JOURNEY.</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Vertical Line (Desktop) */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 origin-top hidden md:block"
            style={{
              scaleY,
              x: "-50%",
              width: 1,
              background: "linear-gradient(180deg, transparent, rgba(232,23,44,0.6) 20%, rgba(232,23,44,0.6) 80%, transparent)",
            }}
          />

          {/* Left Vertical Line (Mobile) */}
          <motion.div
            className="absolute left-[15px] top-0 bottom-0 origin-top md:hidden"
            style={{
              scaleY,
              width: 1,
              background: "linear-gradient(180deg, transparent, rgba(232,23,44,0.6) 20%, rgba(232,23,44,0.6) 80%, transparent)",
            }}
          />

          <div className="flex flex-col gap-12 sm:gap-16 md:gap-32 pb-12 mt-12 sm:mt-16 md:mt-24">
            {EXPERIENCES.map((exp, i) => (
              <div key={i} className="relative flex flex-col md:flex-row items-center justify-between w-full">
                
                {/* Center Dot */}
                <div className="absolute left-[30px] md:left-1/2 w-4 h-4 bg-[#0a0a0a] border-2 border-[var(--red)] rounded-full z-10 transform -translate-x-1/2 -ml-2 md:-ml-0 shadow-[0_0_15px_rgba(232,23,44,0.6)] mt-[6px] md:mt-0 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--red)]" />
                </div>

                {exp.align === "left" ? (
                  <>
                    {/* Left Side: Experience */}
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.3 + (i * 0.3) }}
                      className="w-full md:w-[45%] pl-12 md:pl-0 md:pr-16 md:text-right"
                    >
                      <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.02em", marginBottom: 8 }}>
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 mb-3 md:mb-6 md:justify-end">
                        <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                          {exp.company}
                        </span>
                        <span className="hidden md:inline" style={{ color: "rgba(240,240,240,0.2)" }}>—</span>
                        <span style={{ fontSize: 11, fontFamily: "sans-serif", color: "rgba(240,240,240,0.5)", letterSpacing: "0.15em" }}>
                          {exp.date}
                        </span>
                      </div>

                      {/* Mobile Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 md:hidden mb-5">
                        {exp.tech.split(", ").map(t => (
                          <span key={t} className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-white/10 bg-white/5 text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <ul className="space-y-4" style={{ listStyleType: "none", padding: 0 }}>
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(240,240,240,0.45)", fontFamily: "Georgia, serif" }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Right Side: Visual Filler */}
                    <motion.div 
                      initial={{ opacity: 0, x: 40 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.5 + (i * 0.3) }}
                      className="hidden md:flex w-[45%] pl-16 flex-col justify-center items-start opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-default group"
                    >
                      <div className="relative">
                        <div style={{ fontSize: 'clamp(80px, 12vw, 160px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.08)', lineHeight: 0.8 }} className="group-hover:[-webkit-text-stroke:2px_rgba(232,23,44,0.4)] transition-all duration-700">
                          0{i + 1}
                        </div>
                        <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                          <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--red)] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {"// Tech Stack"}
                          </div>
                          <div className="text-xs uppercase tracking-[0.1em] font-sans text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            {exp.tech}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                ) : (
                  <>
                    {/* Left Side: Visual Filler */}
                    <motion.div 
                      initial={{ opacity: 0, x: -40 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.5 + (i * 0.3) }}
                      className="hidden md:flex w-[45%] pr-16 flex-col justify-center items-end text-right opacity-30 hover:opacity-100 transition-opacity duration-700 cursor-default group"
                    >
                      <div className="relative inline-block text-right">
                        <div style={{ fontSize: 'clamp(80px, 12vw, 160px)', fontWeight: 900, color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.08)', lineHeight: 0.8 }} className="group-hover:[-webkit-text-stroke:2px_rgba(232,23,44,0.4)] transition-all duration-700">
                          0{i + 1}
                        </div>
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-right">
                          <div className="text-[10px] uppercase tracking-[0.3em] font-mono text-[var(--red)] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                            {"// Tech Stack"}
                          </div>
                          <div className="text-xs uppercase tracking-[0.1em] font-sans text-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                            {exp.tech}
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Right Side: Experience */}
                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.3 + (i * 0.3) }}
                      className="w-full md:w-[45%] pl-12 md:pl-16 md:text-left mt-12 md:mt-0"
                    >
                      <h3 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.02em", marginBottom: 8 }}>
                        {exp.role}
                      </h3>
                      
                      <div className="flex flex-wrap md:flex-nowrap gap-2 md:gap-3 mb-3 md:mb-6 justify-start">
                        <span style={{ fontSize: 11, fontWeight: 700, fontFamily: "sans-serif", color: "var(--red)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                          {exp.company}
                        </span>
                        <span className="hidden md:inline" style={{ color: "rgba(240,240,240,0.2)" }}>—</span>
                        <span style={{ fontSize: 11, fontFamily: "sans-serif", color: "rgba(240,240,240,0.5)", letterSpacing: "0.15em" }}>
                          {exp.date}
                        </span>
                      </div>

                      {/* Mobile Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 md:hidden mb-5">
                        {exp.tech.split(", ").map(t => (
                          <span key={t} className="text-[9px] uppercase tracking-wider px-2 py-0.5 border border-white/10 bg-white/5 text-white/70">
                            {t}
                          </span>
                        ))}
                      </div>
                      
                      <ul className="space-y-4" style={{ listStyleType: "none", padding: 0 }}>
                        {exp.bullets.map((bullet, idx) => (
                          <li key={idx} style={{ fontSize: 14, lineHeight: 1.85, color: "rgba(240,240,240,0.45)", fontFamily: "Georgia, serif" }}>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.3), transparent)" }} />
    </section>
  );
}
