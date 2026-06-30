"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { useState } from "react";

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

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Process", href: "#process" },
  { name: "Testimonials", href: "#testimonials" },
];

const serviceLinks = [
  { name: "Pool Design & Architecture", href: "#services" },
  { name: "Precision Engineering", href: "#services" },
  { name: "Premium Renovations", href: "#services" },
  { name: "Outdoor Living Environments", href: "#services" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(element, { offset: -80 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-[#020813] text-white pt-20 pb-10 relative overflow-hidden border-t border-white/5">
      {/* Subtle bottom lighting */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-[#57D6FF]/3 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/5">
          
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center gap-2 group w-fit"
            >
              <span className="font-serif text-3xl font-bold tracking-widest text-white">
                ADLAT
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#57D6FF] group-hover:scale-150 transition-transform duration-300" />
            </a>
            <p className="text-slate-400 font-light text-sm leading-relaxed max-w-sm">
              We design and construct world-class swimming pools and high-end outdoor architecture. Merging precision structural engineering with minimalist aesthetics.
            </p>
            {/* Social media links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com/adlat_global"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] transition-all duration-300"
                aria-label="Instagram profile"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] transition-all duration-300"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://houzz.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-[#57D6FF] hover:text-[#071A35] hover:border-[#57D6FF] transition-all duration-300 flex items-center justify-center font-bold text-xs"
                aria-label="Houzz profile"
              >
                H
              </a>
            </div>
          </div>

          {/* Navigation Directory */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#57D6FF]">
              Studio
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300 font-light"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Directory */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#57D6FF]">
              Expertise
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-slate-400 hover:text-white transition-colors duration-300 font-light flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#57D6FF]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter subscription */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#57D6FF]">
              Private Journal
            </h4>
            <p className="text-slate-400 font-light text-xs sm:text-sm leading-relaxed">
              Subscribe to receive updates on newly completed projects and architectural publications.
            </p>
            
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address"
                  className="w-full px-4 py-3 pr-12 text-xs text-white bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-[#57D6FF] transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-2.5 p-2 rounded-xl bg-white/10 hover:bg-[#57D6FF] hover:text-[#071A35] transition-all duration-300"
                  aria-label="Subscribe"
                >
                  <Mail className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <span className="text-xs text-[#57D6FF] font-semibold block bg-[#57D6FF]/10 border border-[#57D6FF]/25 px-4 py-3 rounded-2xl text-center">
                Thank you for subscribing.
              </span>
            )}
          </div>

        </div>

        {/* Lower Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 text-xs text-slate-500 font-light">
          <span>
            ADLAT Pools © 2026. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
