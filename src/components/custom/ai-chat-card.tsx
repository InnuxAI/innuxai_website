"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, User, Send, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function AIChatCard() {
    const [step, setStep] = useState(0);

    // Animation sequence loop
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 5);
        }, 1200); // 1.2 second cycle for faster interaction
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex h-full w-full flex-col justify-between overflow-hidden rounded-xl bg-gray-50 dark:bg-neutral-950 p-4 shadow-2xl border border-gray-200 dark:border-neutral-800 transition-colors duration-300">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900/50 dark:to-neutral-950/80" />

            {/* Chat Area */}
            <div className="relative z-10 flex flex-1 flex-col gap-3 overflow-hidden p-2">
                <AnimatePresence mode="popLayout">
                    {/* User Message */}
                    {step >= 1 && (
                        <ChatMessage
                            key="user-msg"
                            isUser={true}
                            text="What is the notice period?"
                            delay={0.2}
                        />
                    )}

                    {/* AI Thinking/Response */}
                    {step === 2 && (
                        <ThinkingBubble key="thinking" />
                    )}

                    {step >= 3 && (
                        <ChatMessage
                            key="ai-msg"
                            isUser={false}
                            text="It is currently 30 days. Standard for this region is 60."
                            delay={0}
                        />
                    )}

                    {step >= 4 && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            className="self-start rounded-lg bg-indigo-50 border border-indigo-100 dark:bg-indigo-500/10 dark:border-indigo-500/20 p-2 px-3 mt-1 cursor-pointer hover:bg-indigo-100 dark:hover:bg-indigo-500/20 transition-colors"
                        >
                            <div className="flex items-center gap-2 text-[10px] font-medium text-indigo-600 dark:text-indigo-300">
                                <Sparkles className="h-3 w-3" />
                                <span className="text-indigo-600 dark:text-indigo-300">Update to 60 days?</span>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>

            {/* Input Bar Simulation */}
            <div className="relative z-10 mt-2 flex items-center gap-2 rounded-lg bg-white dark:bg-white/5 p-2 px-3 border border-gray-200 dark:border-white/5 shadow-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <div className="h-2 w-24 rounded bg-gray-100 dark:bg-white/10" />
                <Send className="ml-auto h-3 w-3 text-gray-400 dark:text-neutral-500" />
            </div>

        </div>
    );
}

function ChatMessage({ isUser, text, delay }: { isUser: boolean; text: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay }}
            className={cn(
                "flex w-fit max-w-[85%] items-start gap-2 rounded-2xl p-2.5 text-[11px] leading-relaxed",
                isUser
                    ? "self-end bg-gray-200 text-gray-800 dark:bg-neutral-800 dark:text-neutral-200 rounded-tr-sm"
                    : "self-start bg-blue-600 text-white rounded-tl-sm shadow-lg shadow-blue-500/20 dark:shadow-blue-900/20"
            )}
        >
            {!isUser && <Bot className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-70" />}
            <span>{text}</span>
            {isUser && <User className="mt-0.5 h-3.5 w-3.5 shrink-0 opacity-50" />}
        </motion.div>
    )
}

function ThinkingBubble() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-tl-sm bg-gray-100 border border-gray-200 dark:bg-neutral-900 dark:border-white/5 p-3"
        >
            <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-neutral-500 animate-[bounce_1s_infinite_0ms]" />
            <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-neutral-500 animate-[bounce_1s_infinite_200ms]" />
            <span className="h-1 w-1 rounded-full bg-gray-400 dark:bg-neutral-500 animate-[bounce_1s_infinite_400ms]" />
        </motion.div>
    )
}
