import Navbar from "@/app/components/Navbar";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background relative flex items-center justify-center p-4">
            {/* Shared Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-background to-background" />
            </div>

            <Navbar />

            <div className="relative z-10 w-full max-w-md">
                {children}
            </div>
        </div>
    );
}
