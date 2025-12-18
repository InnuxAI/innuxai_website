"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, FileText, CheckCircle2, Loader2, Sparkles, BrainCircuit } from "lucide-react";
import { cn } from "@/lib/utils";

export function EmailAnalysisCard() {
    const [step, setStep] = useState(0);

    // Animation sequence loop
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3000); // Change state every 3 seconds
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 p-6 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-transparent opacity-50" />

            {/* Header */}
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 dark:border-white/5 pb-4 z-10">
                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                        <Mail className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Contract Review</h3>
                        <p className="text-xs text-gray-500 dark:text-neutral-400">Subject: MSA Draft - Q4</p>
                    </div>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600 dark:text-green-400">
                    <BrainCircuit className="h-3 w-3" />
                    <span>AI Active</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative z-10 flex flex-1 gap-4">
                {/* Email Body Simulation */}
                <div className="flex-1 space-y-3 rounded-lg bg-white dark:bg-white/5 p-4 text-xs text-gray-600 dark:text-neutral-300 border border-gray-200 dark:border-white/5 shadow-sm">
                    <p>Hi Team,</p>
                    <p>Please find attached the draft for the <HighlightedText active={step >= 1} text="Master Services Agreement" color="bg-purple-100 text-purple-700 dark:bg-purple-500/30 dark:text-purple-200" /></p>
                    <p className="opacity-80">The total value is <HighlightedText active={step >= 2} text="$50,000" color="bg-emerald-100 text-emerald-700 dark:bg-emerald-500/30 dark:text-emerald-200" /> effective from <HighlightedText active={step >= 2} text="Oct 1st, 2024" color="bg-blue-100 text-blue-700 dark:bg-blue-500/30 dark:text-blue-200" />.</p>
                    <p className="mt-4 opacity-60">Regards,<br />John Doe</p>

                    {/* Scanning Line Animation */}
                    <motion.div
                        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"
                        animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        style={{ filter: "blur(2px)" }}
                    />
                </div>

                {/* Extraction Panel (Floating) */}
                <AnimatePresence mode="wait">
                    <motion.div
                        className="absolute -right-2 top-10 w-48 rounded-xl bg-white/95 dark:bg-neutral-900/90 p-3 shadow-xl backdrop-blur-md border border-gray-200 dark:border-white/10"
                        initial={{ x: 20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="mb-2 flex items-center gap-2 text-xs font-semibold text-gray-900 dark:text-white">
                            <Sparkles className="h-3 w-3 text-amber-500 dark:text-yellow-400" />
                            <span>Extracted Data</span>
                        </div>
                        <div className="space-y-2">
                            <ExtractionItem label="Type" value="MSA" active={step >= 1} />
                            <ExtractionItem label="Value" value="$50,000" active={step >= 2} />
                            <ExtractionItem label="Start Date" value="2024-10-01" active={step >= 2} />
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Status Footer */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 dark:text-neutral-500 z-10">
                {step < 3 ? (
                    <>
                        <Loader2 className="h-3 w-3 animate-spin" />
                        <span>Processing content...</span>
                    </>
                ) : (
                    <>
                        <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-500">Analysis Complete</span>
                    </>
                )}
            </div>
        </div>
    );
}

function HighlightedText({ text, color, active }: { text: string; color: string; active: boolean }) {
    return (
        <span className={cn("rounded px-1 transition-all duration-500", active ? color : "bg-transparent")}>
            {text}
        </span>
    )
}

function ExtractionItem({ label, value, active }: { label: string; value: string; active: boolean }) {
    return (
        <div className="flex items-center justify-between rounded bg-gray-50 dark:bg-white/5 p-1.5 px-2 text-[10px]">
            <span className="text-gray-500 dark:text-neutral-400">{label}</span>
            <div className="relative overflow-hidden">
                <motion.span
                    initial={{ y: 10, opacity: 0 }}
                    animate={active ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    className="font-mono font-medium text-gray-900 dark:text-white block"
                >
                    {value}
                </motion.span>
            </div>
        </div>
    )
}
