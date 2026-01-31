import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/layout/Hero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Lock, Briefcase, Coffee } from "lucide-react";

export default function Home() {
    return (
        <main className="bg-paper min-h-screen">
            <Navigation />
            <Hero />

            {/* 3 Main Sections */}
            <Section className="py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Private Section (Skye Feature) */}
                    <div className="group relative overflow-hidden rounded-2xl bg-white border border-ink/5 shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src="/images/skye.jpg"
                                alt="Skye the Border Collie"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent flex items-end p-6">
                                <div className="text-paper">
                                    <span className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80 mb-2">
                                        <Lock size={12} /> Private Area
                                    </span>
                                    <h3 className="font-serif text-2xl italic">Life & Hobbies</h3>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-ink/60 text-sm leading-relaxed">
                                Hiking in the Jura mountains with Skye, traveling Scandinavia, and seeking quiet moments.
                            </p>
                            <Link href="/private">
                                <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-accent-nature gap-2 text-sm">
                                    Enter Password <ArrowRight size={14} />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Professional Section */}
                    <div className="group rounded-2xl bg-white border border-ink/5 shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-full bg-ink/5 flex items-center justify-center text-ink/80 group-hover:bg-accent-nature/10 group-hover:text-accent-nature transition-colors">
                                <Briefcase size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl italic mb-2">Professional</h3>
                                <p className="text-ink/60 text-sm leading-relaxed">
                                    Senior Digital Transformation Expert. 20+ years of experience in corporate environments.
                                    CRM, AI, and Automation initiatives.
                                </p>
                            </div>
                        </div>
                        <div className="pt-8">
                            <Link href="/work">
                                <Button variant="secondary" className="w-full justify-between group-hover:text-accent-nature">
                                    View CV & Projects <ArrowRight size={14} />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Consulting Section */}
                    <div className="group rounded-2xl bg-ink text-paper shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
                                <Coffee size={24} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="font-serif text-2xl italic mb-2">Consulting</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    Strategic advice for SMEs and startups.
                                    Optimizing workflows, selecting the right tech stack, and digital coaching.
                                </p>
                            </div>
                        </div>
                        <div className="pt-8">
                            <a href="mailto:steee.bieri@gmail.com">
                                <Button variant="primary" className="w-full border-white/20 text-white hover:bg-white/10 hover:border-white/40">
                                    Get in Touch
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </Section>
        </main>
    );
}
