import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "IOCL TENDER PROCESSING AUTOMATION",
    category: "Gen AI Platform", 
    year: "2025",
    metrics: "Reduced processing time by 75% • $2M+ annual savings",
    description: "Led end-to-end GenAI platform development for IOCL's tender evaluation. Architected LLM-powered document analysis pipeline processing 1000+ tenders monthly. Implemented secure cloud infrastructure with 99.9% uptime.",
    techStack: ["GPT-4", "Azure", "Python", "React", "MongoDB"],
    results: [
      "Automated 80% of manual evaluation tasks",
      "Improved accuracy by 65% vs manual review",
      "Deployed across 12 regional offices"
    ],
    image: "/lovable-uploads/05d435e3-c39d-4306-a049-b349dd27b5a3.png"
  },
  {
    title: "HEALTH INSURANCE AI CHATBOT",
    category: "Gen AI Project",
    year: "2024",
    metrics: "90% query resolution • 60% cost reduction",
    description: "Built conversational AI for health insurance customer support. Integrated with claims database and policy management systems. Achieved 4.7/5 customer satisfaction rating with natural language understanding.",
    techStack: ["GPT-3.5", "Dialogflow", "Node.js", "PostgreSQL"],
    results: [
      "Handled 50K+ customer queries monthly",
      "Reduced support ticket volume by 60%",
      "24/7 multilingual support in 5 languages"
    ],
    image: "/lovable-uploads/424a685e-a1f4-4fe1-b481-8e02d945628b.png"
  },
  {
    title: "HEALTHCARE ML MODEL LIBRARY",
    category: "AI/ML Development",
    year: "2022",
    metrics: "15+ production models • 92% accuracy",
    description: "Created reusable ML model library for medical diagnosis and patient outcome prediction. Implemented models for disease detection, risk assessment, and treatment optimization used across 8 healthcare facilities.",
    techStack: ["TensorFlow", "Scikit-learn", "Python", "Docker", "MLflow"],
    results: [
      "Deployed across 8 major hospitals",
      "Improved diagnosis accuracy by 28%",
      "Reduced model development time by 50%"
    ],
    image: "/lovable-uploads/09686f80-5639-478a-bb83-66f10e490ffb.png"
  },
  {
    title: "ADVANCED DATA ANALYTICS PLATFORM", 
    category: "AI/ML Development",
    year: "2021",
    metrics: "1M+ records analyzed • Real-time insights",
    description: "Developed enterprise analytics platform with predictive modeling and automated reporting. Built custom dashboards for C-suite executives enabling data-driven decision making across 15 business units.",
    techStack: ["Python", "Apache Spark", "Tableau", "AWS", "Airflow"],
    results: [
      "Processing 1M+ records daily",
      "Reduced reporting time from days to minutes",
      "Enabled $500K cost optimization initiatives"
    ],
    image: "/lovable-uploads/ddb9b773-484e-4f9e-ac13-4780458c6e2b.png"
  }
];

const Portfolio = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Recent Projects</h2>
          <div className="flex-1 h-0.5 bg-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-muted border-border hover:border-primary/50 hover:shadow-lg overflow-hidden">
              <div className="h-56 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-b border-border overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-primary text-sm font-medium whitespace-nowrap ml-2">{project.year}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{project.category}</p>
                
                {/* Metrics */}
                <div className="bg-primary/10 rounded-lg p-3 mb-4">
                  <p className="text-foreground text-sm font-semibold">{project.metrics}</p>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs font-semibold text-foreground mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/20 text-primary text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Results */}
                <div>
                  <p className="text-xs font-semibold text-foreground mb-2">Key Results:</p>
                  <ul className="space-y-1">
                    {project.results.map((result, i) => (
                      <li key={i} className="text-xs text-muted-foreground flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;