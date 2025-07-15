import { ArrowRight, Play, Sparkles } from 'lucide-react';
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24">
      {/* Subtle animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 animate-gradient-shift opacity-60"></div>
      
      {/* Floating elements - more subtle */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/5 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 blur-xl animate-float" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/5 blur-xl animate-float" style={{
      animationDelay: '4s'
    }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 lyzn-glass px-4 py-2 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-foreground text-sm font-mono">The First AI Companion That Thinks, Plans, and Acts For You</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 animate-fade-in leading-tight tracking-heading">
            Give Your Conversations
            <span className="block text-primary">
              Some Superpowers
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in max-w-3xl mx-auto leading-relaxed font-body" style={{
          animationDelay: '0.2s'
        }}>
            Meet Lyzn AI – the pendant that listens, learns, and makes things happen while you speak. Your proactive partner powered by Emotional OS.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in" style={{
          animationDelay: '0.4s'
        }}>
            <button className="group lyzn-button-primary px-8 py-4 font-semibold text-lg flex items-center space-x-2 shadow-2xl shadow-primary/25 lyzn-card">
              <span>Get Your Lyzn AI</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group lyzn-button lyzn-glass text-foreground px-8 py-4 font-semibold text-lg flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 animate-fade-in" style={{
          animationDelay: '0.6s'
        }}>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-heading">24/7</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-mono">Always Listening</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-heading">Real-time</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-mono">Task Automation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-heading">∞</div>
              <div className="text-muted-foreground text-sm uppercase tracking-wider font-mono">AI Agents</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;