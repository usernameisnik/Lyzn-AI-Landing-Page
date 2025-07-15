
import { Brain, Zap, FileText, Cog, Shield, Globe } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: Brain,
      title: "Emotional OS",
      description: "Your pendant truly knows you, making every agentic action feel intuitive and personal. It understands tone, context, and emotional cues to respond perfectly.",
      hoverColor: "text-purple-500"
    },
    {
      icon: Zap,
      title: "Real-Time Task Automation",
      description: "It handles scheduling so you don't have to. Creates summaries, sends emails, updates calendars—all while you're still in conversation.",
      hoverColor: "text-yellow-500"
    },
    {
      icon: FileText,
      title: "Conversation Memories",
      description: "Never forget an important detail. Your pendant stores transcripts, notes key information, and provides instant recall of past interactions.",
      hoverColor: "text-blue-500"
    },
    {
      icon: Cog,
      title: "AI Agents Marketplace",
      description: "Access a robust marketplace of AI agents created by developers worldwide. Integrate with countless tools and services effortlessly.",
      hoverColor: "text-green-500"
    },
    {
      icon: Shield,
      title: "Mind Chat AI",
      description: "Chat with AI that answers based on your memories. Explore your thoughts, get insights, and understand patterns in your conversations.",
      hoverColor: "text-red-500"
    },
    {
      icon: Globe,
      title: "Universal Listening",
      description: "Works in person or virtual meetings. Captures conversations across all contexts—from coffee chats to board meetings.",
      hoverColor: "text-indigo-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginLeft: '160px', marginRight: '160px' }}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-heading">
            Your Personal
            <span className="block text-primary">
              Agentic AI
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Every Lyzner needs a companion that thinks, plans, and acts. Meet your proactive partner that handles life's tasks while you focus on what truly matters.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group lyzn-card p-8 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="mb-6">
                <feature.icon className={`w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors duration-300`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors font-heading">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="lyzn-button-primary px-8 py-4 font-semibold text-lg shadow-lg shadow-primary/25 lyzn-card">
            Discover Your Superpowers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
