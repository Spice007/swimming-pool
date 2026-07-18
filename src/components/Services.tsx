"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  PenTool, 
  HardHat, 
  Sparkles, 
  Leaf, 
  Waves, 
  Umbrella,
  ArrowRight
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "Pool Design & Architecture",
    description: "Custom, award-winning blueprints designed to complement your home, landscape, and premium material preferences.",
    image: "/images/pool-design-and-architecture.png",
  },
  {
    title: "Engineering & Construction",
    description: "Flawless site engineering, reinforced concrete casting, and advanced mechanical installations built for structural perfection.",
    image: "/images/engineering-and-construction.png",
  },
  {
    title: "High-End Renovations",
    description: "Transforming older swimming pools into modern masterpieces with seamless infinity edges and state-of-the-art finishes.",
    image: "/images/high-end-renovations.png",
  },
  {
    title: "Landscape Architecture",
    description: "Curated gardens, stone masonry, fire features, and privacy structures designed to perfectly frame your water views.",
    image: "/images/landscape-architecture.png",
  },
  {
    title: "Custom Water Features",
    description: "Automated rain curtains, sheet waterfalls, and fiber-optic laminars created for stunning visual and acoustic effects.",
    image: "/images/custom-water-features.png",
  },
  {
    title: "Outdoor Living Spaces",
    description: "Sunken fire pits, fully equipped outdoor kitchens, luxury cabanas, and premium decks built for high-end entertaining.",
    image: "/images/project-resort-new.png",
  },
];

const serviceIcons = [
  <PenTool className="w-5 h-5" />,
  <HardHat className="w-5 h-5" />,
  <Sparkles className="w-5 h-5" />,
  <Leaf className="w-5 h-5" />,
  <Waves className="w-5 h-5" />,
  <Umbrella className="w-5 h-5" />
];

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#020813] text-white relative overflow-hidden">
      
      {/* Background Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#009DFF]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#009DFF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#009DFF]">
                OUR SOLUTIONS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Complete Solutions. <br />
              Exceptional <span className="text-[#009DFF] italic">Results.</span>
            </h2>
            <div className="w-32 h-0.5 bg-[#009DFF] mt-4" />
          </div>

          <div className="md:max-w-md lg:max-w-lg">
            <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
              From concept to completion, we deliver end-to-end pool and outdoor solutions tailored to your lifestyle, space, and vision.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} index={idx} />
          ))}
        </div>



      </div>
    </section>
  );
}

/* Sub-Component: Clean borderless card */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative w-full select-none cursor-pointer flex flex-col gap-5"
    >
      {/* Card Header Image */}
      <div className="w-full h-48 sm:h-52 rounded-[20px] overflow-hidden relative bg-slate-950">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      </div>

      {/* Card Content Row */}
      <div className="flex gap-4 items-start relative z-10 px-1">
        {/* Left Icon Container (Clean, no background, no border) */}
        <div className="text-[#009DFF] shrink-0 w-8 h-8 flex items-center justify-center mt-1">
          {serviceIcons[index]}
        </div>
        
        {/* Middle Text Block */}
        <div className="flex-1 space-y-1.5">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-[#57D6FF]">
            {service.title}
          </h3>
          <p className="text-slate-400 font-light text-[13px] sm:text-[14px] leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
