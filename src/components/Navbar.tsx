"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Resize listener to track mobile status
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Scroll listener to update scrolled status & active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
      
      const sections = navLinks.map(link => {
        const id = link.href.substring(1);
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            name: link.name,
            top: rect.top + window.scrollY - 180,
            bottom: rect.bottom + window.scrollY - 180,
          };
        }
        return null;
      }).filter(Boolean);

      const scrollPos = window.scrollY;
      const currentSection = sections.find(
        section => scrollPos >= (section?.top ?? 0) && scrollPos < (section?.bottom ?? 0)
      );

      if (currentSection) {
        setActiveLink(currentSection.name);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, name: string) => {
    e.preventDefault();
    setActiveLink(name);
    setMobileMenuOpen(false);
    setIsHovered(false);

    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  };

  // Determine navigation state
  // Desktop compact mode when scrolled AND not hovered
  const isCompact = !isMobile && scrolled && !isHovered;

  return (
    <header className="fixed top-3 left-0 w-full z-50 pointer-events-none flex justify-center px-4">
      <motion.div
        layout
        onMouseEnter={() => !isMobile && setIsHovered(true)}
        onMouseLeave={() => !isMobile && setIsHovered(false)}
        onClick={() => isMobile && !mobileMenuOpen && setMobileMenuOpen(true)}
        transition={{
          type: "spring",
          stiffness: 350,
          damping: 30,
          mass: 0.8
        }}
        className={`pointer-events-auto shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/10 backdrop-blur-xl bg-[#020813]/85 text-white overflow-hidden ${
          isMobile
            ? mobileMenuOpen
              ? "w-full max-w-sm rounded-[32px] p-6"
              : "w-[220px] h-12 rounded-full px-4 flex items-center justify-between cursor-pointer"
            : isCompact
            ? "w-[130px] h-12 rounded-full px-5 flex items-center justify-center"
            : "w-full max-w-5xl h-14 rounded-full px-6 flex items-center justify-between"
        }`}
      >
        <AnimatePresence mode="wait">
          {/* 1. MOBILE COLLAPSED STATE */}
          {isMobile && !mobileMenuOpen && (
            <motion.div
              key="mobile-collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-2">
                <span className="font-serif text-sm font-bold tracking-widest">ADLAT</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6EC] animate-pulse" />
              </div>

              <div className="flex items-center gap-2.5">
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">Explore</span>
                <Menu className="w-4 h-4 text-slate-300" />
              </div>
            </motion.div>
          )}

          {/* 2. MOBILE EXPANDED STATE */}
          {isMobile && mobileMenuOpen && (
            <motion.div
              key="mobile-expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-6 w-full"
            >
              {/* Header inside mobile island */}
              <div className="flex items-center justify-between pb-3 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-sm font-bold tracking-widest">ADLAT</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6EC]" />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setMobileMenuOpen(false);
                  }}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.name)}
                    className={`text-base font-sans tracking-widest py-1 transition-colors uppercase ${
                      activeLink === link.name ? "text-[#5CC6EC] font-semibold" : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                ))}
              </div>

              {/* Call to Action */}
              <div className="flex flex-col gap-3 pt-3 border-t border-white/5">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact", "Contact")}
                  className="w-full text-center py-3.5 rounded-2xl text-xs font-bold uppercase tracking-widest bg-[#5CC6EC] text-[#0F172A] hover:bg-[#0A5C9E] hover:text-white transition-all duration-300"
                >
                  Get a Quote
                </a>
              </div>
            </motion.div>
          )}

          {/* 3. DESKTOP COMPACT STATE */}
          {!isMobile && isCompact && (
            <motion.div
              key="desktop-compact"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center gap-2.5 w-full"
            >
              <span className="font-serif text-sm font-bold tracking-widest text-white">ADLAT</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6EC] animate-pulse" />
            </motion.div>
          )}

          {/* 4. DESKTOP EXPANDED STATE */}
          {!isMobile && !isCompact && (
            <motion.div
              key="desktop-expanded"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-between w-full"
            >
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, "#home", "Home")}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <span className="font-serif text-sm font-bold tracking-widest text-white transition-colors duration-300">
                  ADLAT
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#5CC6EC] group-hover:scale-150 transition-transform duration-300" />
              </a>

              {/* Nav Links */}
              <nav className="flex items-center gap-7">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href, link.name)}
                    className={`relative py-1.5 text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:scale-105 ${
                      activeLink === link.name
                        ? "text-[#5CC6EC] font-bold"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {link.name}
                    {activeLink === link.name && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5CC6EC] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                ))}
              </nav>

              {/* CTA button */}
              <div>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "#contact", "Contact")}
                  className="relative overflow-hidden inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest bg-white text-[#0F172A] group border border-white/10 hover:border-[#5CC6EC] hover:shadow-[0_0_15px_rgba(92,198,236,0.4)] transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get a Quote</span>
                  <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-colors duration-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  <div className="absolute inset-0 bg-[#0A5C9E] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}

