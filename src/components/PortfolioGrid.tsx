"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  X, 
  Sparkles, 
  MapPin, 
  Compass, 
  Calendar, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Grid, 
  Gem, 
  Home, 
  Building2, 
  RefreshCw, 
  ArrowRight 
} from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  name: string;
  location: string;
  category: string;
  image: string;
  heightClass: string;
  description: string;
  area: string;
  timeframe: string;
  materials: string[];
  features: string[];
  gallery?: string[];
}

const projects: Project[] = [
  {
    id: "infinity",
    name: "The Eko Horizon",
    location: "Ikoyi, Lagos",
    category: "Luxury Pool",
    image: "/images/project-nigeria.png",
    heightClass: "h-[400px] md:h-[530px]",
    description: "A breathtaking tropical architectural masterpiece nestled in the elite neighborhood of Ikoyi, Lagos. Designed as a private sanctuary, it features lush native landscaping, hand-carved local granite accents, a sunken outdoor fireplace, and smart-controlled water climate features.",
    area: "3,200 Sq Ft",
    timeframe: "16 Weeks",
    materials: ["Local Nigerian Granite", "Imported Sukabumi Stone", "Polished Teak Decking"],
    features: ["Zero-Edge Perimeter Overflow", "Submerged Sun Shelf & Seating", "Automated Ambient Fire Bowls", "Smart Climate Control & Hydro-Spa"],
    gallery: ["/images/project-nigeria-tiling.jpg"],
  },
  {
    id: "resort",
    name: "Villas Oasis",
    location: "Lekki Phase 1, Lagos",
    category: "Commercial Pool",
    image: "/images/project-resort-new.png",
    heightClass: "h-[380px] md:h-[450px]",
    description: "Built for a sprawling coastal estate in Lekki Phase 1, this pool reimagines five-star hospitality in a private setting. Complete with natural stone water curtains, private cabanas, fire bowls, and a sunken dining lounge.",
    area: "4,200 Sq Ft",
    timeframe: "20 Weeks",
    materials: ["Imported Coral Stone", "Volcanic Basalt", "Natural Teak Decking"],
    features: ["Sunken Dry Seating & Fire Pit", "Subterranean Swim-Up Bar", "Triple Cascade Waterfalls", "Smart Pool Automation System"],
  },
  {
    id: "rooftop",
    name: "Aero Glass",
    location: "Eko Atlantic City, Lagos",
    category: "Custom Pool Design",
    image: "/images/project-rooftop-new.png",
    heightClass: "h-[400px] md:h-[560px]",
    description: "Perched high above Eko Atlantic City, this luxury penthouse pool features structural acrylic glass panels that suspend water against the Atlantic ocean skyline. Crafted with strict weight-bearing engineering and custom acoustic damping.",
    area: "1,200 Sq Ft",
    timeframe: "18 Weeks",
    materials: ["Structural Acrylic Panels", "Brushed Titanium Trim", "Dark Slate Tiles"],
    features: ["Transparent Acrylic Walls", "High-Flow Custom Jet Stream", "Fiber-Optic Constellation Lights", "Integrated Wind-Guard System"],
  },
  {
    id: "modern",
    name: "Linear Sanctuary",
    location: "Ikeja GRA, Lagos",
    category: "Residential Pool",
    image: "/images/project-modern-new.png",
    heightClass: "h-[360px] md:h-[430px]",
    description: "Inspired by mid-century architectural modernism and set in the quiet enclave of Ikeja GRA, this geometric pool acts as a reflecting mirror for the villa itself. Designed with deep basalt hues to create a high-contrast mirror surface during daylight hours.",
    area: "1,800 Sq Ft",
    timeframe: "12 Weeks",
    materials: ["Obsidian Volcanic Rock", "Brushed Quartzite", "Black Powder-Coated Steel"],
    features: ["Full Reflection Mirror Finish", "Minimalist Hidden Perimeter Slot Drain", "Floating Concrete Step Paths", "Smart Eco-Filtration System"],
  },
  {
    id: "nigeria-tiling",
    name: "Eko Horizon - Mosaic Tiling",
    location: "Lagos, Nigeria",
    category: "Pool Renovation",
    image: "/images/project-nigeria-tiling.jpg",
    heightClass: "h-[370px] md:h-[460px]",
    description: "A detailed look at the custom mosaic tile setting and structural wall diagnostics of the Eko Horizon pool in Ikoyi, Lagos. Over 15,000 individual glass tiles were meticulously set by hand.",
    area: "3,200 Sq Ft",
    timeframe: "4 Weeks",
    materials: ["Ocean Glass Mosaics", "High-Bond Epoxy Grout", "Waterproof Sealants"],
    features: ["Submerged Stair Custom Patterns", "Sub-millimeter Tile Spacing", "Reinforced Waterproofing Membrane"],
  },
  {
    id: "white-manor",
    name: "The Alabaster Terraces",
    location: "Abuja, Nigeria",
    category: "Residential Pool",
    image: "/images/project-white-manor.jpg",
    heightClass: "h-[390px] md:h-[520px]",
    description: "A luxurious geometric pool set against a premium travertine stone deck in Banana Island, complete with shallow tanning steps, modern sunbeds, and a clean minimalist perimeter fence. The turquoise water integrates beautifully with the surrounding lawn.",
    area: "2,800 Sq Ft",
    timeframe: "14 Weeks",
    materials: ["Premium White Travertine", "Custom Quartzite Finish", "Marine-Grade Hardware"],
    features: ["Shallow Walk-In Steps", "Integrated Perimeter Drainage", "Minimalist Safety Glass Fencing", "High-Flow Heating System"],
  },
  {
    id: "chanel-blue",
    name: "The Sapphire Emblem",
    location: "Lagos, Nigeria",
    category: "Custom Pool Design",
    image: "/images/project-chanel-blue.jpg",
    heightClass: "h-[350px] md:h-[440px]",
    description: "A highly customized luxury pool featuring bespoke tiled monograms and dolphin designs set on the pool floor, located in a secure gated estate on Banana Island. Finished in brilliant sky-blue mosaics and a premium marble overflow coping.",
    area: "1,600 Sq Ft",
    timeframe: "10 Weeks",
    materials: ["Italian Glass Mosaics", "Bespoke Ceramic Emblems", "Premium Marble Coping"],
    features: ["Custom Floor Mosaic Art", "Integrated Perimeter Overflow", "Underwater LED Color Show", "Bespoke Filtration Unit"],
  },
  {
    id: "courtyard-plunge",
    name: "The Courtyard Plunge",
    location: "Victoria Island, Lagos",
    category: "Residential Pool",
    image: "/images/project-courtyard-plunge.jpg",
    heightClass: "h-[360px] md:h-[480px]",
    description: "A compact yet deep courtyard plunge pool designed as an urban oasis for a premium townhouse in Victoria Island, Lagos. Features high-end light grey coping, internal mosaic seating steps, and polished stainless steel safety railings.",
    area: "900 Sq Ft",
    timeframe: "8 Weeks",
    materials: ["Light Grey Granite Coping", "Sky Blue Mosaic Tiles", "Polished 316 Stainless Steel"],
    features: ["Polished Steel Safety Railings", "Space-Saving Integrated Steps", "Automatic Safety Cover System", "Quiet Eco-Pump & Heater"],
  },
];

