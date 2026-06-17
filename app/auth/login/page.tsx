"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

export default function LoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate Login
        setTimeout(() => {
            // You might check localStorage here in a real app
            router.push("/dashboard");
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-outfit font-bold mb-2">Welcome Back</h1>
                <p className="text-gray-400 text-sm">Access your Netra Guardian Interface</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label className="block text-sm text-gray-400 mb-1">Identity (Email/Phone)</label>
                    <input
                        type="text"
                        required
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="Enter your registered ID"
                    />
                </div>

                <button
                    disabled={isLoading}
                    className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-lg mt-2 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors disabled:opacity-50"
                >
                    {isLoading ? <Loader2 className="animate-spin" /> : "Access Dashboard"}
                </button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-500 border-t border-white/5 pt-4">
                New user? <Link href="/auth/register" className="text-primary hover:underline">Register Protocol</Link>
            </div>
        </motion.div>
    );
}
