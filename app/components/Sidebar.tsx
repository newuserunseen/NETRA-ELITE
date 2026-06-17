"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Shield, Home, Map, Navigation, AlertTriangle, Settings, LogOut, MessageSquare, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Sidebar() {
    const pathname = usePathname();

    const links = [
        { icon: Home, label: "Overview", href: "/dashboard" },
        { icon: Navigation, label: "Live Tracking", href: "/dashboard/tracking" },
        { icon: Map, label: "Attractions", href: "/dashboard/attractions" },
        { icon: AlertTriangle, label: "Safety Heatmap", href: "/dashboard/safety" },
        { icon: MessageSquare, label: "AI Guide", href: "/dashboard/chat" },
        { icon: Settings, label: "Settings", href: "/dashboard/settings" },
    ];

    return (
        <motion.aside
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="fixed left-0 top-0 h-screen w-64 bg-black/40 border-r border-white/10 backdrop-blur-xl z-40 hidden md:flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
            <div className="p-6 border-b border-white/10 flex items-center gap-3 relative overflow-hidden group">
                {/* Logo Glow */}
                <div className="absolute top-0 left-0 w-20 h-full bg-primary/20 blur-xl group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative p-2 bg-primary/20 rounded-xl border border-primary/20">
                    <Shield className="w-8 h-8 text-primary shadow-[0_0_15px_rgba(250,204,21,0.5)]" />
                </div>
                <div>
                    <h1 className="font-outfit font-bold text-xl leading-none tracking-tight">NETRA</h1>
                    <span className="text-[10px] text-primary font-bold tracking-[0.2em] uppercase">Guardian</span>
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative block"
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-xl border-l-2 border-primary"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <div className={`relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive ? 'text-primary' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}>
                                <link.icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]' : ''}`} />
                                <span className="font-medium text-sm">{link.label}</span>
                                {isActive && <ChevronRight className="w-4 h-4 ml-auto opacity-50" />}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-white/10">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors border border-transparent hover:border-red-500/20 group">
                    <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="font-medium text-sm">Logout</span>
                </button>
            </div>
        </motion.aside>
    );
}
