"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const CAPTIONS = [
  { text: "Curiosity drives.", sub: "Creation follows." },
  { text: "Ideas take shape.", sub: "One line at a time." },
  { text: "Always evolving.", sub: "Always building." },
];

export default function FrameHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.6,
      },
    });

    // ── PAGE 1 (Initial: 0 -> 0.32) ──
    // Page 1 Title & Caption 1 fade out smoothly
    tl.to(titleRef.current, { opacity: 0, y: -30, duration: 0.18 }, 0.14);
    if (captionRefs.current[0]) {
      tl.to(captionRefs.current[0], { opacity: 0, y: -15, duration: 0.15 }, 0.15);
    }
    if (scrollCueRef.current) {
      tl.to(scrollCueRef.current, { opacity: 0, duration: 0.12 }, 0.1);
    }

    // ── PAGE 2 (Centered at 0.5, solid & comfortable plateau) ──
    // Hero profile + Caption 2 fade in, stay solid, then fade out
    if (heroRef.current) {
      tl.fromTo(
        heroRef.current,
        { opacity: 0, y: 30, pointerEvents: "none" },
        { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.18 },
        0.26
      );
      tl.to(
        heroRef.current,
        { opacity: 0, y: -30, pointerEvents: "none", duration: 0.16 },
        0.62
      );
    }
    if (captionRefs.current[1]) {
      tl.fromTo(
        captionRefs.current[1],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.18 },
        0.28
      );
      tl.to(
        captionRefs.current[1],
        { opacity: 0, y: -15, duration: 0.16 },
        0.62
      );
    }

    // ── PAGE 3 (0.70 -> 1.0, solid plateau) ──
    // About Me + Caption 3 fade in gracefully
    if (aboutRef.current) {
      tl.fromTo(
        aboutRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.18 },
        0.70
      );
    }
    if (captionRefs.current[2]) {
      tl.fromTo(
        captionRefs.current[2],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.18 },
        0.72
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "260vh", position: "relative" }}>
      <div className="sticky top-0 w-full overflow-hidden" style={{ height: "100vh", backgroundColor: "#040608" }}>

        {/* Dark cinematic vignette */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(4,6,8,0.8) 100%)" }} />

        {/* Top bar */}
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black/80 to-transparent pointer-events-none" />

        {/* Bottom bar */}
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#040608] to-transparent pointer-events-none" />

        {/* Cinematic letterbox — top bar */}
        <div className="absolute inset-x-0 top-0 h-14 pointer-events-none" style={{ background: "rgba(0,0,0,0.6)" }} />

        {/* Sleek bottom divider with subtle glowing center */}
        <div className="absolute inset-x-0 bottom-0 pointer-events-none z-20">
          <div className="w-full h-px" style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(232,23,44,0.2) 15%, rgba(232,23,44,0.7) 50%, rgba(232,23,44,0.2) 85%, transparent 100%)",
            boxShadow: "0 0 12px rgba(232,23,44,0.3)"
          }} />
          <div className="w-full h-px" style={{
            background: "linear-gradient(90deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)",
            marginTop: "1px"
          }} />
        </div>

        {/* Red scan line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025]">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent"
            style={{ animation: "scanline 5s linear infinite" }} />
        </div>

        {/* Web grid */}
        <div className="absolute inset-0 web-bg pointer-events-none opacity-30" />

        {/* ── INITIAL TITLE (PAGE 1) ── */}
        <div ref={titleRef} className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 pointer-events-none">
          <p className="text-[10px] tracking-[0.8em] uppercase mb-6"
            style={{ color: "var(--red)", fontFamily: "sans-serif" }}>
            AI & MACHINE LEARNING DEVELOPER
          </p>
          <h1 className="font-black uppercase leading-none" style={{ fontFamily: "sans-serif" }}>
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
              style={{
                color: "#fff",
                letterSpacing: "-0.02em",
                textShadow: "0 0 80px rgba(232,23,44,0.5), 0 4px 40px rgba(0,0,0,0.8)",
              }}>
              BUILDING INTELLIGENT
            </span>
            <span className="block text-sm sm:text-base md:text-lg lg:text-4xl xl:text-5xl mt-2 sm:mt-3 italic"
              style={{
                color: "var(--red)",
                letterSpacing: "0.08em",
                textShadow: "0 0 60px rgba(232,23,44,0.7)",
              }}>
              AI / ML · SOFTWARE DEVELOPMENT
            </span>
          </h1>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-px w-16" style={{ background: "rgba(232,23,44,0.5)" }} />
            <span className="text-xs tracking-[0.4em] uppercase" style={{ color: "rgba(240,240,240,0.5)", fontFamily: "sans-serif" }}>
              B.TECH AI & MACHINE LEARNING · 2024—2028
            </span>
            <div className="h-px w-16" style={{ background: "rgba(232,23,44,0.5)" }} />
          </div>
        </div>

        {/* Scroll captions — left side, exactly 3 comments (one for each page) */}
        <div className="absolute pointer-events-none hidden md:block"
          style={{ left: "clamp(24px, 5vw, 72px)", bottom: "clamp(30px, 5vh, 50px)", width: "clamp(280px, 38vw, 520px)", zIndex: 25 }}>
          {CAPTIONS.map((c, i) => (
            <div key={c.text} ref={(el) => { captionRefs.current[i] = el; }}
              className="absolute bottom-0" style={{ opacity: i === 0 ? 1 : 0, left: 0 }}>
              {/* Small red accent line */}
              <div style={{ width: 28, height: 2, background: "var(--red)", marginBottom: 10, opacity: 0.8 }} />
              <p style={{
                fontSize: "clamp(15px, 1.8vw, 22px)",
                fontWeight: 400,
                fontStyle: "italic",
                fontFamily: "Georgia, serif",
                color: "rgba(240,240,240,0.9)",
                letterSpacing: "0.01em",
                lineHeight: 1.4,
                textShadow: "0 2px 20px rgba(0,0,0,1), 0 0 40px rgba(0,0,0,0.8)",
              }}>
                {c.text}
              </p>
              {c.sub && (
                <p style={{
                  marginTop: 8,
                  fontSize: "clamp(8px, 0.9vw, 11px)",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "rgba(232,23,44,0.85)",
                  fontFamily: "sans-serif",
                  textShadow: "0 0 16px rgba(232,23,44,0.5)",
                }}>
                  {c.sub}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* ── HERO CONTENT (PAGE 2) ── */}
        <div ref={heroRef} className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-12 pointer-events-auto" style={{ opacity: 0 }}>
          <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            
            {/* Left: Text Content */}
            <div className="w-full lg:w-[58%] text-center lg:text-left flex flex-col items-center lg:items-start max-w-2xl lg:max-w-none mx-auto lg:mx-0 lg:pl-12 xl:pl-20">
              <p className="text-[9px] sm:text-[10px] tracking-[0.55em] sm:tracking-[0.8em] uppercase mb-3 sm:mb-4" style={{ color: "var(--red)", fontFamily: "sans-serif" }}>
                Hello, I&apos;m
              </p>
              <h2 className="font-black uppercase leading-none" style={{ fontFamily: "sans-serif" }}>
                <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{ color: "#fff", letterSpacing: "-0.02em", textShadow: "0 0 80px rgba(232,23,44,0.5), 0 4px 40px rgba(0,0,0,0.8)" }}>
                  AADITYA BAGDE
                </span>
                <span className="block text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-2.5 sm:mt-3 italic"
                  style={{ color: "var(--red)", letterSpacing: "0.08em", textShadow: "0 0 60px rgba(232,23,44,0.7)" }}>
                  AI/ML STUDENT & DEVELOPER
                </span>
              </h2>
              <p className="mt-5 sm:mt-6 lg:mt-8 max-w-md sm:max-w-lg lg:max-w-xl text-xs sm:text-sm md:text-base leading-relaxed text-gray-300 font-serif mx-auto lg:mx-0" style={{ textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
                Building intelligent solutions and modern digital experiences with AI, Python, React, and machine learning, while turning ideas into practical applications through clean, scalable, and user-focused development.
              </p>
              <div className="mt-6 sm:mt-8 flex flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="text-[10px] tracking-[0.22em] uppercase px-5 sm:px-6 py-2.5 transition-all duration-300 border border-[rgba(232,23,44,0.5)] hover:bg-[rgba(232,23,44,0.1)]"
                  style={{ color: "#fff", cursor: "pointer", fontFamily: "sans-serif" }} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  View Projects
                </button>
                <button className="text-[10px] tracking-[0.22em] uppercase px-5 sm:px-6 py-2.5 transition-all duration-300"
                  style={{ background: "var(--red)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "sans-serif" }} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right: Image (Hidden on mobile and tablet, only visible on laptop/desktop lg screens and up) */}
            <div className="hidden lg:flex flex-1 w-full lg:w-[42%] justify-end mt-0">
              <div className="relative lg:w-[500px] lg:h-[500px]">
                <Image src="/me.webp" alt="Aaditya Bagde" fill sizes="(min-width: 1024px) 500px, 0px" className="object-contain" style={{ filter: "drop-shadow(0 0 60px rgba(232,23,44,0.4))" }} priority />
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[94%] sm:w-[90%] md:w-[84%] h-[3px] pointer-events-none"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, #e8172c 15%, #ff4757 50%, #e8172c 85%, transparent 100%)",
                    boxShadow: "0 0 20px rgba(232,23,44,0.6)",
                  }}
                />
              </div>
            </div>

          </div>
        </div>

        {/* ── ABOUT CONTENT (PAGE 3) ── */}
        <div ref={aboutRef} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none" style={{ opacity: 0 }}>
          <p className="text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.45em] sm:tracking-[0.55em] md:tracking-[0.8em] uppercase mb-4" style={{ color: "var(--red)", fontFamily: "sans-serif" }}>
            ABOUT ME
          </p>
          <h2 className="font-black uppercase leading-none" style={{ fontFamily: "sans-serif" }}>
            <span className="block text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "#fff", letterSpacing: "-0.02em", textShadow: "0 0 80px rgba(232,23,44,0.5), 0 4px 40px rgba(0,0,0,0.8)" }}>
              CURIOUS. BUILDING. EVOLVING.
            </span>
          </h2>
          <div className="mt-8 max-w-3xl flex flex-col gap-4 text-sm md:text-base leading-relaxed text-gray-300 font-serif"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
            <p>I&apos;m an AI & ML engineer focused on building practical, high-performance systems. Driven by curiosity to solve complex problems through machine learning models, modern web technologies, and clean architecture.</p>
          </div>
        </div>

        {/* Scroll cue */}
        <div ref={scrollCueRef} className="absolute bottom-10 sm:bottom-14 md:bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20 pointer-events-none">
          <span className="text-[9px] tracking-[0.5em] uppercase" style={{ color: "var(--red)", fontFamily: "sans-serif" }}>Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#e8172c] to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
