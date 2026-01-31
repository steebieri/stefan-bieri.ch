import { Navigation } from "@/components/layout/Navigation";
import { Gate } from "@/components/layout/Gate";

export default function WorkPage() {
    return (
        <main className="bg-paper min-h-screen">
            <Navigation />
            <div className="pt-32">
                <Gate title="Workflow Lab" description="Professional portfolio and case studies." />
            </div>
        </main>
    );
}
