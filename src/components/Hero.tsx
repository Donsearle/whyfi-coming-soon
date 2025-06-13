import { Home, Building2, Zap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onServiceSelect: (service: 'home' | 'business' | 'bundled') => void;
}

export default function Hero({ onServiceSelect }: HeroProps) {
  const services = [
    {
      id: 'home' as const,
      icon: Home,
      title: 'Home',
      description: 'Reliable internet for your household needs',
      gradient: 'from-purple-600 to-indigo-600'
    },
    {
      id: 'business' as const,
      icon: Building2,
      title: 'Business',
      description: 'Enterprise-grade connectivity solutions',
      gradient: 'from-indigo-600 to-blue-600'
    },
    {
      id: 'bundled' as const,
      icon: Zap,
      title: 'Bundled Power + Connectivity',
      description: 'Complete power and internet solutions',
      gradient: 'from-blue-600 to-cyan-400'
    }
  ];

  return (
    <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 to-transparent opacity-30" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOGE1Y2Y2IiBmaWxsLW9wYWNpdHk9IjAuMSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass text-purple-300 rounded-full text-sm font-medium mb-8 border border-purple-400/30">
            Launching Q2 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Connect with <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">WhyFi</span>
          </h1>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join our vibrant community where reliable connectivity meets innovation. Be among the first 
            to experience the future of internet with our revolutionary connectivity solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white rounded-xl font-semibold hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transition duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(138,92,246,0.5)] hover:shadow-[0_0_30px_rgba(138,92,246,0.8)]">
              Join Waitlist <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 glass border border-white/20 text-white rounded-xl font-semibold hover:border-purple-400/50 transition duration-200 transform hover:scale-[1.02] hover:bg-purple-900/30">
              Learn More
            </button>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                onClick={() => onServiceSelect(service.id)}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-900/30 group-hover:shadow-[0_0_20px_rgba(138,92,246,0.3)] transition-all duration-300 hover:scale-[1.02] p-8 h-full">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* CTA */}
                  <div className="flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="font-medium">Coming Soon</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}