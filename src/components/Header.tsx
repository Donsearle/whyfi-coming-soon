import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/WhyFi Web Logo v4.png" 
              alt="WhyFi" 
              className="h-8 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-colors">
              Home
            </a>
            <a href="#features" className="text-white/80 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onLoginClick}
              className="text-white/80 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button
              onClick={onLoginClick}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white rounded-lg font-medium hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transition duration-200 transform hover:scale-[1.02]"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/80 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Home
              </a>
              <a href="#features" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Features
              </a>
              <a href="#pricing" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="#contact" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <div className="pt-4 pb-2 space-y-2">
                <button
                  onClick={onLoginClick}
                  className="block w-full text-left px-3 py-2 text-white/80 hover:text-white transition-colors"
                >
                  Sign In
                </button>
                <button
                  onClick={onLoginClick}
                  className="block w-full px-3 py-2 bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-400 text-white rounded-lg font-medium hover:from-purple-700 hover:via-indigo-700 hover:to-cyan-500 transition duration-200"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}