interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="absolute top-20 left-0 right-0 bg-[#040102]/95 backdrop-blur-2xl border-b border-white/6 shadow-2xl">
        <div className="px-6 py-8 space-y-4">
          <a
            href="#"
            className="block px-4 py-3 text-base font-medium text-white bg-white/5 rounded-lg"
            onClick={onClose}
          >
            Home
          </a>
          <a
            href="#demo"
            className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={onClose}
          >
            AI Demo Call
          </a>
          <a
            href="#pricing"
            className="block px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            onClick={onClose}
          >
            Breathtaking Plans
          </a>
          <div className="pt-4 border-t border-white/10">
            <a
              href="#signin"
              className="block px-4 py-3 text-base font-medium text-white hover:bg-white/5 rounded-lg transition-all mb-2"
              onClick={onClose}
            >
              Sign in
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-base font-medium text-white bg-gradient-to-br from-[#2f292b] to-[#040102] rounded-lg text-center"
              onClick={onClose}
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
