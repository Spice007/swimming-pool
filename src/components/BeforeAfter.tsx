"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  MapPin, 
  Calendar, 
  ChevronLeft, 
  ChevronRight,
  X
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeVideo: string;
  afterImg: string;
  timeframe: string;
  area: string;
  value: string;
  finish: string;
  location: string;
  year: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Banana Island Steel Kidney Pool",
    category: "Precision Engineering",
    description: "A showcase of structural engineering, highlighting the intricate steel rebar reinforcement mesh which was later cast and finished as a fluid kidney-shaped marvel.",
    beforeVideo: "/videos/WhatsApp Video 2026-06-21 at 19.18.17 (1).mp4",
    afterImg: "/images/WhatsApp Image 2026-06-21 at 22.39.32 (14).jpeg",
    timeframe: "12 Weeks",
    area: "520 SQM",
    value: "48M NGN",
    finish: "Stainless Steel",
    location: "Banana Island, Lagos",
    year: "2026"
  },
  {
    id: 2,
    title: "Ikoyi Basin Revitalization",
    category: "Outdated Pool Overhaul",
    description: "An overgrown, mud-filled basin with deteriorating perimeter fencing is fully reclaimed and redesigned with clean lines, high-performance filtration, and premium decking.",
    beforeVideo: "/videos/WhatsApp Video 2026-06-21 at 19.18.17 (3).mp4",
    afterImg: "/images/WhatsApp Image 2026-06-21 at 22.39.32 (16).jpeg",
    timeframe: "8 Weeks",
    area: "320 SQM",
    value: "28M NGN",
    finish: "Glass Mosaics",
    location: "Ikoyi, Lagos",
    year: "2025"
  },
  {
    id: 3,
    title: "Victoria Island Infinity Horizon",
    category: "Complete Estate Design",
    description: "A bare, grassy backyard is transformed into a premier architectural anchor point, featuring a stunning flush-deck pool that elevates the entire estate.",
    beforeVideo: "/videos/WhatsApp Video 2026-06-21 at 19.18.17.mp4",
    afterImg: "/images/WhatsApp Image 2026-06-21 at 22.39.32 (17).jpeg",
    timeframe: "14 Weeks",
    area: "750 SQM",
    value: "55M NGN",
    finish: "Infinity Overflow",
    location: "Victoria Island, Lagos",
    year: "2026"
  },
  {
    id: 4,
    title: "Rectangular Pool Restoration",
    category: "Luxury Renovation",
    description: "Witness the complete restoration of a classic rectangular pool, converting green, stagnant water and outdated concrete tiling into a modern, crystalline oasis.",
    beforeVideo: "/videos/WhatsApp Video 2026-06-21 at 19.18.17 (2).mp4",
    afterImg: "/images/WhatsApp Image 2026-06-21 at 22.39.32.jpeg",
    timeframe: "10 Weeks",
    area: "450 SQM",
    value: "35M NGN",
    finish: "Premium Mosaic",
    location: "Lekki Phase 1, Lagos",
    year: "2025"
  },
  {
    id: 5,
    title: "Chevron Estate Excavation",
    category: "New Construction",
    description: "From deep clay excavation and soil stabilizing diagnostics to a completed hillside pool featuring custom masonry and fully integrated automation.",
    beforeVideo: "/videos/WhatsApp Video 2026-06-21 at 19.18.16.mp4",
    afterImg: "/images/WhatsApp Image 2026-06-21 at 22.39.32 (13).jpeg",
    timeframe: "16 Weeks",
    area: "680 SQM",
    value: "65M NGN",
    finish: "Natural Stone",
    location: "Lekki, Lagos",
    year: "2025"
  },
  {
    id: 6,
    title: "Eko Horizon - Mosaic Tiling",
    category: "Pool Renovation",
    description: "A detailed look at the custom mosaic tile setting and structural wall diagnostics of the Eko Horizon pool in Ikoyi, Lagos.",
    beforeVideo: "/videos/WhatsApp Video 2026-06-21 at 19.18.17 (2).mp4",
    afterImg: "/images/project-nigeria-tiling.jpg",
    timeframe: "4 Weeks",
    area: "3,200 SQFT",
    value: "15M NGN",
    finish: "Ocean Mosaic",
    location: "Lagos, Nigeria",
    year: "2025"
  }
];

