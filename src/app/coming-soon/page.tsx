"use client";

import { ArrowLeft } from "lucide-react";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";

export default function ComingSoonPage() {
    return (
        <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-black overflow-hidden selection:bg-blue-500/30">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
                {/* Badge */}
                <div className="mb-8 inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md shadow-lg">
                    <span className="relative flex h-2 w-2 mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    <span className="text-sm font-medium text-gray-300 tracking-wide">
                        Under Construction
                    </span>
                </div>

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-6">
                    Something <AuroraText className="font-bold">Amazing</AuroraText>
                    <br /> is Coming Soon.
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
                    We are crafting an experience that will redefine how you automate your workflows.
                    Stay tuned for the future of enterprise intelligence.
                </p>

                {/* CTA */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <RainbowButton
                        className="relative px-8 py-4 text-base font-semibold tracking-wide shadow-xl flex items-center gap-2"
                        style={{ borderRadius: "0.75rem" }}
                        onClick={() => (window.location.href = "/")}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Return Home
                    </RainbowButton>
                </div>
            </div>

            {/* Footer Text */}
            <div className="absolute bottom-8 text-sm text-gray-600 dark:text-gray-500 font-medium tracking-wide">
                © 2024 InnuxAI. All rights reserved.
            </div>
        </div>
    );
}
