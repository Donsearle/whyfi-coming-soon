import { X } from 'lucide-react';
import AnimatedVisual from './AnimatedVisual';
import LoginForm from './LoginForm';

interface LoginModalProps {
  onClose: () => void;
}

export default function LoginModal({ onClose }: LoginModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="w-full relative max-w-4xl">
        <div className="relative card-border overflow-hidden rounded-2xl flex animate-float">
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 glass rounded-lg flex items-center justify-center border border-white/20 hover:border-red-400/50 transition-colors"
          >
            <X size={16} className="text-white/70 hover:text-red-400" />
          </button>
          
          {/* Left Side - Visual/Branding */}
          <div className="w-1/2 flex flex-col justify-center items-center relative p-8">
            <AnimatedVisual />
            
            {/* Brand text */}
            <div className="text-center">
              <h2 className="text-3xl font-semibold text-white tracking-tight mb-2">
                Join our platform
              </h2>
              <p className="text-white/70 text-sm">
                Connect with internet you deserve and stay connected during dark times!
              </p>
            </div>
          </div>
          
          {/* Vertical divider */}
          <div className="w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          
          {/* Right Side - Form */}
          <div className="w-1/2 p-8 flex flex-col justify-center">
            <LoginForm />
          </div>
          
        </div>
      </div>
    </div>
  );
}