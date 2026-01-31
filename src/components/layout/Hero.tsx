"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { OrganicDigitalAnimation } from "@/components/ui/OrganicDigitalAnimation";

export function Hero() {
    return (
        <div className="relative min-h-[90vh] flex items-center overflow-hidden">
            <OrganicDigitalAnimation />

            <Section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10 pt-20">

                {/* Text Area */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="space-y-6 order-2 md:order-1"
                >
                    <div className="inline-block px-3 py-1 border border-accent-nature/30 rounded-full bg-accent-nature/5">
                        <span className="text-xs uppercase tracking-widest text-accent-nature font-medium">
                            Digital Naturalist
                        </span>
                    </div>

                    <h1 className="font-serif text-5xl md:text-7xl italic text-ink leading-tight">
                        Cultivating <br />
                        <span className="not-italic font-light opacity-60">Digital Calm.</span>
                    </h1>

                    <p className="text-lg text-ink/70 max-w-md leading-relaxed">
                        I build systems that breathe. Bridging the gap between organic complexity and digital precision.
                    </p>
                </motion.div>

                {/* Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative order-1 md:order-2 flex justify-center md:justify-end"
                >
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Organic Blob Background Shape */}
                        <div className="absolute inset-0 bg-accent-nature/10 rounded-full blur-3xl scale-110" />

                        <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-ink/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
                            <Image
                                src="/images/stefan.png"
                                alt="Stefan Bieri"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>

            </Section>
        </div>
    );
}
