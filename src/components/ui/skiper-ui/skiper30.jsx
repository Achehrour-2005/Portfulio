"use client";;
import { motion, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const Skiper30 = ({ techs }) => {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 1.5]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 2.5]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 2]);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);


  const col1 = techs.slice(0, 4);
  const col2 = techs.slice(4, 8);
  const col3 = techs.slice(8, 12);
  const col4 = techs.slice(12, 15);

  return (
    <div className="w-full bg-black text-white relative">
      <div className="px-8 md:px-24 py-20 relative z-20">
        <span className="text-primary-red font-bold uppercase tracking-[0.3em] text-[0.6rem] md:text-xs mb-4 block">Core Stack / Mastery</span>
        <h2 className="text-4xl md:text-7xl font-extrabold text-white leading-tight uppercase tracking-tighter">
          Technologies
        </h2>
      </div>

      <div
        ref={gallery}
        className="relative box-border flex h-[150vh] gap-[2vw] md:gap-[3vw] overflow-hidden bg-black p-[2vw] z-10">
        <Column techs={col1} y={y} className="flex" />
        <Column techs={col2} y={y2} className="flex" />
        <Column techs={col3} y={y3} className="hidden md:flex" />
        <Column techs={col4} y={y4} className="hidden lg:flex" />
      </div>

      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20"></div>
    </div>
  );
};

const Column = ({ techs, y, className }) => {
  return (
    <motion.div
      className={cn(
        "relative -top-[30%] flex h-full w-full md:w-1/4 min-w-[150px] md:min-w-[200px] flex-col gap-[4vw] md:gap-[2vw] first:top-[-30%] [&:nth-child(2)]:top-[-60%] [&:nth-child(3)]:top-[-20%] [&:nth-child(4)]:top-[-50%]",
        className
      )}
      style={{ y }}>
      {techs.map((tech, i) => (
        <div key={i} className="relative h-64 md:h-80 w-full bg-[#111] border border-white/5 rounded-sm flex flex-col items-center justify-center p-8 group hover:border-primary-red/50 transition-all duration-500 overflow-hidden">
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
               style={{ background: 'radial-gradient(circle at center, rgba(235, 47, 47, 0.05) 0%, transparent 70%)' }}>
          </div>
          <img 
            src={`https://skillicons.dev/icons?i=${tech.id}`} 
            alt={tech.name} 
            className="w-16 h-16 md:w-24 md:h-24 grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110 relative z-10" 
          />
          <span className="mt-6 text-[0.6rem] md:text-xs font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-primary-red transition-colors duration-500 relative z-10">
            {tech.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
};

export { Skiper30 };

