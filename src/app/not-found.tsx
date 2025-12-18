"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white dark:bg-black overflow-hidden relative selection:bg-purple-500/30">

            {/* Background Ambient Gradient */}
            <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none z-0" />

            {/* Simplified Spotlights (Reduced blur radius for performance) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/5 blur-[60px] rounded-full pointer-events-none" />

            <div className="z-10 flex flex-col items-center text-center px-4 relative">

                {/* Animated 404 Text */}
                <div className="relative mb-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        <h1 className="text-[120px] md:text-[180px] font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-900 to-neutral-200 dark:from-white dark:to-neutral-800">
                            404
                        </h1>
                    </motion.div>

                    {/* Removed Sparkles and Glitch loop for performance */}
                </div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="space-y-4 max-w-lg mx-auto"
                >
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-100">
                        Lost in the ether?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg leading-relaxed">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back to familiar territory.
                    </p>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mt-10"
                >
                    <Link href="/">
                        <Button size="lg" className="gap-2 h-12 px-8 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                            <Home className="w-4 h-4" />
                            Return Home
                        </Button>
                    </Link>
                    <Button variant="outline" size="lg" className="gap-2 h-12 px-8 rounded-full border-neutral-200 dark:border-white/10 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all" onClick={() => window.history.back()}>
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </Button>
                </motion.div>

            </div>

            {/* Footer Visual Accent */}
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        </div>
    );
}
