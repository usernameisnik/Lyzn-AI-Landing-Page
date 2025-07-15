import { ArrowRight, CheckCircle } from 'lucide-react';
const CTASection = () => {
  const benefits = ["Setup in under 5 minutes", "No credit card required", "Cancel anytime", "24/7 support included"];
  return <section className="py-24 relative overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/40 via-violet-50/30 to-blue-50/40"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-brand-500/5 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-violet-500/5 rounded-full blur-xl animate-float" style={{
      animationDelay: '3s'
    }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{
      marginLeft: '160px',
      marginRight: '160px'
    }}>
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Transform
            <span className="block bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent">
              Every Conversation?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
            Join thousands of teams who've discovered the power of intelligent conversation automation. Your next breakthrough is one conversation away.
          </p>

          {/* Benefits List */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {benefits.map((benefit, index) => <div key={index} className="flex items-center justify-center space-x-2 text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm font-medium">{benefit}</span>
              </div>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="group bg-gray-900 text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-800 transition-all transform hover:scale-105 flex items-center space-x-3 shadow-2xl shadow-gray-900/25">
              <span>Join Waitlist</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="apple-glass text-gray-900 px-12 py-5 rounded-full font-bold text-xl hover:bg-white/90 transition-all border border-gray-200/50">
              Schedule Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-6">Trusted by teams at</p>
            <div className="flex flex-wrap items-center justify-center space-x-8 opacity-60">
              {/* Placeholder for company logos */}
              <div className="h-8 w-24 bg-gray-200 rounded"></div>
              <div className="h-8 w-32 bg-gray-200 rounded"></div>
              <div className="h-8 w-28 bg-gray-200 rounded"></div>
              <div className="h-8 w-20 bg-gray-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTASection;