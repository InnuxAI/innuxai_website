"use client";

import React, { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
    Database,
    Share2,
    MessageSquare,
    Cloud,
    Archive,
    ShieldCheck
} from "lucide-react";
import { AgnoIcon } from "@/components/icons/custom-icons";

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
    ({ className, children }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "z-10 flex size-10 items-center justify-center rounded-full border border-gray-200 dark:border-white/10 bg-white dark:bg-neutral-900 shadow-sm",
                    className,
                )}
            >
                {children}
            </div>
        );
    },
);

Circle.displayName = "Circle";

export function EnterpriseIntegrationsCard() {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">

            {/* Header */}
            <div className="flex items-center gap-2 border-b border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-3 backdrop-blur-sm z-20">
                <div className="flex items-center justify-center h-6 w-6 rounded bg-purple-500/10">
                    <Share2 className="h-3.5 w-3.5 text-purple-500" />
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white">Integration Hub</span>
                <div className="ml-auto flex items-center gap-1.5">
                    <span className="text-[10px] text-gray-400 dark:text-neutral-500">System Link</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-purple-500 animate-pulse" />
                </div>
            </div>

            {/* content */}
            <div
                className="relative flex-1 flex w-full items-center justify-center overflow-hidden p-6"
                ref={containerRef}
            >
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="flex size-full max-w-sm flex-row items-stretch justify-between gap-8 z-10">
                    <div className="flex flex-col justify-center gap-3">
                        <Circle ref={div1Ref}>
                            <Icons.gmail className="h-5 w-5" />
                        </Circle>
                        <Circle ref={div2Ref}>
                            <Icons.sharepoint className="h-5 w-5" />
                        </Circle>
                        <Circle ref={div3Ref}>
                            <Icons.mongodb className="h-5 w-5" />
                        </Circle>
                        <Circle ref={div4Ref}>
                            <Icons.slack className="h-5 w-5" />
                        </Circle>
                        <Circle ref={div5Ref}>
                            <Icons.salesforce className="h-5 w-5" />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Circle ref={div6Ref} className="size-14 border-purple-200 dark:border-purple-900/30 bg-purple-50 dark:bg-purple-900/10 shadow-[0_0_20px_-5px_rgba(168,85,247,0.4)]">
                            <AgnoIcon className="h-8 w-8 text-black dark:text-white" />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Circle ref={div7Ref} className="size-12 border-emerald-200 dark:border-emerald-900/30 bg-emerald-50 dark:bg-emerald-900/10">
                            <ShieldCheck className="h-6 w-6 text-emerald-500" />
                        </Circle>
                    </div>
                </div>

                {/* Beams */}
                <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div6Ref} duration={3} gradientStartColor="#EA4335" gradientStopColor="#A855F7" />
                <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div6Ref} duration={3} gradientStartColor="#0078D4" gradientStopColor="#A855F7" />
                <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div6Ref} duration={3} gradientStartColor="#47A248" gradientStopColor="#A855F7" />
                <AnimatedBeam containerRef={containerRef} fromRef={div4Ref} toRef={div6Ref} duration={3} gradientStartColor="#E01E5A" gradientStopColor="#A855F7" />
                <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div6Ref} duration={3} gradientStartColor="#00A1E0" gradientStopColor="#A855F7" />
                <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div7Ref} duration={2} gradientStartColor="#A855F7" gradientStopColor="#10B981" />
            </div>
        </div>
    );
}

const Icons = {
    gmail: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
                fill="#EA4335"
            />
        </svg>
    ),
    sharepoint: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18.5 2h-13C4.67 2 4 2.67 4 3.5v17c0 .83.67 1.5 1.5 1.5h13c.83 0 1.5-.67 1.5-1.5v-17c0-.83-.67-1.5-1.5-1.5z"
                fill="#0078D4"
            />
            <path d="M16 8H8v2h8V8zM16 12H8v2h8v-2zM16 16H8v2h8v-2z" fill="white" />
        </svg>
    ),
    mongodb: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296 5.352-3.618 4.292-11.375z"
                fill="#47A248"
            />
        </svg>
    ),
    slack: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52zM6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z"
                fill="#E01E5A"
            />
            <path
                d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834zM8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z"
                fill="#36C5F0"
            />
            <path
                d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834zM17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z"
                fill="#2EB67D"
            />
            <path
                d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52zM15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z"
                fill="#ECB22E"
            />
        </svg>
    ),
    salesforce: ({ className }: { className?: string }) => (
        <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 8.16c-.169-.04-.358-.06-.566-.06-.386 0-.749.08-1.074.225-.3-1.136-1.335-1.974-2.568-1.974-.616 0-1.17.218-1.61.58-.604-1.22-1.843-2.063-3.294-2.063-2.026 0-3.67 1.644-3.67 3.67 0 .12.007.238.02.354-.837.386-1.42 1.247-1.42 2.246 0 1.37 1.11 2.48 2.48 2.48h10.702c1.37 0 2.48-1.11 2.48-2.48 0-1.37-1.11-2.48-2.48-2.48z"
                fill="#00A1E0"
            />
        </svg>
    ),
}
