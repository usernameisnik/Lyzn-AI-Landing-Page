
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 w-full z-50 px-40">
      <div className="bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-full shadow-lg shadow-gray-900/5">
        <div className="flex justify-between items-center py-3 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/b0708e06-e18e-4063-a748-f2f43a8a6a52.png" 
              alt="Storizz" 
              className="h-6"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-900 hover:text-brand-600 transition-colors font-medium text-sm">
              Features
            </a>
            <a href="#use-cases" className="text-gray-900 hover:text-brand-600 transition-colors font-medium text-sm">
              Use Cases
            </a>
            <a href="#pricing" className="text-gray-900 hover:text-brand-600 transition-colors font-medium text-sm">
              Pricing
            </a>
            <button className="bg-gradient-to-r from-brand-500 to-violet-600 text-white px-6 py-2 rounded-full hover:from-brand-600 hover:to-violet-700 transition-all transform hover:scale-105 font-medium shadow-lg shadow-brand-500/25 text-sm">
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-brand-600 transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 px-8">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-900 hover:text-brand-600 transition-colors font-medium text-sm">
                Features
              </a>
              <a href="#use-cases" className="text-gray-900 hover:text-brand-600 transition-colors font-medium text-sm">
                Use Cases
              </a>
              <a href="#pricing" className="text-gray-900 hover:text-brand-600 transition-colors font-medium text-sm">
                Pricing
              </a>
              <button className="bg-gradient-to-r from-brand-500 to-violet-600 text-white px-6 py-2 rounded-full hover:from-brand-600 hover:to-violet-700 transition-all w-full font-medium shadow-lg shadow-brand-500/25 text-sm">
                Get Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
