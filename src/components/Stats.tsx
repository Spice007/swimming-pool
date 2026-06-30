"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  {
    value: 500,
    suffix: "+",
    label: "Projects Completed",
    description: "Extraordinary pools and landscapes delivered globally.",
  },
  {
    value: 20,
    suffix: "+",
    label: "Years Experience",
    description: "Designing, engineering and sculpting aquatic spaces.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Unrivaled commitment to craftsmanship and support.",
  },
  {
    value: 50,
    suffix: "+",
    label: "Awards Won",
    description: "Recognized internationally for design innovation.",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background visual detail */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[#57D6FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <StatCard key={idx} item={item} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ item, index }: { item: StatItem; index: number }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = item.value;
    const duration = 2; // Duration in seconds
    const fps = 60;
    const totalFrames = duration * fps;
    const increment = end / totalFrames;

    let currentFrame = 0;
    const timer = setInterval(() => {
      currentFrame++;
      start = Math.min(end, Math.ceil(increment * currentFrame));
      setCount(start);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [isInView, item.value]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="p-8 rounded-3xl bg-[#071A35]/35 border border-white/5 relative group hover:border-[#57D6FF]/25 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
    >
      {/* Glowing backdrop hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#009DFF]/0 to-[#57D6FF]/0 group-hover:from-[#009DFF]/5 group-hover:to-[#57D6FF]/2 transition-all duration-500 rounded-3xl" />
      
      <div className="relative z-10 space-y-4">
        {/* Animated Counter */}
        <div className="flex items-baseline">
          <span className="font-serif text-5xl sm:text-6xl font-bold tracking-tight text-white">
            {count}
          </span>
          <span className="font-serif text-3xl sm:text-4xl font-bold text-[#57D6FF] ml-0.5">
            {item.suffix}
          </span>
        </div>

        {/* Labels */}
        <div className="space-y-1">
          <h4 className="text-sm font-semibold tracking-wider uppercase text-slate-200">
            {item.label}
          </h4>
          <p className="text-xs text-slate-400 font-light leading-relaxed">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
