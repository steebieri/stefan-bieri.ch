import { Navigation } from "@/components/layout/Navigation";
import { Gate } from "@/components/layout/Gate";

export default function PrivatePage() {
    return (
        <main className="bg-paper min-h-screen">
            <Navigation />
            <div className="pt-32">
                <Gate title="Private Area" description="A digital living room. Access restricted." />
            </div>
        </main>
    );
}
