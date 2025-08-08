import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Instagram } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-6 lg:px-12">
      <div className="flex-1 max-w-2xl">
        <div className="mb-6">
          <p className="text-primary text-lg font-medium mb-4 animate-fade-in">
            Hello Everyone.
          </p>
          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            I'M AN AI PRODUCT
            <br />
            <span className="text-primary">MANAGER</span>
          </h1>
          <div className="flex items-center gap-4 animate-fade-in">
            <Button 
              variant="outline" 
              className="group"
              onClick={() => {
                const aboutSection = document.getElementById('about');
                aboutSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span>LEARN MORE</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Contact Info */}
      <div className="hidden lg:flex flex-col items-end gap-4">
        <p className="text-primary font-medium">Contact Me</p>
        <div className="flex gap-3">
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover:text-primary">
            <Instagram className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Profile Image */}
      <div className="hidden lg:block flex-1 flex justify-end">
        <div className="relative">
          <div className="w-80 h-96 rounded-lg overflow-hidden border border-primary/20">
            <img 
              src="/lovable-uploads/f00ee814-9ec9-4369-b6bc-2089f2145ba4.png"
              alt="Professional headshot" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;