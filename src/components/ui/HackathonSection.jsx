"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  Building2
} from "lucide-react";
import { hackathons } from "@/data/hackathons";

export function HackathonSection({ onHackathonClick }) {
  return (
    <section id="hackathons" className="bg-black p-5 sm:p-8 md:p-16 lg:p-24 flex flex-col relative overflow-hidden border-t border-white/5 py-14 sm:py-18 md:py-28">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[280px] sm:w-[380px] md:w-[450px] h-[280px] sm:h-[380px] md:h-[450px] bg-primary-red/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[300px] sm:w-[420px] md:w-[500px] h-[300px] sm:h-[420px] md:h-[500px] bg-amber-500/5 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      {/* Big Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.015] pointer-events-none select-none hidden xl:block">
        <span className="text-[20rem] font-extrabold text-white tracking-tighter whitespace-nowrap">
          CHALLENGES
        </span>
      </div>

      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12 md:mb-16 gap-4 sm:gap-6 relative z-10">
        <div>
          <span className="text-primary-red font-bold uppercase tracking-[0.3em] sm:tracking-[0.35em] text-[0.6rem] sm:text-xs mb-2.5 sm:mb-4 block opacity-90">
            *Achievements / Honors
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-[5.5rem] lg:text-[6rem] font-extrabold text-white leading-[0.9] md:leading-[0.8] uppercase tracking-tighter">
            Hackathons
          </h2>
        </div>
        <div className="max-w-xs md:max-w-md md:text-right">
          <p className="text-white/40 text-[0.65rem] sm:text-xs font-inter uppercase leading-relaxed tracking-widest">
            High-stakes engineering hackathons, systems architecture, collective intelligence, and cultural preservation.
          </p>
        </div>
      </div>

      {/* HIGH-END RESPONSIVE CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 relative z-10 max-w-7xl w-full">
        {hackathons.map((hackathon, index) => (
          <motion.div
            key={hackathon.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onHackathonClick && onHackathonClick(hackathon)}
            className="group relative bg-[#090909] border border-white/10 hover:border-primary-red/50 rounded-2xl md:rounded-3xl p-5 sm:p-7 md:p-8 flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-[0_0_40px_rgba(235,47,47,0.12)] min-h-[380px] sm:min-h-[420px] md:min-h-[470px]"
          >
            {/* Ambient Radial Red Flare */}
            <div className="absolute top-0 right-0 w-36 sm:w-44 h-36 sm:h-44 bg-primary-red/5 blur-[40px] sm:blur-[50px] -mr-12 -mt-12 group-hover:bg-primary-red/20 transition-all duration-700 pointer-events-none" />

            {/* Giant Number Outline in Background */}
            <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-6xl sm:text-7xl md:text-8xl font-black font-outfit text-outline opacity-10 group-hover:opacity-35 group-hover:text-primary-red transition-all duration-700 select-none pointer-events-none">
              {hackathon.numStr}
            </div>

            {/* TOP HEADER: Status, Dot & Badge */}
            <div className="relative z-10 flex items-start justify-between gap-3">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse shrink-0" />
                  <span className="text-[0.6rem] font-mono text-primary-red tracking-[0.2em] uppercase font-bold">
                    {hackathon.code}
                  </span>
                </div>
                <span className="text-[0.6rem] sm:text-[0.65rem] font-black text-white/50 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                  {hackathon.badgeText}
                </span>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <span className="text-white/25 group-hover:text-primary-red transition-colors duration-500 text-[0.7rem] sm:text-xs font-black tracking-tighter italic uppercase">
                  {hackathon.year}
                </span>
                <span className="text-[0.5rem] sm:text-[0.55rem] font-mono text-white/30 uppercase tracking-widest mt-0.5">
                  Verified Case
                </span>
              </div>
            </div>

            {/* MIDDLE BODY: Title, Subtitle & Description */}
            <div className="relative z-10 my-auto py-5 sm:py-6">
              <div className="flex items-center gap-1.5 text-white/40 text-[0.6rem] sm:text-[0.65rem] font-mono uppercase tracking-widest mb-2.5 sm:mb-3">
                <Building2 className="w-3.5 h-3.5 text-primary-red shrink-0" />
                <span className="line-clamp-1">{hackathon.subtitle}</span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight uppercase tracking-tight group-hover:text-primary-red transition-colors duration-500 mb-3 sm:mb-4">
                {hackathon.title}
              </h3>

              <p className="text-xs sm:text-sm text-white/60 font-inter font-normal leading-relaxed line-clamp-3 mb-4 sm:mb-6">
                {hackathon.shortDesc}
              </p>

              {/* Tech / Tag Badges */}
              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                {hackathon.techStack.slice(0, 3).map((t, i) => (
                  <span
                    key={i}
                    className="text-[0.55rem] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full border border-white/10 text-white/50 group-hover:border-primary-red/40 group-hover:text-primary-red transition-all duration-500 bg-white/[0.02]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* BOTTOM FOOTER: Circular Button & Visual Indicator */}
            <div className="relative z-10 pt-4 sm:pt-5 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-1.5">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary-red transition-colors duration-500"
                    style={{ transitionDelay: `${i * 80}ms` }}
                  />
                ))}
                <span className="text-[0.5rem] sm:text-[0.55rem] font-bold text-white/30 uppercase tracking-[0.2em] sm:tracking-[0.25em] ml-1.5 sm:ml-2 group-hover:text-white transition-colors duration-500">
                  Inspect Project
                </span>
              </div>
            </div>

            {/* Glowing bottom line */}
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
