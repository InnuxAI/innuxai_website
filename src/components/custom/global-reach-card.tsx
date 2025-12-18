"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe } from "@/components/magicui/globe";
import { Wifi, Activity, Server, Globe as GlobeIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function GlobalReachCard() {
    const [logs, setLogs] = useState([
        { city: "London", status: "Synced", time: "10:42:01" },
        { city: "Tokyo", status: "Active", time: "10:41:58" },
        { city: "New York", status: "Deployed", time: "10:41:45" },
    ]);

    // Simulate incoming logs
    useEffect(() => {
        const timer = setInterval(() => {
            const cities = ["Singapore", "Berlin", "Sydney", "Dubai", "San Francisco"];
            const statuses = ["Synced", "Active", "Verifying", "Optimizing"];
            const randomCity = cities[Math.floor(Math.random() * cities.length)];
            const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

            const now = new Date();
            const timeStr = now.toLocaleTimeString('en-US', { hour12: false });

            setLogs(prev => [
                { city: randomCity, status: randomStatus, time: timeStr },
                ...prev.slice(0, 2)
            ]);
        }, 2000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex h-full w-full flex-col overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">

            {/* Background Globe Container */}
            <div className="absolute inset-0 flex items-center justify-center pt-20">
                <div className="relative h-[200%] w-[200%] md:h-[150%] md:w-[150%] filter grayscale dark:grayscale-0 opacity-20 dark:opacity-40 transition-all duration-300">
                    <Globe className="opacity-100" />
                </div>
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#f9fafb_80%)] dark:bg-[radial-gradient(circle_at_center,transparent_30%,#0a0a0a_80%)] pointer-events-none transition-colors duration-300" />
            </div>

            {/* Title - Static */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20 text-center">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-gray-300 to-gray-100/40 dark:from-white dark:to-white/40 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent opacity-30 dark:opacity-10">
                    Reach
                </span>
            </div>

            {/* HUD Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col justify-between p-4 pointer-events-none">

                {/* Top Bar */}
                <div className="flex justify-between items-start">
                    <div className="flex gap-2">
                        <StatusBadge icon={Wifi} label="Network" active={true} color="text-emerald-500" />
                        <StatusBadge icon={Server} label="Nodes: 142" active={true} color="text-blue-500" />
                    </div>
                    <div className="flex flex-col items-end">
                        <div className="flex items-center gap-1.5 rounded bg-white/80 dark:bg-neutral-900/80 p-1 px-2 border border-gray-200 dark:border-white/5 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400">ONLINE</span>
                        </div>
                        <span className="text-[9px] text-gray-500 dark:text-neutral-500 font-mono mt-1">LATENCY: 24ms</span>
                    </div>
                </div>

                {/* Bottom Activity Log */}
                <div className="w-full max-w-[200px] self-start mt-auto">
                    <div className="flex items-center gap-1.5 mb-2 text-[10px] text-gray-400 dark:text-neutral-400 font-medium uppercase tracking-wider">
                        <Activity className="h-3 w-3" />
                        <span>Live Activity</span>
                    </div>
                    <div className="flex flex-col gap-1.5">
                        {logs.map((log, i) => (
                            <motion.div
                                key={`${log.city}-${log.time}`}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1 - i * 0.3, x: 0 }}
                                className="flex items-center justify-between rounded bg-white/80 dark:bg-neutral-900/60 p-1.5 border border-gray-200 dark:border-white/5 backdrop-blur-md"
                            >
                                <div className="flex items-center gap-2">
                                    <GlobeIcon className="h-3 w-3 text-gray-400 dark:text-neutral-500" />
                                    <span className="text-[10px] text-gray-700 dark:text-neutral-300 font-mono">{log.city}</span>
                                </div>
                                <span className={cn("text-[9px] font-mono", log.status === "Synced" ? "text-emerald-600 dark:text-emerald-400" : "text-blue-600 dark:text-blue-400")}>
                                    {log.status}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}

function StatusBadge({ icon: Icon, label, active, color }: { icon: any; label: string; active: boolean; color: string }) {
    return (
        <div className="flex items-center gap-1.5 rounded-full bg-white/80 dark:bg-neutral-900/80 p-1.5 px-3 border border-gray-200 dark:border-white/5 backdrop-blur-sm">
            <Icon className={cn("h-3 w-3", active ? color : "text-gray-400 dark:text-neutral-500")} />
            <span className="text-[10px] text-gray-700 dark:text-neutral-300 font-medium">{label}</span>
        </div>
    )
}
