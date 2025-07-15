import { ArrowRight, CheckCircle } from 'lucide-react';
const CTASection = () => {
  const benefits = ["Setup in under 5 minutes", "No credit card required", "Cancel anytime", "24/7 support included"];
  return <section className="py-24 relative overflow-hidden bg-background">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary/5 blur-xl animate-float" style={{
      animationDelay: '3s'
    }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
      marginLeft: '160px',
      marginRight: '160px'
    }}>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight font-heading tracking-heading">
            Ready to Transform
            <span className="block text-primary">
              Every Conversation?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto font-body">
            Join thousands of teams who've discovered the power of intelligent conversation automation. Your next breakthrough is one conversation away.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center justify-center space-x-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium font-body">{benefit}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-primary text-primary-foreground px-12 py-5 font-bold text-xl hover:bg-primary/90 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-2xl shadow-primary/25 lyzn-card">
              <span>Join Waitlist</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="lyzn-glass text-foreground px-12 py-5 font-bold text-xl hover:bg-card/90 transition-all border border-card-border/50">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-muted-foreground text-sm mb-6 font-body">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 bg-secondary lyzn-card"></div>
              <div className="h-8 w-32 bg-secondary lyzn-card"></div>
              <div className="h-8 w-28 bg-secondary lyzn-card"></div>
              <div className="h-8 w-20 bg-secondary lyzn-card"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;