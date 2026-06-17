# 🛡️ Netra Elite Travel Guardian
**Netra Elite Travel Guardian** is a premium, next-generation travel safety application. It acts as an advanced AI-driven guardian for travelers, offering real-time predictive risk monitoring, interactive threat analytics, GPS-based location tracking, and an integrated security chatbot. 
Designed with a high-fidelity, futuristic dark-mode user interface powered by Next.js, Tailwind CSS, and Framer Motion.
---
## 🚀 Key Features
*   🌍 **Live GPS Sat-Nav Tracking**: Real-time geolocation tracking using dynamic mapping, tracking signal integrity, and scanning zone parameters.
*   🧠 **Neural Identity Protocol**: High-encryption identity shielding with a 6-digit dynamic traveler security key.
*   🤖 **AI Security Assistant**: An interactive conversational AI chatbot tailored for threat mitigation, safety recommendations, and itinerary analysis.
*   🚦 **Real-time Safety Zones**: Visual mapping analytics displaying Safe Zones (Green) and Danger Zones (Red) dynamically surrounding your current coordinate.
*   🚨 **Global SOS Relay**: Fast-action connection relays to emergency services, localized embassies, and direct emergency contacts.
---
## 🛠️ Technology Stack
*   **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Interactive Maps**: [Leaflet](https://leafletjs.com/) & [React-Leaflet](https://react-leaflet.js.org/)
*   **Icons**: [Lucide React](https://lucide.dev/)
---
## 📦 Getting Started
### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).
### 1. Clone & Install Dependencies
Navigate to the project directory and install the required packages:
```bash
npm install
```
### 2. Configure Environment Variables
Create or verify the presence of `.env.local` in the project root:
```ini
NEXT_PUBLIC_GOOGLE_MAPS_KEY=YOUR_API_KEY_HERE
```
> [!NOTE]  
> The application uses **Leaflet** with CartoDB Dark Matter tiles by default, so it runs completely out of the box without requiring a commercial Google Maps API key!
### 3. Launch Development Server
Start the local server:
```bash
npm run dev
```
*(On Windows, if PowerShell script execution is restricted, run `npm.cmd run dev` instead).*
Now, open [http://localhost:3000](http://localhost:3000) in your browser to access the command terminal.
---
## 📂 Project Architecture
```
├── app/
│   ├── auth/              # Registration & Login interfaces
│   ├── components/        # Shared components (Navbar, Hero, MapComponent, Chatbot)
│   ├── dashboard/         # Main workspace pages
│   │   ├── attractions/   # Point of interest reviews and safety ratings
│   │   ├── chat/          # Safety Chatbot interface
│   │   ├── safety/        # Localized risk indexes and safety parameters
│   │   ├── settings/      # Emergency contacts & alert preferences
│   │   └── tracking/      # Live map and HUD interface
│   ├── globals.css        # Global CSS with grid and custom animations
│   ├── layout.tsx         # HTML structure & styling wrappers
│   └── page.tsx           # Product landing page
├── public/                # Static assets
├── tailwind.config.ts     # Custom tailwind theme extensions (scans, gradients)
├── tsconfig.json          # TypeScript configurations
└── package.json           # Scripts and dependency declarations
```
---
## 🔒 Security & Safe Zone Tracking
The live map tracks your device's geographical position through the browser's `navigator.geolocation` API. When coordinates are received, the system visualizes threat intelligence data dynamically:
*   **Safe Zone (Green Circle)**: High safety rating zone with nearby emergency medical and consular support.
*   **Danger Zone (Red Circle)**: Alert zone highlighting areas with active warnings or elevated crime/hazard levels.
