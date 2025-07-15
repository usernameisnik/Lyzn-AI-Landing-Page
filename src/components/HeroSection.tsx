import { ArrowRight, Play, Sparkles } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-24">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 via-violet-50/20 to-blue-50/30 animate-gradient-shift opacity-60"></div>
      
      {/* Floating elements - more subtle */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-500/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-violet-500/5 rounded-full blur-xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/5 rounded-full blur-xl animate-float" style={{
      animationDelay: '4s'
    }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 apple-glass rounded-full px-4 py-2 mb-8 animate-fade-in bg-violet-100">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span className="text-gray-900 text-sm font-medium">Coming Soon: AI-Powered Conversation Intelligence</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in leading-tight">
            Every Word
            <span className="block bg-gradient-to-r from-brand-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
              Will Become Action
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed" style={{
          animationDelay: '0.2s'
        }}>
            Transform every conversation into intelligent insights. Storizz will capture, analyze, and automate—so you can focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <button className="group bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-2 shadow-2xl shadow-gray-900/25">
              <span>Join the Waitlist</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group apple-glass text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Target: 10M+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Minutes to Process</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">99.7%</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">50k+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Teams to Empower</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;