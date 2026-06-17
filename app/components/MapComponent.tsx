"use client";

import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default Leaflet icons in Next.js
const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png";
const iconRetinaUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const shadowUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png";

const defaultIcon = L.icon({
    iconUrl: iconUrl,
    iconRetinaUrl: iconRetinaUrl,
    shadowUrl: shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

// Helper component to handle map movement
function MapReCenterer({ center, locked }: { center: [number, number], locked: boolean }) {
    const map = useMap();
    useEffect(() => {
        if (locked) {
            map.setView(center);
        }
    }, [center, map, locked]);
    return null;
}

export default function MapComponent({ heatmaps = false }: { heatmaps?: boolean }) {
    const [position, setPosition] = useState<[number, number]>([28.6139, 77.2090]); // Default New Delhi
    const [gpsLocked, setGpsLocked] = useState(false);

    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                (pos) => {
                    setPosition([pos.coords.latitude, pos.coords.longitude]);
                    setGpsLocked(true);
                },
                (err) => {
                    console.error("GPS Error:", err);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0
                }
            );

            return () => navigator.geolocation.clearWatch(watchId);
        }
    }, []);

    return (
        <div className="w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-inner relative">
            {!gpsLocked && (
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-[400] bg-yellow-500/90 text-black px-4 py-1 rounded-full text-xs font-bold animate-pulse">
                    Acquiring Satellite Signal...
                </div>
            )}
            <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="w-full h-full" style={{ background: '#0f172a' }}>
                <MapReCenterer center={position} locked={gpsLocked} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                />
                <Marker position={position} icon={defaultIcon}>
                    <Popup>
                        You are here. <br /> Safety Status: Secure.
                    </Popup>
                </Marker>

                {/* Mock Safety Zones */}
                {heatmaps && (
                    <>
                        {/* Example Safe Zone (Green) */}
                        <Circle center={[position[0] + 0.01, position[1] + 0.01]} pathOptions={{ color: 'green', fillColor: 'green', fillOpacity: 0.1 }} radius={1500} />
                        {/* Example Danger Zone (Red) */}
                        <Circle center={[position[0] - 0.01, position[1] - 0.01]} pathOptions={{ color: 'red', fillColor: 'red', fillOpacity: 0.1 }} radius={800} />
                    </>
                )}
            </MapContainer>
        </div>
    );
}
