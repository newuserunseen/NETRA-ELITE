"use client";

import dynamic from "next/dynamic";
import { AlertTriangle, Shield, TrendingUp, AlertOctagon } from "lucide-react";

const MapView = dynamic(() => import("@/app/components/MapComponent"), { ssr: false });

export default function SafetyPage() {
    return (
        <div className="space-y-6 h-[calc(100vh-100px)] flex flex-col">
            <header className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-outfit font-bold">Safety Heatmap</h1>
                    <p className="text-gray-400">Predictive Crime Analytics & Safe Zones</p>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-full">
                <div className="md:col-span-3 bg-white/5 border border-white/10 rounded-2xl overflow-hidden relative">
                    <MapView heatmaps={true} />

                    {/* Legend */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md p-3 rounded-xl border border-white/10 text-xs">
                        <h4 className="font-bold mb-2">Zone Legend</h4>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500"></span> Safe Zone
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500"></span> Caution
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500"></span> High Risk
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-4 overflow-y-auto pr-2">
                    <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                        <h3 className="flex items-center gap-2 font-bold text-green-400 mb-1"><Shield className="w-5 h-5" /> Current Status</h3>
                        <p className="text-2xl font-bold text-white">Low Risk</p>
                        <p className="text-xs text-green-200/60 mt-1">Your current GPS location is in a verified safe zone.</p>
                    </div>

                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                        <h3 className="flex items-center gap-2 font-bold mb-3"><TrendingUp className="w-4 h-4 text-primary" /> Live Incidents</h3>
                        <div className="space-y-3">
                            <div className="text-sm pb-2 border-b border-white/5">
                                <div className="flex justify-between text-gray-400 text-xs mb-1">
                                    <span>2 mins ago</span>
                                    <span className="text-red-400">1.2km away</span>
                                </div>
                                <p>Traffic Congestion reported near Connaught Place outer circle.</p>
                            </div>
                            <div className="text-sm">
                                <div className="flex justify-between text-gray-400 text-xs mb-1">
                                    <span>15 mins ago</span>
                                    <span className="text-yellow-400">3.5km away</span>
                                </div>
                                <p>Procession moving through Old Delhi roads. Avoid area.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                        <h3 className="flex items-center gap-2 font-bold text-red-400 mb-2"><AlertOctagon className="w-5 h-5" /> Emergency Contacts</h3>
                        <div className="space-y-2 text-sm">
                            <button className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-bold transition-colors">Call Police (100)</button>
                            <button className="w-full py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg font-bold transition-colors">Ambulance (102)</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
