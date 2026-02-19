"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ShoppingCart, Bot, CheckCircle2, FileText, Package, ArrowRight, Building2, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProcurementCard() {
    const [step, setStep] = useState(0);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    // Animation sequence
    useEffect(() => {
        if (!isInView) return;
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 2500);
        return () => clearInterval(timer);
    }, [isInView]);

    return (
        <div ref={containerRef} className="relative h-full w-full overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 border border-gray-200 dark:border-white/10 shadow-sm flex flex-col">

            {/* Header / StatusBar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm z-20 shrink-0">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-orange-500/10 flex items-center justify-center">
                        <ShoppingCart className="h-3.5 w-3.5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">Procurement Agent</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className={`h-1.5 w-1.5 rounded-full ${step > 0 && step < 4 ? "bg-green-500 animate-pulse" : "bg-gray-300 dark:bg-neutral-700"}`} />
                    <span className="text-[10px] text-gray-500 dark:text-neutral-500 font-medium">
                        {step === 0 ? "Idle" : step === 1 ? "Analyzing" : step === 2 ? "Approving" : step === 3 ? "Ordering" : "Done"}
                    </span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative flex-1 p-6 flex flex-row gap-8 items-start overflow-hidden">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                {/* Left Column: Vertical Workflow */}
                <div className="relative z-10 h-full flex flex-col justify-between items-center py-2 shrink-0">

                    {/* Vertical Connection Line */}
                    <div className="absolute top-4 bottom-4 left-1/2 w-0.5 bg-gray-200 dark:bg-neutral-800 -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            className="w-full bg-orange-500 origin-top"
                            initial={{ height: "0%" }}
                            animate={{ height: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        />
                    </div>

                    {/* Step 1: Request */}
                    <WorkflowNode
                        active={step >= 0}
                        current={step === 0}
                        icon={Package}
                        color="blue"
                        label="Requisition"
                    />

                    {/* Step 2: AI Analysis */}
                    <WorkflowNode
                        active={step >= 1}
                        current={step === 1}
                        icon={Bot}
                        color="purple"
                        label="AI Check"
                    />

                    {/* Step 3: Approval */}
                    <WorkflowNode
                        active={step >= 2}
                        current={step === 2}
                        icon={CheckCircle2}
                        color="green"
                        label="Approval"
                    />

                    {/* Step 4: PO */}
                    <WorkflowNode
                        active={step >= 3}
                        current={step === 3}
                        icon={FileText}
                        color="orange"
                        label="PO Created"
                    />
                </div>

                {/* Right Column: Persistent Info Cards */}
                <div className="flex-1 h-full flex flex-col items-end gap-3 relative z-10 pb-4">
                    <AnimatePresence mode="wait">
                        {step === 0 && (
                            <motion.div
                                key="request"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg p-3 shadow-sm w-fit"
                            >
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-500 dark:text-neutral-500 uppercase">New Request</p>
                                        <p className="text-xs font-semibold text-gray-900 dark:text-white">MacBook Pro M3 x5</p>
                                    </div>
                                    <span className="text-[10px] bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-1.5 py-0.5 rounded">
                                        $15,000
                                    </span>
                                </div>
                                <div className="mt-2 text-[10px] text-gray-400 dark:text-neutral-500 flex items-center gap-1">
                                    <Building2 className="h-3 w-3" />
                                    <span>Engineering Dept</span>
                                </div>
                            </motion.div>
                        )}

                        {(step === 1 || step === 2) && (
                            <motion.div
                                key="analysis"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg p-3 shadow-sm w-fit"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <Bot className="h-3 w-3 text-purple-500" />
                                    <span className="text-[10px] font-bold text-gray-500 dark:text-neutral-500 uppercase">AI Analysis</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="bg-green-500/5 rounded p-1.5 border border-green-500/10">
                                        <div className="text-[9px] text-gray-500 dark:text-gray-400">Budget</div>
                                        <div className="text-[10px] font-semibold text-green-600 dark:text-green-400">Approved</div>
                                    </div>
                                    <div className="bg-blue-500/5 rounded p-1.5 border border-blue-500/10">
                                        <div className="text-[9px] text-gray-500 dark:text-gray-400">Stock</div>
                                        <div className="text-[10px] font-semibold text-blue-600 dark:text-blue-400">Available</div>
                                    </div>
                                </div>
                                {step === 2 && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        className="mt-2 pt-2 border-t border-gray-100 dark:border-white/5"
                                    >
                                        <div className="flex items-center gap-1.5">
                                            <CheckCircle2 className="h-3 w-3 text-green-500" />
                                            <span className="text-[10px] font-medium text-gray-600 dark:text-gray-300">Manager Auto-Approved</span>
                                        </div>
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {step >= 3 && (
                            <motion.div
                                key="po"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-lg p-3 shadow-sm w-fit"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="h-6 w-6 rounded bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                                            <FileText className="h-3.5 w-3.5 text-orange-600 dark:text-orange-500" />
                                        </div>
                                        <span className="text-[10px] font-bold text-gray-500 dark:text-neutral-500 uppercase">PO Generated</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-gray-400">#PO-001</span>
                                </div>

                                <div className="space-y-1.5">
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500">To:</span>
                                        <span className="font-medium text-gray-900 dark:text-white">Apple Inc. Enterprise</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500">Total:</span>
                                        <span className="font-medium text-gray-900 dark:text-white">$15,000.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-[10px]">
                                        <span className="text-gray-500">Status:</span>
                                        <span className="text-orange-600 dark:text-orange-400 font-medium">Processing</span>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50/50 dark:bg-neutral-900/50 p-2 text-center border-t border-gray-200 dark:border-white/5">
                <p className="text-[10px] text-gray-400 dark:text-neutral-500 font-mono">
                    InnuxAI Procurement Agent v2.1
                </p>
            </div>
        </div>
    );
}

function WorkflowNode({ active, current, icon: Icon, color, label }: any) {
    const colorClasses = {
        blue: "bg-blue-500",
        purple: "bg-purple-500",
        green: "bg-green-500",
        orange: "bg-orange-500"
    };

    const activeColor = active ? colorClasses[color as keyof typeof colorClasses] : "bg-gray-100 dark:bg-neutral-800";
    const textColor = active ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-neutral-600";

    return (
        <div className="flex items-center gap-3 relative z-10 w-full">
            <motion.div
                animate={{
                    scale: current ? 1.1 : 1,
                    borderColor: current ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)"
                }}
                className={cn(
                    "h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ring-4 ring-white dark:ring-neutral-950",
                    activeColor,
                    active ? "shadow-md" : "border border-gray-200 dark:border-white/10"
                )}
            >
                <Icon className={cn("h-3.5 w-3.5 transition-colors duration-300", active ? "text-white" : "text-gray-400 dark:text-neutral-600")} />
            </motion.div>

            <div className="hidden sm:block absolute left-10 w-max">
                <p className={cn("text-[10px] font-bold transition-colors duration-300", textColor)}>{label}</p>
            </div>
        </div>
    )
}

