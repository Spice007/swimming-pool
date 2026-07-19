"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, ShieldCheck, Award, Star, Eye } from "lucide-react";
import Image from "next/image";

type TabKey = "story" | "vision" | "awards";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabKey>("story");

  return (
    <section id="about" className="py-24 bg-white text-[#6B7280] relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Architectural Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative min-h-[350px] lg:min-h-auto rounded-3xl overflow-hidden shadow-xl border border-slate-200"
          >
            <Image
              src="/images/about-architectural-drawing.png"
              alt="Professional architectural drawing and technical line sketch of a luxury villa with a custom swimming pool"
              fill
              className="object-cover w-full h-full"
            />
            {/* Elegant draft paper border/blueprint overlay */}
            <div className="absolute inset-0 border border-slate-300/50 pointer-events-none rounded-3xl" />
          </motion.div>

          {/* Right: Company Details & Interactive Tabs */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-12">
            
            {/* Header */}
            <div>
              <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.25em] text-[#0A5C9E] block mb-3">
                Architectural Studio
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-[52px] font-bold tracking-tight mb-4 text-[#0F172A] leading-[1.1]">
                Redefining Aquatic Landscapes
              </h2>
            </div>

            {/* Tab buttons */}
            <div className="flex border-b border-slate-200">
              {(["story", "vision", "awards"] as TabKey[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`relative pb-4 px-6 text-xs md:text-sm font-semibold font-sans tracking-[0.1em] uppercase transition-colors duration-300 ${
                    activeTab === tab ? "text-[#0A5C9E]" : "text-slate-400 hover:text-[#0F172A]"
                  }`}
                >
                  {tab === "story" && "Our Story"}
                  {tab === "vision" && "Mission & Values"}
                  {tab === "awards" && "Awards & Accreditations"}
                  {activeTab === tab && (
                    <motion.span
                      layoutId="aboutUnderline"
                      className="absolute bottom-0 left-0 w-full h-[1px] bg-[#0A5C9E]"
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                {activeTab === "story" && (
                  <motion.div
                    key="story"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6 text-[#6B7280] font-light text-base md:text-[18px] leading-[1.85]"
                  >
                    <p>
                      ADLAT GLOBAL SERVICES was founded by a collective of structural engineers, luxury landscape designers, and modern architects who believed swimming pools should not merely be water basins, but central architectural anchor points of fine living.
                    </p>
                    <p>
                      Over two decades, we have evolved from a local design house into an internationally recognized firm. We integrate civil engineering, water hydraulics, structural casting, and micro-aesthetic design to craft pools that redefine luxury residences.
                    </p>
                  </motion.div>
                )}

                {activeTab === "vision" && (
                  <motion.div
                    key="vision"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0F172A] flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#0A5C9E]" /> Our Mission
                        </h4>
                        <p className="text-[#6B7280] font-light text-sm md:text-[16px] leading-[1.8]">
                          To design and build pools that seamlessly integrate luxury, structural longevity, and natural landscape aesthetics.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0F172A] flex items-center gap-2">
                          <Compass className="w-4 h-4 text-[#0A5C9E]" /> Core Values
                        </h4>
                        <p className="text-[#6B7280] font-light text-sm md:text-[16px] leading-[1.8]">
                          Sourcing global materials (Italian travertine, Greek marble), engineering with submillimeter precision, and maintaining eco-friendly filtration loops.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "awards" && (
                  <motion.div
                    key="awards"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Awards list */}
                      <div className="space-y-4">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0F172A] flex items-center gap-2">
                          <Award className="w-4 h-4 text-[#0A5C9E]" /> Awards
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#6B7280] font-light">
                          <li className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 fill-[#5CC6EC] text-[#5CC6EC] shrink-0" />
                            <span>Gold Winner - International Pool Architecture 2025</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 fill-[#5CC6EC] text-[#5CC6EC] shrink-0" />
                            <span>Aesthetic Living Excellence Prize 2024</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Star className="w-3.5 h-3.5 fill-[#5CC6EC] text-[#5CC6EC] shrink-0" />
                            <span>Elite Design Award (Rooftop Category) 2023</span>
                          </li>
                        </ul>
                      </div>

                      {/* Certifications list */}
                      <div className="space-y-4">
                        <h4 className="text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-[#0F172A] flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-[#0A5C9E]" /> Certifications
                        </h4>
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#6B7280] font-light">
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A5C9E] mt-2 shrink-0" />
                            <span>Licensed Master Builder & Concrete Specialist</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A5C9E] mt-2 shrink-0" />
                            <span>Structural Engineers Council Accredited Firm</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0A5C9E] mt-2 shrink-0" />
                            <span>Certified Eco-Hydraulic Loop Integrators</span>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
