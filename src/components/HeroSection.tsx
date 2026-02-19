import { ArrowRight, MoveRight } from "lucide-react"
import { cn } from "../lib/utils"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20 text-gray-900 dark:text-white transition-colors duration-300">

      {/* Background Color */}
      <div className="absolute inset-0 bg-white dark:bg-[#020202] -z-50 transition-colors duration-300" />

      {/* Background Gradient Arcs */}
      {/* Light Mode Gradients */}
      {/* <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[160vw] h-[80vh] bg-gradient-to-b from-indigo-200/50 via-purple-200/30 to-transparent rounded-[100%] blur-[90px] -z-10 pointer-events-none dark:hidden" />
      <div className="absolute top-[-30%] left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] bg-gradient-to-b from-blue-200/40 via-transparent to-transparent rounded-[100%] blur-[80px] -z-10 pointer-events-none dark:hidden" /> */}

      {/* Dark Mode Gradients */}
      {/* <div className="hidden dark:block absolute top-[-20%] left-1/2 -translate-x-1/2 w-[160vw] h-[80vh] bg-gradient-to-b from-indigo-500/50 via-purple-500/20 to-transparent rounded-[100%] blur-[90px] -z-10 pointer-events-none mix-blend-screen" />
      <div className="hidden dark:block absolute top-[-30%] left-1/2 -translate-x-1/2 w-[140vw] h-[70vh] bg-gradient-to-b from-blue-600/40 via-transparent to-transparent rounded-[100%] blur-[80px] -z-10 pointer-events-none mix-blend-screen" /> */}

      <div style={{ background: "radial-gradient(circle at 50% 150%, #a35fff 0%, #ce74ff 15%, #f88fff 30%, #ffadff 45%, #ffdfff 60%, #fff0ff 75%, #ffffff 100%)" }} className="absolute inset-0 -z-20"></div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-20"></div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none mix-blend-plus-lighter dark:mix-blend-plus-lighter mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center px-6">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center justify-center rounded-full bg-gray-100 border border-gray-200 dark:bg-white/5 dark:border-white/10 px-4 py-1.5 backdrop-blur-sm transition-colors duration-300">
          {/* <div className="mr-2 h-1.5 w-1.5 rounded-full bg-purple-500 dark:bg-purple-400 animate-pulse" /> */}
          <img src="./innuxlogo.svg" className="w-4 h-4 mr-2 rotate-90" alt="" />
          <span className="text-xs font-medium tracking-wide text-gray-600 dark:text-gray-300 uppercase">
            Your thinking partner
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="flex flex-col items-center justify-center text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight mb-8">
          <span className="instrument-serif-regular-italic text-[#b26dff] dark:text-indigo-300 transition-colors duration-300">Fueling</span>
          <span className="instrument-serif-regular mt-2">Intelligence</span>
          <span className="instrument-serif-regular mt-2">with Context</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light transition-colors duration-300">
          We build MCP-compliant AI agents that understand your business, optimize workflows, and scale operations securely.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => (window.location.href = "#modules")}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-gray-100 dark:bg-white/10 px-8 font-medium text-gray-900 dark:text-white transition-all duration-300 hover:bg-gray-200 dark:hover:bg-white/20 hover:scale-105 border border-gray-200 dark:border-white/10 backdrop-blur-md"
          >
            <span className="mr-2">Our Solutions</span>
            <MoveRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => (window.location.href = "#contact")}
            className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full bg-[#FFFC98] px-8 font-medium transition-all duration-300 hover:bg-[#FFC998] hover:scale-105 shadow-[0_0_20px_-5px_rgba(79,70,229,0.5)]"
          >
            <span>Contact Us</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />

            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-full ring-2 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Bottom fade/arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400 dark:text-white/30">
          <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </section>
  );
}

