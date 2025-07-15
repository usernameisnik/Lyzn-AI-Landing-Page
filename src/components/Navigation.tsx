
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 w-full z-50 px-40">
      <div className="lyzn-glass">
        <div className="flex justify-between items-center py-3 px-8">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/47d5203b-ce62-49d0-89c9-44735c8de46e.png" 
              alt="Lyzn.ai" 
              className="h-6"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium text-sm font-body">
              Features
            </a>
            <a href="#use-cases" className="text-foreground hover:text-primary transition-colors font-medium text-sm font-body">
              Use Cases
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium text-sm font-body">
              Pricing
            </a>
            <button className="bg-primary text-primary-foreground px-6 py-2 hover:bg-primary/90 transition-all transform hover:scale-105 font-medium shadow-lg shadow-primary/25 text-sm lyzn-card">
              Get Early Access
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 px-8">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium text-sm font-body">
                Features
              </a>
              <a href="#use-cases" className="text-foreground hover:text-primary transition-colors font-medium text-sm font-body">
                Use Cases
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors font-medium text-sm font-body">
                Pricing
              </a>
              <button className="bg-primary text-primary-foreground px-6 py-2 hover:bg-primary/90 transition-all w-full font-medium shadow-lg shadow-primary/25 text-sm lyzn-card">
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
