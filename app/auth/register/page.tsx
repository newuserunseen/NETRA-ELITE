"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Shield, Smartphone, Loader2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function RegisterPage() {
    const router = useRouter();
    const [step, setStep] = useState<"details" | "otp">("details");
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
    });
    const [otp, setOtp] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSendOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            setStep("otp");
            alert("Demo OTP: 123456"); // For User convenience in demo
        }, 1500);
    };

    const handleVerifyOtp = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Simulate verification and ID generation
        setTimeout(() => {
            if (otp === "123456") {
                const uniqueId = 'NETRA-' + Math.floor(100000 + Math.random() * 900000);

                // Save to localStorage for demo persistence
                localStorage.setItem("netra_user", JSON.stringify({
                    ...formData,
                    id: uniqueId,
                    joined: new Date().toISOString()
                }));

                router.push("/dashboard");
            } else {
                alert("Invalid OTP");
                setIsLoading(false);
            }
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-2xl"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-outfit font-bold mb-2">Initialize Protocol</h1>
                <p className="text-gray-400 text-sm">Create your traveler identity</p>
            </div>

            {step === "details" ? (
                <form onSubmit={handleSendOtp} className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Full Name</label>
                        <input
                            name="name"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="John Doe"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-gray-400 mb-1">Email Endpoint</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                            placeholder="john@example.com"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Mobile Comms</label>
                            <input
                                name="phone"
                                type="tel"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="+1 234..."
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-gray-400 mb-1">Biological Age</label>
                            <input
                                name="age"
                                type="number"
                                required
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                                placeholder="25"
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>

                    <button
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-lg mt-6 flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors disabled:opacity-50"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : <>Generate OTP <ArrowRight className="w-4 h-4" /></>}
                    </button>
                </form>
            ) : (
                <form onSubmit={handleVerifyOtp} className="space-y-6">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                            <Smartphone className="w-8 h-8" />
                        </div>
                        <p className="text-sm text-gray-300">Enter the 6-digit code sent to your device.</p>
                        <p className="text-xs text-primary mt-1">(Demo: 123456)</p>
                    </div>

                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-4 text-center text-2xl tracking-[0.5em] font-mono text-white focus:border-primary focus:outline-none"
                        maxLength={6}
                        placeholder="000000"
                        autoFocus
                    />

                    <button
                        disabled={isLoading}
                        className="w-full bg-primary text-primary-foreground font-bold h-12 rounded-lg flex items-center justify-center gap-2 hover:bg-yellow-500 transition-colors disabled:opacity-50"
                    >
                        {isLoading ? <Loader2 className="animate-spin" /> : "Verify Identity"}
                    </button>

                    <button
                        type="button"
                        onClick={() => setStep('details')}
                        className="w-full text-sm text-gray-400 hover:text-white"
                    >
                        Back to details
                    </button>
                </form>
            )}

            <div className="mt-6 text-center text-sm text-gray-500 border-t border-white/5 pt-4">
                Already registered? <Link href="/auth/login" className="text-primary hover:underline">Login here</Link>
            </div>
        </motion.div>
    );
}
