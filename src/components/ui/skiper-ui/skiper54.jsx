"use client";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Globe, Award, ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Skiper54 = ({ certs }) => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black py-0">
      <Carousel_Certifications
        certs={certs}
        className=""
        loop={true}
        showNavigation={true}
        showPagination={true} 
      />
    </div>
  );
};

const Carousel_Certifications = ({
  certs,
  className,
  autoplay = false,
  loop = true,
  showNavigation = true,
  showPagination = true
}) => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      className={cn("w-full", className)}
      opts={{
        loop,
        slidesToScroll: 1,
      }}
      plugins={
        autoplay
          ? [
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
                stopOnMouseEnter: true,
              }),
            ]
          : []
      }>
      <CarouselContent className="flex h-[450px] md:h-[550px] w-full items-center">
        {certs.map((cert, index) => (
          <CarouselItem
            key={index}
            className="relative flex h-[85%] w-full basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[35%] xl:basis-[28%] items-center justify-center px-4">
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(8% 0 8% 0 round 1.5rem)"
                    : "inset(0 0 0 0 round 1.5rem)",
                opacity: current !== index ? 0.4 : 1,
                scale: current !== index ? 0.92 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className={cn(
                "h-full w-full overflow-hidden rounded-2xl relative transition-all duration-700",
                current === index 
                  ? "bg-[#0c0c0c] border border-white/10 shadow-[0_0_50px_rgba(235,47,47,0.1)]" 
                  : "bg-[#050505] border border-white/5"
              )}>
              
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              
              <a 
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative h-full w-full p-10 md:p-14 flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" 
                     style={{ background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(235, 47, 47, 0.12), transparent 40%)' }}>
                </div>

                
                <div className="flex justify-between items-start z-10 relative">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse"></div>
                      <span className="text-[0.6rem] font-mono text-primary-red tracking-[0.2em] uppercase opacity-60 group-hover:opacity-100 transition-opacity">
                        REF: {cert.id}
                      </span>
                    </div>
                    <span className="text-[0.7rem] font-black text-white/50 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                      {cert.issuer}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white/10 group-hover:text-primary-red transition-colors duration-700 text-xs font-black tracking-tighter">EST. 2026</span>
                    <Award className="w-4 h-4 text-white/5 mt-1 group-hover:text-primary-red/40 transition-colors" />
                  </div>
                </div>
                
                
                <div className="flex flex-col items-center gap-8 z-10 relative">
                  <div className="relative">
                     
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-5xl md:text-7xl font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
                      Verified
                    </span>
                    <h3 className="text-2xl md:text-4xl font-black text-white text-center leading-[1.05] tracking-tighter group-hover:scale-[1.02] transition-transform duration-700 uppercase">
                      {cert.title}
                    </h3>
                  </div>

                  
                  <div className="relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/5 group-hover:border-primary-red/30 transition-all duration-700">
                    <div className="absolute inset-0 rounded-full bg-primary-red opacity-0 group-hover:opacity-5 transition-opacity duration-700 scale-0 group-hover:scale-100 transition-transform"></div>
                    <ExternalLink className="w-5 h-5 md:w-6 md:h-6 text-white/20 group-hover:text-primary-red transition-all duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                
                <div className="z-10 relative mt-auto pt-8 border-t border-white/5 flex flex-col gap-4">
                  <p className="text-gray-500 text-[0.65rem] md:text-[0.75rem] font-medium italic leading-relaxed max-w-[280px] group-hover:text-gray-300 transition-colors duration-700">
                    "{cert.desc}"
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary-red transition-colors" style={{ transitionDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                    <span className="text-[0.55rem] font-bold text-white/20 uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                      Professional Grade
                    </span>
                  </div>
                </div>

                
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              </a>
            </motion.div>
            
            <AnimatePresence mode="wait">
              {current === index && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="absolute -bottom-20 left-0 right-0 flex flex-col items-center gap-2 p-2">
                  <div className="w-px h-8 bg-gradient-to-b from-primary-red to-transparent opacity-50"></div>
                  <span className="text-[0.6rem] font-black tracking-[0.5em] text-primary-red uppercase">
                    Click to Verify Expertise
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </CarouselItem>
        ))}
      </CarouselContent>

      
      <div className="mt-4 flex flex-col items-center gap-10">
        {showPagination && (
          <div className="flex items-center justify-center gap-4">
            {certs.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "relative h-0.5 transition-all duration-700 overflow-hidden",
                  current === index ? "w-12 bg-primary-red" : "w-4 bg-white/10 hover:bg-white/20"
                )}
                aria-label={`Go to slide ${index + 1}`} 
              >
                {current === index && (
                  <motion.div 
                    layoutId="activePagination"
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{ duration: 4, ease: "linear" }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {showNavigation && (
          <div className="flex items-center gap-12">
            <button
              aria-label="Previous slide"
              onClick={() => api?.scrollPrev()}
              className="group relative flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary-red transition-all duration-500">
                <ChevronLeft className="w-4 h-4 text-white/40 group-hover:text-white transition-colors group-hover:-translate-x-0.5 transition-transform" />
              </div>
              <span className="text-[0.5rem] font-black uppercase tracking-widest text-white/20 group-hover:text-primary-red transition-colors">Back</span>
            </button>

            <div className="flex flex-col items-center gap-1">
               <span className="text-xs font-black text-white tracking-tighter">{(current + 1).toString().padStart(2, '0')}</span>
               <div className="w-8 h-px bg-white/10"></div>
               <span className="text-[0.6rem] font-bold text-white/20 tracking-tighter">{certs.length.toString().padStart(2, '0')}</span>
            </div>

            <button
              aria-label="Next slide"
              onClick={() => api?.scrollNext()}
              className="group relative flex flex-col items-center gap-2"
            >
              <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary-red transition-all duration-500">
                <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors group-hover:translate-x-0.5 transition-transform" />
              </div>
              <span className="text-[0.5rem] font-black uppercase tracking-widest text-white/20 group-hover:text-primary-red transition-colors">Next</span>
            </button>
          </div>
        )}
      </div>
    </Carousel>
  );
};

export { Skiper54 };
