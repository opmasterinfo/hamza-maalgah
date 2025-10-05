import { Menu, X } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
  onMenuToggle: () => void;
  isMobileMenuOpen: boolean;
}

export default function Navigation({ scrolled, onMenuToggle, isMobileMenuOpen }: NavigationProps) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040102]/40 backdrop-blur-2xl border-b border-white/6'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-12">
            <a href="#" className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                HorizonTechAI
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-1">
              <a
                href="#"
                className="relative px-4 py-2 text-sm font-medium text-white rounded-lg transition-all duration-300 group"
              >
                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-radial from-[#ff486d] to-transparent opacity-100" />
                <div className="absolute inset-0 bg-[#df1d48]/10 rounded blur-sm opacity-100" />
                <span className="relative drop-shadow-[0_0_10px_rgba(255,255,255,0.08)]">
                  Home
                </span>
              </a>
              <a
                href="#demo"
                className="px-4 py-2 text-sm font-medium text-white/55 hover:text-white rounded-lg transition-all duration-300"
              >
                AI Demo Call
              </a>
              <a
                href="#pricing"
                className="px-4 py-2 text-sm font-medium text-white/55 hover:text-white rounded-lg transition-all duration-300"
              >
                Breathtaking Plans
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#signin"
              className="px-6 py-2 text-sm font-medium text-white hover:bg-white/5 rounded-full transition-all duration-300"
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="relative px-6 py-2 text-sm font-medium text-white rounded-full overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2f292b] to-[#040102] rounded-full" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/5 to-transparent opacity-100 rounded-full" style={{ maskImage: 'linear-gradient(225deg, white 0%, transparent 61%)' }} />
              <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent rounded-full" />
              <span className="relative">Contact Us</span>
            </a>
          </div>

          <button
            onClick={onMenuToggle}
            className="lg:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
