"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Phone, Shield, AlertOctagon, MapPin, Star, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Dynamic import for Map to avoid SSR issues
const MapView = dynamic(() => import("@/app/components/MapComponent"), { loading: () => <div className="w-full h-full bg-slate-900 animate-pulse" />, ssr: false });

export default function DashboardPage() {
    const [user, setUser] = useState<any>(null);
    const [sosActive, setSosActive] = useState(false);
    const [sosCountdown, setSosCountdown] = useState(5);

    useEffect(() => {
        // Hydrate user data
        const stored = localStorage.getItem("netra_user");
        if (stored) {
            setUser(JSON.parse(stored));
        } else {
            // Mock fallback for direct access
            setUser({ name: "Traveler", id: "NETRA-GUEST" });
        }
    }, []);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (sosActive && sosCountdown > 0) {
            interval = setInterval(() => {
                setSosCountdown((prev) => prev - 1);
            }, 1000);
        } else if (sosActive && sosCountdown === 0) {
            // Trigger API
            alert("EMERGENCY PROTOCOL INITIATED. GPS Coordinates sent to Authorities.");
            setSosActive(false);
            setSosCountdown(5);
        }
        return () => clearInterval(interval);
    }, [sosActive, sosCountdown]);

    const nearbyPlaces = [
        { name: "Lotus Temple", rating: 4.8, dist: "2.4 km", type: "Culture" },
        { name: "Humayuns Tomb", rating: 4.6, dist: "3.1 km", type: "History" },
        { name: "City Walk Mall", rating: 4.5, dist: "1.2 km", type: "Shopping" },
        { name: "Central Park", rating: 4.2, dist: "0.8 km", type: "Nature" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="space-y-6"
        >
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <motion.div variants={item}>
                    <h1 className="text-3xl font-outfit font-bold relative inline-block">
                        Command Center
                        <span className="absolute -top-1 -right-2 w-2 h-2 bg-primary rounded-full animate-pulse" />
                    </h1>
                    <p className="text-gray-400">Welcome back, <span className="text-white font-bold">{user?.name}</span></p>
                </motion.div>

                <motion.div
                    variants={item}
                    className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm shadow-xl"
                >
                    <div className="p-2 bg-primary/20 rounded-full border border-primary/20">
                        <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">Secure ID</p>
                        <p className="font-mono font-bold text-primary tracking-wider">{user?.id}</p>
                    </div>
                </motion.div>
            </header>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
                {/* Map Section */}
                <motion.div
                    variants={item}
                    className="lg:col-span-2 relative bg-white/5 border border-white/10 rounded-3xl p-1 overflow-hidden h-[500px] lg:h-full group shadow-2xl"
                >
                    <div className="absolute inset-0 pointer-events-none z-[10] shadow-[inset_0_0_50px_rgba(0,0,0,0.5)] rounded-3xl" />

                    <div className="absolute top-4 left-4 z-[400] flex gap-2">
                        <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full text-xs text-green-400 border border-green-500/30 flex items-center gap-2 font-mono">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            LIVE FEED
                        </div>
                    </div>

                    <MapView heatmaps={true} />
                </motion.div>

                {/* Info Panel */}
                <div className="space-y-6 flex flex-col">
                    {/* Status Card */}
                    <motion.div
                        variants={item}
                        className="bg-gradient-to-br from-green-950/80 to-black border border-green-500/20 p-6 rounded-3xl relative overflow-hidden group"
                    >
                        <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />

                        <h3 className="text-green-400/80 text-xs font-bold uppercase tracking-widest mb-2">Zone Status</h3>
                        <div className="text-4xl font-outfit font-bold text-white flex items-center gap-3 mb-2">
                            <Shield className="w-8 h-8 text-green-500 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            Secure
                        </div>
                        <p className="text-xs text-green-400/60 font-mono">Risk Level: 0.2% (Negligible)</p>
                    </motion.div>

                    {/* Nearby */}
                    <motion.div
                        variants={item}
                        className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden flex flex-col"
                    >
                        <h3 className="font-bold flex items-center gap-2 mb-4 text-sm uppercase tracking-wider text-gray-400">
                            <MapPin className="w-4 h-4 text-primary" /> Nearby Highlights
                        </h3>
                        <div className="space-y-2 overflow-y-auto pr-2 custom-scrollbar">
                            {nearbyPlaces.map((place, i) => (
                                <div key={i} className="flex justify-between items-center p-3 hover:bg-white/5 rounded-xl transition-all cursor-pointer group border border-transparent hover:border-white/5">
                                    <div>
                                        <h4 className="font-medium group-hover:text-primary transition-colors text-sm">{place.name}</h4>
                                        <span className="text-[10px] text-gray-500 uppercase tracking-wide">{place.type} • {place.dist}</span>
                                    </div>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs font-bold bg-yellow-500/10 px-2 py-1 rounded-lg">
                                        <Star className="w-3 h-3 fill-yellow-500" /> {place.rating}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* SOS Floating Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <AnimatePresence>
                    {!sosActive ? (
                        <motion.button
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setSosActive(true)}
                            className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(220,38,38,0.6)] border-4 border-red-800 relative group"
                        >
                            <div className="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-20" />
                            <AlertOctagon className="w-10 h-10 text-white drop-shadow-md" />
                            <span className="absolute -top-2 right-0 bg-white text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">SOS</span>
                        </motion.button>
                    ) : (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="bg-black/95 backdrop-blur-2xl border border-red-500/50 p-8 rounded-3xl shadow-[0_0_100px_rgba(220,38,38,0.4)] w-80 text-center relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-red-600/10 animate-pulse" />

                            <AlertOctagon className="w-16 h-16 text-red-500 mx-auto mb-6 animate-bounce drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]" />

                            <h3 className="text-2xl font-black text-white mb-2 tracking-tight">EMERGENCY</h3>
                            <p className="text-red-300 text-sm mb-6">Transmitting coords to authorities...</p>

                            <div className="text-7xl font-mono font-bold text-red-500 mb-8 tabular-nums">0{sosCountdown}</div>

                            <button
                                onClick={() => { setSosActive(false); setSosCountdown(5); }}
                                className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all border border-white/10 hover:border-white/30"
                            >
                                <X className="w-5 h-5" /> CANCEL ALERT
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
