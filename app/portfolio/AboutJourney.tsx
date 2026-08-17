"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const ACTS = [
  {
    label: "01 — B.TECH",
    title: "Artificial Intelligence & Machine Learning",
    desc: "Currently pursuing a B.Tech at Bansal Institute of Science and Technology, Bhopal, with a focus on AI/ML and practical technology development."
  },
  {
    label: "02 — HIGHER SECONDARY",
    title: "Class XII",
    desc: "Completed Higher Secondary Education from Govt. Excellence School, Pandhurna, with 73% under the NCERT curriculum."
  },
  {
    label: "03 — HIGH SCHOOL",
    title: "Class X",
    desc: "Completed High School from Govt. High School, Bhuli, with 71% under the NCERT curriculum."
  },
];

const STATS = [
  { val: "2024-28", label: "B.Tech Duration" },
  { val: "7.86", label: "Current CGPA" },
  { val: "AIML", label: "Specialization" },
];

export default function OriginSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="education" ref={ref} className="relative overflow-hidden" style={{ background: "#040608", minHeight: "100vh" }}>

      {/* Parallax red orb */}
      <motion.div style={{ y: bgY }} className="absolute pointer-events-none"
        aria-hidden
        initial={false}>
        <div style={{
          position: "absolute",
          top: "10vh", left: "-20vw",
          width: "70vw", height: "70vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,23,44,0.12) 0%, rgba(232,23,44,0.04) 40%, transparent 70%)",
          filter: "blur(80px)",
        }} />
      </motion.div>

      {/* Diagonal slash accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: "absolute",
          top: 0, right: "38%",
          width: 1, height: "100%",
          background: "linear-gradient(180deg, transparent 0%, rgba(232,23,44,0.15) 30%, rgba(232,23,44,0.15) 70%, transparent 100%)",
        }} />
        {/* Faint diagonal lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.04 }} preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={i}
              x1={`${-20 + i * 18}%`} y1="0"
              x2={`${20 + i * 18}%`} y2="100%"
              stroke="#e8172c" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.3), transparent)" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-28 lg:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-start">

          {/* ── LEFT ── */}
          <div className="relative">

            {/* Label */}
            <motion.p initial={{ opacity: 0, x: -20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.7 }}
              style={{ fontSize: 10, letterSpacing: "0.7em", textTransform: "uppercase", color: "rgba(232,23,44,0.6)", fontFamily: "sans-serif", marginBottom: 28 }}>
              THE ACADEMIC JOURNEY
            </motion.p>

            {/* Giant title — each word staggered */}
            <div style={{ overflow: "hidden", marginBottom: 48 }}>
              {["LEARNING", "BEYOND", "LIMITS."].map((word, i) => (
                <motion.div key={word}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={inView ? { y: "0%", opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}>
                  <span style={{
                    display: "block",
                    fontSize: "clamp(64px, 10vw, 90px)",
                    fontWeight: 900,
                    fontFamily: "sans-serif",
                    letterSpacing: "-0.03em",
                    lineHeight: 0.88,
                    color: word === "BEYOND" ? "var(--red)" : "#fff",
                    textShadow: word === "BEYOND"
                      ? "0 0 80px rgba(232,23,44,0.5)"
                      : "0 4px 40px rgba(0,0,0,0.6)",
                  }}>
                    {word}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Body copy */}
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.4 }}
              style={{ fontSize: 14, lineHeight: 1.95, color: "rgba(240,240,240,0.55)", maxWidth: 440, marginBottom: 20 }}>
              My journey in technology began with a foundation in science and continues through Artificial Intelligence & Machine Learning, where I focus on building practical skills and real-world applications.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay: 0.5 }}
              style={{ fontSize: 14, lineHeight: 1.95, color: "rgba(240,240,240,0.3)", maxWidth: 440, marginBottom: 56 }}>
              Each chapter has shaped the way I learn, solve problems, and approach new challenges, preparing me for what comes next.
            </motion.p>

            {/* Stats row */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: "flex", gap: 0, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {STATS.map((s, i) => (
                <div key={s.label} style={{
                  flex: 1, padding: "20px 0",
                  borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  paddingLeft: i > 0 ? 16 : 0,
                  paddingRight: 8,
                }}>
                  <div className="red-gradient" style={{ fontSize: "clamp(16px, 2.2vw, 28px)", fontWeight: 900, fontFamily: "sans-serif", letterSpacing: "-0.02em", lineHeight: 1, whiteSpace: "nowrap" }}>
                    {s.val}
                  </div>
                  <div style={{ fontSize: "clamp(7px, 1vw, 9px)", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(240,240,240,0.2)", fontFamily: "sans-serif", marginTop: 8 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT — Act timeline ── */}
          <div className="relative mt-16 lg:mt-24">
            {/* Vertical red line */}
            <motion.div
              initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
              style={{
                position: "absolute", left: 0, top: 0, bottom: 0,
                width: 1,
                background: "linear-gradient(180deg, transparent, rgba(232,23,44,0.6) 20%, rgba(232,23,44,0.6) 80%, transparent)",
                transformOrigin: "top",
              }} />

            <div className="pl-10 flex flex-col gap-0">
              {ACTS.map((act, i) => (
                <motion.div key={act.label}
                  initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + 0.15 * i }}
                  className="group relative"
                  style={{ paddingBottom: i < ACTS.length - 1 ? 48 : 0 }}>

                  {/* Dot on the line */}
                  <div style={{
                    position: "absolute", left: -40, top: 6,
                    width: 14, height: 14,
                    borderRadius: "50%",
                    border: "1px solid var(--red)",
                    background: "#040608",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "box-shadow 0.3s",
                  }}
                    className="group-hover:shadow-[0_0_12px_rgba(232,23,44,0.7)]">
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--red)" }} />
                  </div>

                  {/* Act label */}
                  <p style={{ fontSize: 9, letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(232,23,44,0.5)", fontFamily: "sans-serif", marginBottom: 10 }}>
                    {act.label}
                  </p>

                  {/* Act title */}
                  <h4 style={{ fontSize: "clamp(20px, 2.5vw, 30px)", fontWeight: 700, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.01em", marginBottom: 12, lineHeight: 1.1 }}
                    className="group-hover:text-red-400 transition-colors duration-300">
                    {act.title}
                  </h4>

                  {/* Desc */}
                  <p style={{ fontSize: 13, lineHeight: 1.85, color: "rgba(240,240,240,0.38)", maxWidth: 400 }}>
                    {act.desc}
                  </p>

                  {/* Connector line between acts */}
                  {i < ACTS.length - 1 && (
                    <div style={{
                      position: "absolute", left: -33, top: 20,
                      width: 1, height: "calc(100% - 20px)",
                      background: "rgba(232,23,44,0.15)",
                    }} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.2), transparent)" }} />
    </section>
  );
}
