"use client";

import { MapPin, Star, Navigation, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function AttractionsPage() {
    const attractions = [
        { name: "Lotus Temple", type: "Spiritual", rating: 4.8, dist: "2.4 km", status: "Safe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Lotus_Temple_New_Delhi_03-2016.jpg/640px-Lotus_Temple_New_Delhi_03-2016.jpg" },
        { name: "Red Fort", type: "Historical", rating: 4.6, dist: "5.1 km", status: "Crowded", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Red_Fort_India.jpg/640px-Red_Fort_India.jpg" },
        { name: "India Gate", type: "Monument", rating: 4.7, dist: "3.2 km", status: "Safe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/India_Gate_in_New_Delhi_03-2016.jpg/640px-India_Gate_in_New_Delhi_03-2016.jpg" },
        { name: "Qutub Minar", type: "Historical", rating: 4.5, dist: "8.5 km", status: "Safe", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Qutub_Minar_2011.jpg/640px-Qutub_Minar_2011.jpg" },
        { name: "Humayun's Tomb", type: "Historical", rating: 4.6, dist: "4.0 km", status: "Moderate Crowd", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Humayun%27s_Tomb%2C_Delhi.jpg/640px-Humayun%27s_Tomb%2C_Delhi.jpg" },
        { name: "Akshardham Temple", type: "Spiritual", rating: 4.9, dist: "6.7 km", status: "High Security", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Akshardham_Temple_Delhi.jpg/640px-Akshardham_Temple_Delhi.jpg" }
    ];

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-outfit font-bold">Nearby Attractions</h1>
                <p className="text-gray-400">Curated, safe, and highly rated destinations for you.</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {attractions.map((place, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-2xl hover:shadow-primary/10"
                    >
                        <div className="h-48 overflow-hidden relative">
                            {/* Placeholder for real images using divs since we don't have local assets yet */}
                            {/* In production would be <Image /> */}
                            <div className="w-full h-full bg-gray-800 group-hover:scale-110 transition-transform duration-500 bg-cover bg-center" style={{ backgroundImage: `url(${place.image})` }} />
                            <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" /> {place.rating}
                            </div>
                        </div>

                        <div className="p-5">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{place.name}</h3>
                                    <p className="text-sm text-gray-400">{place.type}</p>
                                </div>
                                <div className={`px-2 py-1 rounded text-xs font-bold ${place.status === 'Safe' || place.status === 'High Security' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'}`}>
                                    {place.status}
                                </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-gray-400 mt-4 pt-4 border-t border-white/10">
                                <div className="flex items-center gap-1">
                                    <Navigation className="w-4 h-4" /> {place.dist}
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" /> Open
                                </div>
                                <div className="flex ml-auto items-center gap-1 text-primary cursor-pointer hover:underline">
                                    Details <ShieldCheck className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
