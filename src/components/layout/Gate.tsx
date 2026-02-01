"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

interface GateProps {
    title: string;
    description?: string;
    children?: React.ReactNode;
}

export function Gate({ title, description, children }: GateProps) {
    const [password, setPassword] = useState("");
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const cached = sessionStorage.getItem("gate_unlocked");
        if (cached === "true") {
            setIsUnlocked(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Client-side gate
        if (password === "13.11.1982") {
            sessionStorage.setItem("gate_unlocked", "true");
            setIsUnlocked(true);
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

    if (isUnlocked && children) {
        return <>{children}</>;
    }

    // Fallback if unlocked but no children
    if (isUnlocked && !children) {
        return (
            <Section className="min-h-[60vh] flex flex-col items-center justify-center">
                <div className="text-center space-y-4">
                    <h2 className="text-2xl font-serif italic text-accent-nature">Access Granted.</h2>
                    <p className="text-ink/60">No content provided for this section yet.</p>
                </div>
            </Section>
        )
    }

    return (
        <Section className="min-h-[60vh] flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md space-y-8 text-center"
            >
                <div className="space-y-4">
                    <h1 className="font-serif text-4xl italic text-ink">{title}</h1>
                    {description && <p className="text-ink/60 font-light">{description}</p>}
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="relative">
                        <Input
                            type="password"
                            placeholder="Enter password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={error ? "border-red-500 text-red-500 placeholder:text-red-300" : ""}
                        />
                        {error && (
                            <span className="absolute -bottom-6 left-0 text-xs text-red-500 animate-pulse">
                                Incorrect password
                            </span>
                        )}
                    </div>
                    <Button type="submit" variant="secondary" className="w-full text-sm">
                        Unlock
                    </Button>
                </form>
            </motion.div>
        </Section>
    );
}
