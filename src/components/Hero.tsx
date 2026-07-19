"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#020813]"
    >
      {/* Background Visuals with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 w-full h-full z-0">
        {/* Fallback Image */}
        <Image
          src="/images/hero-fallback.png"
          alt="Luxury architectural pool"
          fill
          priority
          quality={100}
          className={`object-cover w-full h-full transition-opacity duration-1000 ${
            videoLoaded ? "opacity-0" : "opacity-45"
          }`}
        />

        {/* Cinematic Autoplay Drone Video with Slow Zoom Effect */}
        <motion.div
          animate={{ scale: [1.02, 1.08, 1.02] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onCanPlayThrough={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              videoLoaded ? "opacity-45" : "opacity-0"
            }`}
          >
            <source
              src="https://player.vimeo.com/external/517602124.sd.mp4?s=910dfbc9d96c9c64b584a7e91a0c4f51e06fa99d&profile_id=165&oauth2_token_id=57447761"
              type="video/mp4"
            />
          </video>
        </motion.div>

        {/* Sophisticated Luxury Overlay */}
        <div
          className="absolute inset-0 z-[2] pointer-events-none"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
          }}
        />

        {/* Cyan Ambient Radial Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(87,214,255,0.06)_0%,transparent_70%)] z-[1] pointer-events-none" />

        {/* Water Reflection / Shimmer Effects */}
        <motion.div
          animate={{
            opacity: [0.03, 0.08, 0.03],
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(87,214,255,0.08)_0%,transparent_60%)] pointer-events-none mix-blend-screen z-[2]"
        />
        <motion.div
          animate={{
            opacity: [0.04, 0.1, 0.04],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,157,255,0.06)_0%,transparent_60%)] pointer-events-none mix-blend-screen z-[2]"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-transparent pointer-events-none mix-blend-overlay animate-pulse duration-[8000ms] z-[2]" />
      </motion.div>

      {/* Floating Luxury Elements (Hidden on mobile for readability, organic delays) */}
      {/* Element 1: 500+ Projects Completed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.2 },
          scale: { duration: 1, delay: 1.2 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 },
        }}
        className="absolute left-[6%] top-[38%] z-20 hidden md:flex flex-col gap-1 p-5 rounded-2xl glass-nav border border-white/10 shadow-2xl backdrop-blur-lg w-48 text-left pointer-events-none"
      >
        <span className="font-serif text-3xl font-extrabold text-[#5CC6EC] tracking-tight">500+</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">Projects Completed</span>
        <span className="text-[9px] text-slate-400 font-light leading-relaxed">Delivering aquatic luxury environments globally.</span>
      </motion.div>

      {/* Element 2: 20+ Years Experience */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.4 },
          scale: { duration: 1, delay: 1.4 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 },
        }}
        className="absolute right-[6%] top-[48%] z-20 hidden md:flex flex-col gap-1 p-5 rounded-2xl glass-nav border border-white/10 shadow-2xl backdrop-blur-lg w-48 text-left pointer-events-none"
      >
        <span className="font-serif text-3xl font-extrabold text-[#5CC6EC] tracking-tight">20+</span>
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-200">Years Experience</span>
        <span className="text-[9px] text-slate-400 font-light leading-relaxed">Sculpting high-end private structures.</span>
      </motion.div>

      {/* Element 3: Award-Winning Design Studio */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.6 },
          scale: { duration: 1, delay: 1.6 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
        }}
        className="absolute right-[12%] top-[20%] z-20 hidden lg:flex flex-col gap-1 p-5 rounded-2xl glass-nav border border-white/10 shadow-2xl backdrop-blur-lg w-52 text-left pointer-events-none"
      >
        <div className="flex items-center gap-1.5 text-[#5CC6EC] mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6EC] animate-pulse" />
          <span className="text-[9px] font-bold uppercase tracking-widest">Award-Winning</span>
        </div>
        <span className="font-serif text-base font-bold text-white leading-tight">Design Studio</span>
        <span className="text-[9px] text-slate-400 font-light leading-relaxed">Accredited luxury architectural group.</span>
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12"
      >
        {/* Subtle Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 shadow-[0_0_15px_rgba(87,214,255,0.08)] backdrop-blur-md mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6EC] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#5CC6EC]">
            Aesthetic Architecture & Construction
          </span>
        </motion.div>

        {/* Elegant Line-by-Line Headline Reveal */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-[-0.03em] text-white mb-6 leading-[1.05]">
          <span className="block overflow-hidden relative py-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.5,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="block"
            >
              Crafting Extraordinary Pools
            </motion.span>
          </span>
          <span className="block overflow-hidden relative py-1">
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1.0,
                delay: 0.7,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className="block text-[#5CC6EC]/95"
            >
              & Outdoor Living Spaces
            </motion.span>
          </span>
        </h1>

        {/* Description Fade In */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1.0, delay: 1.1, ease: "easeOut" }}
          className="text-slate-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We design, engineer, and build world-class swimming pools that redefine luxury living. Every project is an architectural masterpiece.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 1.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-20"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest bg-[#5CC6EC] text-[#0F172A] hover:bg-[#0A5C9E] hover:text-white transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 shadow-[0_0_20px_rgba(92,198,236,0.35)] cursor-pointer"
          >
            Request a Consultation
          </button>
          <button
            onClick={() => handleScrollTo("projects")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest border border-white/25 text-white hover:bg-white hover:text-[#0F172A] transition-all duration-300 hover:scale-105 hover:-translate-y-1 active:scale-95 backdrop-blur-sm bg-white/5 cursor-pointer"
          >
            View Portfolio
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 cursor-pointer"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => handleScrollTo("services")}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-widest text-[#5CC6EC] font-semibold">
            Scroll to Explore
          </span>
          <ArrowDown className="w-4 h-4 text-white" />
        </motion.div>
      </motion.div>
    </section>
  );
}
