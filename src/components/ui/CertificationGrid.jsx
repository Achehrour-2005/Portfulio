"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CertificationGrid = ({ certifications }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group/container">
      
      <div className="md:absolute -top-16 right-0 flex justify-center md:justify-end gap-4 z-20 mt-8 md:mt-0">
        <button 
          onClick={() => scroll('left')}
          className="p-3 md:p-2 rounded-full border border-white/10 hover:border-primary-red/50 hover:bg-primary-red/5 transition-all text-white/40 hover:text-primary-red"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={() => scroll('right')}
          className="p-3 md:p-2 rounded-full border border-white/10 hover:border-primary-red/50 hover:bg-primary-red/5 transition-all text-white/40 hover:text-primary-red"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      
      <div 
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {certifications.map((cert, index) => (
          <div key={cert.id} className="min-w-full sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] xl:min-w-[calc(25%-18px)] snap-start">
            <CertificationCard cert={cert} index={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative bg-[#0a0a0a] border border-white/5 p-6 rounded-xl hover:border-primary-red/30 transition-all duration-500 flex flex-col justify-between min-h-[220px] overflow-hidden"
    >
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-red/5 blur-[50px] -mr-16 -mt-16 group-hover:bg-primary-red/10 transition-all duration-700"></div>
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary-red/10 transition-colors">
            <Award className="w-5 h-5 text-white/40 group-hover:text-primary-red transition-colors" />
          </div>
          <span className="text-[0.6rem] font-mono text-white/20 group-hover:text-white/40 uppercase tracking-widest">
            {cert.id}
          </span>
        </div>

        <h3 className="text-sm md:text-base font-bold text-white mb-2 leading-snug group-hover:text-primary-red transition-colors line-clamp-2 uppercase tracking-tight">
          {cert.title}
        </h3>
        
        <p className="text-[0.65rem] font-medium text-white/40 uppercase tracking-wider mb-4">
          {cert.issuer}
        </p>
      </div>

      <div className="relative z-10 pt-4 border-t border-white/5 flex flex-col gap-3">
        <p className="text-[0.6rem] text-white/30 italic line-clamp-2 leading-relaxed group-hover:text-white/60 transition-colors">
          "{cert.desc}"
        </p>
        
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3 h-3 text-green-500/50" />
            <span className="text-[0.55rem] font-bold text-white/20 uppercase tracking-tighter">Verified Asset</span>
          </div>
          
          <a 
            href={cert.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[0.6rem] font-black text-primary-red uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0"
          >
            Verify <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-red/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
    </motion.div>
  );
};

export { CertificationGrid };
