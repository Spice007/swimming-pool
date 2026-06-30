"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Map, Paintbrush, HardHat, Hammer, Droplets, CheckCircle } from "lucide-react";

interface Step {
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Discovery & Surveying",
    description: "We conduct detailed geological soil diagnostics, evaluate site boundaries, chart daily solar vectors, and align on initial luxury design aesthetics.",
    icon: Map,
  },
  {
    num: "02",
    title: "Architectural Design",
    description: "Our design studio creates high-resolution 3D virtual walkthroughs and site integration mockups, selecting premium travertine slabs and mosaic trims.",
    icon: Paintbrush,
  },
  {
    num: "03",
    title: "Hydraulic & Structural Engineering",
    description: "We compute high-flow filtration plumbing loops, specify reinforcement structural concrete specifications, and coordinate municipal permits.",
    icon: HardHat,
  },
  {
    num: "04",
    title: "Heavy Construction",
    description: "Precision excavation, double-cage structural steel reinforcement mesh assembly, and high-pressure shotcrete concrete shell casting are completed.",
    icon: Hammer,
  },
  {
    num: "055", // wait, "05"
    title: "Premium Finishing",
    description: "Our artisans meticulously set individual glass tiles, install custom teak/stone coping slabs, and program remote water chemistry monitoring hardware.",
    icon: Droplets,
  },
  {
    num: "06",
    title: "Handover & Optimization",
    description: "We fill the pool, balance chemistry levels, pair smart home phone application controls, and conduct user tutorials for seamless operations.",
    icon: CheckCircle,
  },
];

// Let's fix the "055" typo in code mapping
steps[4].num = "05";

export default function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll position of the entire timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Scale height of progress line from 0 to 1
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="process" className="py-24 bg-[#F8FAFC] text-[#071A35] relative">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-[#009DFF] block mb-3">
            Our Blueprint
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
            Execution Timeline
          </h2>
          <p className="text-[#071A35]/70 font-light text-base sm:text-lg leading-relaxed">
            Every masterpiece is built on strict standards. From surveying to final handover, we follow a rigorous process to guarantee absolute quality.
          </p>
        </div>

        {/* Timeline Path */}
        <div ref={containerRef} className="relative mt-12 pl-8 sm:pl-16">
          
          {/* Background Grey Path */}
          <div className="absolute left-[20px] sm:left-[28px] top-4 bottom-4 w-0.5 bg-slate-200" />

          {/* Animated Scroll-linked Cyan Path */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-[20px] sm:left-[28px] top-4 bottom-4 w-0.5 bg-[#009DFF] shadow-[0_0_10px_rgba(0,157,255,0.5)]"
          />

          {/* Timeline Nodes */}
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <TimelineItem key={idx} step={step} index={idx} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

function TimelineItem({ step, index }: { step: Step; index: number }) {
  const IconComponent = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: "easeOut" }}
      className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 group"
    >
      {/* Node Bullet */}
      <div className="absolute -left-[32px] sm:-left-[44px] top-1.5 z-10 flex items-center justify-center">
        {/* Outer Halo */}
        <div className="w-[26px] h-[26px] sm:w-[32px] sm:h-[32px] rounded-full bg-white border-2 border-slate-300 flex items-center justify-center group-hover:border-[#009DFF] transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(87,214,255,0.6)]">
          {/* Inner Core */}
          <div className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-full bg-slate-300 group-hover:bg-[#009DFF] transition-colors duration-300" />
        </div>
      </div>

      {/* Box details */}
      <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-md relative overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {/* Shimmer Border line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#009DFF] to-[#57D6FF]" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-100 text-[#071A35] group-hover:bg-[#57D6FF]/10 group-hover:text-[#009DFF] transition-colors duration-300">
              <IconComponent className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold tracking-tight">
              {step.title}
            </h3>
          </div>
          <span className="font-serif text-3xl font-extrabold text-slate-200 group-hover:text-[#57D6FF]/30 transition-colors duration-300">
            {step.num}
          </span>
        </div>

        <p className="text-slate-500 font-light text-sm leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
