import { Navigation } from "@/components/layout/Navigation";
import { Gate } from "@/components/layout/Gate";

export default function PrivatePage() {
    return (
        <main className="bg-paper min-h-screen">
            <Navigation />
            <div className="pt-32">
                <Gate title="Private Area" description="A digital living room. Access restricted.">
                    <div className="pt-32 max-w-2xl mx-auto px-6 space-y-8">
                        <h1 className="font-serif text-4xl italic text-ink">Welcome Home.</h1>
                        <p className="text-lg text-ink/70 leading-relaxed">
                            This is the private section. Features unlocking soon...
                        </p>
                    </div>
                </Gate>
            </div>
        </main>
    );
}
