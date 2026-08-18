"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section id="contact" ref={ref} className="relative overflow-hidden pt-20 sm:pt-24 md:pt-32 pb-14 sm:pb-16 bg-transparent">
      {/* Top Divider */}
      <div className="absolute top-0 inset-x-0 w-full h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(232,23,44,0.3), transparent)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start lg:items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
          >
            <p style={{ fontSize: 10, letterSpacing: "0.6em", textTransform: "uppercase", color: "var(--red)", fontFamily: "sans-serif", marginBottom: 16 }}>
              Collaborate
            </p>
            <h2 style={{ fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 900, fontFamily: "sans-serif", color: "#fff", letterSpacing: "-0.03em", lineHeight: 0.95, marginBottom: 24 }}>
              Get In<br /><span className="red-gradient">Touch.</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "rgba(240,240,240,0.6)", fontFamily: "Georgia, serif", marginBottom: 40, maxWidth: 400 }}>
              Whether you have a project in mind, want to discuss machine learning implementations, or just want to connect. Send a message directly to my inbox.
            </p>

            <div className="flex flex-col gap-6 w-full max-w-sm hidden md:flex">
              {[
                { name: "LinkedIn", val: "Connect", link: "https://www.linkedin.com/in/aaditya-bagde" },
                { name: "GitHub", val: "View Repos", link: "https://github.com/AADITYABAGDE2007" },
                { name: "Instagram", val: "Follow", link: "https://www.instagram.com/justaadi___/" },
                { name: "LeetCode", val: "Profile", link: "https://leetcode.com/u/aadityabagde/" }
              ].map((item, idx) => (
                <motion.a 
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                  className="group flex items-center justify-between pb-4 border-b border-[rgba(255,255,255,0.05)] hover:border-[var(--red)] transition-colors duration-500"
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#fff", letterSpacing: "0.05em", fontFamily: "sans-serif" }} className="group-hover:text-[var(--red)] transition-colors duration-300">
                    {item.name}
                  </span>
                  <span style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif" }} className="group-hover:text-white transition-colors duration-300">
                    {item.val} &rarr;
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full relative"
          >
            {/* Form Container with glassmorphism */}
            <div className="p-6 sm:p-8 md:p-12 rounded-sm relative overflow-hidden" style={{ background: "rgba(4,6,8,0.4)", border: "1px solid rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}>
              {/* Subtle top red line */}
              <div className="absolute top-0 inset-x-0 h-0.5" style={{ background: "linear-gradient(90deg, var(--red), transparent)", opacity: 0.6 }} />

              <form action="https://formspree.io/f/xppayrgg" method="POST" className="flex flex-col gap-8">
                
                <div className="relative">
                  <label style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,240,240,0.4)", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Your Name</label>
                  <input 
                    type="text" 
                    name="Name" 
                    required 
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.2)] focus:border-[var(--red)] text-white pb-3 outline-none transition-colors duration-300"
                    style={{ fontSize: 16, fontFamily: "sans-serif" }}
                  />
                </div>

                <div className="relative">
                  <label style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,240,240,0.4)", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Your Email</label>
                  <input 
                    type="email" 
                    name="Email" 
                    required 
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.2)] focus:border-[var(--red)] text-white pb-3 outline-none transition-colors duration-300"
                    style={{ fontSize: 16, fontFamily: "sans-serif" }}
                  />
                </div>

                <div className="relative">
                  <label style={{ fontSize: 9, letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(240,240,240,0.4)", fontFamily: "sans-serif", display: "block", marginBottom: 8 }}>Message</label>
                  <textarea 
                    name="Message" 
                    required 
                    rows={4}
                    className="w-full bg-transparent border-b border-[rgba(255,255,255,0.2)] focus:border-[var(--red)] text-white pb-3 outline-none transition-colors duration-300 resize-none"
                    style={{ fontSize: 16, fontFamily: "sans-serif" }}
                  ></textarea>
                </div>

                {/* Cinematic Submit Button */}
                <button 
                  type="submit" 
                  className="group relative flex items-center justify-center gap-4 w-full py-5 overflow-hidden transition-all duration-500 mt-4 cursor-pointer"
                  style={{ border: "1px solid rgba(232,23,44,0.4)", background: "rgba(232,23,44,0.05)" }}
                >
                  <div className="absolute inset-0 bg-[var(--red)] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                  
                  <span className="relative z-10 text-xs tracking-[0.4em] uppercase text-white font-bold group-hover:text-black transition-colors duration-500" style={{ fontFamily: "sans-serif" }}>
                    Send Message
                  </span>
                  
                  <span className="relative z-10 transform group-hover:translate-x-2 transition-transform duration-500 text-[var(--red)] group-hover:text-black">
                    &rarr;
                  </span>
                </button>
                
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
