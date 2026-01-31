import { Navigation } from "@/components/layout/Navigation";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export default function PhotographyPage() {
    return (
        <main className="bg-paper min-h-screen">
            <Navigation />
            <Section className="pt-32">
                <h1 className="font-serif text-4xl italic mb-12 text-ink">Photography</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className={cn(
                            "aspect-[4/5] bg-ink/5 rounded-sm flex items-center justify-center text-ink/20 hover:bg-ink/10 transition-colors cursor-pointer",
                            "border border-ink/5"
                        )}>
                            <span className="font-mono text-xs">IMG_00{i}.jpg</span>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
