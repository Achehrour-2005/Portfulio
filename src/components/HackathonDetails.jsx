import { useEffect } from "react";
import { 
  X, 
  ChevronDown, 
  Trophy, 
  Building2
} from "lucide-react";
import { motion } from "framer-motion";

export function HackathonDetails({ hackathon, onClose }) {
  if (!hackathon) return null;

  useEffect(() => {
    window.scrollTo(0, 0);
    const scrollTimer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    document.body.style.overflow = "auto";
    document.documentElement.style.overflow = "auto";
    return () => {
      clearTimeout(scrollTimer);
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const titleWords = hackathon.title.split(" ");
  const titlePart1 = titleWords.slice(0, 2).join(" ");
  const titlePart2 = titleWords.slice(2).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen w-full bg-[#080808] font-outfit text-white"
    >
      {/* HERO SECTION */}
      <div className="relative w-full min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-between p-5 sm:p-8 md:p-14 lg:p-20 overflow-hidden border-b border-white/5">
        {/* Background Ambient Glows */}
        <div className="absolute top-1/4 right-0 w-[320px] sm:w-[500px] md:w-[600px] h-[320px] sm:h-[500px] md:h-[600px] bg-primary-red/10 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[280px] sm:w-[400px] md:w-[500px] h-[280px] sm:h-[400px] md:h-[500px] bg-amber-500/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />

        {/* Big Watermark Number */}
        <div className="absolute top-1/2 right-4 sm:right-10 -translate-y-1/2 text-[10rem] sm:text-[15rem] md:text-[22rem] font-black text-outline opacity-[0.03] select-none pointer-events-none font-outfit">
          {hackathon.numStr}
        </div>

        {/* TOP NAVBAR */}
        <div className="relative z-30 flex items-center justify-between w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-2.5 sm:gap-3"
          >
            <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse shrink-0" />
            <span className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.25em] sm:tracking-[0.35em] uppercase text-white/50 font-mono">
              Hackathons & Honors — {hackathon.year}
            </span>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onClick={onClose}
            className="group flex items-center gap-2 sm:gap-3 text-white/50 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span className="text-[0.55rem] sm:text-[0.6rem] tracking-[0.35em] uppercase">Back</span>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-primary-red group-hover:bg-primary-red/10 transition-all duration-300">
              <X className="w-3.5 h-3.5" />
            </div>
          </motion.button>
        </div>

        {/* MAIN HERO TITLE */}
        <div className="relative z-20 my-auto py-10 sm:py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="flex items-center gap-1.5 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-primary-red/10 border border-primary-red/30 text-primary-red text-[0.7rem] sm:text-xs font-extrabold uppercase tracking-wider">
                <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{hackathon.prize}</span>
              </div>
              <div className="flex items-center gap-1.5 text-white/40 text-[0.65rem] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest">
                <Building2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary-red shrink-0" />
                <span>{hackathon.subtitle}</span>
              </div>
            </div>

            <h1 className="text-[2rem] sm:text-[3.2rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem] font-black leading-[0.95] md:leading-[0.9] tracking-[-0.03em] uppercase mb-6 sm:mb-8">
              <span className="text-white">{titlePart1}</span>
              {titlePart2 && (
                <>
                  <br />
                  <span
                    className="text-transparent"
                    style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.3)" }}
                  >
                    {titlePart2}
                  </span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/80 font-light max-w-4xl leading-relaxed">
              {hackathon.shortDesc}
            </p>
          </motion.div>
        </div>

        {/* BOTTOM METADATA STRIP */}
        <div className="relative z-20 flex flex-col md:flex-row md:items-center justify-between gap-4 pt-5 sm:pt-6 border-t border-white/10">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            {hackathon.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-[0.55rem] sm:text-[0.6rem] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/10 text-white/60 bg-white/[0.02]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-2 text-white/30 text-[0.55rem] uppercase tracking-[0.3em] font-mono">
            <span>Scroll for deep-dive</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-primary-red" />
          </div>
        </div>
      </div>

      {/* METADATA 4-COLUMN BAR (Responsive) */}
      <div className="border-b border-white/5 bg-[#0a0a0a]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
          {[
            { label: "Role", value: hackathon.role },
            { label: "Host / Partners", value: hackathon.organization },
            { label: "Distinction", value: hackathon.prize },
            { label: "Year", value: hackathon.year },
          ].map((item, i) => (
            <div
              key={i}
              className={`px-5 sm:px-8 md:px-10 py-5 sm:py-7 flex flex-col gap-1.5 sm:gap-2 border-white/5 
                border-t first:border-t-0
                sm:border-t-0 sm:even:border-l
                sm:[&:nth-child(n+3)]:border-t
                lg:border-t-0 lg:border-l lg:first:border-l-0`}
            >
              <span className="text-[0.5rem] tracking-[0.35em] sm:tracking-[0.4em] uppercase text-white/25">
                {item.label}
              </span>
              <span className="text-xs sm:text-sm text-white/80 font-medium leading-snug">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED OVERVIEW & QUOTE */}
      <div className="px-5 sm:px-8 md:px-14 lg:px-20 pt-12 sm:pt-16 md:pt-28 pb-12 sm:pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-6 h-[2px] bg-primary-red" />
            <span className="text-[0.55rem] tracking-[0.4em] uppercase text-white/40">
              The Challenge & Vision
            </span>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-[1.6] text-white/90">
            {hackathon.fullDesc}
          </p>
        </div>

        <div className="flex flex-col justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-6 h-[2px] bg-primary-red" />
              <span className="text-[0.55rem] tracking-[0.4em] uppercase text-white/40">
                Core Philosophy
              </span>
            </div>
            <div className="p-5 sm:p-6 md:p-8 rounded-2xl bg-white/[0.02] border border-white/10 border-l-4 border-l-primary-red">
              <p className="text-sm sm:text-base md:text-lg text-white/90 italic font-inter leading-relaxed">
                « {hackathon.quote} »
              </p>
            </div>
          </div>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
            {hackathon.stats.map((stat, i) => (
              <div key={i} className="bg-black/60 border border-white/5 p-3.5 sm:p-4 rounded-xl">
                <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-primary-red font-outfit">
                  {stat.value}
                </div>
                <div className="text-[0.5rem] sm:text-[0.55rem] font-mono uppercase tracking-widest text-white/40 mt-1">
                  {stat.label}
                </div>
                <div className="text-[0.65rem] sm:text-[0.7rem] font-bold text-white uppercase mt-0.5">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DELIVERABLES & TECHNICAL ROADMAP */}
      <div className="border-t border-white/5 bg-[#090909] px-5 sm:px-8 md:px-14 lg:px-20 py-12 sm:py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-4 mb-8 sm:mb-12">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-6 h-[2px] bg-primary-red" />
              <h3 className="text-sm sm:text-base md:text-xl font-extrabold text-white uppercase tracking-widest">
                Key Deliverables & Architectural Solutions
              </h3>
            </div>
            <span className="text-[0.55rem] font-mono tracking-[0.3em] uppercase text-white/30">
              {hackathon.deliverables.length} Key Deliverables
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {hackathon.deliverables.map((item, index) => (
              <div
                key={index}
                className="group relative bg-[#0d0d0d] border border-white/5 hover:border-primary-red/40 p-5 sm:p-6 md:p-8 rounded-2xl transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <span className="text-xl sm:text-2xl font-black font-mono text-primary-red/40 group-hover:text-primary-red transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[0.55rem] font-mono uppercase tracking-wider px-2 py-0.5 sm:px-2.5 sm:py-1 rounded bg-white/5 text-white/40 group-hover:text-white transition-colors">
                      {item.tag}
                    </span>
                  </div>

                  <h4 className="text-sm sm:text-base md:text-lg font-bold text-white uppercase tracking-tight mb-2 sm:mb-3 group-hover:text-primary-red transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs md:text-sm text-white/60 font-inter leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-white/5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary-red shrink-0" />
                  <span className="text-[0.55rem] font-mono uppercase tracking-widest text-white/30 group-hover:text-white transition-colors">
                    Validated Asset
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER BAR */}
      <div className="border-t border-white/5 px-5 sm:px-8 md:px-14 lg:px-20 py-6 sm:py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 bg-[#080808]">
        <span className="text-[0.55rem] tracking-[0.35em] uppercase text-white/20 order-2 sm:order-1">
          © 2026 Abdessamad Achehrour
        </span>
        <button
          onClick={onClose}
          className="group flex items-center gap-2.5 sm:gap-3 text-white/40 hover:text-white transition-colors order-1 sm:order-2 bg-white/5 sm:bg-transparent px-5 py-2.5 sm:p-0 rounded-full sm:rounded-none border border-white/5 sm:border-none cursor-pointer"
        >
          <span className="text-[0.55rem] tracking-[0.35em] uppercase">Close Case</span>
          <X className="w-3.5 h-3.5" />
        </button>
        <span className="text-[0.55rem] tracking-[0.35em] uppercase text-primary-red/40 order-3 font-mono">
          {hackathon.code} — {hackathon.year}
        </span>
      </div>
    </motion.div>
  );
}
