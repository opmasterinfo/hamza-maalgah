import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[800px] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          <div className="absolute inset-0">
            <svg
              viewBox="0 0 1440 794"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M0 400C240 300 480 200 720 200C960 200 1200 300 1440 400V794H0V400Z"
                fill="url(#wave-gradient)"
                opacity="0.1"
              />
              <defs>
                <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff486d" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#df1d48" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className={`absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-[#ff486d]/20 via-[#df1d48]/10 to-transparent rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />
        <div
          className={`absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-[#df1d48]/15 via-[#ff486d]/5 to-transparent rounded-full blur-3xl transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        />

        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 delay-100 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          <div className="inline-flex items-center px-6 py-2 mb-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full shadow-[inset_0_1px_4px_1px_rgba(255,255,255,0.08),inset_0_1px_0_0_rgba(255,255,255,0.2)]">
            <span className="text-sm font-medium text-white">
              Reimagining Business, one call at a time...
            </span>
          </div>
        </div>

        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          Never lose revenue from{' '}
          <br className="hidden sm:block" />
          missed calls again{' '}
          <span className="bg-gradient-to-r from-[#f23f5d] via-[#ff486d] to-[#df1d48] bg-clip-text text-transparent">
            AI Voice Facilitators
          </span>
        </h1>

        <p
          className={`text-lg sm:text-xl text-white/55 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          Welcome to something <strong className="text-white/80">greater.</strong> AI that uses
          human-like voices to handle your calls{' '}
          <strong className="text-white/80">for you.</strong> Imagine never being{' '}
          <strong className="text-white/80">overwhelmed</strong> by calls again.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          <a
            href="#contact"
            className="group relative px-8 py-4 text-base font-medium text-white rounded-full overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2f292b] to-[#040102] rounded-full" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-transparent opacity-100 rounded-full" style={{ maskImage: 'linear-gradient(225deg, white 0%, transparent 61%)' }} />
            <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent rounded-full" />
            <div className="absolute inset-0 border border-white/10 rounded-full" />
            <span className="relative">Initiate Your Journey</span>
          </a>

          <a
            href="#demo"
            className="px-8 py-4 text-base font-medium text-white/90 hover:text-white rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-all duration-300"
          >
            Watch Demo
          </a>
        </div>

        <div
          className={`mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
          }`}
        >
          <div className="inline-flex items-center gap-2 text-sm text-white/40">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff486d] to-[#df1d48] border-2 border-[#04060d]" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#df1d48] to-[#ff486d] border-2 border-[#04060d]" />
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#ff486d] to-[#df1d48] border-2 border-[#04060d]" />
            </div>
            <span>Trusted by 500+ businesses</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#04060d] to-transparent" />
    </section>
  );
}
