import Sidebar from "@/app/components/Sidebar";
import Chatbot from "@/app/components/Chatbot";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <main className="md:ml-64 min-h-screen p-4 md:p-8 relative">
                {children}
                <Chatbot />
            </main>
        </div>
    );
}
