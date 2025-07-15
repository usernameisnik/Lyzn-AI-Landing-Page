
import { Users, Briefcase, GraduationCap, Stethoscope, Building, Headphones } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Users,
      title: "Personal Conversations",
      story: "Maya's Relationship Breakthrough",
      description: "Your pendant remembers the small details that matter. It tracks emotional patterns, suggests conversation starters, and helps you become the friend everyone needs.",
      metrics: "Deeper connections, guaranteed",
      hoverColor: "hover:bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Briefcase,
      title: "Workplace Productivity",
      story: "Alex's Corporate Game-Changer",
      description: "Never miss a deadline again. Your pendant creates tasks from conversations, schedules follow-ups, and automates mundane procedures while you focus on strategic thinking.",
      metrics: "3x productivity boost",
      hoverColor: "hover:bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      story: "Sam's Study Revolution",
      description: "Transform lectures into personalized study guides. Your pendant captures key concepts, creates flashcards, and provides AI-powered explanations based on your learning style.",
      metrics: "Better grades, less stress",
      hoverColor: "hover:bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: Stethoscope,
      title: "Mental Health & Introspection",
      story: "Jordan's Self-Discovery Journey",
      description: "Understand your emotional patterns and triggers. Your pendant provides insights into your conversations, helping you grow and maintain better mental health.",
      metrics: "Self-awareness unlocked",
      hoverColor: "hover:bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: Building,
      title: "Creative Projects",
      story: "The Artist's Assistant",
      description: "Never lose a creative idea again. Your pendant captures inspiration from conversations, organizes thoughts, and helps you turn fleeting moments into masterpieces.",
      metrics: "Ideas captured, dreams realized",
      hoverColor: "hover:bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    {
      icon: Headphones,
      title: "Virtual Meetings",
      story: "Remote Work, Supercharged",
      description: "Make every virtual meeting count. Your pendant summarizes calls, tracks action items, and ensures nothing falls through the cracks in your digital workspace.",
      metrics: "Remote work mastery",
      hoverColor: "hover:bg-orange-50",
      iconColor: "text-orange-500"
    }
  ];

  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginLeft: '160px', marginRight: '160px' }}>
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading tracking-heading">
            Every Lyzner
            <span className="block text-primary">
              Has a Story
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            From strengthening personal relationships to revolutionizing productivity—discover how the Lyzn AI pendant transforms every conversation into something meaningful.
          </p>
        </div>

        {/* Use Cases Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden lyzn-card p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 ${useCase.hoverColor} ${
                index === 0 || index === 3 ? 'md:col-span-2 lg:col-span-1' : ''
              } ${
                index === 1 || index === 4 ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6">
                  <useCase.icon className={`w-7 h-7 ${useCase.iconColor} transition-colors duration-300`} />
                </div>

                {/* Story Title */}
                <div className="text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider font-mono">
                  {useCase.story}
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 font-heading">
                  {useCase.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg font-body">
                  {useCase.description}
                </p>

                {/* Metrics */}
                <div className="inline-flex items-center bg-secondary/80 backdrop-blur-sm px-4 py-2 lyzn-card">
                  <span className="text-sm font-semibold text-foreground font-mono">
                    {useCase.metrics}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phone Mockups */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="relative mx-auto">
            <div className="w-64 h-auto bg-black p-2 shadow-2xl lyzn-card">
              <img 
                src="/lovable-uploads/fbc13542-447f-432d-ac27-41e54eda2f1a.png" 
                alt="Lyzn.ai Mobile Dashboard" 
                className="w-full h-auto lyzn-card"
              />
            </div>
            <p className="text-center mt-4 text-muted-foreground font-medium font-body">Dashboard Overview</p>
          </div>
          
          <div className="relative mx-auto">
            <div className="w-64 h-auto bg-black p-2 shadow-2xl lyzn-card">
              <img 
                src="/lovable-uploads/b0ab4e8b-b334-4f9f-ac8f-6a628b7a15c8.png" 
                alt="Meeting Analysis" 
                className="w-full h-auto lyzn-card"
              />
            </div>
            <p className="text-center mt-4 text-muted-foreground font-medium font-body">Meeting Analysis</p>
          </div>
          
          <div className="relative mx-auto">
            <div className="w-64 h-auto bg-black p-2 shadow-2xl lyzn-card">
              <img 
                src="/lovable-uploads/6443a65a-3c61-4736-87e3-b76516f54dd1.png" 
                alt="AI Assistant" 
                className="w-full h-auto lyzn-card"
              />
            </div>
            <p className="text-center mt-4 text-muted-foreground font-medium font-body">AI Assistant</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="lyzn-button-primary px-8 py-4 font-semibold text-lg shadow-lg shadow-primary/25 lyzn-card">
            The Lyzner That Everyone Needs
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
