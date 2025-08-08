import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative">
              <div className="w-full max-w-md h-80 rounded-lg overflow-hidden mx-auto lg:mx-0">
                <img 
                  src="/lovable-uploads/51ca3925-e8d1-4f09-9d18-f347054da026.png"
                  alt="About me professional photo" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary rounded-lg"></div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">About Me</h2>
              <div className="flex-1 h-0.5 bg-primary"></div>
            </div>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              I'm a passionate AI Product Manager specializing in Generative AI solutions. 
              With extensive experience in AI/ML product development and strategy, I help 
              organizations integrate cutting-edge AI technologies into their products. 
              My expertise spans from conceptualizing AI-driven features to leading 
              cross-functional teams in delivering innovative solutions that drive 
              business value and enhance user experiences.
            </p>
            
            <div className="flex gap-4">
              <Button variant="default" className="group">
                <span>Hire Me</span>
              </Button>
              <Button variant="outline" className="group">
                <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                <span>Download CV</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;