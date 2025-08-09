import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "HEALTH INSURANCE AI CHATBOT",
    category: "Gen AI Project",
    year: "2024",
    description: "Advanced AI chatbot system for health insurance services with intelligent query processing and customer support automation.",
    image: "/lovable-uploads/424a685e-a1f4-4fe1-b481-8e02d945628b.png"
  },
  {
    title: "TENDER PROCESSING AUTOMATION GEN AI PLATFORM",
    category: "Gen AI Project", 
    year: "2024",
    description: "Comprehensive AI platform for automating tender processing workflows with document analysis and intelligent matching.",
    image: "/lovable-uploads/05d435e3-c39d-4306-a049-b349dd27b5a3.png"
  },
  {
    title: "HEALTHCARE ML MODEL LIBRARY",
    category: "AI/ML Development",
    year: "2024", 
    description: "Comprehensive library of machine learning models specifically designed for healthcare applications and medical data analysis.",
    image: "/lovable-uploads/09686f80-5639-478a-bb83-66f10e490ffb.png"
  },
  {
    title: "ADVANCED DATA ANALYTICS PLATFORM", 
    category: "AI/ML Development",
    year: "2024",
    description: "Sophisticated data analytics platform with advanced visualization and machine learning capabilities for business intelligence.",
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
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:scale-105 transition-all duration-300 bg-muted border-border hover:border-primary/50 hover:shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-b border-border overflow-hidden">
                {project.image !== "placeholder" ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <p className="text-muted-foreground text-sm">Project Image</p>
                )}
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <span className="text-primary text-sm font-medium">{project.year}</span>
                </div>
                <p className="text-primary text-sm font-medium mb-3">{project.category}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;