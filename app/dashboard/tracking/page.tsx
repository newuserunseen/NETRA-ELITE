"use client";

import dynamic from "next/dynamic";
import { Shield, Radio, Activity } from "lucide-react";

// Dynamic import for Map to avoid SSR issues
const MapView = dynamic(() => import("@/app/components/MapComponent"), {
    ssr: false,
    loading: () => <div className="w-full h-96 bg-white/5 animate-pulse rounded-xl flex items-center justify-center text-gray-500">Initializing Satellite Uplink...</div>
});

export default function TrackingPage() {
    return (
        <div className="space-y-6 h-[calc(100vh-100px)] flex flex-col">
            <header className="flex justify-between items-center animate-fade-in">
                <div>
                    <h1 className="text-3xl font-outfit font-bold flex items-center gap-3">
                        <Radio className="w-8 h-8 text-primary animate-pulse" />
                        Live Tracking
                    </h1>
                    <p className="text-gray-400">Real-time GPS Monitoring active</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    SECURE CONNECTION
                </div>
            </header>

            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative group shadow-2xl">
                {/* Scanning Overlay Effect */}
                <div className="absolute inset-0 pointer-events-none z-[399] bg-[linear-gradient(transparent_0%,rgba(34,197,94,0.1)_50%,transparent_100%)] bg-[length:100%_200%] animate-scan opacity-20" />
                <div className="absolute inset-0 pointer-events-none z-[399] shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]" />

                <MapView />

                {/* Floating HUD Panel */}
                <div className="absolute bottom-6 left-6 z-[400] bg-black/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 max-w-sm shadow-2xl">
                    <h4 className="font-bold flex items-center gap-2 mb-4 text-primary font-outfit uppercase tracking-wider text-sm">
                        <Shield className="w-4 h-4" /> Active Protection
                    </h4>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-gray-400">GPS Signal Strength</span>
                            <span className="text-green-400 font-mono font-bold flex items-center gap-1">
                                <Activity className="w-3 h-3" /> Excellent
                            </span>
                        </div>
                        <div className="flex justify-between items-center text-sm border-b border-white/5 pb-2">
                            <span className="text-gray-400">Emergency Contacts</span>
                            <span className="text-white font-mono">Synced (2)</span>
                        </div>
                        <div className="flex justify-between items-center text-sm">
                            <span className="text-gray-400">Zone Analytics</span>
                            <span className="text-cyan-400 font-mono animate-pulse">Scanning...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