export default function BeforeAfter() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedModalProject, setSelectedModalProject] = useState<Project | null>(null);

  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isMoved = useRef(false);

  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft } = sliderRef.current;
    const card = sliderRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = window.innerWidth >= 1024 ? 32 : 24;
    const itemWidth = cardWidth + gap;
    const index = Math.round(scrollLeft / itemWidth);
    setActiveIndex(index);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    isMoved.current = false;
    startX.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.scrollBehavior = "auto";
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    if (Math.abs(walk) > 5) {
      isMoved.current = true;
    }
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (sliderRef.current) {
      sliderRef.current.style.scrollBehavior = "smooth";
    }
  };

  const scrollToActiveIndex = (index: number) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = window.innerWidth >= 1024 ? 32 : 24;
    const itemWidth = cardWidth + gap;
    sliderRef.current.scrollTo({
      left: index * itemWidth,
      behavior: "smooth"
    });
    setActiveIndex(index);
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = window.innerWidth >= 1024 ? 32 : 24;
    const itemWidth = cardWidth + gap;
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft - itemWidth,
      behavior: "smooth"
    });
  };

  const scrollNext = () => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.firstElementChild as HTMLElement;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = window.innerWidth >= 1024 ? 32 : 24;
    const itemWidth = cardWidth + gap;
    sliderRef.current.scrollTo({
      left: sliderRef.current.scrollLeft + itemWidth,
      behavior: "smooth"
    });
  };

  const dotsCount = isMounted ? Math.max(1, projects.length - visibleCards + 1) : 1;
  const showNavigation = isMounted && projects.length > visibleCards;

  return (
    <section id="transformation" className="py-24 sm:py-32 bg-[#020813] text-white relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .carousel-card-container-ba {
          width: 100%;
        }
        @media (min-width: 768px) {
          .carousel-card-container-ba {
            width: calc((100% - 1 * 24px) / 2);
          }
        }
        @media (min-width: 1024px) {
          .carousel-card-container-ba {
            width: calc((100% - 2 * 32px) / 3);
          }
        }
      `}} />
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#0052FF]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0052FF]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0052FF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0052FF]">
                TRANSFORMATIONS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Before <span className="italic font-normal">&</span> After <span className="text-[#0052FF] italic font-semibold">Portfolio</span>
            </h2>
            <div className="w-20 h-0.5 bg-[#0052FF] mt-4" />
          </div>

          <div className="md:max-w-md lg:max-w-lg">
            <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
              Explore real transformations that showcase our expertise in pool construction and renovation.
            </p>
          </div>
        </div>

        {/* Horizontal Slider Layout */}
        <div className="relative group/carousel px-4">
          <div
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
            onDragStart={(e) => e.preventDefault()}
            className={`flex gap-6 lg:gap-8 overflow-x-auto select-none no-scrollbar pb-8 ${
              isDragging ? "cursor-grabbing" : "snap-x snap-mandatory cursor-grab scroll-smooth"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              {projects.map((project, idx) => (
                <div
                  key={project.id}
                  className="flex-shrink-0 snap-start carousel-card-container-ba cursor-pointer"
                  onClick={() => {
                    if (!isMoved.current) {
                      setSelectedModalProject(project);
                    }
                  }}
                >
                  <BeforeAfterCard project={project} index={idx + 1} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Overlapping Carousel Arrows (outside the cards) */}
          {showNavigation && (
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`absolute -left-4 lg:-left-8 top-[39%] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 text-white shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                activeIndex === 0 ? "opacity-20 cursor-not-allowed bg-[#0A1122]/20" : "opacity-90 hover:opacity-100 hover:scale-105 hover:bg-[#0052FF] hover:border-[#0052FF] active:scale-95 bg-[#0A1122]/80"
              }`}
              aria-label="Previous transformations"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {showNavigation && (
            <button
              onClick={scrollNext}
              disabled={activeIndex >= projects.length - visibleCards}
              className={`absolute -right-4 lg:-right-8 top-[39%] -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-white/10 text-white shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                activeIndex >= projects.length - visibleCards ? "opacity-20 cursor-not-allowed bg-[#0A1122]/20" : "opacity-90 hover:opacity-100 hover:scale-105 hover:bg-[#0052FF] hover:border-[#0052FF] active:scale-95 bg-[#0A1122]/80"
              }`}
              aria-label="Next transformations"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Pagination Dots */}
        {showNavigation && (
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: dotsCount }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? "w-6 bg-[#0052FF]" : "w-2 bg-slate-700 hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Fullscreen comparison lightbox modal */}
      <AnimatePresence>
        {selectedModalProject && (
          <BeforeAfterModal 
            project={selectedModalProject} 
            onClose={() => setSelectedModalProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* Sub-Component: Before & After Card with independent draggable split slider */
function BeforeAfterCard({ project, index }: { project: Project; index: number }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const dragStartX = useRef(0);
  const hasMovedSlider = useRef(false);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation(); // Prevent sliding the parent horizontal scroll track while dragging
    setIsDragging(true);
    hasMovedSlider.current = false;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    dragStartX.current = clientX;
  };

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
      
      const diff = Math.abs(clientX - dragStartX.current);
      if (diff > 5) {
        hasMovedSlider.current = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleStop = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStop);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleStop);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStop);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStop);
    };
  }, [isDragging]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-[#080E1C] border border-[#172544] rounded-[24px] p-5 sm:p-6 flex flex-col justify-between w-full h-full shadow-2xl transition-all duration-500 hover:border-[#1E3058] group/card relative"
    >
      {/* 1. Drag Slider Frame */}
      <div
        ref={containerRef}
        className="relative aspect-[0.85/1] w-full rounded-2xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-slate-950 group-hover/card:border-white/20 transition-colors duration-300"
        onMouseDown={handleStart}
        onTouchStart={handleStart}
        onClick={(e) => {
          // If they scrubbed the slider, prevent opening the modal
          if (hasMovedSlider.current) {
            e.stopPropagation();
          }
        }}
      >
        {/* After Image (Background) */}
        <Image
          src={project.afterImg}
          alt={`After - ${project.title}`}
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover pointer-events-none select-none"
          draggable={false}
          priority
        />
        <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-lg bg-[#0052FF] border border-white/10 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-white pointer-events-none">
          After
        </div>

        {/* Before Video (Foreground, clipped) */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          }}
        >
          <video
            src={project.beforeVideo}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />
          <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-[#0A1122]/90 border border-white/5 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-slate-300 pointer-events-none">
            Before
          </div>
        </div>

        {/* Slider Handle Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-white/70 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Knob (Matching Screenshot: Solid dark circle with white border containing chevrons) */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0A1122] border-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-105 active:scale-95 transition-transform duration-150 text-white"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            <div className="flex gap-1 items-center justify-center select-none">
              <ChevronLeft className="w-3.5 h-3.5 stroke-[2.5]" />
              <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </div>
        </div>
      </div>

      {/* 2. Text Details */}
      <div className="mt-5 flex flex-col gap-3">
        <div>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white leading-snug truncate group-hover/card:text-[#0052FF] transition-colors duration-300">
            {project.title}
          </h3>
          <span className="text-[10px] font-bold uppercase tracking-widest text-[#0052FF] mt-2 block">
            — {project.category.toUpperCase()}
          </span>
        </div>

        {/* Location & Year row on a single line */}
        <div className="flex items-center gap-3 mt-2 text-xs text-slate-400 font-medium font-sans">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#0052FF]" />
            {project.location}
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4 text-[#0052FF]" />
            {project.year}
          </span>
        </div>
      </div>

    </motion.div>
  );
}

/* Fullscreen comparison lightbox modal with interactive slider and stats grid */
function BeforeAfterModal({ 
  project, 
  onClose 
}: { 
  project: Project; 
  onClose: () => void; 
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMove = (clientX: number) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    };

    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    const handleStop = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleStop);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleStop);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleStop);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleStop);
    };
  }, [isDragging]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-5xl bg-[#080E1C] border border-[#172544] rounded-[28px] p-6 md:p-8 flex flex-col md:flex-row gap-8 shadow-2xl overflow-y-auto max-h-[95vh] md:max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/10 text-slate-400 hover:text-white hover:bg-[#0052FF] hover:border-[#0052FF] transition-all flex items-center justify-center cursor-pointer z-30 bg-[#080E1C]"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Large Slider */}
        <div className="flex-1 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
          <div
            ref={containerRef}
            className="relative aspect-[0.85/1] w-full max-w-[420px] rounded-2xl overflow-hidden border border-white/10 select-none cursor-ew-resize bg-slate-950 shadow-2xl"
            onMouseDown={handleStart}
            onTouchStart={handleStart}
          >
            {/* After Image */}
            <Image
              src={project.afterImg}
              alt={`After - ${project.title}`}
              fill
              sizes="(max-width: 1024px) 90vw, 500px"
              className="object-cover pointer-events-none select-none"
              draggable={false}
              priority
            />
            <div className="absolute top-4 right-4 z-20 px-3.5 py-1.5 rounded-lg bg-[#0052FF] border border-white/10 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-white pointer-events-none">
              After
            </div>

            {/* Before Video */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
              }}
            >
              <video
                src={project.beforeVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
              />
              <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-lg bg-[#0A1122]/90 border border-white/5 backdrop-blur-sm text-[10px] uppercase font-bold tracking-widest text-slate-300 pointer-events-none">
                Before
              </div>
            </div>

            {/* Slider Handle Line */}
            <div
              className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-white/70 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Knob */}
              <div 
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-[#0A1122] border-2 border-white shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-auto cursor-ew-resize hover:scale-105 active:scale-95 transition-transform duration-150 text-white"
                onMouseDown={handleStart}
                onTouchStart={handleStart}
              >
                <div className="flex gap-1 items-center justify-center select-none">
                  <ChevronLeft className="w-4 h-4 stroke-[2.5]" />
                  <ChevronRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Details & Specs */}
        <div className="w-full md:w-[380px] flex flex-col justify-between py-2">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#0052FF]">
              — TRANSFORMATIONS
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-2 leading-tight">
              {project.title}
            </h3>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2.5 block">
              Category: {project.category}
            </span>
            <p className="text-slate-400 font-light text-sm leading-relaxed mt-4">
              {project.description}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-6">
            {/* Location & Year */}
            <div className="flex items-center gap-4 text-xs text-slate-300 font-medium font-sans">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#0052FF]" />
                {project.location}
              </span>
              <span className="text-slate-700">|</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#0052FF]" />
                {project.year}
              </span>
            </div>

            {/* Spec Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">TIMEFRAME</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.timeframe}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">POOL AREA</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.area}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">PROJECT VALUE</span>
                <span className="text-sm font-semibold text-[#0052FF] mt-1 block">{project.value}</span>
              </div>
              <div>
                <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block">PREMIUM FINISH</span>
                <span className="text-sm font-semibold text-white mt-1 block">{project.finish}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
