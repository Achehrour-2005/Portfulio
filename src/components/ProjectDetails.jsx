import { useState, useEffect } from "react";
import { X, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function ProjectDetails({ project, onClose }) {
  if (!project) return null;

  const images = project.gallery
    ? project.gallery.map((imgSrc, idx) => ({
        src: imgSrc,
        alt: `${project.title} View ${idx + 1}`,
      }))
    : [{ src: project.img, alt: `${project.title} Main` }];

  const [activeImage, setActiveImage] = useState(images[0].src);
  const titleWords = project.title.split(" ");
  const titlePart1 = titleWords[0];
  const titlePart2 = titleWords.slice(1).join(" ");

  
  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    document.body.style.overflow = 'auto';
    document.documentElement.style.overflow = 'auto';
    return () => {
      clearTimeout(scrollTimer);
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#080808] font-outfit text-white"
    >
      <div className="relative w-full h-[100svh] overflow-hidden">

        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              imageRendering: "-webkit-optimize-contrast",
            }}
          />
        </AnimatePresence>

        
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/30 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/60 via-transparent to-transparent pointer-events-none" />

        
        <div className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-8 md:px-14 py-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-white/50">
              Portfolio — 2026
            </span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            onClick={onClose}
            className="group flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300"
          >
            <span className="text-[0.6rem] tracking-[0.35em] uppercase">Back</span>
            <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary-red group-hover:bg-primary-red/10 transition-all duration-300">
              <X className="w-3.5 h-3.5" />
            </div>
          </motion.button>
        </div>

        
        <div className="absolute bottom-0 left-0 right-0 z-20 px-8 md:px-14 pb-16 md:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-primary-red" />
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-primary-red/80">
                PRJ — {project.id}
              </span>
            </div>
            <h1 className="text-[2.2rem] sm:text-[3.5rem] md:text-[5rem] lg:text-[7rem] xl:text-[8rem] font-black leading-[0.88] tracking-[-0.03em] uppercase">
              <span className="text-white">{titlePart1}</span>
              {titlePart2 && (
                <>
                  <br />
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)" }}
                  >
                    {titlePart2}
                  </span>
                </>
              )}
            </h1>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 right-8 md:right-14 flex flex-col items-center gap-2 text-white/30"
          >
            <span className="text-[0.5rem] tracking-[0.4em] uppercase hidden md:block">Scroll</span>
            <ChevronDown className="w-4 h-4 md:w-3.5 md:h-3.5 animate-bounce" />
          </motion.div>
        </div>

        
        {images.length > 1 && (
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 lg:bottom-auto lg:left-auto lg:right-8 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-0 z-30 flex flex-row lg:flex-col gap-2.5 p-2 bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.15)]"
          >
            {images.map((img, index) => {
              const isActive = activeImage === img.src;
              return (
                <button
                  key={index}
                  onClick={() => setActiveImage(img.src)}
                  className={`relative overflow-hidden transition-all duration-300 rounded-lg cursor-pointer focus:outline-none ${
                    isActive
                      ? "w-16 h-10 md:w-36 md:h-24 opacity-100 border-2 border-primary-red shadow-[0_0_15px_rgba(235,47,47,0.35)] scale-105"
                      : "w-14 h-9 md:w-32 md:h-22 opacity-65 border border-black/10 hover:opacity-95 hover:scale-[1.03]"
                  }`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              );
            })}
          </motion.div>
        )}
      </div>

      
      {project.role && (
        <div className="border-y border-white/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {[
              { label: "Role", value: project.role },
              { label: "Status", value: project.status },
              { label: "Stack", value: project.tech },
              { label: "Year", value: "2026" },
            ].map((item, i) => (
              <div 
                key={i} 
                className={`px-6 md:px-10 py-6 md:py-7 flex flex-col gap-2 border-white/5 
                  border-t first:border-t-0
                  sm:border-t-0 sm:even:border-l
                  sm:[&:nth-child(n+3)]:border-t
                  md:border-t-0 md:border-l md:first:border-l-0
                `}
              >
                <span className="text-[0.5rem] tracking-[0.4em] uppercase text-white/25">{item.label}</span>
                <span className="text-xs md:text-sm text-white/80 font-medium leading-snug">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      
      {project.description && (
        <div className="px-6 sm:px-8 md:px-14 lg:px-20 pt-16 md:pt-32 pb-12 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 lg:gap-28">

          
          <div className="flex flex-col gap-10">
            <div className="flex items-center gap-4">
              <div className="w-6 h-[2px] bg-primary-red" />
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-white/35">The Project</span>
            </div>
            <p className="text-2xl md:text-3xl lg:text-[2.1rem] font-light leading-[1.5] text-white/85">
              {project.description}
            </p>
          </div>

          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-6 h-[2px] bg-primary-red" />
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-white/35">Overview</span>
            </div>
            <p className="text-sm md:text-base text-white/45 leading-[1.9] font-light">
              {project.featuresText}
            </p>
          </div>
        </div>
      )}

    
      {project.techStackDetails && (
        <div className="border-t border-white/5">
          <div className="px-6 sm:px-8 md:px-14 lg:px-20 pt-10 md:pt-14 pb-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-6 h-[2px] bg-primary-red" />
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-white/35">Technology</span>
            </div>
            <span className="text-[0.5rem] tracking-[0.3em] uppercase text-white/20">
              {project.techStackDetails.length} tools used
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {project.techStackDetails.map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-4 md:gap-6 px-6 sm:px-8 md:px-14 lg:px-20 py-5 md:py-6 border-b border-white/5 hover:bg-white/[0.02] transition-colors duration-300 cursor-default"
              >
                <span className="font-mono text-[0.6rem] text-primary-red/40 w-8 shrink-0 group-hover:text-primary-red transition-colors duration-300">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-base md:text-lg font-light text-white/60 group-hover:text-white transition-colors duration-300 tracking-wide">
                  {item}
                </span>
                <div className="ml-auto flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-[1px] bg-primary-red/50" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

        
      <div className="border-t border-white/5 px-6 sm:px-8 md:px-14 lg:px-20 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
        <span className="text-[0.55rem] tracking-[0.35em] uppercase text-white/15 order-2 md:order-1">
          © 2026 Abdessamad
        </span>
        <button
          onClick={onClose}
          className="group flex items-center gap-3 text-white/30 hover:text-white transition-colors order-1 md:order-2 bg-white/5 md:bg-transparent px-6 py-3 md:p-0 rounded-full md:rounded-none border border-white/5 md:border-none"
        >
          <span className="text-[0.55rem] tracking-[0.35em] uppercase">Close Project</span>
          <X className="w-3 h-3" />
        </button>
        <span className="text-[0.55rem] tracking-[0.35em] uppercase text-primary-red/25 order-3">
          PRJ — {project.id}
        </span>
      </div>

    </motion.div>
  );
}
