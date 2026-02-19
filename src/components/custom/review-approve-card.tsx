"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MessageSquare, CheckCircle2, FileSignature, User } from "lucide-react";
import { cn } from "@/lib/utils";

export function ReviewApproveCard() {
    const [step, setStep] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    // Animation sequence loop
    useEffect(() => {
        if (!isInView) return;
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 2500); // 2.5 second cycle
        return () => clearInterval(timer);
    }, [isInView]);

    const isApproved = step >= 3;

    return (
        <div ref={containerRef} className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 p-6 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/5 via-white/50 dark:via-neutral-900/50 to-transparent opacity-80" />

            {/* Header */}
            <div className="mb-6 flex items-center justify-between z-10">
                <div className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-500 ${isApproved ? "bg-green-500/10 dark:bg-green-500/20 text-green-600 dark:text-green-400" : "bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400"}`}>
                        <FileSignature className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white tracking-wide">Final Review</h3>
                        <p className="text-[10px] text-gray-500 dark:text-neutral-400">MSA_Final_v2.pdf</p>
                    </div>
                </div>

                {/* Status Badge */}
                <motion.div
                    animate={{
                        backgroundColor: isApproved ? "rgba(34, 197, 94, 0.1)" : "rgba(244, 63, 94, 0.1)",
                        borderColor: isApproved ? "rgba(34, 197, 94, 0.2)" : "rgba(244, 63, 94, 0.2)",
                    }}
                    className="flex items-center gap-1.5 rounded-full border px-2.5 py-1"
                >
                    {isApproved ? (
                        <>
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-[10px] font-medium text-green-600 dark:text-green-400">APPROVED</span>
                        </>
                    ) : (
                        <>
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                            </span>
                            <span className="text-[10px] font-medium text-rose-600 dark:text-rose-400">PENDING</span>
                        </>
                    )}
                </motion.div>
            </div>

            {/* Document View */}
            <div className="relative z-10 flex-1 rounded-lg bg-white dark:bg-neutral-900/50 p-4 border border-gray-200 dark:border-white/5 font-mono text-[10px] text-gray-400 dark:text-neutral-400 leading-relaxed">
                <p>12. <span className="text-gray-600 dark:text-neutral-500 font-semibold">Indemnification.</span> Provider shall indemnify Customer against any third-party claims arising from Provider&apos;s gross negligence.</p>
                <div className="h-2" />
                <div className="relative">
                    13. <span className="text-gray-600 dark:text-neutral-500 font-semibold">Termination.</span> Either party may terminate this Agreement with
                    <span className={cn("relative mx-1 transition-colors duration-300", step >= 1 ? "bg-rose-500/10 text-rose-700 dark:bg-rose-500/20 dark:text-rose-200 rounded px-0.5" : "")}>
                        30 days
                    </span>
                    notice.

                    {/* Comment Popover */}
                    <AnimatePresence>
                        {step >= 1 && step < 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute left-10 top-6 w-48 z-20 rounded-xl bg-white dark:bg-neutral-800 p-2 shadow-xl border border-gray-100 dark:border-neutral-700"
                            >
                                <div className="flex items-start gap-2">
                                    <div className="h-5 w-5 rounded-full bg-indigo-500 flex items-center justify-center shrink-0">
                                        <User className="h-3 w-3 text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[10px] text-gray-900 dark:text-white font-medium">Alex (Legal)</p>
                                        <p className="text-[9px] text-gray-500 dark:text-neutral-400">Should we increase this to 60 days?</p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Reply/Resolution */}
                <AnimatePresence>
                    {step >= 2 && (
                        <motion.div
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-3 flex items-center gap-2 rounded bg-green-500/10 p-1.5 px-2 border border-green-500/20 w-fit"
                        >
                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                            <span className="text-green-600 dark:text-green-300 text-[10px]">Comment Resolved</span>
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>

            {/* Footer Avatars */}
            <div className="relative z-10 mt-4 flex items-center justify-between">
                <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-6 w-6 rounded-full border border-gray-200 dark:border-neutral-900 bg-gray-100 dark:bg-neutral-700" />
                    ))}
                </div>
                <div className="text-[9px] text-gray-400 dark:text-neutral-500 font-medium uppercase tracking-wider">
                    {isApproved ? "Workflow Complete" : "Evaluating..."}
                </div>
            </div>

        </div>
    );
}
