"use client";

import OrganicGradient from "@/components/OrganicGradient";
import { AuroraText } from "@/components/magicui/aurora-text";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen w-full text-[#F8F8DD] font-sans overflow-x-hidden">
            {/* Background */}
            {/* <OrganicGradient /> */}

            {/* Content Container */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col gap-24">

                {/* Hero Section */}
                <section className="flex flex-col items-center text-center gap-8">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                        <span className="text-sm font-medium font-serif text-gray-300 tracking-widest">Our Story</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-semi-bold tracking-tight leading-tight">
                        About InnuxAI
                    </h1>

                    <p className="text-lg md:text-xl text-[#F7F2E7]/80 max-w-3xl leading-relaxed font-light">
                        We are building the intelligence layer for the modern enterprise.
                        Automating the mundane to empower the extraordinary.
                    </p>
                </section>

                {/* Founder Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Placeholder */}
                    <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                        {/* Placeholder for Founder Image - Using a generic professional placeholder or a colored div if no image */}
                        <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-neutral-700">
                            <span className="text-lg">Founder Image Placeholder</span>
                        </div>
                        {/* <Image 
              src="/path/to/founder.jpg" 
              alt="Founder" 
              fill 
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            /> */}

                        <div className="absolute bottom-0 left-0 p-8 z-20">
                            <h3 className="text-2xl font-serif font-bold text-[#F8F8DD]">Sathish PV</h3>
                            <p className="text-blue-400 font-medium">Founder & CEO</p>
                        </div>
                    </div>

                    {/* Bio / Story */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-3xl md:text-4xl font-serif italic leading-tight">
                            From a simple idea to <br />
                            <span className="text-blue-500">enterprise revolution.</span>
                        </h2>

                        <div className="space-y-6 text-[#F3EEE6]/80 text-lg leading-relaxed font-light">
                            <p>
                                InnuxAI began in 2024 with a singular vision: to bridge the gap between complex enterprise data and actionable intelligence. We realized that while tools were getting smarter, workflows remained stuck in the past.
                            </p>
                            <p>
                                What started as a small experiment in automating email workflows quickly evolved into a comprehensive platform. We saw the potential for AI not just to assist, but to fundamentally reshape how businesses operate.
                            </p>
                            <p>
                                Today, we are a team of passionate engineers and designers dedicated to building MCP compliant agents that live where you work inside Gmail, SharePoint, and your databases; making automation invisible, yet indispensable.
                            </p>
                        </div>

                        <div className="pt-4">
                            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-white">2024</h4>
                                    <p className="text-sm text-gray-500 mt-1">Founded</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-white">100+</h4>
                                    <p className="text-sm text-gray-500 mt-1">Integrations</p>
                                </div>
                                <div>
                                    <h4 className="text-3xl font-serif font-bold text-white">Global</h4>
                                    <p className="text-sm text-gray-500 mt-1">Reach</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="relative py-20 text-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20 blur-3xl -z-10 rounded-full opacity-50" />
                    <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8">
                        "Our mission is to make work <br /> feel less like work."
                    </h2>
                </section>

            </div>
        </div>
    );
}
