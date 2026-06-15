import { motion } from "motion/react";

interface HeroProps {
  onSwitchToHeritage: () => void;
  onPlanVisit?: () => void;
  weatherDescription?: string;
  temperature?: number;
}

export default function Hero({ onSwitchToHeritage, onPlanVisit, weatherDescription, temperature }: HeroProps) {
  return (
    <section
      id="gateway-hero"
      className="relative min-h-[50vh] sm:min-h-[65vh] md:min-h-[82vh] xl:min-h-[84vh] flex items-center justify-center bg-transparent px-4 sm:px-12 md:px-16 lg:px-24 pt-32 sm:pt-40 pb-16 sm:pb-20 select-none animate-fade-in"
    >
      {/* 
        PREMIUM FULL-SCREEN BACKDROP
        An immersive, high-contrast historical backdrop of the Blood Compact Monument,
        complying with the "remove the video" directive.
      */}
      <div 
        id="hero-background-media" 
        className="absolute inset-0 z-0 overflow-hidden bg-gradient-to-b from-[#0c180b] via-[#142813] to-[#0d1b0c]"
      >
        <div 
          className="w-full h-full bg-cover bg-center filter saturate-[1.15] brightness-[0.45] contrast-[1.05] transition-all duration-300"
          style={{ backgroundImage: "url('/webp/Blood Compact Shrine (31).webp')" }}
        />
        {/* Soft edge gradients and atmospheric overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#152614]/50 via-transparent to-[#152614]/65 z-20 pointer-events-none" />
        <div className="absolute inset-0 bg-black/35 z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#32e875]/12 to-transparent z-25 pointer-events-none" />
        
        {/* Floating atmospheric sunbeam of color to enrich scene */}
        <div className="absolute top-1/4 right-[25%] w-96 h-96 rounded-full bg-[#FFD54F]/4 blur-[120px] mix-blend-screen pointer-events-none z-15" />
      </div>

      {/* 
        PREMIUM DYNAMIC IMAGE SEPARATOR
        Uses temp/divider2.png as the separator,
        carefully styled to be perfectly proportioned and seamless.
      */}
      <img 
        src="/temp/divider2.png"
        alt="Heritage Separator Curve"
        className="absolute bottom-[-2px] left-0 w-full overflow-hidden pointer-events-none z-32 h-[11px] sm:h-[16px] md:h-[21px] lg:h-[28px] object-fill select-none"
        id="hero-bottom-artwork-separator"
      />

      {/* FOREGROUND MAIN TEXT CONTENT - Center-aligned and full width on ultra wide displays */}
      <div className="relative z-40 w-full max-w-none flex flex-col items-center justify-center text-center mx-auto px-4" id="hero-main-content">
        {/* Primary Page Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[12.5vw] sm:text-[12.5vw] md:text-[12vw] lg:text-[12vw] xl:text-[11.5vw] 2xl:text-[15.5rem] font-black -tracking-[0.01em] text-white leading-none block uppercase text-center w-full whitespace-nowrap"
          style={{ fontFamily: "'Cranio', sans-serif" }}
          id="hero-main-headline"
        >
          <span className="inline-block transform scale-y-[1.15] origin-center text-center w-full">
            TAGBILARAN
          </span>
        </motion.h1>

        {/* Subtitle with elegant Moderniz font inside hero */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="font-moderniz text-[10px] sm:text-xs md:text-sm font-medium tracking-widest text-[#32e875] max-w-3xl mx-auto mt-2 filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.98)] text-center block w-full uppercase"
          id="hero-subtitle"
        >
          WHERE HISTORY MEETS FRIENDSHIP
        </motion.p>
      </div>
    </section>
  );
}

