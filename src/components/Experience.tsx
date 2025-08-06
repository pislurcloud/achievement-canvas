import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const achievements = [
  "Led AI Product Strategy for Fortune 500 Client",
  "Implemented 15+ Gen AI Solutions",
  "Increased Product Efficiency by 60%",
  "Published 5 AI Research Papers"
];

const awards = [
  {
    title: "BEST AI PRODUCT INNOVATION",
    category: "Industry Awards 2024",
    description: "Recognized for outstanding contribution to AI product development and strategic implementation in enterprise solutions."
  },
  {
    title: "TOP AI CONSULTANT", 
    category: "Tech Excellence 2023",
    description: "Awarded for exceptional consulting services and successful AI transformation projects across multiple industries."
  },
  {
    title: "INNOVATION LEADERSHIP",
    category: "Product Management 2023", 
    description: "Honored for leading innovative AI product initiatives that generated significant business value and market impact."
  }
];

const Experience = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <Card className="border-2 border-primary/20 bg-muted hover:border-primary/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-primary text-lg font-medium mb-2">KEY ACHIEVEMENTS</h3>
              </div>
              
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Awards */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Achievement</h2>
              <div className="flex-1 h-0.5 bg-primary"></div>
            </div>
            
            <div className="grid gap-6">
              {awards.map((award, index) => (
                <Card key={index} className={`border-2 transition-all duration-300 ${
                  index === 2 ? 'bg-primary text-primary-foreground border-primary' : 'border-primary/20 bg-muted hover:border-primary/50'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className={`text-lg font-bold ${index === 2 ? 'text-primary-foreground' : 'text-foreground'}`}>
                        {award.title}
                      </h3>
                    </div>
                    <p className={`text-sm font-medium mb-3 ${index === 2 ? 'text-primary-foreground/80' : 'text-primary'}`}>
                      {award.category}
                    </p>
                    <p className={`text-sm leading-relaxed ${index === 2 ? 'text-primary-foreground/90' : 'text-muted-foreground'}`}>
                      {award.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;