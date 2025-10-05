import { useEffect, useState } from 'react';
import { Mic, Brain, MessageSquare, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    number: '01',
    title: 'Customer Calls',
    description: 'A customer dials your business number, just like they always do.',
  },
  {
    icon: Brain,
    number: '02',
    title: 'AI Processes',
    description: 'Our AI instantly analyzes the request using natural language understanding.',
  },
  {
    icon: MessageSquare,
    number: '03',
    title: 'Natural Response',
    description: 'AI responds with a human-like voice, handling the conversation naturally.',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Action Completed',
    description: 'Booking confirmed, questions answered, or transferred to the right person.',
  },
];

export default function HowItWorks() {
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

    const element = document.getElementById('how-it-works-section');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="how-it-works-section"
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-[#df1d48]/10 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-[#ff486d]/10 backdrop-blur-sm border border-[#ff486d]/20 rounded-full">
            <span className="text-sm font-medium text-[#ff486d]">Simple Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            How It{' '}
            <span className="bg-gradient-to-r from-[#f23f5d] via-[#ff486d] to-[#df1d48] bg-clip-text text-transparent">
              Actually Works
            </span>
          </h2>
          <p className="text-xl text-white/55 max-w-3xl mx-auto">
            From call to completion in seconds. Here's the magic behind the scenes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative p-8 bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-[#ff486d]/30 transition-all duration-300 group">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-white/5 group-hover:text-[#ff486d]/10 transition-colors duration-300">
                    {step.number}
                  </div>

                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff486d]/30 to-[#df1d48]/30 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-[#ff486d]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>

                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-[#ff486d]/50 to-transparent" />
                  )}
                </div>

                <div className="absolute inset-0 bg-gradient-radial from-[#ff486d]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
              </div>
            );
          })}
        </div>

        <div
          className={`mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <a
            href="#demo"
            className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-full border border-white/20 hover:border-[#ff486d]/50 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300 group"
          >
            <span>See It In Action</span>
            <svg
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
