"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Quote,
  Star,
  LayoutGrid,
  SlidersHorizontal,
  X,
  Play,
  Upload,
  Plus,
  CheckCircle2,
  Video,
  Camera,
  Image as ImageIcon,
  Sparkles,
  MapPin,
  Calendar,
  Compass,
  Users,
  Award,
  Globe,
  Share2,
  Waves,
  Palmtree,
  Building2
} from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  quote: string;
  rating: number;
  profileImage: string;
  projectType: string;
  projectImages: string[];
  videoUrl: string;
  fullStory: string;
  budget: string;
  timeframe: string;
}

const initialTestimonials: Testimonial[] = [
  {
    id: "eko-horizon",
    name: "Olumide Adebayo",
    location: "Lagos, Nigeria",
    projectType: "The Horizon Pool",
    quote: "ADLAT transformed our Ikoyi estate into a breathtaking sanctuary. The blend of local Nigerian granite and custom automated features is spectacular. Their attention to detail is unmatched.",
    rating: 5,
    profileImage: "/images/portrait-alexander.png",
    projectImages: ["/images/project-nigeria.png", "/images/project-nigeria-tiling.jpg"],
    videoUrl: "",
    fullStory: "Our estate in Ikoyi needed a pool that could serve as an architectural anchor point while handling the local sandy soil diagnostics and high coastal water table. ADLAT's engineering team managed the deep excavation reinforcement and custom tiling flawlessly. The finished mosaic and surrounding teak decks are absolutely stunning.",
    budget: "₦850,000,000 - ₦1,200,000,000",
    timeframe: "16 Weeks",
  },
  {
    id: "elena",
    name: "Elena Rostova",
    location: "Miami, FL",
    projectType: "Resort Style Oasis",
    quote: "Our resort-style pool is the crown jewel of our villa. The subterranean swim-up bar, integrated stone fire burners, and twilight lighting program make us feel like we are at a five-star resort every day.",
    rating: 5,
    profileImage: "/images/portrait-elena.png",
    projectImages: ["/images/project-resort-new.png", "/images/project-modern-new.png"],
    videoUrl: "https://player.vimeo.com/external/517602124.sd.mp4?s=910dfbc9d96c9c64b584a7e91a0c4f51e06fa99d&profile_id=165&oauth2_token_id=57447761",
    fullStory: "This project was designed to bring high-end resort hospitality home. Crafted from imported coral stone and teak decking, it features natural cascading waterfalls, a sunken dining deck with integrated burners, and a full subterranean bar.",
    budget: "₦1,000,000,000 +",
    timeframe: "20 Weeks",
  },
  {
    id: "marcus",
    name: "Marcus Vance",
    location: "New York, NY",
    projectType: "Acrylic Penthouse Pool",
    quote: "Designing an acrylic-walled rooftop pool 42 stories up seemed impossible. ADLAT handled the extreme structural engineering and wind-barrier calculations with absolute precision.",
    rating: 5,
    profileImage: "/images/portrait-marcus.png",
    projectImages: ["/images/project-rooftop-new.png", "/images/project-modern-new.png"],
    videoUrl: "https://player.vimeo.com/external/554837835.sd.mp4?s=38be78cd5b71946c59b66b4d320be53491ed123b&profile_id=165&oauth2_token_id=57447761",
    fullStory: "Perched 42 stories above the city grid, this pool includes structural acrylic walls that create a floating feel against the skyline. Integrated wind-guard systems and custom acoustic damping prevent vibrations within the building.",
    budget: "₦1,000,000,000 +",
    timeframe: "18 Weeks",
  },
];

