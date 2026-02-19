"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    Mail,
    Database,
    MessageSquare,
    Cloud,
    FileText,
    CheckCircle2,
    Loader2,
    Terminal,
    Bot
} from "lucide-react";

export function AIAgentsCard() {
    const [activeAgent, setActiveAgent] = useState(0);

    const agents = [
        {
            id: "gmail",
            name: "Gmail Agent",
            icon: Mail,
            color: "text-red-500",
            bg: "bg-red-500/10",
            border: "border-red-500/20",
            status: "Processing emails...",
            count: 3
        },
        {
            id: "salesforce",
            name: "Salesforce Agent",
            icon: Cloud,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
            border: "border-blue-500/20",
            status: "Updating leads...",
            count: 12
        },
        {
            id: "slack",
            name: "Slack Agent",
            icon: MessageSquare,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
            border: "border-purple-500/20",
            status: "Notifying team...",
            count: 5
        },
    ];

    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    useEffect(() => {
        if (!isInView) return;
        const interval = setInterval(() => {
            setActiveAgent((prev) => (prev + 1) % agents.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [agents.length, isInView]);

    return (
        <div ref={containerRef} className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">

            {/* Header / Terminals Look */}
            <div className="flex items-center gap-2 border-b border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-3 backdrop-blur-sm">
                <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="ml-2 flex items-center gap-1.5 rounded-md bg-gray-200/50 dark:bg-neutral-800/50 px-2 py-0.5">
                    <Terminal className="h-3 w-3 text-gray-500 dark:text-neutral-400" />
                    <span className="text-[10px] font-mono text-gray-500 dark:text-neutral-400">agent-orchestrator.exe</span>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="relative flex-1 p-4 flex flex-col gap-3 overflow-hidden">

                {/* Background Grid/Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                {/* Agent List */}
                <div className="flex flex-col gap-2 relative z-10">
                    {agents.map((agent, index) => {
                        const isActive = index === activeAgent;
                        return (
                            <motion.div
                                key={agent.id}
                                animate={{
                                    scale: isActive ? 1.02 : 1,
                                    opacity: isActive ? 1 : 0.7,
                                    y: isActive ? 0 : 0
                                }}
                                transition={{ duration: 0.3 }}
                                className={cn(
                                    "relative flex items-center gap-3 rounded-lg border p-2.5 transition-all duration-300",
                                    isActive
                                        ? "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-700 shadow-lg"
                                        : "bg-gray-50/50 dark:bg-neutral-900/30 border-transparent"
                                )}
                            >
                                {/* Active Indicator Bar */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-bar"
                                        className={cn("absolute left-0 top-0 bottom-0 w-1 rounded-l-lg", agent.color.replace('text-', 'bg-'))}
                                    />
                                )}

                                <div className={cn("flex h-8 w-8 items-center justify-center rounded-md", agent.bg)}>
                                    <agent.icon className={cn("h-4 w-4", agent.color)} />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <span className={cn("text-xs font-semibold", isActive ? "text-gray-900 dark:text-white" : "text-gray-500 dark:text-neutral-500")}>
                                            {agent.name}
                                        </span>
                                        {isActive && (
                                            <span className="flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[9px] font-medium text-emerald-600 dark:text-emerald-400">
                                                <span className="relative flex h-1.5 w-1.5">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                                                </span>
                                                Active
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex items-center justify-between mt-0.5">
                                        <span className="text-[10px] text-gray-500 dark:text-neutral-400 truncate">
                                            {isActive ? agent.status : "Idle"}
                                        </span>
                                        {isActive && (
                                            <span className="text-[10px] font-mono text-gray-400 dark:text-neutral-500">
                                                {agent.count} tasks
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom Activity Log Simulation */}
                <div className="mt-auto rounded-lg bg-gray-100/50 dark:bg-black/20 border border-gray-200 dark:border-white/5 p-2.5 font-mono text-[9px]">
                    <div className="flex items-center gap-1.5 text-gray-400 dark:text-neutral-500 mb-1.5 border-b border-gray-200 dark:border-white/5 pb-1">
                        <Bot className="h-3 w-3" />
                        <span>System Live Feed</span>
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden h-[40px]">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={activeAgent}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0 }}
                                className="flex items-center gap-1.5"
                            >
                                <span className={cn("text-[8px]", agents[activeAgent].color)}>{">"}</span>
                                <span className="text-gray-600 dark:text-neutral-300">
                                    Executing {agents[activeAgent].name} workflow...
                                </span>
                            </motion.div>
                            <motion.div
                                key={`${activeAgent}-d`}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-1.5"
                            >
                                <span className="text-gray-300 dark:text-neutral-700">{">"}</span>
                                <span className="text-gray-400 dark:text-neutral-600">
                                    Verifying permissions... OK
                                </span>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

            </div>
        </div>
    );
}
