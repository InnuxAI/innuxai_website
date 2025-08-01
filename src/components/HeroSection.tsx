import { ArrowRight, ChevronRight } from "lucide-react"
import { RainbowButton } from "./magicui/rainbow-button"
import { AuroraText } from "./magicui/aurora-text"
import { AnimatedGradientText } from "./magicui/animated-gradient-text"
import { PointerHighlight } from "./ui/pointer-highlight"
import { AuroraBackground } from "./ui/aurora-background";
import { cn } from "../lib/utils"

export default function HeroSection() {
  return (
    // <AuroraBackground>
    <section>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-100/20 via-transparent to-transparent dark:from-gray-900/20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Animated Gradient Badge */}
        <div className="group relative  flex items-center justify-center rounded-full w-fit px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] mb-8">
          <span
            className={cn(
              "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]",
            )}
            style={{
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "subtract",
              WebkitClipPath: "padding-box",
            }}
          />
          🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
          <AnimatedGradientText className="text-sm font-medium">
            Introducing InnuxAI Enterprise Platform
          </AnimatedGradientText>
          <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </div>

        {/* Main headline with Aurora Text and Pointer Highlight */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gray-900 dark:text-gray-100 mb-8 leading-tight tracking-tight">
          <AuroraText className="glow-text">InnuxAI</AuroraText> is the new way
          <br />
          <span>
            to{" "}
            <PointerHighlight
              rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
              pointerClassName="text-blue-500"
              containerClassName="inline-block mx-1"
            >
              <span className="relative z-10">automate</span>
            </PointerHighlight>
          </span>{" "}
          <span className="text-gray-600 dark:text-gray-400">workflows.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          MCP-compliant AI agents that seamlessly integrate with your enterprise tools.
          <br />
          Built for Gmail, SharePoint, MongoDB, and 100+ platforms.
        </p>

        {/* Rainbow CTA Button */}
        <RainbowButton className="px-8 py-5 text-lg font-medium" style={{borderRadius: "1rem"}}>
          Get Started
          <ArrowRight className="ml-2 h-5 w-5" />
        </RainbowButton>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
    </section>
    // </AuroraBackground>
  )
}
