
import { Brain, Zap, FileText, Cog, Shield, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Advanced neural networks will analyze every conversation nuance, extracting key decisions, action items, and sentiment patterns with unprecedented accuracy.",
      hoverColor: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Real-Time Automation",
      description: "Tasks will trigger automatically as conversations unfold. Create tickets, send emails, update CRMs—all while you're still talking, seamlessly in the background.",
      hoverColor: "text-yellow-500"
    },
    {
      icon: FileText,
      title: "Intelligent Summaries",
      description: "Transform hours of dialogue into precise, actionable summaries. Every key point will be captured, every decision documented with perfect clarity.",
      hoverColor: "text-blue-500"
    },
    {
      icon: Cog,
      title: "Seamless Integration",
      description: "Connect with 200+ tools effortlessly. From Slack to Salesforce, Storizz will become the intelligence layer across your entire workflow ecosystem.",
      hoverColor: "text-green-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and SOC 2 compliance will ensure your conversations remain private and secure at every step of the process.",
      hoverColor: "text-red-500"
    },
    {
      icon: Globe,
      title: "Global Language Support",
      description: "Understand and process conversations in 50+ languages with real-time translation and cultural context awareness for global teams.",
      hoverColor: "text-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginLeft: '160px', marginRight: '160px' }}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Where Conversations
            <span className="block bg-gradient-to-r from-brand-600 to-violet-600 bg-clip-text text-transparent">
              Will Meet Intelligence
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Every feature designed to transform the way you'll capture, understand, and act on human conversation—with the precision of AI and the intuition of human insight.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group apple-card rounded-3xl p-8 hover:shadow-2xl hover:shadow-gray-900/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon className={`w-8 h-8 text-gray-400 group-hover:${feature.hoverColor} transition-colors duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-brand-500 to-violet-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-brand-600 hover:to-violet-700 transition-all transform hover:scale-105 shadow-lg shadow-brand-500/25">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