export default function Testimonials() {
  const [list, setList] = useState<Testimonial[]>(initialTestimonials);
  const [layoutMode, setLayoutMode] = useState<"grid" | "carousel">("grid");
  
  // Carousel State
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselDir, setCarouselDir] = useState(0);
  const [carouselAutoPlay, setCarouselAutoPlay] = useState(true);

  // Detail Modal State
  const [selectedStory, setSelectedStory] = useState<Testimonial | null>(null);

  // Submission Form State
  const [submitModalOpen, setSubmitModalOpen] = useState(false);

  // AutoPlay logic
  useEffect(() => {
    if (layoutMode !== "carousel" || !carouselAutoPlay) return;
    const timer = setInterval(() => {
      handleNextCarousel();
    }, 7000);
    return () => clearInterval(timer);
  }, [layoutMode, carouselIndex, carouselAutoPlay, list.length]);

  const handlePrevCarousel = () => {
    setCarouselDir(-1);
    setCarouselIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNextCarousel = () => {
    setCarouselDir(1);
    setCarouselIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  const handleCardClick = (story: Testimonial) => {
    setSelectedStory(story);
  };

  const handleAddNewTestimonial = (newStory: Testimonial) => {
    setList((prev) => [newStory, ...prev]);
    setCarouselIndex(0);
  };

  return (
    <section id="testimonials" className="py-24 bg-[#020813] text-white relative overflow-hidden">
      {/* Decorative Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.007)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.007)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#57D6FF]/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#009DFF]/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#57D6FF] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#57D6FF]">
                CLIENT PERSPECTIVES
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Success Stories, <br />
              <span className="text-[#57D6FF] italic">Real Impact.</span>
            </h2>
            <div className="w-24 h-0.5 bg-[#57D6FF]/35 mt-4" />
            <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed mt-4 max-w-2xl">
              Explore how we've helped transform ideas into exceptional spaces and unforgettable experiences.
            </p>
          </div>
          
          {/* Controls Panel */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:self-end shrink-0">
            {/* Grid/Carousel Toggles */}
            <div className="flex bg-slate-900/80 p-1 rounded-full border border-white/10 backdrop-blur-md relative shrink-0">
              <button
                onClick={() => setLayoutMode("grid")}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 cursor-pointer ${
                  layoutMode === "grid" ? "text-[#071A35]" : "text-slate-400 hover:text-white"
                }`}
              >
                {layoutMode === "grid" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#57D6FF] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setLayoutMode("carousel")}
                className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 cursor-pointer ${
                  layoutMode === "carousel" ? "text-[#071A35]" : "text-slate-400 hover:text-white"
                }`}
              >
                {layoutMode === "carousel" && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#57D6FF] rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carousel View</span>
              </button>
            </div>

            {/* Share CTA button */}
            <button
              onClick={() => setSubmitModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] transition-all duration-300 cursor-pointer text-white"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Share Your Journey</span>
            </button>
          </div>
        </div>

        {/* View Controls & Page Index Row (Below header, above cards grid) */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <span className="font-serif text-sm text-slate-400">
            <span className="text-[#57D6FF] font-bold">
              {layoutMode === "carousel" 
                ? `0${carouselIndex + 1}` 
                : "01"}
            </span>{" "}
            / 0{layoutMode === "carousel" ? list.length : "03"}
          </span>
          <div className="flex gap-2">
            <button
              onClick={layoutMode === "carousel" ? handlePrevCarousel : undefined}
              disabled={layoutMode !== "carousel"}
              className={`w-9 h-9 rounded-full border border-white/10 text-white flex items-center justify-center transition-all duration-300 ${
                layoutMode === "carousel" 
                  ? "hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] cursor-pointer" 
                  : "opacity-40 cursor-default"
              }`}
              aria-label="Previous story"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={layoutMode === "carousel" ? handleNextCarousel : undefined}
              disabled={layoutMode !== "carousel"}
              className={`w-9 h-9 rounded-full text-white flex items-center justify-center transition-all duration-300 ${
                layoutMode === "carousel" 
                  ? "border border-[#57D6FF] hover:bg-[#57D6FF] hover:text-[#071A35] cursor-pointer" 
                  : "border border-white/10 opacity-40 cursor-default"
              }`}
              aria-label="Next story"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Panel */}
        <div className="relative min-h-[450px]">
          <AnimatePresence mode="wait">
            {layoutMode === "grid" ? (
              // Immersive Grid View (3 on Desktop, 2 on Tablet, 1 on Mobile)
              <motion.div
                key="grid"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {list.map((story, idx) => (
                  <SuccessStoryCard
                    key={story.id}
                    story={story}
                    index={idx}
                    onClick={() => handleCardClick(story)}
                  />
                ))}
              </motion.div>
            ) : (
              // Cinematic Carousel View with smooth transitions
              <motion.div
                key="carousel"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="relative max-w-4xl mx-auto"
                onMouseEnter={() => setCarouselAutoPlay(false)}
                onMouseLeave={() => setCarouselAutoPlay(true)}
              >
                <div className="relative overflow-hidden rounded-3xl min-h-[460px] flex items-center justify-center">
                  <AnimatePresence initial={false} custom={carouselDir} mode="wait">
                    <motion.div
                      key={carouselIndex}
                      custom={carouselDir}
                      variants={{
                        enter: (dir: number) => ({
                          x: dir > 0 ? 150 : -150,
                          opacity: 0,
                        }),
                        center: {
                          x: 0,
                          opacity: 1,
                        },
                        exit: (dir: number) => ({
                          x: dir < 0 ? 150 : -150,
                          opacity: 0,
                        }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full"
                    >
                      <SuccessStoryCarouselCard
                        story={list[carouselIndex]}
                        onClick={() => handleCardClick(list[carouselIndex])}
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Bottom Metrics Panel (Stats Panel) */}
        <div className="mt-16 p-6 rounded-[24px] bg-[#071A35]/25 border border-white/5 backdrop-blur-md shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-white/5 gap-6 lg:gap-0">
            {/* Stat 1 */}
            <div className="flex items-center gap-4 px-0 lg:px-6 py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#57D6FF] shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">150+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-light tracking-wider uppercase block mt-0.5">Happy Clients</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center gap-4 px-0 lg:px-6 py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#57D6FF] shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">200+</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-light tracking-wider uppercase block mt-0.5">Projects Completed</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center gap-4 px-0 lg:px-6 py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#57D6FF] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">5 Years</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-light tracking-wider uppercase block mt-0.5">Average Partnership</span>
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center gap-4 px-0 lg:px-6 py-4 lg:py-0">
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#57D6FF] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-white block">3 Countries</span>
                <span className="text-[10px] sm:text-[11px] text-slate-400 font-light tracking-wider uppercase block mt-0.5">Served Globally</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* 1. Immersive Story Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedStory && (
          <StoryDetailModal
            story={selectedStory}
            onClose={() => setSelectedStory(null)}
          />
        )}
      </AnimatePresence>

      {/* 2. Client Review Upload Form Modal */}
      <AnimatePresence>
        {submitModalOpen && (
          <SubmitReviewModal
            onClose={() => setSubmitModalOpen(false)}
            onAddStory={handleAddNewTestimonial}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* Card Sub-Component for Grid view */
function SuccessStoryCard({ story, onClick, index }: { story: Testimonial; onClick: () => void; index: number }) {
  let icon = <Waves className="w-5 h-5" />;
  if (story.id === "elena") icon = <Palmtree className="w-5 h-5" />;
  else if (story.id === "marcus") icon = <Building2 className="w-5 h-5" />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      className="group relative flex flex-col justify-between rounded-3xl bg-slate-900/35 border border-white/5 shadow-xl hover:border-[#57D6FF]/30 hover:shadow-[0_20px_45px_rgba(87,214,255,0.12)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer overflow-hidden min-h-[500px]"
    >
      {/* Background Interactive Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#57D6FF]/2 blur-[60px] pointer-events-none rounded-full" />
      
      {/* Project Image Banner */}
      <div className="relative w-full h-48 overflow-hidden bg-slate-950">
        <Image
          src={story.projectImages[0]}
          alt={story.projectType}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
        
        {/* Rating Badge floating on image */}
        <div className="absolute top-4 left-4 flex items-center gap-1 bg-[#020813]/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 text-xs font-semibold text-white">
          <Star className="w-3.5 h-3.5 fill-[#57D6FF] text-[#57D6FF]" />
          <span>{story.rating.toFixed(1)}</span>
        </div>
      </div>

      {/* Details Container */}
      <div className="px-6 py-6 flex flex-col flex-1 gap-4 text-left">
        {/* Project Name and Icon Row */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 text-[#57D6FF] flex items-center justify-center shrink-0">
            {icon}
          </div>
          <h3 className="font-serif text-[17px] font-bold text-white tracking-tight leading-snug">
            {story.projectType}
          </h3>
        </div>

        {/* Written Review Quote */}
        <blockquote className="font-light text-slate-300 text-[13.5px] sm:text-[14.5px] leading-relaxed italic font-serif flex-1">
          <span className="text-[#57D6FF] font-bold mr-1">“</span>
          {story.quote}
        </blockquote>

        {/* Client Row */}
        <div className="pt-4 border-t border-white/5 flex items-center gap-3.5 mt-auto">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-900 shadow-sm">
            <Image
              src={story.profileImage}
              alt={story.name}
              fill
              sizes="44px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-serif text-sm font-bold text-white block leading-tight">
              {story.name}
            </span>
            <span className="text-[10px] text-slate-400 block tracking-wider uppercase font-semibold mt-0.5">
              {story.location}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* Card Sub-Component for Carousel view */
function SuccessStoryCarouselCard({ story, onClick }: { story: Testimonial; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-3xl bg-slate-900/35 border border-white/5 shadow-2xl hover:border-[#57D6FF]/30 hover:shadow-[0_20px_45px_rgba(87,214,255,0.12)] transition-all duration-500 cursor-pointer overflow-hidden max-w-4xl min-h-[400px]"
    >
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#57D6FF]/4 blur-[100px] pointer-events-none rounded-full" />
      
      {/* Left side details */}
      <div className="md:col-span-7 flex flex-col justify-between z-10 text-left">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 bg-[#0F172A]/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
              <span className="flex gap-1">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#57D6FF] text-[#57D6FF]" />
                ))}
              </span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest pl-1.5 border-l border-white/20">
                Verified Review
              </span>
            </div>
            <Quote className="w-12 h-12 text-[#57D6FF]/10 shrink-0" />
          </div>

          <blockquote className="font-serif font-light text-slate-100 text-lg sm:text-2xl leading-relaxed mb-6">
            "{story.quote}"
          </blockquote>
        </div>

        <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 shrink-0 bg-slate-900 ring-2 ring-[#57D6FF]/35 group-hover:ring-[#57D6FF]/60 transition-all duration-500 shadow-md">
            <Image
              src={story.profileImage}
              alt={story.name}
              fill
              sizes="56px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div>
            <cite className="not-italic font-serif text-base font-bold text-white block">
              {story.name}
            </cite>
            <span className="text-xs text-slate-400 block tracking-wider uppercase font-semibold mt-0.5">
              {story.location}
            </span>
          </div>
        </div>
      </div>

      {/* Right side teaser gallery */}
      <div className="md:col-span-5 flex flex-col gap-4 justify-center z-10">
        <div className="relative w-full h-[220px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group/carousel-img shadow-lg">
          <Image
            src={story.projectImages[0]}
            alt={story.projectType}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            loading="lazy"
            className="object-cover transition-transform duration-700 ease-out group-hover/carousel-img:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 group-hover/carousel-img:bg-black/10 transition-colors duration-300" />
          
          {story.videoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex items-center justify-center">
                <span className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping duration-1000 pointer-events-none" />
                <span className="relative p-4 rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-white shadow-xl group-hover/carousel-img:bg-[#57D6FF] group-hover/carousel-img:text-[#071A35] group-hover/carousel-img:border-[#57D6FF] transition-all duration-300">
                  <Play className="w-5 h-5 fill-current" />
                </span>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-left flex items-center justify-between border-b border-white/5 pb-2">
          <div>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Commission</span>
            <span className="text-xs font-bold text-white uppercase tracking-wider block mt-0.5">{story.projectType}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest block">Timeline</span>
            <span className="text-xs font-bold text-[#57D6FF] uppercase tracking-wider block mt-0.5">{story.timeframe}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Immersive Lightbox Modal Sub-Component */
function StoryDetailModal({ story, onClose }: { story: Testimonial; onClose: () => void }) {
  // Prevent background scroll
  useState(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-xl">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="relative w-full max-w-4xl h-full max-h-[90vh] bg-[#020813] text-white rounded-3xl overflow-y-auto border border-white/10 shadow-2xl z-10 glass-card-dark"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-slate-900/80 border border-white/10 text-white hover:bg-[#57D6FF] hover:text-[#071A35] transition-all duration-300 cursor-pointer"
          aria-label="Close stories"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video / Photo Banner Block */}
        <div className="relative w-full h-[280px] sm:h-[380px] bg-black">
          {story.videoUrl ? (
            <video
              autoPlay
              controls
              playsInline
              loop
              muted
              className="w-full h-full object-cover"
            >
              <source src={story.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={story.projectImages[0]}
              alt={story.projectType}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#020813] via-transparent to-black/25 pointer-events-none" />
          
          <div className="absolute bottom-6 left-6 sm:left-10 z-10 pointer-events-none">
            <span className="text-[9px] font-bold uppercase tracking-widest text-[#57D6FF] bg-[#071A35]/80 px-3.5 py-1.5 rounded-full border border-[#57D6FF]/20 backdrop-blur-md inline-block mb-3">
              {story.projectType}
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-white">
              {story.name}
            </h3>
          </div>
        </div>

        {/* Modal Info Body */}
        <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Details */}
          <div className="lg:col-span-8 space-y-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#57D6FF] mb-3 flex items-center gap-2 font-serif">
                <Quote className="w-4 h-4" /> Client Testimony
              </h4>
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed italic text-left">
                "{story.quote}"
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#57D6FF] mb-3 flex items-center gap-2 font-serif">
                <Compass className="w-4 h-4" /> The Commission Story
              </h4>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed text-left">
                {story.fullStory}
              </p>
            </div>

            {story.projectImages.length > 1 && (
              <div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-[#57D6FF] mb-4 font-serif">
                  Gallery
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {story.projectImages.map((img, i) => (
                    <div key={i} className="relative h-40 rounded-xl overflow-hidden border border-white/10">
                      <Image src={img} alt="Project detail" fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Spec List */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-white/10 lg:pl-6 text-left">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#57D6FF] block mb-1">Budget Range</span>
              <span className="text-xs sm:text-sm font-semibold text-white">{story.budget}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#57D6FF] block mb-1">Timeframe</span>
              <span className="text-xs sm:text-sm font-semibold text-white">{story.timeframe}</span>
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#57D6FF] block mb-1">Location</span>
              <span className="text-xs sm:text-sm font-semibold text-white">{story.location}</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* Review Upload Form Modal Sub-Component */
function SubmitReviewModal({ onClose, onAddStory }: { onClose: () => void; onAddStory: (story: Testimonial) => void }) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    projectType: "",
    quote: "",
    rating: 5,
    fullStory: "",
    budget: "",
    timeframe: "",
  });

  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  
  const [projectFiles, setProjectFiles] = useState<FileList | null>(null);
  const [projectPreviews, setProjectPreviews] = useState<string[]>([]);
  
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileFile(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const handleProjectFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setProjectFiles(files);
      const urls = Array.from(files).map((file) => URL.createObjectURL(file));
      setProjectPreviews(urls);
    }
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      setVideoPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.quote || !formData.projectType) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newTestimonial: Testimonial = {
        id: `custom-${Date.now()}`,
        name: formData.name,
        location: formData.location || "Lagos, Nigeria",
        projectType: formData.projectType,
        quote: formData.quote,
        rating: formData.rating,
        profileImage: profilePreview || "/images/portrait-alexander.png",
        projectImages: projectPreviews.length > 0 ? projectPreviews : ["/images/project-resort-new.png"],
        videoUrl: videoPreview || "",
        fullStory: formData.fullStory || `A stunning swimming pool project execution detailing the high quality craftsmanship of ${formData.projectType}.`,
        budget: formData.budget || "₦250,000,000 +",
        timeframe: formData.timeframe || "12 Weeks",
      };

      onAddStory(newTestimonial);
      setIsSubmitting(false);

      // Trigger celebrate confetti
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
      });

      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-slate-950/85 backdrop-blur-xl">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="relative w-full max-w-xl bg-[#020813] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 flex flex-col max-h-[85vh] glass-card-dark text-left"
      >
        {/* Header */}
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">Share Your Journey</h3>
            <span className="text-[10px] text-slate-400 font-medium uppercase tracking-widest mt-1 block">Step {step} of 3</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 bg-slate-900">
          <div
            className="h-full bg-[#57D6FF] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto flex-1 space-y-5">
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#57D6FF] mb-2">Owner & Project Information</h4>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Client Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name *</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Olumide Adebayo"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Ikoyi, Lagos"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project type / Title */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Name *</label>
                  <input
                    required
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    placeholder="e.g. The Horizon Pool"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>

                {/* Star Rating */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Rating</label>
                  <select
                    name="rating"
                    value={formData.rating}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  >
                    <option value={5}>5.0 - Absolutely Exceptional</option>
                    <option value={4}>4.0 - Very Good</option>
                    <option value={3}>3.0 - Good Work</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Budget Range */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Budget Range</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g. ₦800,000,000"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>

                {/* Build Timeframe */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Build Timeframe</label>
                  <input
                    type="text"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    placeholder="e.g. 14 Weeks"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>
              </div>

              {/* Written Summary Testimony */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Headline Review (Quote)</label>
                <input
                  required
                  type="text"
                  name="quote"
                  value={formData.quote}
                  onChange={handleInputChange}
                  placeholder="Sum up your experience in 1-2 lines..."
                  className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              {/* Detailed full story */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Architectural Story</label>
                <textarea
                  name="fullStory"
                  rows={5}
                  value={formData.fullStory}
                  onChange={handleInputChange}
                  placeholder="Detail the execution phase, materials used, structural solutions ADLAT delivered, and overall craftsmanship details..."
                  className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all min-h-[120px]"
                />
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#57D6FF] mb-2">Upload Files</h4>

              {/* 3 Upload columns (Profile, Gallery, Video) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. Profile photo Upload */}
                <div className="space-y-2 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">Owner Portrait</span>
                  <div className="relative border-2 border-dashed border-white/10 hover:border-[#57D6FF]/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[140px] bg-slate-900/35 transition-all">
                    {profilePreview ? (
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border border-white/10">
                        <Image src={profilePreview} alt="Profile preview" fill className="object-cover" />
                      </div>
                    ) : (
                      <>
                        <Camera className="w-6 h-6 text-slate-500 mb-2" />
                        <span className="text-[9px] text-slate-400 leading-normal">Drag or Click Photo</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleProfileFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* 2. Project Photos Upload */}
                <div className="space-y-2 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">Project Gallery</span>
                  <div className="relative border-2 border-dashed border-white/10 hover:border-[#57D6FF]/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[140px] bg-slate-900/35 transition-all">
                    {projectPreviews.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {projectPreviews.slice(0, 3).map((url, i) => (
                          <div key={i} className="relative w-8 h-8 rounded-md overflow-hidden border border-white/15">
                            <Image src={url} alt="Project preview" fill className="object-cover" />
                          </div>
                        ))}
                        {projectPreviews.length > 3 && (
                          <span className="text-[8px] text-[#57D6FF] flex items-center justify-center font-bold">+{projectPreviews.length - 3}</span>
                        )}
                      </div>
                    ) : (
                      <>
                        <ImageIcon className="w-6 h-6 text-slate-500 mb-2" />
                        <span className="text-[9px] text-slate-400 leading-normal">Drag or Click Images</span>
                      </>
                    )}
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleProjectFilesChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

                {/* 3. Testimonial Video Upload */}
                <div className="space-y-2 text-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-slate-400 block">Testimonial Video</span>
                  <div className="relative border-2 border-dashed border-white/10 hover:border-[#57D6FF]/50 rounded-2xl p-4 flex flex-col items-center justify-center min-h-[140px] bg-slate-900/35 transition-all">
                    {videoPreview ? (
                      <div className="flex flex-col items-center gap-1">
                        <Video className="w-6 h-6 text-[#57D6FF]" />
                        <span className="text-[8px] text-slate-300 font-semibold line-clamp-1">{videoFile?.name}</span>
                      </div>
                    ) : (
                      <>
                        <Video className="w-6 h-6 text-slate-500 mb-2" />
                        <span className="text-[9px] text-slate-400 leading-normal">Drag or Click MP4 Video</span>
                      </>
                    )}
                    <input
                      type="file"
                      accept="video/mp4,video/x-m4v,video/*"
                      onChange={handleVideoFileChange}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                  </div>
                </div>

              </div>

            </div>
          )}

        </form>

        {/* Modal Footer Controls */}
        <div className="p-6 border-t border-white/5 bg-slate-900/30 flex items-center justify-between gap-4">
          <div>
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((s) => s - 1)}
                className="px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
              >
                Back
              </button>
            )}
          </div>

          <div>
            {step < 3 ? (
              <button
                type="button"
                onClick={() => setStep((s) => s + 1)}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#57D6FF] text-[#071A35] hover:bg-[#009DFF] hover:text-white transition-all cursor-pointer"
              >
                Continue
              </button>
            ) : (
              <button
                type="submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#57D6FF] text-[#071A35] hover:bg-[#009DFF] hover:text-white hover:shadow-[0_0_15px_rgba(87,214,255,0.3)] disabled:opacity-50 transition-all cursor-pointer flex items-center gap-1.5"
              >
                {isSubmitting ? (
                  <span className="w-3.5 h-3.5 border-2 border-[#071A35] border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>Submit & Publish</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>

      </motion.div>
    </div>
  );
}
