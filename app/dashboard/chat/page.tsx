"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Mic } from "lucide-react";
import { motion } from "framer-motion";

export default function ChatPage() {
    const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string }[]>([
        { role: 'bot', text: "Namaste! I am Netra AI. I can guide you with:\n• Safe travel routes\n• Trusted local translators\n• Emergency protocols\n• Hidden gems nearby" }
    ]);
    const [input, setInput] = useState("");
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMsg = input;
        setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
        setInput("");

        // Simulate AI Latency
        setTimeout(() => {
            let botResponse = "I'm processing that information using our secure travel database...";
            const lower = userMsg.toLowerCase();

            if (lower.includes("hello") || lower.includes("hi")) {
                botResponse = "Hello traveler! How can I keep you safe today?";
            } else if (lower.includes("taxi") || lower.includes("cab")) {
                botResponse = "For your safety, I recommend using verified services like Uber or Ola. Avoid unmarked private taxis at night. Would you like me to share a ride-tracking link with your emergency contacts?";
            } else if (lower.includes("language") || lower.includes("translate")) {
                botResponse = "I can translate typical phrases. Try asking 'How to say help in Hindi'.";
            } else if (lower.includes("weather")) {
                botResponse = "Current weather is clear, 24°C. Good visibility for travel.";
            }

            setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
        }, 1200);
    };

    return (
        <div className="h-[calc(100vh-100px)] flex flex-col max-w-4xl mx-auto">
            <header className="mb-6 text-center">
                <h1 className="text-3xl font-outfit font-bold">Netra AI Guide</h1>
                <p className="text-gray-400">Your personal travel concierge and safety analyst.</p>
            </header>

            <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl">
                {/* Chat Area */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6">
                    {messages.map((m, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                            <div className={`flex gap-4 max-w-[80%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-primary/20 text-primary' : 'bg-blue-500/20 text-blue-400'}`}>
                                    {m.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                </div>
                                <div className={`p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user'
                                        ? 'bg-primary text-primary-foreground rounded-tr-none'
                                        : 'bg-white/10 text-gray-200 rounded-tl-none'
                                    }`}>
                                    <p className="whitespace-pre-line">{m.text}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Input Area */}
                <div className="p-4 bg-black/20 border-t border-white/10">
                    <form onSubmit={handleSend} className="flex gap-4">
                        <button type="button" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 transition-colors">
                            <Mic className="w-5 h-5" />
                        </button>
                        <input
                            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                            placeholder="Ask about safety, translations, or directions..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                        />
                        <button type="submit" className="px-6 bg-primary text-black font-bold rounded-xl hover:bg-yellow-500 transition-colors flex items-center gap-2">
                            Send <Send className="w-4 h-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
