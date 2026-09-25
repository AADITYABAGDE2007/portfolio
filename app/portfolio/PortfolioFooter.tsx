"use client";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full overflow-hidden bg-transparent" style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 sm:gap-12 border-b border-[rgba(255,255,255,0.05)] pb-10 sm:pb-12">
          
          <div className="max-w-sm">
            <div className="mb-6">
              <Image src="/full_logo.webp" alt="Aaditya Bagde Logo" width={80} height={80} className="object-contain" style={{ filter: "drop-shadow(0 0 12px rgba(232,23,44,0.6))" }} />
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(240,240,240,0.4)", fontFamily: "sans-serif" }}>
              Machine Learning Engineer & Frontend Developer. Building intelligent systems and beautiful interfaces.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 sm:gap-12 md:gap-24">
            <div className="flex flex-col gap-4">
              <h4 style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif" }}>Navigation</h4>
              {["Skills", "Projects", "Experience", "Certifications"].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: 12, color: "rgba(240,240,240,0.6)", fontFamily: "sans-serif" }} className="hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <h4 style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif" }}>Socials</h4>
              {[
                { name: "LinkedIn", link: "https://www.linkedin.com/in/aaditya-bagde" },
                { name: "GitHub", link: "https://github.com/AADITYABAGDE2007" },
                { name: "HackerRank", link: "https://www.hackerrank.com/profile/bagdeaaditya507" },
                { name: "LeetCode", link: "https://leetcode.com/u/aadityabagde/" }
              ].map(item => (
                <a key={item.name} href={item.link} target="_blank" rel="noreferrer" style={{ fontSize: 12, color: "rgba(240,240,240,0.6)", fontFamily: "sans-serif" }} className="hover:text-white transition-colors duration-300">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-10 sm:mt-12">
          <p style={{ fontSize: 11, color: "rgba(240,240,240,0.3)", fontFamily: "sans-serif", letterSpacing: "0.05em" }}>
            © {new Date().getFullYear()} Aaditya Bagde. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="group flex items-center justify-center w-12 h-12 rounded-full border border-[rgba(255,255,255,0.1)] hover:border-[var(--red)] transition-colors duration-500 cursor-pointer"
            style={{ background: "rgba(255,255,255,0.02)" }}
            aria-label="Scroll to top"
          >
            <span className="transform -rotate-90 group-hover:-translate-y-1 transition-transform duration-300 text-white group-hover:text-[var(--red)] text-lg">&rarr;</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
