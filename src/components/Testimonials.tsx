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
    projectType: "The Eko Horizon Pool",
    quote: "ADLAT transformed our Ikoyi estate into a breathtaking sanctuary. The blend of local Nigerian granite and custom automated features is spectacular. Their attention to structural details is exceptional.",
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
    projectType: "Resort-Style Oasis",
    quote: "Our resort-style pool is the crown jewel of our villa. The subterranean swim-up bar, integrated stone fire burners, and twilight lighting program make us feel like we are at a private five-star estate.",
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
    quote: "Designing an acrylic-walled rooftop pool 42 stories up seemed impossible. ADLAT handled the extreme structural engineering and wind-barrier calculations with absolute precision. The result is breathtaking.",
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
    <section id="testimonials" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Decorative details */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#57D6FF]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#009DFF]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#57D6FF] block mb-3">
              Client Perspectives
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Client Success Stories
            </h2>
          </div>
          
          {/* Controls Panel */}
          <div className="flex items-center gap-4">
            {/* Grid/Carousel Toggles */}
            <div className="flex bg-slate-900/60 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
              <button
                onClick={() => setLayoutMode("grid")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  layoutMode === "grid"
                    ? "bg-[#57D6FF] text-[#071A35]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grid View</span>
              </button>
              <button
                onClick={() => setLayoutMode("carousel")}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  layoutMode === "carousel"
                    ? "bg-[#57D6FF] text-[#071A35]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Carousel</span>
              </button>
            </div>

            {/* Share CTA button */}
            <button
              onClick={() => setSubmitModalOpen(true)}
              className="flex items-center gap-1.5 px-5 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest border border-white/10 bg-white/5 hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] hover:shadow-[0_0_15px_rgba(87,214,255,0.25)] transition-all duration-300 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Share Journey</span>
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

                {/* Carousel Controls */}
                <div className="flex items-center justify-between mt-8 border-t border-white/5 pt-6">
                  {/* Arrows */}
                  <div className="flex gap-4">
                    <button
                      onClick={handlePrevCarousel}
                      className="p-3.5 rounded-full border border-white/10 text-white hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] transition-all duration-300 shadow-md cursor-pointer"
                      aria-label="Previous story"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleNextCarousel}
                      className="p-3.5 rounded-full border border-white/10 text-white hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] transition-all duration-300 shadow-md cursor-pointer"
                      aria-label="Next story"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Dots pagination */}
                  <div className="flex gap-2">
                    {list.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCarouselDir(idx > carouselIndex ? 1 : -1);
                          setCarouselIndex(idx);
                        }}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          carouselIndex === idx ? "w-8 bg-[#57D6FF]" : "w-2 bg-slate-600 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onClick={onClick}
      className="group relative flex flex-col justify-between p-7 rounded-3xl glass-card-dark border border-white/5 shadow-xl hover:border-[#57D6FF]/35 hover:shadow-[0_20px_40px_rgba(87,214,255,0.08)] hover:-translate-y-1.5 transition-all duration-500 cursor-pointer overflow-hidden min-h-[400px]"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#57D6FF]/3 blur-[50px] pointer-events-none rounded-full" />
      
      <div className="relative z-10">
        {/* Rating and Quote Symbol */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-1.5">
            {[...Array(story.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#57D6FF] text-[#57D6FF] transition-transform duration-300 group-hover:scale-110" />
            ))}
          </div>
          <Quote className="w-8 h-8 text-[#57D6FF]/15 shrink-0" />
        </div>

        {/* Written Review Teaser */}
        <blockquote className="font-light text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic line-clamp-4">
          "{story.quote}"
        </blockquote>
      </div>

      {/* Profile & Project specs */}
      <div className="relative z-10 mt-auto border-t border-white/10 pt-6">
        <div className="flex items-center gap-3.5">
          {/* Circular avatar with glowing ring */}
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-900 ring-2 ring-[#57D6FF]/20 group-hover:ring-[#57D6FF]/55 transition-all duration-500">
            <Image
              src={story.profileImage}
              alt={story.name}
              fill
              sizes="48px"
              loading="lazy"
              className="object-cover"
            />
          </div>
          <div>
            <span className="font-serif text-sm font-semibold text-white block">
              {story.name}
            </span>
            <span className="text-[10px] text-slate-400 block tracking-wider uppercase font-semibold">
              {story.location}
            </span>
          </div>
        </div>

        {/* Project Tag */}
        <div className="mt-5 flex items-center justify-between text-[10px] text-[#57D6FF] tracking-wider uppercase font-semibold">
          <span>{story.projectType}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
            Read Story
            <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
          </span>
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
      className="group relative grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-3xl glass-card-dark border border-white/5 shadow-2xl hover:border-[#57D6FF]/35 hover:shadow-[0_20px_45px_rgba(87,214,255,0.08)] transition-all duration-500 cursor-pointer overflow-hidden max-w-4xl"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#57D6FF]/4 blur-[80px] pointer-events-none rounded-full" />
      
      {/* Left side details */}
      <div className="md:col-span-8 flex flex-col justify-between z-10 text-left">
        <div>
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-1.5">
              {[...Array(story.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#57D6FF] text-[#57D6FF] transition-transform duration-300 group-hover:scale-110" />
              ))}
            </div>
            <Quote className="w-10 h-10 text-[#57D6FF]/15 shrink-0" />
          </div>

          <blockquote className="font-serif font-light text-slate-100 text-base sm:text-xl leading-relaxed mb-6">
            "{story.quote}"
          </blockquote>
        </div>

        <div className="flex items-center gap-4 mt-auto border-t border-white/10 pt-6">
          <div className="relative w-14 h-14 rounded-full overflow-hidden border border-white/10 shrink-0 bg-slate-900 ring-2 ring-[#57D6FF]/20 group-hover:ring-[#57D6FF]/55 transition-all duration-500">
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
            <span className="text-xs text-slate-400 block tracking-wider uppercase font-semibold">
              {story.location}
            </span>
          </div>
        </div>
      </div>

      {/* Right side teaser gallery */}
      <div className="md:col-span-4 flex flex-col gap-4 justify-center z-10">
        <div className="relative w-full h-[180px] rounded-2xl overflow-hidden border border-white/10 bg-slate-900 group/carousel-img">
          <Image
            src={story.projectImages[0]}
            alt={story.projectType}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            loading="lazy"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/carousel-img:opacity-100 transition-opacity duration-300">
            <Play className="w-10 h-10 text-white fill-white scale-90 group-hover/carousel-img:scale-100 transition-transform duration-300" />
          </div>
        </div>
        <div className="text-left">
          <span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1">Commission Type</span>
          <span className="text-xs font-semibold text-[#57D6FF] uppercase tracking-wider block">{story.projectType}</span>
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
              <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed italic">
                "{story.quote}"
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-[#57D6FF] mb-3 flex items-center gap-2 font-serif">
                <Compass className="w-4 h-4" /> The Commission Story
              </h4>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                {story.fullStory}
              </p>
            </div>

            {/* Gallery strip */}
            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Project Gallery</span>
              <div className="flex flex-wrap gap-4">
                {story.projectImages.map((img, idx) => (
                  <div key={idx} className="relative w-36 h-24 rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                    <Image
                      src={img}
                      alt="Project detail screenshot"
                      fill
                      sizes="144px"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Specs Table */}
          <div className="lg:col-span-4 space-y-6 lg:border-l lg:border-white/10 lg:pl-8">
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#57D6FF] flex items-center gap-2 font-serif">
              <Calendar className="w-4 h-4" /> Project Specifications
            </h4>

            <div className="divide-y divide-white/5 border-t border-b border-white/5 py-2">
              <div className="flex justify-between py-2.5 text-xs sm:text-sm">
                <span className="text-slate-400 font-light">Location</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#57D6FF]" />
                  {story.location}
                </span>
              </div>
              <div className="flex justify-between py-2.5 text-xs sm:text-sm">
                <span className="text-slate-400 font-light">Duration</span>
                <span className="font-semibold text-white">{story.timeframe}</span>
              </div>
              <div className="flex justify-between py-2.5 text-xs sm:text-sm">
                <span className="text-slate-400 font-light">Target Budget</span>
                <span className="font-semibold text-[#57D6FF]">{story.budget}</span>
              </div>
              <div className="flex justify-between py-2.5 text-xs sm:text-sm">
                <span className="text-slate-400 font-light">Rating Given</span>
                <span className="font-semibold text-white flex items-center gap-1">
                  {story.rating} <Star className="w-3.5 h-3.5 fill-[#57D6FF] text-[#57D6FF]" />
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-900">
                <Image
                  src={story.profileImage}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-xs text-slate-400 block">Verified Owner</span>
                <span className="text-sm font-bold text-white block leading-tight">{story.name}</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* User Review Submission Modal Sub-Component */
function SubmitReviewModal({
  onClose,
  onAddStory,
}: {
  onClose: () => void;
  onAddStory: (newStory: Testimonial) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    projectType: "",
    quote: "",
    fullStory: "",
    budget: "",
    timeframe: "",
    rating: 5,
  });

  const [profileFile, setProfileFile] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string>("");
  const [projectFiles, setProjectFiles] = useState<File[]>([]);
  const [projectPreviews, setProjectPreviews] = useState<string[]>([]);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoPreview, setVideoPreview] = useState<string>("");

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Prevent background scroll
  useState(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfileFile(file);
      const url = URL.createObjectURL(file);
      setProfilePreview(url);
    }
  };

  const handleProjectFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setProjectFiles((prev) => [...prev, ...files]);
      const urls = files.map((file) => URL.createObjectURL(file));
      setProjectPreviews((prev) => [...prev, ...urls]);
    }
  };

  const handleVideoFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoPreview(url);
    }
  };

  const handleStarClick = (rating: number) => {
    setFormData((prev) => ({ ...prev, rating }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate luxury API upload latency
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Fallbacks if user didn't upload files
    const finalProfile = profilePreview || "/images/portrait-alexander.png";
    const finalProjectImages = projectPreviews.length > 0 ? projectPreviews : ["/images/project-nigeria.png", "/images/project-modern-new.png"];
    const finalVideo = videoPreview || "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c022f733f3f364582998568600868f72&profile_id=165&oauth2_token_id=57447761";

    const customStory: Testimonial = {
      id: `custom-${Date.now()}`,
      name: formData.name,
      location: formData.location,
      projectType: formData.projectType,
      quote: formData.quote,
      rating: formData.rating,
      profileImage: finalProfile,
      projectImages: finalProjectImages,
      videoUrl: finalVideo,
      fullStory: formData.fullStory || `A luxury custom-engineered project crafted specifically in ${formData.location}. Build completed meticulously.`,
      budget: formData.budget || "₦500,000,000 - ₦1,000,000,000",
      timeframe: formData.timeframe || "16 Weeks",
    };

    onAddStory(customStory);
    setIsSubmitting(false);

    //Confetti burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#57D6FF", "#009DFF", "#ffffff"],
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-xl">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-[#020813] text-white rounded-3xl overflow-hidden border border-white/10 shadow-2xl z-10 glass-card-dark flex flex-col max-h-[90vh]"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2 rounded-full bg-slate-900/60 border border-white/10 text-white hover:bg-[#57D6FF] hover:text-[#071A35] transition-all duration-300 cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 border-b border-white/5 bg-slate-900/30 text-left">
          <div className="flex items-center gap-2 text-[#57D6FF] mb-1">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Share Your ADLAT Journey</span>
          </div>
          <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
            Publish Commission Review
          </h3>
          <span className="text-[10px] text-slate-500 uppercase tracking-wider block mt-1">
            Step {step} of 3
          </span>
        </div>

        {/* Form content (scrollable) */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-left">
          {step === 1 && (
            <div className="space-y-5">
              {/* Star Rating selection */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">Rate Experience</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      type="button"
                      key={stars}
                      onClick={() => handleStarClick(stars)}
                      className="p-1 rounded hover:scale-110 transition-transform cursor-pointer"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          stars <= formData.rating
                            ? "fill-[#57D6FF] text-[#57D6FF]"
                            : "text-slate-600 hover:text-slate-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Full Name</label>
                  <input
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Alexander Mercer"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Location</label>
                  <input
                    required
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Malibu, CA"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>
              </div>

              {/* Commission details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Project Type</label>
                  <input
                    required
                    type="text"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    placeholder="e.g. Infinity Overflow"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Total Budget</label>
                  <input
                    type="text"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    placeholder="e.g. ₦750M - ₦1B"
                    className="w-full px-4 py-3 text-xs sm:text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                  />
                </div>
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
