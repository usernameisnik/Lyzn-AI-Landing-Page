
import { Users, Briefcase, GraduationCap, Stethoscope, Building, Headphones } from 'lucide-react';

const UseCasesSection = () => {
  const useCases = [
    {
      icon: Users,
      title: "Team Meetings",
      story: "Sarah's Sprint Planning Vision",
      description: "Imagine every sprint planning session becoming a treasure trove of insights. Lyzn.ai will capture user story priorities, automatically create JIRA tickets, and send personalized follow-ups to each team member.",
      metrics: "Up to 85% faster sprint setup",
      hoverColor: "hover:bg-blue-50",
      iconColor: "text-blue-500"
    },
    {
      icon: Briefcase,
      title: "Sales Calls",
      story: "Marcus's Deal-Closing Future",
      description: "Picture this: mid-conversation, Lyzn.ai detects buying signals and instantly updates your CRM with lead scoring. While you focus on building rapport, automated follow-up emails will be drafted with personalized talking points.",
      metrics: "Potential 40% higher close rates",
      hoverColor: "hover:bg-green-50",
      iconColor: "text-green-500"
    },
    {
      icon: GraduationCap,
      title: "Educational Sessions",
      story: "Professor Chen's Teaching Revolution",
      description: "Envision lecture recordings transforming into interactive study guides. Students will receive personalized learning paths based on their questions, while educators get insights into which concepts need reinforcement.",
      metrics: "Expected 65% better retention",
      hoverColor: "hover:bg-purple-50",
      iconColor: "text-purple-500"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Consultations",
      story: "Dr. Rodriguez's Clinical Breakthrough",
      description: "Imagine patient conversations becoming structured medical records in real-time. Treatment plans will generate automatically while maintaining HIPAA compliance, allowing doctors to focus entirely on patient care.",
      metrics: "Potential 50% less admin time",
      hoverColor: "hover:bg-red-50",
      iconColor: "text-red-500"
    },
    {
      icon: Building,
      title: "Board Meetings",
      story: "The Executive Edge of Tomorrow",
      description: "Strategic decisions will flow from boardroom to execution seamlessly. Key resolutions will trigger department briefings, stakeholder updates, and project timelines—all before the meeting ends.",
      metrics: "Expected 3x faster execution",
      hoverColor: "hover:bg-indigo-50",
      iconColor: "text-indigo-500"
    },
    {
      icon: Headphones,
      title: "Customer Support",
      story: "Emma's Support Magic Reimagined",
      description: "Every support call will become a learning opportunity. Issues will auto-categorize, knowledge base articles will update in real-time, and customer satisfaction surveys will deploy with surgical precision.",
      metrics: "Target 90% issue resolution",
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
            Future Stories,
            <span className="block text-primary">
              Unlimited Potential
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-body">
            Discover how professionals across industries will transform their conversations into competitive advantages with Lyzn.ai.
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
                <p className="text-muted-foreground leading-relaxed mb-6 text-sm font-body">
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
          <button className="bg-primary text-primary-foreground px-8 py-4 font-semibold text-lg hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg shadow-primary/25 lyzn-card">
            Join the Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
