import { useState } from 'react';
import WaveBackground from './components/WaveBackground';
import NeuroBackground from './components/NeuroBackground';
import AuroraBackground from './components/AuroraBackground';
import PlasmaBackground from './components/PlasmaBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import ReferWin from './components/ReferWin';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import './App.css';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [selectedService, setSelectedService] = useState<'home' | 'business' | 'bundled'>('home');

  return (
    <div className="bg-black min-h-screen font-geist relative">
      {/* Different background effects for each section */}
      
      {/* Hero Section - Wave Background */}
      <div className="absolute inset-0 z-0">
        <div className="h-screen">
          <WaveBackground />
        </div>
      </div>
      
      {/* Features Section - Neuro Background */}
      <div className="absolute inset-0 z-0" style={{ top: '100vh', height: '100vh' }}>
        <NeuroBackground />
      </div>
      
      {/* Pricing Section - Aurora Background */}
      <div className="absolute inset-0 z-0" style={{ top: '200vh', height: '100vh' }}>
        <AuroraBackground />
      </div>
      
      {/* Refer & Win Section - Plasma Background */}
      <div className="absolute inset-0 z-0" style={{ top: '300vh', height: '100vh' }}>
        <PlasmaBackground />
      </div>
      
      {/* Header */}
      <Header onLoginClick={() => setShowLogin(true)} />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero onServiceSelect={setSelectedService} />
        <Features />
        <Pricing selectedService={selectedService} onServiceChange={setSelectedService} />
        <ReferWin />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Login Modal */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}
    </div>
  );
}

export default App;