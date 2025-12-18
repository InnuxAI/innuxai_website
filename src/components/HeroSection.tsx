import { ArrowRight, ChevronRight } from "lucide-react"
import { RainbowButton } from "./magicui/rainbow-button"
import { AuroraText } from "./magicui/aurora-text"
import { AnimatedGradientText } from "./magicui/animated-gradient-text"
import { PointerHighlight } from "./ui/pointer-highlight"
import { GridPattern } from "./ui/grid-pattern"
import { cn } from "../lib/utils"
import { InteractiveShader } from "./custom/digital-aurora"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <InteractiveShader flowSpeed={0.05} />
      </div>
      {/* Grayscale overlay for depth and separation */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none" />


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center px-4 py-24 md:py-32 ">
        {/* Animated Gradient Badge */}
        <div
          className={cn(
            "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-full bg-black/30 border border-black/5 dark:border-white/10 py-1.5 px-4 text-sm font-medium backdrop-blur-md transition-all duration-500 ease-out hover:bg-black/75 hover:shadow-[0_0_1.5rem_-0.2rem_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_1.5rem_-0.2rem_rgba(255,255,255,0.2)] mb-12"
          )}
        >
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/30 via-[#9c40ff]/30 to-[#ffaa40]/30 bg-[length:300%_100%] p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            )}
            style={{
              WebkitMask:
                "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          <span className="mr-2">🎉</span>
          <span className="h-4 w-px bg-white/20 mx-2" />
          <AnimatedGradientText className="text-sm font-medium tracking-wide text-gray-200">
            Introducing InnuxAI Enterprise Platform
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-gray-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>

        {/* Main headline with Aurora Text and Pointer Highlight */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-10 leading-[1.1] tracking-tight max-w-6xl mx-auto text-balance drop-shadow-sm">
          InnuxAI is the new way to automate workflows 
          <br className="hidden md:block" />
            {/* <PointerHighlight
              rectangleClassName="bg-blue-500/10 dark:bg-black/20 border-blue-500/20 dark:border-blue-500/30 rounded-xl"
              pointerClassName="text-blue-400"
              containerClassName="inline-flex items-center justify-center pt-1"
            >
              <span className="relative z-10 font-bold px-4 py-1">automate</span>
            </PointerHighlight> */}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl mb-12 max-w-4xl mx-auto leading-loose tracking-wide font-light text-balance drop-shadow-sm">
          MCP-compliant AI agents that seamlessly integrate with your enterprise tools. 
          <br/>
          Built for <span className="text-white font-medium">Gmail</span>, <span className="text-white font-medium">SharePoint</span>, <span className="text-white font-medium">MongoDB</span>, and 100+ platforms.
        </p>

        {/* Rainbow CTA Button */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <RainbowButton
            className="relative px-8 py-5 md:px-10 md:py-6 text-lg font-semibold tracking-wide shadow-xl"
            style={{ borderRadius: "1rem" }}
            onClick={() => (window.location.href = "#contact")}
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </RainbowButton>
        </div>
      </div>

      {/* Bottom transition
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div> */}
    </section>
  );
}
