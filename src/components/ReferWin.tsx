import { Gift, Users, Trophy, ArrowRight } from 'lucide-react';

export default function ReferWin() {
  const steps = [
    {
      number: '1',
      title: 'Join the Waitlist',
      description: 'Sign up for early access and get your unique referral link when we launch.',
      icon: Users
    },
    {
      number: '2',
      title: 'Share with Friends',
      description: 'Invite friends and family to join the waitlist using your referral link.',
      icon: Gift
    },
    {
      number: '3',
      title: 'Earn Rewards',
      description: 'Get exclusive benefits and priority access for every successful referral.',
      icon: Trophy
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 glass text-cyan-300 rounded-full text-sm font-medium mb-6 border border-cyan-400/30">
            REFERRAL PROGRAM
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            From Idea to <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Connection</span> in Minutes
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto mb-12">
            Help us build the future of connectivity. Share WhyFi with others and get rewarded for growing our community before launch.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                {/* Step Number */}
                <div className="relative mb-8">
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-purple-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-400/50 to-transparent -translate-y-0.5" />
                  )}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 mx-auto glass rounded-xl flex items-center justify-center mb-6 border border-white/20 group-hover:border-purple-400/50 transition-colors">
                  <IconComponent className="w-8 h-8 text-purple-400" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-white/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white rounded-xl font-semibold hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transition duration-200 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2 mx-auto">
            Join the Waitlist <ArrowRight size={20} />
          </button>
        </div>

        {/* Rewards Preview */}
        <div className="mt-16 card-border rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Launch Rewards Program</h3>
            <p className="text-white/70">Exclusive benefits for early supporters and referrers</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 glass rounded-xl border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                Priority
              </div>
              <div className="text-white/70 text-sm">First access to services</div>
            </div>
            <div className="text-center p-6 glass rounded-xl border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Discounts
              </div>
              <div className="text-white/70 text-sm">Special launch pricing</div>
            </div>
            <div className="text-center p-6 glass rounded-xl border border-white/20">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                Exclusive
              </div>
              <div className="text-white/70 text-sm">Beta features access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}