import { useEffect, useState } from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '299',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 500 calls/month',
      'Basic AI voice model',
      '5 custom scripts',
      'Email support',
      'Basic analytics',
      'Single phone number',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '699',
    description: 'Ideal for growing businesses',
    features: [
      'Up to 2,000 calls/month',
      'Advanced AI voice model',
      'Unlimited custom scripts',
      'Priority support',
      'Advanced analytics & reporting',
      'Up to 5 phone numbers',
      'CRM integration',
      'Custom voice training',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with complex needs',
    features: [
      'Unlimited calls',
      'Premium AI voice model',
      'Unlimited everything',
      '24/7 dedicated support',
      'Custom integrations',
      'Unlimited phone numbers',
      'White-label options',
      'SLA guarantee',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
];

export default function Pricing() {
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

    const element = document.getElementById('pricing');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section id="pricing" className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff486d]/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-[#ff486d]/10 backdrop-blur-sm border border-[#ff486d]/20 rounded-full">
            <span className="text-sm font-medium text-[#ff486d]">Pricing</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Breathtaking{' '}
            <span className="bg-gradient-to-r from-[#f23f5d] via-[#ff486d] to-[#df1d48] bg-clip-text text-transparent">
              Plans
            </span>
          </h2>
          <p className="text-xl text-white/55 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include a 14-day free trial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${plan.highlighted ? 'lg:-mt-4' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.highlighted && (
                <div className="absolute -top-5 left-0 right-0 flex justify-center">
                  <div className="px-4 py-1 bg-gradient-to-r from-[#ff486d] to-[#df1d48] rounded-full text-xs font-semibold text-white">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div
                className={`relative p-8 rounded-3xl border transition-all duration-300 group ${
                  plan.highlighted
                    ? 'bg-gradient-to-b from-white/10 to-white/5 border-[#ff486d]/50 lg:scale-105'
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-b from-[#ff486d]/10 via-transparent to-transparent rounded-3xl" />
                )}

                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-white/60 mb-6 text-sm">{plan.description}</p>

                  <div className="mb-8">
                    {plan.price === 'Custom' ? (
                      <div className="text-4xl font-bold text-white">Custom</div>
                    ) : (
                      <div className="flex items-baseline">
                        <span className="text-5xl font-bold text-white">${plan.price}</span>
                        <span className="text-white/60 ml-2">/month</span>
                      </div>
                    )}
                  </div>

                  <a
                    href="#contact"
                    className={`block w-full py-4 rounded-xl font-medium text-center mb-8 transition-all duration-300 ${
                      plan.highlighted
                        ? 'bg-gradient-to-r from-[#ff486d] to-[#df1d48] text-white hover:shadow-lg hover:shadow-[#ff486d]/25'
                        : 'bg-white/10 text-white hover:bg-white/15 border border-white/20'
                    }`}
                  >
                    {plan.price === 'Custom' ? 'Contact Sales' : 'Start Free Trial'}
                  </a>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check
                          className={`w-5 h-5 mr-3 flex-shrink-0 mt-0.5 ${
                            plan.highlighted ? 'text-[#ff486d]' : 'text-white/60'
                          }`}
                        />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-white/60 mb-4">All plans include 14-day money-back guarantee</p>
          <a href="#contact" className="text-[#ff486d] hover:text-[#ff486d]/80 transition-colors">
            Need a custom solution? Contact us →
          </a>
        </div>
      </div>
    </section>
  );
}
