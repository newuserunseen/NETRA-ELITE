"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, MapPin, Zap, Activity } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-background/80 to-background" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{ x: [0, 100, 0], y: [0, -50, 0], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{ x: [0, -100, 0], y: [0, 50, 0], opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]"
                />
            </div>

            <div className="container relative z-10 px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative"
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(250,204,21,0.2)]"
                    >
                        <Activity className="w-4 h-4 animate-pulse" />
                        <span>Next-Gen Travel Safety Protocol Active</span>
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-outfit font-bold tracking-tighter mb-6 leading-[1.1]">
                        <span className="block text-white drop-shadow-2xl">Travel Without</span>
                        <span className="text-gradient animate-scan block">Boundaries.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        The world's most advanced AI guardian. Predicting risks before they happen,
                        connecting you to help in milliseconds.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                        <Link href="/auth/register" className="group relative px-8 py-4 bg-primary text-black text-lg font-bold rounded-full overflow-hidden transition-transform active:scale-95">
                            <span className="absolute inset-0 bg-white/40 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out skew-y-12 origin-bottom"></span>
                            <span className="relative flex items-center gap-2">Initialize Guardian <Zap className="w-5 h-5 fill-black" /></span>
                        </Link>
                        <Link href="/auth/login" className="px-8 py-4 bg-white/5 border border-white/10 text-white text-lg font-medium rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm hover:border-white/30">
                            Access Terminal
                        </Link>
                    </div>
                </motion.div>

                {/* Floating Interactive Cards */}
                <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto perspective-1000">
                    {[
                        { icon: ShieldCheck, title: "Neural Identity", desc: "Military-grade encrypted 6-digit traveler ID", color: "text-primary" },
                        { icon: MapPin, title: "Sat-Nav Tracking", desc: "Real-time geolocation with predictive safety scoring", color: "text-cyan-400" },
                        { icon: Globe, title: "Global Uplink", desc: "Instant SOS relay to nearest embassy & authorities", color: "text-purple-400" },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, rotateX: 10 }}
                            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
                            className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg hover:border-white/20 hover:bg-white/10 transition-all text-left group cursor-crosshair relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <item.icon className={`w-12 h-12 ${item.color} mb-6 group-hover:scale-110 transition-transform duration-500`} />
                            <h3 className="text-xl font-bold mb-3 font-outfit">{item.title}</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
