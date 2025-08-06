import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    title: "AI CHATBOT PLATFORM",
    category: "Gen AI Project",
    year: "2024",
    description: "Developed a multi-model AI chatbot platform using GPT-4 and Claude, featuring conversation management and analytics dashboard.",
    image: "placeholder"
  },
  {
    title: "ML RECOMMENDATION ENGINE",
    category: "AI/ML Development", 
    year: "2024",
    description: "Built a personalized recommendation system using collaborative filtering and deep learning, improving user engagement by 40%.",
    image: "placeholder"
  },
  {
    title: "COMPUTER VISION API",
    category: "AI/ML Development",
    year: "2023", 
    description: "Created a scalable computer vision API for object detection and image classification using TensorFlow and FastAPI.",
    image: "placeholder"
  },
  {
    title: "AI CONTENT GENERATOR", 
    category: "Gen AI Project",
    year: "2023",
    description: "Developed an AI-powered content generation tool leveraging GPT models for marketing copy and blog post creation.",
    image: "placeholder"
  },
  {
    title: "DATA ANALYTICS DASHBOARD",
    category: "Personal Project", 
    year: "2023",
    description: "Built a comprehensive analytics dashboard using React and D3.js to visualize AI model performance metrics.",
    image: "placeholder"
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
              <div className="h-48 bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center border-b border-border">
                <p className="text-muted-foreground text-sm">Project Image</p>
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