const filterLabels: Record<string, string> = {
  "All": "All Projects",
  "Luxury Pool": "Luxury Pool",
  "Residential Pool": "Residential Pool",
  "Commercial Pool": "Commercial Pool",
  "Custom Pool Design": "Custom Pool Design",
  "Pool Renovation": "Pool Renovation"
};

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isMounted, setIsMounted] = useState(false);
  
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const isMoved = useRef(false);

  const categories = ["All", "Luxury Pool", "Residential Pool", "Commercial Pool", "Custom Pool Design", "Pool Renovation"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  React.useEffect(() => {
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

  const handleCardClick = (project: Project) => {
    if (isMoved.current) return;
    setSelectedProject(project);
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

  const dotsCount = isMounted ? Math.max(1, filteredProjects.length - visibleCards + 1) : 1;
  const showNavigation = isMounted && filteredProjects.length > visibleCards;

  return (
    <section id="projects" className="py-24 sm:py-32 bg-white text-[#071A35] relative overflow-hidden">
      <style dangerouslySetInnerHTML={{ __html: `
        .carousel-card-container {
          width: 100%;
        }
        @media (min-width: 768px) {
          .carousel-card-container {
            width: calc((100% - 2 * 24px) / 2.08);
          }
        }
        @media (min-width: 1024px) {
          .carousel-card-container {
            width: calc((100% - 3 * 32px) / 3.08);
          }
        }
      `}} />
      
      {/* Subtle Background Glows to elevate design */}
      <div className="absolute top-1/4 left-0 w-[400px] h-[400px] rounded-full bg-[#009DFF]/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] rounded-full bg-[#57D6FF]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#009DFF] block mb-3">
              PORTFOLIO
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#071A35] leading-tight">
              Our Recent <br className="hidden sm:inline" />
              <span className="text-[#009DFF] italic">Pool Projects</span>
            </h2>
            <svg className="w-24 h-2.5 text-[#009DFF] mt-2.5" viewBox="0 0 100 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 5C10 5 15 2 25 5C35 8 40 5 50 5C60 5 65 2 75 5C85 8 90 5 100 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </div>
          <div className="md:max-w-md lg:max-w-lg">
            <p className="text-[#071A35]/60 font-light text-sm sm:text-base leading-relaxed">
              Explore some of our completed pool designs, construction work, and luxury renovations.
            </p>
          </div>
        </div>
        
        {/* Filters Row */}
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar pb-8 flex-nowrap -mx-6 px-6 lg:mx-0 lg:px-0 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setActiveIndex(0);
                if (sliderRef.current) sliderRef.current.scrollLeft = 0;
              }}
              className={`px-5 py-2.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shrink-0 border cursor-pointer hover:scale-105 active:scale-95 ${
                activeFilter === category
                  ? "bg-[#071A35] text-white border-[#071A35] shadow-md"
                  : "bg-white border-slate-200 text-slate-500 hover:text-[#071A35] hover:border-slate-300"
              }`}
            >
              <span>{filterLabels[category]}</span>
            </button>
          ))}
        </div>

        {/* Horizontal Slider Layout with Overlapping Navigation */}
        <div className="relative group/carousel">
          <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onScroll={handleScroll}
            onDragStart={(e) => e.preventDefault()}
            className={`flex gap-6 lg:gap-8 overflow-x-auto select-none no-scrollbar pb-8 -mx-6 px-6 lg:-mx-12 lg:px-12 ${
              isDragging ? "cursor-grabbing" : "snap-x snap-mandatory cursor-grab scroll-smooth"
            }`}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id} 
                  className="flex-shrink-0 snap-start carousel-card-container"
                >
                  <ProjectCard project={project} onClick={handleCardClick} />
                </div>
              ))}
            </AnimatePresence>
          </div>

          {/* Left Arrow (Overlapping edge) */}
          {showNavigation && (
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              className={`absolute left-2 md:-left-6 top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 text-[#071A35] shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                activeIndex === 0 ? "opacity-30 cursor-not-allowed" : "opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
              }`}
              aria-label="Previous projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Right Arrow (Overlapping edge) */}
          {showNavigation && (
            <button
              onClick={scrollNext}
              disabled={activeIndex >= filteredProjects.length - visibleCards}
              className={`absolute right-2 md:-right-6 top-[45%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border border-slate-200 text-[#071A35] shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 ${
                activeIndex >= filteredProjects.length - visibleCards ? "opacity-30 cursor-not-allowed" : "opacity-90 hover:opacity-100 hover:scale-105 active:scale-95"
              }`}
              aria-label="Next projects"
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
                  activeIndex === idx ? "w-6 bg-[#009DFF]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

      </div>

      {/* Immersive Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* Sub-Component: Project Card with 3D Tilt & Cursor Glow */
function ProjectCard({ project, onClick }: { project: Project; onClick: (p: Project) => void }) {
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

    const tiltX = -(y / (height / 2)) * 8;
    const tiltY = (x / (width / 2)) * 8;

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
      layout
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={() => onClick(project)}
      className="group relative w-full h-[500px] overflow-hidden rounded-[32px] cursor-pointer shadow-lg bg-slate-900 transition-all duration-500 flex flex-col justify-end preserve-3d select-none"
      style={{
        boxShadow: isHovered
          ? "0 20px 40px rgba(0, 157, 255, 0.12), inset 0 0 20px rgba(255, 255, 255, 0.02)"
          : "0 10px 30px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.1s ease-out, box-shadow 0.3s ease-out",
      }}
    >
      {/* Background Image with Hover Zoom */}
      <Image
        src={project.image}
        alt={project.name}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
        draggable={false}
      />

      {/* Very Subtle Gradient Overlay for visual refinement */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
      
      {/* Background Interactive Glow */}
      <div
        className="absolute -inset-px pointer-events-none rounded-[32px] opacity-0 transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${coords.x}px ${coords.y}px, rgba(87, 214, 255, 0.08), transparent)`,
        }}
      />
      
      {/* Glow border overlay */}
      <div
        className="absolute -inset-px pointer-events-none rounded-[32px] opacity-0 transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 0.3 : 0,
          background: `radial-gradient(150px circle at ${coords.x}px ${coords.y}px, rgba(87, 214, 255, 0.4), transparent)`,
          padding: "1px",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, text-decoration-color",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
        }}
      />

      {/* Card Category Pill (top right) */}
      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm border border-slate-100 shadow-sm rounded-full px-3 py-1.5 z-20 select-none">
        <span className="text-[10px] font-bold uppercase tracking-wider text-[#071A35]">
          {project.category}
        </span>
      </div>

      {/* Inset White Detail Card (matching reference image) */}
      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl p-5 flex items-center justify-between gap-4 z-20 transition-transform duration-300 group-hover:scale-[1.02] border border-white/40">
        <div className="overflow-hidden">
          <h3 className="font-serif text-[#071A35] text-[15px] sm:text-[17px] font-bold truncate">
            {project.name}
          </h3>
          <div className="flex items-center gap-1.5 mt-1.5 text-slate-500 font-semibold text-[10px] sm:text-[11px] uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>
        </div>
        
        {/* Soft-blue circle arrow-right button */}
        <div className="w-10 h-10 rounded-full bg-[#E0F2FE] hover:bg-[#bae6fd] flex items-center justify-center transition-all duration-300 group-hover:translate-x-1 shrink-0">
          <ArrowRight className="w-4 h-4 text-[#009DFF]" />
        </div>
      </div>
    </motion.div>
  );
}

/* Sub-Component: Immersive Modal */
function ProjectDetailModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const [activeLightboxImage, setActiveLightboxImage] = useState<string | null>(null);

  // Prevent background scroll when modal open
  useState(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/80 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-5xl h-full max-h-[90vh] bg-[#020813] text-white rounded-3xl overflow-y-auto border border-white/10 shadow-2xl glass-card-dark"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-slate-900/60 border border-white/10 text-white hover:bg-[#009DFF] hover:text-white hover:border-[#57D6FF] transition-all duration-300"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Banner Image with Lightbox click trigger */}
        <div
          onClick={() => setActiveLightboxImage(project.image)}
          className="relative w-full h-[280px] sm:h-[380px] bg-slate-900 cursor-zoom-in group/banner"
        >
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-slate-950/30 to-black/40" />

          {/* Maximize Icon */}
          <div className="absolute top-6 left-6 p-2 rounded-full bg-slate-900/60 border border-white/10 text-white opacity-0 group-hover/banner:opacity-100 transition-opacity duration-300 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-md">
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Maximize View</span>
          </div>

          <div className="absolute bottom-6 left-6 sm:left-10 z-10">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#57D6FF] bg-[#071A35]/80 px-4 py-1.5 rounded-full border border-[#57D6FF]/35 backdrop-blur-md inline-block mb-3">
              {project.category}
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-white tracking-tight">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left/Middle Column (Description & Features) */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-serif font-bold text-[#57D6FF] mb-3 flex items-center gap-2">
                <Compass className="w-5 h-5" /> Project Overview
              </h3>
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-serif font-bold text-[#57D6FF] mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Key Architectural Elements
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300 font-light">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#009DFF] mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.gallery && project.gallery.length > 0 && (
              <div className="pt-4">
                <h3 className="text-lg font-serif font-bold text-[#57D6FF] mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5" /> Construction & Craftsmanship Gallery
                </h3>
                <div className="flex flex-wrap gap-4">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveLightboxImage(img);
                      }}
                      className="relative w-48 h-32 rounded-2xl overflow-hidden border border-white/10 bg-slate-950 group/gallery cursor-pointer"
                    >
                      <Image
                        src={img}
                        alt={`${project.name} construction details`}
                        fill
                        sizes="192px"
                        className="object-cover transition-transform duration-500 group-hover/gallery:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-xs uppercase tracking-wider font-semibold text-white">Tiling Phase</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column (Specifications & Materials) */}
          <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
            <h3 className="text-lg font-serif font-bold text-[#57D6FF] flex items-center gap-2">
              <Calendar className="w-5 h-5" /> Specifications
            </h3>

            {/* Spec Table */}
            <div className="divide-y divide-white/5 border-t border-b border-white/5 py-2">
              <div className="flex justify-between py-2.5 text-sm">
                <span className="text-slate-400 font-light">Location</span>
                <span className="font-semibold text-white">{project.location}</span>
              </div>
              <div className="flex justify-between py-2.5 text-sm">
                <span className="text-slate-400 font-light">Total Area</span>
                <span className="font-semibold text-white">{project.area}</span>
              </div>
              <div className="flex justify-between py-2.5 text-sm">
                <span className="text-slate-400 font-light">Timeframe</span>
                <span className="font-semibold text-[#57D6FF]">{project.timeframe}</span>
              </div>
            </div>

            {/* Materials List */}
            <div>
              <span className="text-xs uppercase tracking-widest text-[#57D6FF] font-semibold block mb-3">
                Curation & Materials
              </span>
              <div className="flex flex-wrap gap-2">
                {project.materials.map((material, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-light bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-slate-300"
                  >
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Fullscreen Lightbox Overlay */}
      <AnimatePresence>
        {activeLightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
            onClick={() => setActiveLightboxImage(null)}
          >
            <button
              onClick={() => setActiveLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[70]"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-full max-w-6xl max-h-[85vh]">
              <Image
                src={activeLightboxImage}
                alt={project.name}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
