"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    FileCheck,
    Zap,
    Database,
    MailCheck,
    ShieldCheck,
    Workflow
} from "lucide-react";

export function LiveWorkflowsCard() {
    const [events, setEvents] = useState([
        { id: 1, text: "Workflow triggered", sub: "Automation Engine", time: "just now", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
        { id: 2, text: "Data synchronized", sub: "MongoDB Agent", time: "2s ago", icon: Database, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { id: 3, text: "Email categorized", sub: "Gmail Agent", time: "5s ago", icon: MailCheck, color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    ]);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    useEffect(() => {
        if (!isInView) return;
        const timer = setInterval(() => {
            const newEvents = [
                { id: Date.now(), ...getRandomEvent() },
                ...events.slice(0, 3)
            ];
            setEvents(newEvents);
        }, 2500);
        return () => clearInterval(timer);
    }, [events, isInView]);

    return (
        <div ref={containerRef} className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">

            {/* Header */}
            <div className="flex items-center gap-2 border-b border-gray-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-3 backdrop-blur-sm z-20">
                <div className="flex items-center justify-center h-6 w-6 rounded bg-indigo-500/10">
                    <Workflow className="h-3.5 w-3.5 text-indigo-500" />
                </div>
                <span className="text-xs font-semibold text-gray-900 dark:text-white">Live Activity Stream</span>
                <div className="ml-auto flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                </div>
            </div>

            {/* List */}
            <div className="relative flex-1 p-4 overflow-hidden flex flex-col gap-2">
                <AnimatePresence mode="popLayout">
                    {events.map((event) => (
                        <motion.div
                            key={event.id}
                            layout
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            className={cn(
                                "flex items-center gap-3 rounded-lg border p-3 backdrop-blur-sm",
                                "bg-white/80 dark:bg-neutral-900/60 border-gray-200 dark:border-white/5"
                            )}
                        >
                            <div className={cn("flex h-8 w-8 items-center justify-center rounded-md border", event.bg, event.border)}>
                                <event.icon className={cn("h-4 w-4", event.color)} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                    <p className="text-xs font-medium text-gray-900 dark:text-gray-100 truncate">
                                        {event.text}
                                    </p>
                                    <span className="text-[10px] text-gray-400 dark:text-neutral-500 whitespace-nowrap ml-2">
                                        {event.time}
                                    </span>
                                </div>
                                <p className="text-[10px] text-gray-500 dark:text-neutral-400 truncate">
                                    {event.sub}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>

                {/* Fade Overlay */}
                {/* <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-neutral-950 dark:via-neutral-950/80 z-10 pointer-events-none" /> */}
            </div>

        </div>
    );
}

function getRandomEvent() {
    const items = [
        { text: "Invoice processed", sub: "Finance Workflow", icon: FileCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
        { text: "Compliance check", sub: "Security Agent", icon: ShieldCheck, color: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
        { text: "Lead qualification", sub: "Salesforce Agent", icon: Zap, color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
        { text: "Contract review", sub: "Legal Assistant", icon: FileCheck, color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
    ];
    return {
        ...items[Math.floor(Math.random() * items.length)],
        time: "just now"
    };
}
