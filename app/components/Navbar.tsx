import Link from 'next/link';
import { Shield, Menu } from 'lucide-react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-primary/20 p-2 rounded-full group-hover:bg-primary/30 transition-colors">
                        <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-outfit font-bold text-xl tracking-tight">NETRA <span className="text-primary">ELITE</span></span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm text-gray-400 hover:text-white transition-colors">Features</Link>
                    <Link href="#safety" className="text-sm text-gray-400 hover:text-white transition-colors">Safety</Link>
                    <Link href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/auth/login" className="hidden md:block text-sm font-medium hover:text-primary transition-colors">
                        Login
                    </Link>
                    <Link href="/auth/register" className="bg-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:bg-yellow-500 transition-colors shadow-lg shadow-primary/20">
                        Get Protected
                    </Link>
                    <button className="md:hidden text-white">
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </nav>
    );
}
