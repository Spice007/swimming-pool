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
  Shield,
  Users,
  Calendar,
  Award,
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

        {/* Bottom Trust/Features Dashboard Bar */}
        <div className="mt-16 bg-slate-900/40 border border-white/5 rounded-[24px] p-6 sm:p-8 backdrop-blur-md grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Quality */}
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#009DFF] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Premium Quality</h4>
              <p className="text-[11px] text-slate-400 font-light mt-1">Top-tier materials and unmatched craftsmanship.</p>
            </div>
          </div>

          {/* Team */}
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#009DFF] shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Expert Team</h4>
              <p className="text-[11px] text-slate-400 font-light mt-1">Experienced designers, engineers, and project managers.</p>
            </div>
          </div>

          {/* Delivery */}
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#009DFF] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">On-Time Delivery</h4>
              <p className="text-[11px] text-slate-400 font-light mt-1">We respect your time and deliver as promised.</p>
            </div>
          </div>

          {/* Support */}
          <div className="flex gap-4 items-center">
            <div className="p-3 rounded-full bg-white/5 border border-white/10 text-[#009DFF] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Lifetime Support</h4>
              <p className="text-[11px] text-slate-400 font-light mt-1">Ongoing care and maintenance for lasting peace of mind.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

/* Sub-Component: 3D Tilt Card */
function ServiceCard({ service, index }: { service: Service; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    const tiltX = -(y / (height / 2)) * 10;
    const tiltY = (x / (width / 2)) * 10;

    const cursorX = e.clientX - rect.left;
    const cursorY = e.clientY - rect.top;

    setCoords({ x: cursorX, y: cursorY });
    
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    setIsHovered(false);
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="interactive-card group relative bg-[#071A35]/15 border border-white/5 rounded-[32px] p-5 sm:p-6 transition-all duration-500 ease-out select-none preserve-3d overflow-hidden cursor-pointer flex flex-col gap-6 justify-between bg-slate-900/40 backdrop-blur-md hover:border-white/10"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 157, 255, 0.12), inset 0 0 20px rgba(255, 255, 255, 0.02)"
          : "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.1s ease-out, box-shadow 0.3s ease-out",
      }}
    >
      {/* Background Interactive Glow */}
      <div
        className="absolute -inset-px pointer-events-none rounded-[32px] opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(87, 214, 255, 0.08), transparent)`,
        }}
      />
      
      {/* Glow border overlay */}
      <div
        className="absolute -inset-px pointer-events-none rounded-[32px] opacity-0 transition-opacity duration-500"
        style={{
          opacity: isHovered ? 0.4 : 0,
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(87, 214, 255, 0.4), transparent)`,
          padding: "1px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Card Header Image */}
      <div className="w-full h-36 sm:h-40 rounded-2xl overflow-hidden relative border border-white/10 bg-slate-950">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
          draggable={false}
        />
      </div>

      {/* Card Content Row */}
      <div className="flex gap-4 items-start relative z-10">
        {/* Left Icon Container */}
        <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#009DFF] shrink-0 w-11 h-11 flex items-center justify-center transition-colors duration-300 group-hover:border-[#009DFF]/30 group-hover:bg-[#009DFF]/5">
          {serviceIcons[index]}
        </div>
        
        {/* Middle Text Block */}
        <div className="flex-1 space-y-1.5">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-tight leading-snug">
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
