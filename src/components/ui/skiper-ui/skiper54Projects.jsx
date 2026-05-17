"use client";
import Autoplay from "embla-carousel-autoplay";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Rocket, ExternalLink } from "lucide-react";
import React, { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Skiper54Projects = ({ projects, onProjectClick }) => {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-black py-0">
      <Carousel_Projects
        projects={projects}
        onProjectClick={onProjectClick}
        className=""
        loop={true}
        showNavigation={true}
        showPagination={true} 
      />
    </div>
  );
};

const Carousel_Projects = ({
  projects,
  onProjectClick,
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
      <CarouselContent className="flex h-[400px] md:h-[500px] w-full items-center">
        {projects.map((project, index) => (
          <CarouselItem
            key={index}
            className="relative flex h-[90%] w-full basis-[85%] sm:basis-[60%] md:basis-[45%] lg:basis-[35%] xl:basis-[30%] items-center justify-center px-4">
            <motion.div
              initial={false}
              animate={{
                clipPath:
                  current !== index
                    ? "inset(5% 0 5% 0 round 1.5rem)"
                    : "inset(0 0 0 0 round 1.5rem)",
                opacity: current !== index ? 0.4 : 1,
                scale: current !== index ? 0.92 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              onClick={() => onProjectClick && onProjectClick(project)}
              className={cn(
                "h-full w-full overflow-hidden rounded-2xl relative transition-all duration-700 group cursor-pointer",
                current === index 
                  ? "bg-[#0c0c0c] border border-white/10 shadow-[0_0_50px_rgba(235,47,47,0.1)]" 
                  : "bg-[#050505] border border-white/5"
              )}>
              
              <div className="absolute inset-0 z-0">
                <img 
                   src={project.img || "/placeholder_project.png"} 
                   alt={project.title}
                   className="w-full h-full object-cover opacity-100 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
              
              <div className="relative h-full w-full p-8 md:p-12 flex flex-col justify-between overflow-hidden z-10">
                
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse"></div>
                      <span className="text-[0.6rem] font-mono text-primary-red tracking-[0.2em] uppercase opacity-60">
                        ID: {project.id}
                      </span>
                    </div>
                    <span className="text-[0.7rem] font-black text-white/50 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white/10 group-hover:text-primary-red transition-colors duration-700 text-xs font-black tracking-tighter italic">BUILD / 2026</span>
                    <Rocket className="w-4 h-4 text-white/5 mt-1 group-hover:text-primary-red/40 transition-colors" />
                  </div>
                </div>
                
                
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl md:text-6xl font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter">
                       SYSTEM
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-white text-center leading-tight tracking-tighter group-hover:scale-[1.02] transition-transform duration-700 uppercase">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {project.tech.split(' / ').map((t, i) => (
                      <span key={i} className="text-[0.55rem] font-bold px-2 py-0.5 rounded-full border border-white/10 text-white/40 group-hover:border-primary-red/30 group-hover:text-primary-red transition-all duration-500">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                
                <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-4">
                  <div className="flex items-center justify-center">
                     <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center group-hover:border-primary-red/50 transition-all duration-700 group-hover:rotate-12">
                        <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-primary-red transition-colors" />
                     </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-primary-red transition-colors" style={{ transitionDelay: `${i * 100}ms` }}></div>
                      ))}
                    </div>
                    <span className="text-[0.55rem] font-bold text-white/20 uppercase tracking-[0.3em] group-hover:text-white transition-colors">
                      Engineering Grade
                    </span>
                  </div>
                </div>
              </div>

              
              <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-primary-red to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>

      
      <div className="mt-8 flex flex-col items-center gap-10">
        {showPagination && (
          <div className="flex items-center justify-center gap-4">
            {projects.map((_, index) => (
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
                    layoutId="activePaginationProjects"
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
              <span className="text-[0.5rem] font-black uppercase tracking-widest text-white/20 group-hover:text-primary-red transition-colors">Prev</span>
            </button>

            <div className="flex flex-col items-center gap-1">
               <span className="text-xs font-black text-white tracking-tighter">{(current + 1).toString().padStart(2, '0')}</span>
               <div className="w-8 h-px bg-white/10"></div>
               <span className="text-[0.6rem] font-bold text-white/20 tracking-tighter">{projects.length.toString().padStart(2, '0')}</span>
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

export { Skiper54Projects };
