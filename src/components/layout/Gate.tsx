"use client";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { motion } from "framer-motion";

interface GateProps {
    title: string;
    description?: string;
}

export function Gate({ title, description }: GateProps) {
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Real auth. For now just mock.
        if (password === "demo") {
            alert("Access granted (Mock)");
        } else {
            setError(true);
            setTimeout(() => setError(false), 2000);
        }
    };

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
                                Incorrect password (try 'demo')
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
