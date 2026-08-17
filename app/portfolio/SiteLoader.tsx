"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
  const [phase, setPhase] = useState<"hold" | "split" | "done">("hold");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("split"), 1600);
    const t2 = setTimeout(() => setPhase("done"),  2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === "done") return null;

  const splitting = phase === "split";

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 9999, pointerEvents: "none" }}>

      {/* ── LEFT PANEL ── */}
      <motion.div
        animate={{ x: splitting ? "-100%" : "0%" }}
        transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: 0, right: "50%",
          background: "#040608",
          overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "flex-end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px" }}>
          <motion.img
            src="/left.webp"
            alt=""
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: "clamp(100px, 18vw, 260px)",
              width: "auto",
              maxWidth: "48vw",
              objectFit: "contain",
              filter: "drop-shadow(0 0 40px rgba(232,23,44,0.7))",
              flexShrink: 0,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: "#fff", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900,
              fontFamily: "sans-serif", letterSpacing: "0.2em",
              textShadow: "0 0 80px rgba(232,23,44,0.7), 0 0 40px rgba(232,23,44,0.4), 0 4px 40px rgba(0,0,0,0.8)",
              marginRight: "10px",
            }}
          >
            STEP INTO
          </motion.div>
        </div>
      </motion.div>

      {/* ── RIGHT PANEL ── */}
      <motion.div
        animate={{ x: splitting ? "100%" : "0%" }}
        transition={{ duration: 0.95, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: "50%", right: 0,
          background: "#040608",
          overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "flex-start",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "16px" }}>
          <motion.img
            src="/right.webp"
            alt=""
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              height: "clamp(100px, 18vw, 260px)",
              width: "auto",
              maxWidth: "48vw",
              objectFit: "contain",
              filter: "drop-shadow(0 0 40px rgba(232,23,44,0.7))",
              flexShrink: 0,
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: "#fff", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 900,
              fontFamily: "sans-serif", letterSpacing: "0.2em",
              textShadow: "0 0 80px rgba(232,23,44,0.7), 0 0 40px rgba(232,23,44,0.4), 0 4px 40px rgba(0,0,0,0.8)",
              marginLeft: "10px",
            }}
          >
            MY WORLD
          </motion.div>
        </div>
      </motion.div>

      {/* Vertical seam line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: splitting ? 0 : 1 }}
        transition={splitting ? { duration: 0.25 } : { delay: 1.1, duration: 0.4 }}
        style={{
          position: "absolute",
          top: 0, bottom: 0, left: "50%",
          width: 1,
          background: "linear-gradient(180deg, transparent, rgba(232,23,44,0.7) 30%, rgba(232,23,44,0.7) 70%, transparent)",
        }}
      />

      {/* Red centre glow */}
      <motion.div
        animate={{ opacity: splitting ? 0 : 1 }}
        transition={{ duration: 0.35 }}
        style={{
          position: "absolute",
          top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: "35vw", height: "65vh",
          background: "radial-gradient(ellipse, rgba(232,23,44,0.3) 0%, rgba(232,23,44,0.1) 40%, transparent 70%)",
          filter: "blur(32px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
