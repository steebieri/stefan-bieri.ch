"use client";

import { useState, useEffect } from "react";
import { Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function ZenMode() {
    const [isActive, setIsActive] = useState(false);

    const toggleZen = () => {
        setIsActive(!isActive);

        if (!isActive) {
            // Trigger confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#4A5D4E', '#8B9D83', '#F9F9F7']
            });
        }
    };

    return (
        <>
            {/* Overlay */}
            <AnimatePresence>
                {isActive && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 pointer-events-none mix-blend-multiply bg-[#4A5D4E]/10"
                    />
                )}
            </AnimatePresence>

            {/* Floating Toggle Button */}
            <div className="fixed bottom-6 right-6 z-50">
                <Button
                    onClick={toggleZen}
                    className="rounded-full w-12 h-12 p-0 shadow-lg bg-accent-nature text-white hover:bg-accent-nature/80 hover:scale-110 transition-all border-none"
                    aria-label="Toggle Zen Mode"
                >
                    {isActive ? <X size={20} /> : <Sparkles size={20} />}
                </Button>
            </div>
        </>
    );
}
