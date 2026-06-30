"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Premium luxury confetti splash (Aqua Blue #57D6FF & Accent Blue #009DFF & Gold/White)
    const duration = 3 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: ["#57D6FF", "#009DFF", "#ffffff", "#071A35"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: ["#57D6FF", "#009DFF", "#ffffff", "#071A35"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  return (
    <section id="contact" className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#009DFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Studio Details */}
          <div className="lg:col-span-5 space-y-8 lg:pr-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#57D6FF] block mb-3">
                Collaborate With Us
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight mb-6">
                Let’s Sculpt Your Paradise
              </h2>
              <p className="text-slate-400 font-light text-sm sm:text-base leading-relaxed">
                We accept a limited number of commissions annually to maintain unmatched quality. Get in touch with our design studio to start mapping your project.
              </p>
            </div>

            <div className="space-y-6 pt-6">
              
              {/* Phone detail */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#57D6FF]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                    Direct Studio
                  </span>
                  <a href="tel:+2348169718959" className="text-sm sm:text-base text-white hover:text-[#57D6FF] transition-colors">
                    +234 8169718959
                  </a>
                </div>
              </div>

              {/* Email detail */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#57D6FF]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                    Inquiries
                  </span>
                  <a href="mailto:lattyadebayo3@gmail.com" className="text-sm sm:text-base text-white hover:text-[#57D6FF] transition-colors">
                    lattyadebayo3@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram detail */}
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-[#57D6FF]">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase tracking-wider font-semibold">
                    Instagram
                  </span>
                  <a href="https://instagram.com/adlat_global" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base text-white hover:text-[#57D6FF] transition-colors">
                    @adlat_global
                  </a>
                </div>
              </div>


            </div>

            {/* Quick Action Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* WhatsApp Button */}
              <a
                href="https://wa.me/2348169718959"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366] hover:text-[#071A35] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md font-bold text-xs uppercase tracking-widest cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current animate-pulse" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.37 5.378 0 12.003 0a11.94 11.94 0 0 1 8.485 3.515c2.27 2.27 3.52 5.285 3.517 8.491-.003 6.63-5.378 12-12.003 12-2.006-.002-3.98-.502-5.733-1.45L0 24zm6.59-4.846c1.62.962 3.238 1.468 4.858 1.469 5.333-.001 9.68-4.352 9.682-9.688.001-2.585-1.002-5.016-2.825-6.84a9.61 9.61 0 0 0-6.857-2.83c-5.334 0-9.682 4.35-9.685 9.685-.001 1.76.49 3.284 1.455 4.902l-.997 3.645 3.73-.977zm11.304-6.866c-.305-.153-1.805-.89-2.083-.99-.278-.102-.48-.153-.68.152-.2.304-.775.99-.95 1.192-.175.203-.35.227-.655.076-1.838-.92-2.83-1.517-3.848-3.266-.27-.46.27-.426.772-1.427.084-.17.042-.317-.02-.444-.064-.127-.48-1.16-.657-1.585-.172-.415-.346-.359-.48-.367-.123-.007-.263-.009-.404-.009-.14 0-.37.053-.564.263-.194.21-.74.723-.74 1.762s.755 2.04 1.86 2.185c.11.015 2.149 3.283 5.205 4.6c.727.313 1.293.5 1.734.64.73.232 1.396.2 1.92.122.586-.087 1.806-.738 2.062-1.454.257-.717.257-1.33.18-1.459-.076-.127-.278-.203-.583-.356z"/>
                </svg>
                <span>WhatsApp Us</span>
              </a>

              {/* Call Button */}
              <a
                href="tel:+2348169718959"
                className="flex-1 flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-[#57D6FF]/10 border border-[#57D6FF]/30 text-[#57D6FF] hover:bg-[#57D6FF] hover:text-[#071A35] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md font-bold text-xs uppercase tracking-widest cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call Studio</span>
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-7">
            <motion.div
              layout
              className="glass-card-dark p-8 sm:p-10 rounded-3xl border border-white/5 relative overflow-hidden"
            >
              
              {/* Form Content Toggle */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Grid fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="relative">
                      <input
                        required
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2.5 text-sm text-white glass-input rounded-2xl focus:outline-none focus:ring-0"
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-4 top-4.5 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#57D6FF] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#57D6FF] text-xs font-semibold uppercase tracking-wider"
                      >
                        Full Name
                      </label>
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        required
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder=" "
                        className="peer w-full px-4 pt-6 pb-2.5 text-sm text-white glass-input rounded-2xl focus:outline-none focus:ring-0"
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-4 top-4.5 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#57D6FF] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#57D6FF] text-xs font-semibold uppercase tracking-wider"
                      >
                        Email Address
                      </label>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <input
                      required
                      type="tel"
                      name="phone"
                      id="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2.5 text-sm text-white glass-input rounded-2xl focus:outline-none focus:ring-0"
                    />
                    <label
                      htmlFor="phone"
                      className="absolute left-4 top-4.5 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#57D6FF] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#57D6FF] text-xs font-semibold uppercase tracking-wider"
                    >
                      Phone Number
                    </label>
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Project Type */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Project Type
                      </label>
                      <select
                        required
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] focus:shadow-[0_0_15px_rgba(87,214,255,0.15)] transition-all cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0F172A]">Select Pool Category</option>
                        <option value="infinity" className="bg-[#0F172A]">Infinity Pool</option>
                        <option value="resort" className="bg-[#0F172A]">Resort Pool</option>
                        <option value="rooftop" className="bg-[#0F172A]">Rooftop Pool</option>
                        <option value="modern" className="bg-[#0F172A]">Modern Geometric</option>
                        <option value="renovation" className="bg-[#0F172A]">Pool Renovation</option>
                        <option value="other" className="bg-[#0F172A]">Other Architectural</option>
                      </select>
                    </div>

                    {/* Budget Range */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Budget Target
                      </label>
                      <select
                        required
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-sm text-white bg-slate-900/60 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] focus:shadow-[0_0_15px_rgba(87,214,255,0.15)] transition-all cursor-pointer"
                      >
                        <option value="" disabled className="bg-[#0F172A]">Select Budget Range</option>
                        <option value="150m-250m" className="bg-[#0F172A]">₦150,000,000 - ₦250,000,000</option>
                        <option value="250m-500m" className="bg-[#0F172A]">₦250,000,000 - ₦500,000,000</option>
                        <option value="500m-1b" className="bg-[#0F172A]">₦500,000,000 - ₦1,000,000,000</option>
                        <option value="1b-plus" className="bg-[#0F172A]">₦1,000,000,000 +</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      required
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder=" "
                      className="peer w-full px-4 pt-6 pb-2.5 text-sm text-white glass-input rounded-2xl focus:outline-none focus:ring-0 min-h-[120px]"
                    />
                    <label
                      htmlFor="message"
                      className="absolute left-4 top-4.5 text-slate-400 pointer-events-none transition-all duration-300 peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#57D6FF] peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#57D6FF] text-xs font-semibold uppercase tracking-wider"
                    >
                      Project Objectives
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden inline-flex items-center justify-center gap-2 py-4 rounded-2xl text-xs font-bold uppercase tracking-widest bg-[#57D6FF] text-[#071A35] hover:bg-[#009DFF] hover:text-white hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 cursor-pointer disabled:opacity-50 shadow-[0_0_15px_rgba(87,214,255,0.2)]"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-[#071A35] border-t-transparent animate-spin" />
                    ) : (
                      <>
                        <span>Submit Consultation Request</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>

                </form>
              ) : (
                // Success message
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#57D6FF]/10 border border-[#57D6FF]/30 flex items-center justify-center text-[#57D6FF]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Inquiry Received
                    </h3>
                    <p className="text-sm text-slate-300 font-light max-w-sm mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-white">{formData.name}</span>. Our design director will review your project brief and contact you within 48 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        projectType: "",
                        budget: "",
                        message: "",
                      });
                      setIsSubmitted(false);
                    }}
                    className="text-xs text-[#57D6FF] uppercase tracking-widest hover:underline pt-4 font-semibold"
                  >
                    Submit Another Brief
                  </button>
                </motion.div>
              )}

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
