import { Navigation } from "@/components/layout/Navigation";
import { Gate } from "@/components/layout/Gate";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Music, Coffee, Camera, Mountain, Wind } from "lucide-react";
import dynamic from 'next/dynamic';

// Dynamic imports using default exports to avoid React Client Manifest errors
const WeatherWidget = dynamic(() => import('@/components/ui/WeatherWidget'), {
    ssr: false,
    loading: () => <div className="h-48 bg-white/50 rounded-2xl animate-pulse" />
});
const SkillRadar = dynamic(() => import('@/components/ui/SkillRadar'), {
    ssr: false,
    loading: () => <div className="h-64 bg-white/50 rounded-2xl animate-pulse" />
});
const ZenMode = dynamic(() => import('@/components/ui/ZenMode'), { ssr: false });

export default function PrivatePage() {
    return (
        <main className="bg-paper min-h-screen">
            <Navigation />
            <ZenMode />

            <div className="pt-24 md:pt-32">
                <Gate title="Basecamp Alpha" description="Restricted Access. Authorization Required.">

                    {/* Welcome Header */}
                    <Section className="py-12">
                        <div className="max-w-4xl mx-auto space-y-4">
                            <span className="text-xs font-mono uppercase tracking-widest text-accent-nature">Logged in as: Guest [Level 1]</span>
                            <h1 className="font-serif text-4xl md:text-5xl italic text-ink">The Digital Living Room.</h1>
                            <p className="text-xl text-ink/70 leading-relaxed max-w-2xl">
                                Welcome to my personal dashboard. This is where I track travels, gear, and moments of calm away from the code.
                            </p>
                        </div>
                    </Section>

                    {/* Highlight Card: The Snow Trip */}
                    <Section className="pb-12">
                        <div className="max-w-4xl mx-auto relative h-[50vh] min-h-[400px] rounded-3xl overflow-hidden shadow-xl group">
                            <Image
                                src="/images/private-snow.jpg"
                                alt="Snow hike with Skye"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                                <span className="text-white/80 font-mono text-sm mb-2 flex items-center gap-2">
                                    <Mountain size={14} /> Jura Mountains, Switzerland
                                </span>
                                <h2 className="text-white font-serif text-3xl italic">Winter Expeditions 2025</h2>
                                <p className="text-white/70 max-w-lg mt-2">
                                    Tracking trails with Skye. Cold air, clear mind. The perfect contrast to a life of screens.
                                </p>
                            </div>
                        </div>
                    </Section>

                    {/* Experimental Grid */}
                    <Section className="pb-12">
                        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                            {/* Widget 1: Live Weather */}
                            <WeatherWidget />

                            {/* Widget 2: Skill Radar */}
                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-ink/5 space-y-4 flex flex-col items-center">
                                <h3 className="text-xs uppercase tracking-widest text-accent-nature font-semibold mb-2 self-start w-full">Life Metrics</h3>
                                <SkillRadar />
                            </div>

                            {/* Widget 3: Location / Status */}
                            <div className="bg-ink text-paper p-6 rounded-2xl shadow-sm border border-ink/5 flex flex-col justify-between relative overflow-hidden">
                                <div className="z-10 flex gap-4 items-center">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
                                        <Image src="/images/private-portrait.jpg" alt="Stefan Portrait" fill className="object-cover" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-white/60 uppercase tracking-wider">Status</p>
                                        <p className="font-serif text-lg italic">Exploring AI Agents</p>
                                    </div>
                                </div>
                                <div className="z-10 mt-6">
                                    <div className="flex items-center gap-2 text-white/80 text-sm">
                                        <MapPin size={14} /> Jens, Bern
                                    </div>
                                </div>
                                <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                                    <Wind size={120} />
                                </div>
                            </div>

                        </div>
                    </Section>

                    {/* Quick Access / Actions */}
                    <Section className="pb-12">
                        <div className="max-w-4xl mx-auto">
                            <h3 className="font-serif text-2xl italic mb-6">Quick Access</h3>
                            <div className="flex flex-wrap gap-4">
                                <Button variant="secondary" className="gap-2">
                                    <Camera size={16} /> View Photo Library
                                </Button>
                                <Button variant="ghost" className="gap-2">
                                    <MapPin size={16} /> Travel Map (Beta)
                                </Button>
                                <Button variant="ghost" className="gap-2">
                                    <Coffee size={16} /> Buy me a Coffee
                                </Button>
                            </div>
                        </div>
                    </Section>

                    {/* Data Table: Gear Locker */}
                    <Section className="pb-24">
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-ink/5 overflow-hidden">
                            <div className="p-6 border-b border-ink/5 bg-paper/50">
                                <h3 className="font-serif text-xl italic">Gear Locker</h3>
                                <p className="text-xs text-ink/50 font-mono">INVENTORY_CHECK_2025</p>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-left text-sm">
                                    <thead>
                                        <tr className="bg-paper text-ink/60 font-medium">
                                            <th className="p-4">Item</th>
                                            <th className="p-4">Category</th>
                                            <th className="p-4">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-ink/5">
                                        <tr>
                                            <td className="p-4 font-medium">Sony Alpha 7 III</td>
                                            <td className="p-4 text-ink/60">Photography</td>
                                            <td className="p-4"><span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">MacBook Pro M3</td>
                                            <td className="p-4 text-ink/60">Workstation</td>
                                            <td className="p-4"><span className="inline-block px-2 py-0.5 rounded bg-green-100 text-green-700 text-xs">Active</span></td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-medium">Border Collie (Skye)</td>
                                            <td className="p-4 text-ink/60">Companion</td>
                                            <td className="p-4"><span className="inline-block px-2 py-0.5 rounded bg-blue-100 text-blue-700 text-xs">Barking</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Section>

                </Gate>
            </div>
        </main>
    );
}
