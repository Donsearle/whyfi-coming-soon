import { Shield, Zap, Globe, Headphones, Clock, Award } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'End-to-end encryption, compliance certifications, and secure data handling for sensitive applications.',
      color: 'text-purple-400'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'High-performance infrastructure with global edge deployment for minimal latency responses.',
      color: 'text-indigo-400'
    },
    {
      icon: Globe,
      title: 'Global Coverage',
      description: 'Connect with your existing tools and workflows through our comprehensive network ecosystem.',
      color: 'text-blue-400'
    },
    {
      icon: Headphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and dedicated account management for enterprise clients.',
      color: 'text-cyan-400'
    },
    {
      icon: Clock,
      title: 'Instant Setup',
      description: 'Get connected in minutes with our streamlined onboarding process and automated configuration.',
      color: 'text-purple-400'
    },
    {
      icon: Award,
      title: 'Proven Reliability',
      description: '99.9% uptime SLA with redundant systems and proactive monitoring for maximum availability.',
      color: 'text-indigo-400'
    }
  ];

  return (
    <section id="features" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">WhyFi</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Experience the difference with our cutting-edge connectivity solutions designed for modern digital lifestyles.
          </p>
        </div>

        {/* Features Bento Grid */}
        <div className="space-y-6">
          {/* Feature Row 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* 1/3 Column */}
            <div className="w-full md:w-1/3 glass-effect bg-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-8 h-8 rounded-full bg-purple-600/30 flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-2xl text-white mb-3">{features[0].title}</h3>
              <p className="text-purple-200/70">{features[0].description}</p>
            </div>
            
            {/* 2/3 Column */}
            <div className="w-full md:w-2/3 glass-effect bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10 flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl text-white mb-3">Multi-Speed Capabilities</h3>
                <p className="text-purple-200/70">Experience blazing-fast internet speeds across all your devices with our advanced fiber-optic infrastructure.</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center text-purple-200/80 text-sm">
                    <Zap className="w-4 h-4 text-purple-400 mr-3" />
                    <span>Up to 1Gbps download speeds</span>
                  </li>
                  <li className="flex items-center text-purple-200/80 text-sm">
                    <Zap className="w-4 h-4 text-purple-400 mr-3" />
                    <span>Ultra-low latency gaming</span>
                  </li>
                  <li className="flex items-center text-purple-200/80 text-sm">
                    <Zap className="w-4 h-4 text-purple-400 mr-3" />
                    <span>4K streaming on multiple devices</span>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-64 h-48 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                <Zap className="w-16 h-16 text-purple-300/40" />
              </div>
            </div>
          </div>
          
          {/* Feature Row 2 */}
          <div className="flex flex-col md:flex-row-reverse gap-6">
            {/* 1/3 Column */}
            <div className="w-full md:w-1/3 glass-effect bg-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-8 h-8 rounded-full bg-cyan-600/30 flex items-center justify-center mb-4">
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-2xl text-white mb-3">{features[2].title}</h3>
              <p className="text-purple-200/70">{features[2].description}</p>
            </div>
            
            {/* 2/3 Column */}
            <div className="w-full md:w-2/3 glass-effect bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10 flex flex-col md:flex-row items-center">
              <div className="flex-1 mb-6 md:mb-0 md:mr-6">
                <h3 className="text-2xl text-white mb-3">Seamless Integration</h3>
                <p className="text-purple-200/70">Connect all your smart devices effortlessly with our comprehensive home and business networking solutions.</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-purple-900/20 rounded-lg p-3 text-center">
                    <div className="text-xl font-[300] text-white">50+</div>
                    <div className="text-xs text-purple-200/60 mt-1">Connected Devices</div>
                  </div>
                  <div className="bg-purple-900/20 rounded-lg p-3 text-center">
                    <div className="text-xl font-[300] text-white">99.9%</div>
                    <div className="text-xs text-purple-200/60 mt-1">Uptime</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-64 h-48 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl flex items-center justify-center">
                <Globe className="w-16 h-16 text-purple-300/40" />
              </div>
            </div>
          </div>
          
          {/* Feature Row 3 */}
          <div className="flex flex-col md:flex-row gap-6">
            {/* 1/3 Column */}
            <div className="w-full md:w-1/3 glass-effect bg-purple-900/10 rounded-2xl p-8 border border-purple-500/20">
              <div className="w-8 h-8 rounded-full bg-indigo-600/30 flex items-center justify-center mb-4">
                <Headphones className="w-5 h-5 text-indigo-400" />
              </div>
              <h3 className="text-2xl text-white mb-3">{features[3].title}</h3>
              <p className="text-purple-200/70">{features[3].description}</p>
            </div>
            
            {/* 2/3 Column */}
            <div className="w-full md:w-2/3 glass-effect bg-purple-900/5 rounded-2xl p-8 border border-purple-500/10">
              <h3 className="text-2xl text-white mb-3">Professional Support</h3>
              <p className="text-purple-200/70 mb-6">Get expert assistance whenever you need it with our dedicated support team and comprehensive service options.</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-200/70 mb-2" />
                  <span className="text-sm text-purple-200/60">24/7 Support</span>
                </div>
                <div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
                  <Headphones className="w-6 h-6 text-purple-200/70 mb-2" />
                  <span className="text-sm text-purple-200/60">Live Chat</span>
                </div>
                <div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
                  <Award className="w-6 h-6 text-purple-200/70 mb-2" />
                  <span className="text-sm text-purple-200/60">Expert Tech</span>
                </div>
                <div className="p-4 bg-purple-900/20 rounded-lg flex flex-col items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-200/70 mb-2" />
                  <span className="text-sm text-purple-200/60">Guaranteed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '<10ms', label: 'Latency' },
            { value: '24/7', label: 'Support' },
            { value: '1000+', label: 'Happy Customers' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-white/70 text-sm font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}