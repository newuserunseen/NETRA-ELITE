import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
            <Navbar />
            <Hero />

            {/* Footer Placeholder */}
            <footer className="py-8 border-t border-white/10 text-center text-gray-500 text-sm">
                © 2024 Netra Elite Travel Guardian. All rights reserved.
            </footer>
        </main>
    );
}
