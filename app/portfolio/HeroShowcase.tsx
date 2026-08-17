"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);



const CAPTIONS = [
  { at: 0.05, text: "Curiosity drives.", sub: "Creation follows." },
  { at: 0.35, text: "Ideas take shape.", sub: "One line at a time." },
  { at: 0.65, text: "Always evolving.", sub: "Always building." },
];

export default function FrameHero() {
  const containerRef  = useRef<HTMLDivElement>(null);
  const titleRef      = useRef<HTMLDivElement>(null);
  const captionRefs   = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef       = useRef<HTMLDivElement>(null);
  const aboutRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.2,
      },
    });

    // Title fades out as scroll begins
    tl.to(titleRef.current, { opacity: 0, y: -40, duration: 0.08 }, 0.06);

    // Captions (bottom left)
    captionRefs.current.forEach((el, i) => {
      if (!el) return;
      const start = CAPTIONS[i].at;
      tl.fromTo(el, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 0.07 }, start);
      tl.to(el, { opacity: 0, y: -20, duration: 0.05 }, start + 0.12);
    });

    // Hero Content
    if (heroRef.current) {
      tl.fromTo(heroRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.1 }, 0.15);
      tl.to(heroRef.current, { opacity: 0, y: -40, duration: 0.08 }, 0.40);
    }

    // About Content
    if (aboutRef.current) {
      tl.fromTo(aboutRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.1 }, 0.55);
      tl.to(aboutRef.current, { opacity: 0, y: -40, duration: 0.08 }, 0.85);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} style={{ height: "600vh", position: "relative" }}>
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

        {/* Cinematic letterbox — bottom ticker bar */}
        <div className="absolute inset-x-0 bottom-0 h-14 pointer-events-none overflow-hidden"
          style={{ background: "#000", borderTop: "1px solid rgba(232,23,44,0.25)" }}>
          <div style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            whiteSpace: "nowrap",
            animation: "tickerScroll 18s linear infinite",
          }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "clamp(20px, 4vw, 60px)",
                paddingRight: "clamp(20px, 4vw, 60px)",
                fontSize: "clamp(10px, 1vw, 13px)",
                fontFamily: "sans-serif",
                letterSpacing: "0.35em",
                textTransform: "uppercase",
                color: "rgba(240,240,240,0.85)",
                fontWeight: 700,
              }}>
                <span style={{ color: "rgba(232,23,44,0.7)", fontSize: "8px" }}>◆</span>
                <span>AADITYA BAGDE</span>
                <span style={{ color: "rgba(232,23,44,0.5)" }}>—</span>
                <span style={{ color: "var(--red)" }}>AI / ML</span>
                <span style={{ color: "rgba(232,23,44,0.5)" }}>—</span>
                <span style={{ color: "rgba(240,240,240,0.85)" }}>SOFTWARE DEVELOPMENT</span>
                <span style={{ color: "rgba(232,23,44,0.5)" }}>—</span>
                <span style={{ color: "rgba(240,240,240,0.4)", fontWeight: 400 }}>2024—2028</span>
                <span style={{ color: "rgba(232,23,44,0.7)", fontSize: "8px" }}>◆</span>
              </span>
            ))}
          </div>
        </div>



        {/* Red scan line */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.025]">
          <div className="w-full h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent"
            style={{ animation: "scanline 5s linear infinite" }} />
        </div>

        {/* Web grid */}
        <div className="absolute inset-0 web-bg pointer-events-none opacity-30" />

        {/* ── INITIAL TITLE (fades out on scroll) ── */}
        <div ref={titleRef} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
          <p className="text-[10px] tracking-[0.8em] uppercase mb-6"
            style={{ color: "var(--red)", fontFamily: "sans-serif" }}>
            Aaditya Bagde Presents
          </p>
          <h1 className="font-black uppercase leading-none" style={{ fontFamily: "sans-serif" }}>
            <span className="block text-6xl md:text-7xl lg:text-8xl"
              style={{
                color: "#fff",
                letterSpacing: "-0.02em",
                textShadow: "0 0 80px rgba(232,23,44,0.5), 0 4px 40px rgba(0,0,0,0.8)",
              }}>
              BUILDING-INTELLIGENT
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl mt-3 italic"
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

        {/* Scroll captions — left side, small */}
        <div className="absolute pointer-events-none"
          style={{ left: "clamp(24px, 5vw, 72px)", bottom: "clamp(80px, 12vh, 130px)", width: "clamp(280px, 38vw, 520px)" }}>
          {CAPTIONS.map((c, i) => (
            <div key={c.text} ref={(el) => { captionRefs.current[i] = el; }}
              className="absolute bottom-0" style={{ opacity: 0, left: 0 }}>
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

        {/* ── HERO CONTENT (SCROLL PHASE 1) ── */}
        <div ref={heroRef} className="absolute inset-0 flex items-center justify-center px-6 md:px-12 pointer-events-auto" style={{ opacity: 0 }}>
          <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
            
            {/* Left: Text Content */}
            <div className="flex-1 text-left flex flex-col items-start md:pl-12 lg:pl-20">
              <p className="text-[10px] tracking-[0.8em] uppercase mb-4" style={{ color: "var(--red)", fontFamily: "sans-serif" }}>
                Hello, I&apos;m
              </p>
              <h2 className="font-black uppercase leading-none" style={{ fontFamily: "sans-serif" }}>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                  style={{ color: "#fff", letterSpacing: "-0.02em", textShadow: "0 0 80px rgba(232,23,44,0.5), 0 4px 40px rgba(0,0,0,0.8)" }}>
                  AADITYA BAGDE
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl mt-3 italic"
                  style={{ color: "var(--red)", letterSpacing: "0.08em", textShadow: "0 0 60px rgba(232,23,44,0.7)" }}>
                  AI/ML STUDENT & DEVELOPER
                </span>
              </h2>
              <p className="mt-8 max-w-xl text-sm md:text-base leading-relaxed text-gray-300 font-serif"
                style={{ textShadow: "0 2px 20px rgba(0,0,0,1)" }}>
                Building intelligent solutions and modern digital experiences with AI, Python, React, and machine learning, while turning ideas into practical applications through clean, scalable, and user-focused development.
              </p>
              <div className="mt-8 flex gap-4">
                <button className="text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 transition-all duration-300 border border-[rgba(232,23,44,0.5)] hover:bg-[rgba(232,23,44,0.1)]"
                  style={{ color: "#fff", cursor: "pointer", fontFamily: "sans-serif" }} onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
                  View Projects
                </button>
                <button className="text-[10px] tracking-[0.25em] uppercase px-6 py-2.5 transition-all duration-300"
                  style={{ background: "var(--red)", color: "#fff", border: "none", cursor: "pointer", fontFamily: "sans-serif" }} onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                  Contact Me
                </button>
              </div>
            </div>

            {/* Right: Image */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <div className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px]">
                <Image src="/me.webp" alt="Aaditya Bagde" fill sizes="(min-width: 1024px) 500px, (min-width: 768px) 450px, 300px" className="object-contain" style={{ filter: "drop-shadow(0 0 60px rgba(232,23,44,0.4))" }} />
              </div>
            </div>

          </div>
        </div>

        {/* ── ABOUT CONTENT (SCROLL PHASE 2) ── */}
        <div ref={aboutRef} className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none" style={{ opacity: 0 }}>
          <p className="text-[10px] tracking-[0.8em] uppercase mb-4" style={{ color: "var(--red)", fontFamily: "sans-serif" }}>
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
            <p>I&apos;m an AI & ML undergraduate exploring machine learning, software development, and real-world applications. Currently pursuing B.Tech in Artificial Intelligence & Machine Learning at Bansal Institute of Science and Technology, Bhopal.</p>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[9px] tracking-[0.5em] uppercase" style={{ color: "var(--red)", fontFamily: "sans-serif" }}>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#e8172c] to-transparent animate-pulse" />
        </div>
      </div>
    </div>
  );
}
