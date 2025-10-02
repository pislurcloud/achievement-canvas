import { Card, CardContent } from "@/components/ui/card";
import { Award, GraduationCap } from "lucide-react";

const certifications = [
  {
    title: "Google Digital Cloud Leader",
    issuer: "Google Cloud",
    year: "2024",
    type: "certification"
  },
  {
    title: "Agentic AI Pioneer Certification",
    issuer: "AI Certification Body",
    year: "2024",
    type: "certification"
  },
  {
    title: "Product Management Professional",
    issuer: "Product Management Institute",
    year: "2023",
    type: "certification"
  }
];

const education = [
  {
    degree: "Masters in Applied Data Science",
    institution: "University",
    year: "2020-2022",
    highlights: [
      "Machine Learning & Deep Learning",
      "Natural Language Processing",
      "Statistical Analysis & Data Visualization"
    ]
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Certifications & Education</h2>
          <div className="flex-1 h-0.5 bg-primary"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-muted border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">
                        {cert.title}
                      </h4>
                      <span className="text-primary text-sm font-medium whitespace-nowrap ml-2">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card key={index} className="bg-muted border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <span className="text-primary text-sm font-medium whitespace-nowrap ml-2">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{edu.institution}</p>
                    
                    <div>
                      <p className="text-xs font-semibold text-foreground mb-2">Key Coursework:</p>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, i) => (
                          <li key={i} className="text-xs text-muted-foreground flex items-start">
                            <span className="text-primary mr-2">•</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default Certifications;
