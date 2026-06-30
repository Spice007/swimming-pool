"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Compass, Clock, Layout } from "lucide-react";

interface ShowcaseItem {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  sqft: string;
  weeks: string;
  features: string;
}

const items: ShowcaseItem[] = [
  {
    id: "01",
    name: "The Eko Horizon",
    location: "Lagos, Nigeria",
    category: "Tropical Outdoor Pool",
    image: "/images/project-nigeria.png",
    sqft: "3,200",
    weeks: "16",
    features: "Zero-Edge Overflow & Smart Climate Control",
  },
  {
    id: "02",
    name: "Villas Oasis",
    location: "Miami, FL",
    category: "Resort-Style",
    image: "/images/project-resort.png",
    sqft: "4,200",
    weeks: "20",
    features: "Sunken Dry Fire Pit & Swim Bar",
  },
  {
    id: "03",
    name: "Aero Glass",
    location: "New York, NY",
    category: "Rooftop Acrylic",
    image: "/images/project-rooftop.png",
    sqft: "1,200",
    weeks: "18",
    features: "Transparent Acrylic Glass Walls",
  },
  {
    id: "04",
    name: "Linear Sanctuary",
    location: "Austin, TX",
    category: "Modern Geometric",
    image: "/images/project-modern.png",
    sqft: "1,800",
    weeks: "12",
    features: "Obsidian Basalt Reflection Surface",
  },
];

export default function FeaturedShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the parent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  // Translate slides horizontally based on scroll progress
  // Since we have 4 slides, the horizontal translation will range from 0% to -75% of the total width
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-[#0F172A]">
      {/* Sticky Frame */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Horizontal Moving Container */}
        <motion.div style={{ x }} className="flex h-full w-[400vw]">
          {items.map((item) => (
            <div
              key={item.id}
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center relative px-6 md:px-20 lg:px-32 bg-[#0F172A] text-white"
            >
              {/* Background ambient lighting */}
              <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#57D6FF]/5 blur-[120px] pointer-events-none" />

              <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                
                {/* Text Specifications */}
                <div className="lg:col-span-5 space-y-6 md:space-y-8 z-10 Order-2 lg:order-1">
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-5xl md:text-7xl font-extrabold text-[#57D6FF]/15 tracking-tighter">
                      {item.id}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-[#57D6FF] block">
                        Featured Masterpiece
                      </span>
                      <span className="text-xs text-slate-400">
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                    {item.name}
                  </h3>

                  <div className="h-[1px] w-full bg-white/10" />

                  {/* Animate-on-scroll stats */}
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                        Scale / Size
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                          {item.sqft}
                        </span>
                        <span className="text-xs text-[#57D6FF] font-semibold">
                          Sq Ft
                        </span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block">
                        Build Time
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
                          {item.weeks}
                        </span>
                        <span className="text-xs text-[#57D6FF] font-semibold">
                          Weeks
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  {/* Highlights */}
                  <div className="flex items-center gap-3 text-sm text-slate-300 font-light">
                    <Layout className="w-4 h-4 text-[#57D6FF]" />
                    <span>{item.features}</span>
                  </div>
                </div>

                {/* Project Image Mockup */}
                <div className="lg:col-span-7 z-10 order-1 lg:order-2">
                  <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
