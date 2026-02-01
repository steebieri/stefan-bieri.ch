"use client";

import { motion } from "framer-motion";

interface GateProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
}

export function Gate({ children }: GateProps) {
    // Authentication removed by user request.
    // This component now acts as a simple pass-through container.
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
}
