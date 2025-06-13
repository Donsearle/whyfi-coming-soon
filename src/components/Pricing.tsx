import { Check, Zap, Clock } from 'lucide-react';
import { useState } from 'react';

interface PricingProps {
  selectedService: 'home' | 'business' | 'bundled';
  onServiceChange: (service: 'home' | 'business' | 'bundled') => void;
}

export default function Pricing({ selectedService, onServiceChange }: PricingProps) {
  const serviceTitles = {
    home: 'Home Plans',
    business: 'Business Plans', 
    bundled: 'Bundled Power + Connectivity Plans'
  };

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for individuals & small households',
      features: [
        '50Mbps download speed',
        '10Mbps upload speed',
        'Basic support',
        'Standard installation',
        'Flexible contract terms'
      ],
      cta: 'Join Waitlist',
      ctaSubtext: 'Be the first to know',
      popular: false
    },
    {
      name: 'Professional',
      description: 'For families & advanced needs',
      features: [
        '100Mbps download speed',
        '20Mbps upload speed',
        'Priority support',
        'Professional installation',
        'Wi-Fi 6 router included',
        'Static IP available'
      ],
      cta: 'Get Early Access',
      ctaSubtext: 'Limited beta spots',
      popular: true
    },
    {
      name: 'Enterprise',
      description: 'For large households & power users',
      features: [
        'Up to 1Gbps speeds',
        'Unlimited data',
        '24/7 dedicated support',
        'Premium installation',
        'Mesh network setup',
        'Backup connection',
        'SLA guarantee'
      ],
      cta: 'Contact Sales',
      ctaSubtext: 'Custom solutions available',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Choose Your <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Plan</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
            Revolutionary connectivity solutions launching soon. Be among the first to experience the future of internet.
          </p>

          {/* Service Selector */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {Object.entries(serviceTitles).map(([key, title]) => (
              <button
                key={key}
                onClick={() => onServiceChange(key as 'home' | 'business' | 'bundled')}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedService === key
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                    : 'glass border border-white/20 text-white/70 hover:text-white hover:border-purple-400/50'
                }`}
              >
                {title}
              </button>
            ))}
          </div>

          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full border border-purple-400/30 mb-8">
            <Clock className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 font-medium">Launching Q2 2025</span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative card-border rounded-2xl p-8 hover:scale-[1.02] transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-purple-500/50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium rounded-full flex items-center gap-1">
                    <Zap size={14} />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    Coming Soon
                  </div>
                  <div className="text-white/60 text-sm">Pricing to be announced</div>
                </div>
                <p className="text-white/70 text-sm">{plan.description}</p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" />
                    </div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="space-y-2">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transform hover:scale-[1.02]'
                      : 'glass border border-white/20 text-white hover:border-purple-400/50'
                  }`}
                >
                  {plan.cta}
                </button>
                <p className="text-white/50 text-xs text-center">{plan.ctaSubtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Launch Information */}
        <div className="mt-16 text-center">
          <div className="card-border rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Be the First to Experience WhyFi</h3>
            <p className="text-white/70 mb-6">
              Join our exclusive waitlist to get early access, special launch pricing, and priority installation scheduling.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 glass rounded-xl border border-white/20">
                <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                  Early Access
                </div>
                <div className="text-white/70 text-sm">Beta testing program</div>
              </div>
              <div className="text-center p-4 glass rounded-xl border border-white/20">
                <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  Launch Pricing
                </div>
                <div className="text-white/70 text-sm">Exclusive discounts</div>
              </div>
              <div className="text-center p-4 glass rounded-xl border border-white/20">
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Priority Setup
                </div>
                <div className="text-white/70 text-sm">First in line for installation</div>
              </div>
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white rounded-xl font-semibold hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transition duration-200 transform hover:scale-[1.02] shadow-lg">
              Join the Waitlist
            </button>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-white/60 text-sm">
            All plans will include 99.9% uptime SLA, enterprise security, and 24/7 support.
          </p>
          <div className="flex justify-center gap-8 mt-4 text-xs text-white/40">
            <span>GDPR Compliant</span>
            <span>SOC 2 Certified</span>
            <span>ISO 27001</span>
          </div>
        </div>
      </div>
    </section>
  );
}