"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const SKILL_CATEGORIES = [
  {
    title: "LANGUAGES",
    skills: ["Python", "C++", "C", "JavaScript (ES6+)"],
    desc: "Foundation in data structures, algorithmic problem solving, and modern web scripting."
  },
  {
    title: "FRONTEND",
    skills: ["React.js", "JSX", "Tailwind CSS", "HTML5", "CSS3", "React Router DOM", "Axios"],
    desc: "Building responsive, cross-device UIs and optimizing web performance."
  },
  {
    title: "ML & DATA",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "PyTorch"],
    desc: "Expertise in data preprocessing, model training, and performance evaluation."
  },
  {
    title: "BACKEND & TOOLS",
    skills: ["FastAPI", "REST APIs", "MySQL", "Git", "GitHub", "VS Code"],
    desc: "Server-side integration, version control workflows, and root-cause debugging."
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="relative overflow-hidden" style={{ background: "#040608", minHeight: "100vh", padding: "80px 0" }}>
      {/* Background elements */}
      <div className="absolute inset-0 web-bg opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[rgba(232,23,44,0.03)] to-transparent pointer-events-none" />
      
      {/* Giant Watermark */}
      <div
        className="absolute pointer-events-none select-none z-0 hidden md:block"
        aria-hidden
        style={{
          top: "50%", left: "-5%",
          transform: "translateY(-50%)",
          fontSize: "clamp(80px, 18vw, 220px)",
          fontWeight: 900,
          fontFamily: "sans-serif",
          letterSpacing: "-0.04em",
          color: "rgba(255,255,255,0.02)",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        BUILT WITH
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 sm:mb-16 md:mb-24"
        >
          <p style={{ fontSize: 10, letterSpacing: "0.7em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif", marginBottom: 16 }}>
            Technical Arsenal
          </p>
          <h2 style={{ fontSize: "clamp(32px, 6vw, 64px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, textShadow: "0 0 60px rgba(232,23,44,0.3)" }}>
            BUILT WI<span className="red-gradient">TH</span>
          </h2>
          <div className="w-24 h-1 mt-8" style={{ background: "linear-gradient(90deg, var(--red), transparent)" }} />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
              className="group relative p-6 sm:p-8 md:p-10 transition-all duration-500 overflow-hidden"
              style={{
                background: "#080a0e",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Top red accent */}
              <div className="absolute inset-x-0 top-0 h-0.5"
                style={{ background: "linear-gradient(90deg, var(--red), transparent)", opacity: 0.5 }} />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(232,23,44,0.08) 0%, transparent 70%)" }} />
              
              <h3 style={{ fontSize: 18, letterSpacing: "0.2em", fontWeight: 700, fontFamily: "sans-serif", color: "#fff", marginBottom: 16 }} className="group-hover:text-[var(--red)] transition-colors duration-300">
                {cat.title.slice(0, -2)}<span className="red-gradient">{cat.title.slice(-2)}</span>
              </h3>
              
              <p style={{ fontSize: 14, lineHeight: 1.8, color: "rgba(240,240,240,0.4)", fontFamily: "Georgia, serif", marginBottom: 24 }}>
                {cat.desc}
              </p>

              <div className="flex flex-wrap gap-2 md:gap-3">
                {cat.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontFamily: "sans-serif",
                    color: "rgba(240,240,240,0.7)",
                    padding: "6px 12px",
                    background: "rgba(0,0,0,0.5)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }} className="group-hover:border-[rgba(232,23,44,0.3)] transition-colors duration-300">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
