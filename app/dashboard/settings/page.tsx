"use client";

import { User, Bell, Lock, Globe, Moon } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <header>
                <h1 className="text-3xl font-outfit font-bold">Settings</h1>
                <p className="text-gray-400">Manage your profile and security preferences.</p>
            </header>

            <div className="space-y-4">
                {/* Profile Section */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><User className="w-5 h-5 text-primary" /> Profile Details</h2>
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Full Name</label>
                                <input className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm" defaultValue="Traveler One" />
                            </div>
                            <div>
                                <label className="text-xs text-gray-400 block mb-1">Traveler ID</label>
                                <input className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm opacity-50 cursor-not-allowed" defaultValue="NETRA-883921" disabled />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Notifications */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Bell className="w-5 h-5 text-primary" /> Notifications</h2>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span>Safety Alerts (High Priority)</span>
                            <input type="checkbox" defaultChecked className="toggle" />
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                            <span>Nearby Reviews</span>
                            <input type="checkbox" className="toggle" />
                        </div>
                    </div>
                </section>

                {/* Security */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Lock className="w-5 h-5 text-primary" /> Security</h2>
                    <div className="space-y-3">
                        <button className="w-full text-left p-3 hover:bg-white/5 rounded-lg text-sm text-red-400">Reset Password</button>
                        <button className="w-full text-left p-3 hover:bg-white/5 rounded-lg text-sm">Manage Trusted Contacts</button>
                    </div>
                </section>

                {/* Appearance */}
                <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Moon className="w-5 h-5 text-primary" /> Appearance</h2>
                    <div className="flex gap-4">
                        <button className="flex-1 p-3 bg-primary/20 border border-primary text-primary rounded-lg font-bold">Dark Mode</button>
                        <button className="flex-1 p-3 bg-white/5 border border-white/10 text-gray-400 rounded-lg">Light Mode</button>
                    </div>
                </section>

                <button className="w-full py-4 bg-primary text-primary-foreground font-bold rounded-xl mt-4 hover:bg-yellow-500 transition-colors">
                    Save Changes
                </button>
            </div>
        </div>
    );
}
