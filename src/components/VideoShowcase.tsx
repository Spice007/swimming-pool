"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, Eye, Clapperboard, Award } from "lucide-react";
import Image from "next/image";

interface VideoProject {
  title: string;
  category: string;
  duration: string;
  coverImage: string;
  videoUrl: string;
  description: string;
}

const videoProjects: VideoProject[] = [
  {
    title: "Cliffs of Malibu Aerial Pan",
    category: "Drone Footage",
    duration: "0:15",
    coverImage: "/images/project-infinity.png",
    videoUrl: "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c022f733f3f364582998568600868f72&profile_id=165&oauth2_token_id=57447761",
    description: "An aerial panorama capturing the structural cantilever layout merging seamlessly with the Pacific horizon.",
  },
  {
    title: "Shotcrete & Structural Casting",
    category: "Timelapse Construction",
    duration: "0:24",
    coverImage: "/images/about-architectural.png",
    videoUrl: "https://player.vimeo.com/external/554837835.sd.mp4?s=38be78cd5b71946c59b66b4d320be53491ed123b&profile_id=165&oauth2_token_id=57447761",
    description: "A chronological look at our heavy engineering phase, showcasing precision structural steel framework casting.",
  },
  {
    title: "Villas Cascading Walkthrough",
    category: "Completed Masterpiece",
    duration: "0:18",
    coverImage: "/images/project-resort.png",
    videoUrl: "https://player.vimeo.com/external/517602124.sd.mp4?s=910dfbc9d96c9c64b584a7e91a0c4f51e06fa99d&profile_id=165&oauth2_token_id=57447761",
    description: "A twilight walkthrough focusing on our natural stone water wall mechanics and synchronized lighting design.",
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-24 bg-[#F8FAFC] text-[#071A35] relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009DFF] block mb-3">
            Cinematic Experience
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Documented Excellence
          </h2>
          <p className="text-[#071A35]/70 font-light text-base sm:text-lg leading-relaxed">
            Witness the meticulous details of our build processes, from drone footage showing completed structures to heavy construction timelapses.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoProjects.map((project, idx) => (
            <VideoCard
              key={idx}
              project={project}
              index={idx}
              onPlay={setActiveVideo}
            />
          ))}
        </div>

      </div>

      {/* Fullscreen Video Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <VideoLightbox
            videoUrl={activeVideo}
            onClose={() => setActiveVideo(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* Sub-Component: Video Card */
function VideoCard({
  project,
  index,
  onPlay,
}: {
  project: VideoProject;
  index: number;
  onPlay: (url: string) => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onPlay(project.videoUrl)}
      className="group relative h-[320px] rounded-3xl overflow-hidden cursor-pointer shadow-lg bg-slate-900 border border-slate-200/10"
    >
      {/* Cover Image (Always visible as base) */}
      <Image
        src={project.coverImage}
        alt={project.title}
        fill
        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
      />

      {/* Hover Mini Loop Video */}
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 scale-[1.03] ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={project.videoUrl} type="video/mp4" />
      </video>

      {/* Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent z-10" />

      {/* Top Badge */}
      <div className="absolute top-6 left-6 z-20 flex justify-between w-[calc(100%-48px)]">
        <span className="text-[9px] font-bold uppercase tracking-widest text-[#57D6FF] bg-[#071A35]/80 px-3 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
          {project.category}
        </span>
        <span className="text-[9px] font-semibold text-white/80 bg-slate-900/60 px-2.5 py-1.5 rounded-md backdrop-blur-md">
          {project.duration}
        </span>
      </div>

      {/* Play Button Indicator */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-[#57D6FF] group-hover:border-[#57D6FF] group-hover:shadow-[0_0_20px_rgba(87,214,255,0.4)]">
        <Play className="w-5 h-5 text-white fill-white transition-transform duration-300 group-hover:scale-105" />
      </div>

      {/* Details Box */}
      <div className="absolute bottom-6 left-6 right-6 z-20">
        <h3 className="font-serif text-lg font-bold text-white mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-slate-300 font-light line-clamp-2">
          {project.description}
        </p>
      </div>
    </motion.div>
  );
}

/* Sub-Component: Video Lightbox Modal */
function VideoLightbox({ videoUrl, onClose }: { videoUrl: string; onClose: () => void }) {
  // Prevent background scroll
  useState(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md">
      {/* Close Background Click */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-slate-900 border border-white/10 text-white hover:bg-[#57D6FF] hover:text-[#071A35] transition-all duration-300"
        aria-label="Close video player"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Large Player container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black z-10"
      >
        <video
          autoPlay
          controls
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  );
}
