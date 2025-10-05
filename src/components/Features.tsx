import { Phone, Clock, TrendingUp, Shield, Zap, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const features = [
  {
    icon: Phone,
    title: 'Human-Like Conversations',
    description:
      'AI voices so natural, your customers won\'t know they\'re talking to a machine. Perfect intonation, emotion, and understanding.',
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description:
      'Never miss a call again. Your AI Voice Facilitator works around the clock, ensuring every customer gets immediate attention.',
  },
  {
    icon: TrendingUp,
    title: 'Maximize Revenue',
    description:
      'Convert more leads by answering every call instantly. No more lost opportunities from missed or delayed responses.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-level encryption and compliance with industry standards. Your data and your customers\' information stay protected.',
  },
  {
    icon: Zap,
    title: 'Instant Integration',
    description:
      'Set up in minutes, not months. Seamlessly integrate with your existing phone system and CRM tools.',
  },
  {
    icon: Users,
    title: 'Scalable Support',
    description:
      'Handle unlimited calls simultaneously. Scale your customer support without hiring more staff.',
  },
];

export default function Features() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="features-section" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff486d]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-[#ff486d]/10 backdrop-blur-sm border border-[#ff486d]/20 rounded-full">
            <span className="text-sm font-medium text-[#ff486d]">Why Choose Us</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            The Future of{' '}
            <span className="bg-gradient-to-r from-[#f23f5d] via-[#ff486d] to-[#df1d48] bg-clip-text text-transparent">
              Business Communication
            </span>
          </h2>
          <p className="text-xl text-white/55 max-w-3xl mx-auto">
            Transform how you handle customer calls with AI technology that feels completely human
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group relative p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#ff486d]/30 transition-all duration-500 hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff486d]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 mb-6 bg-gradient-to-br from-[#ff486d]/20 to-[#df1d48]/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#ff486d]" />
                  </div>

                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-[#ff486d] transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-radial from-[#ff486d]/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
