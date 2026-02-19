"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Check, Clock, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ComplianceCard() {
    const [step, setStep] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    // Animation sequence loop
    useEffect(() => {
        if (!isInView) return;
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 3500); // 3.5 second cycle
        return () => clearInterval(timer);
    }, [isInView]);

    // Score logic
    const targetScore = step === 0 ? 0 : step === 1 ? 45 : step === 2 ? 82 : 100;

    return (
        <div ref={containerRef} className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 p-6 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#0000000d_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

            {/* Header */}
            <div className="mb-4 flex items-center gap-3 z-10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white tracking-wide">Compliance Audit</h3>
                    <p className="text-[10px] text-gray-500 dark:text-neutral-400 uppercase tracking-widest font-medium">Real-time Risk Assessment</p>
                </div>
            </div>

            {/* Main Layout: Split View */}
            <div className="relative z-10 flex flex-1 gap-4 items-center">

                {/* Left: Checklist */}
                <div className="flex-1 space-y-2.5">
                    <ChecklistItem
                        label="Jurisdiction"
                        status={step >= 1 ? "verified" : "pending"}
                        delay={0.1}
                    />
                    <ChecklistItem
                        label="Liability Cap"
                        status={step >= 2 ? "fixed" : "risk"}
                        delay={0.2}
                    />
                    <ChecklistItem
                        label="Payment Terms"
                        status={step >= 3 ? "verified" : "pending"}
                        delay={0.3}
                    />
                </div>

                {/* Right: Circular Gauge */}
                <div className="flex flex-col items-center justify-center w-[120px]">
                    <div className="relative flex items-center justify-center h-24 w-24">
                        {/* SVG Circle */}
                        <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 100 100">
                            <circle
                                className="text-gray-200 dark:text-neutral-800"
                                strokeWidth="8"
                                stroke="currentColor"
                                fill="transparent"
                                r="40"
                                cx="50"
                                cy="50"
                            />
                            <motion.circle
                                className={cn(targetScore === 100 ? "text-emerald-500" : targetScore > 50 ? "text-yellow-500" : "text-red-500")}
                                strokeWidth="8"
                                strokeDasharray="251.2"
                                strokeDashoffset="251.2"
                                strokeLinecap="round"
                                stroke="currentColor"
                                fill="transparent"
                                r="40"
                                cx="50"
                                cy="50"
                                initial={{ strokeDashoffset: 251.2 }}
                                animate={{ strokeDashoffset: 251.2 - (251.2 * targetScore) / 100 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                            />
                        </svg>
                        {/* Center Text */}
                        <div className="absolute flex flex-col items-center">
                            <motion.span
                                className={cn("text-2xl font-bold font-mono tracking-tighter", targetScore === 100 ? "text-emerald-600 dark:text-white" : targetScore > 50 ? "text-yellow-600 dark:text-yellow-400" : "text-red-600 dark:text-red-400")}
                                key={targetScore}
                            >
                                {targetScore}%
                            </motion.span>
                        </div>
                    </div>
                    <span className="mt-2 text-[10px] font-medium text-gray-500 dark:text-neutral-500 uppercase">Total Score</span>
                </div>

            </div>
        </div>
    );
}

function ChecklistItem({ label, status, delay }: { label: string; status: "pending" | "verified" | "risk" | "fixed"; delay: number }) {
    const isRisk = status === "risk";
    const isVerified = status === "verified" || status === "fixed";

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay }}
            className={cn(
                "flex items-center justify-between rounded-lg border p-2.5 transition-all duration-300",
                isVerified ? "bg-emerald-50 border-emerald-200 dark:bg-emerald-500/10 dark:border-emerald-500/20" : isRisk ? "bg-red-50 border-red-200 dark:bg-red-500/10 dark:border-red-500/20" : "bg-white border-gray-200 dark:bg-neutral-900 dark:border-neutral-800"
            )}
        >
            <span className={cn("text-xs font-medium", isVerified ? "text-emerald-700 dark:text-emerald-200" : isRisk ? "text-red-700 dark:text-red-200" : "text-gray-500 dark:text-neutral-400")}>
                {label}
            </span>
            {isVerified && <Check className="h-3.5 w-3.5 text-emerald-500" />}
            {status === "pending" && <Clock className="h-3.5 w-3.5 text-gray-400 dark:text-neutral-600" />}
            {isRisk && <AlertTriangle className="h-3.5 w-3.5 text-red-500 animate-pulse" />}
        </motion.div>
    )
}
