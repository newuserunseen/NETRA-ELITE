"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "Hello. I am Netra AI. How can I assist your journey today?" }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput("");

        // Simulate AI Latency
        setTimeout(() => {
            let botResponse = "I can currently assist with local safety data, routes, and emergency contacts.";
            const lower = userMsg.toLowerCase();

            if (lower.includes("hotel") || lower.includes("stay")) {
                botResponse = "Based on your location, I recommend: \n1. The Grand Imperial (5★) - 0.5km \n2. Safety Suites (4★) - 1.2km\nBoth have high safety ratings.";
            } else if (lower.includes("police") || lower.includes("help") || lower.includes("emergency")) {
                botResponse = "Nearest Police Station is 1.2km away on Main Street. Would you like me to dial 100?";
            } else if (lower.includes("route") || lower.includes("traffic")) {
                botResponse = "Current route to City Center is clear. Estimated time: 15 mins. Avoid the Northern Highway due to construction.";
            } else if (lower.includes("food") || lower.includes("restaurant")) {
                botResponse = "Popular safe dining nearby: \n1. Spice Route (4.8★) \n2. Blue Lagoon (4.5★)";
            }

            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        }, 1000);
    };

    return (
        <>
            <div className="fixed bottom-8 left-8 z-50">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-500 transition-all hover:pr-6"
                >
                    <MessageSquare className="w-5 h-5" />
                    <span className="w-0 overflow-hidden group-hover:w-auto transition-all duration-300">Netra AI</span>
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="fixed bottom-24 left-8 z-50 w-80 md:w-96 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="p-4 border-b border-white/10 flex justify-between items-center bg-white/5">
                            <div className="flex items-center gap-2">
                                <div className="p-1.5 bg-primary rounded-lg text-black">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <h3 className="font-bold">Netra Assistant</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px]">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-xl text-sm ${m.role === 'user'
                                            ? 'bg-primary text-primary-foreground rounded-tr-none'
                                            : 'bg-white/10 text-gray-200 rounded-tl-none'
                                        }`}>
                                        <p className="whitespace-pre-line">{m.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSend} className="p-3 border-t border-white/10 flex gap-2">
                            <input
                                className="flex-1 bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary"
                                placeholder="Ask about safety, routes..."
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                            <button type="submit" className="p-2 bg-primary text-black rounded-lg hover:bg-yellow-500 transition-colors">
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
