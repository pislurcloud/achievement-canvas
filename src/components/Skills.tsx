const skills = [
  { name: "Product Strategy & Roadmapping", level: 95 },
  { name: "Generative AI (GPT-4, Claude, Llama)", level: 90 },
  { name: "Agentic AI (LangChain, LangGraph, AutoGen)", level: 85 },
  { name: "AI Workflow Automation (CrewAI, n8n)", level: 85 },
  { name: "Cloud Platforms (AWS, Azure, GCP)", level: 90 },
  { name: "Machine Learning & MLOps", level: 85 },
  { name: "Agile & Product Management", level: 92 },
  { name: "Python & API Development", level: 82 }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Skills Content */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-0.5 bg-primary"></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Personal Skills</h2>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              With expertise spanning AI product management, machine learning implementation, 
              and strategic planning, I bring a comprehensive skill set to drive AI innovation 
              and deliver impactful solutions.
            </p>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{skill.name}</span>
                    <span className="text-foreground font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/24a75a03-a4c8-49b0-92c5-1a095bb0c17d.png"
                alt="AI Product Manager working with futuristic technology and data visualization"
                className="w-80 h-96 object-cover rounded-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-24 bg-primary rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;