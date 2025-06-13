import { Database, Zap, Globe, Shield } from 'lucide-react';

export default function AnimatedVisual() {
  return (
    <div className="w-full h-64 rounded-xl gradient-border inner-glow overflow-hidden relative mb-6">
      {/* Animated grid background */}
      <div 
        className="absolute inset-0 opacity-10 animate-pulse"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      />
      
      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 250">
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7209b7" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#3a0ca3" stopOpacity="1" />
            <stop offset="50%" stopColor="#4361ee" stopOpacity="1" />
            <stop offset="75%" stopColor="#4cc9f0" stopOpacity="1" />
            <stop offset="100%" stopColor="#7209b7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        <g stroke="url(#connectionGradient)" strokeWidth="2" fill="none">
          <path className="connector" d="M200,125 L120,80 M200,125 L280,80 M200,125 L120,170 M200,125 L280,170" />
          <circle cx="200" cy="125" r="4" fill="#4361ee" />
          <circle cx="120" cy="80" r="3" fill="#7209b7" />
          <circle cx="280" cy="80" r="3" fill="#3a0ca3" />
          <circle cx="120" cy="170" r="3" fill="#4cc9f0" />
          <circle cx="280" cy="170" r="3" fill="#7209b7" />
        </g>
      </svg>
      
      {/* Floating feature icons */}
      <div className="absolute top-6 left-6 icon-float">
        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-purple-400/30 inner-glow">
          <Database className="w-5 h-5 text-purple-400" />
        </div>
      </div>
      
      <div className="absolute top-6 right-6 icon-float" style={{ animationDelay: '-1s' }}>
        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-indigo-400/30 inner-glow">
          <Zap className="w-5 h-5 text-indigo-400" />
        </div>
      </div>
      
      <div className="absolute bottom-6 left-6 icon-float" style={{ animationDelay: '-2s' }}>
        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-cyan-400/30 inner-glow">
          <Globe className="w-5 h-5 text-cyan-400" />
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 icon-float" style={{ animationDelay: '-3s' }}>
        <div className="w-10 h-10 glass rounded-xl flex items-center justify-center border border-blue-400/30 inner-glow">
          <Shield className="w-5 h-5 text-blue-400" />
        </div>
      </div>
      
      {/* WhyFi Logo - Much More Prominent */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-schema-pulse">
        <div className="w-32 h-24 glass flex items-center justify-center inner-glow border-2 rounded-2xl bg-gradient-to-br from-purple-600/30 to-cyan-400/20 backdrop-blur-xl shadow-2xl">
          <img 
            src="/WhyFi Web Logo v4.png" 
            alt="WhyFi Logo" 
            className="w-28 h-auto object-contain filter drop-shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}