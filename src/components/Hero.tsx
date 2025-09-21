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
      
      {/* Profile Image */}
      <div className="hidden lg:block flex-1 flex justify-end">
        <div className="relative">
          <div className="w-72 h-80 rounded-lg overflow-hidden border border-primary/20">
            <img 
              src="/lovable-uploads/2efc7f8c-c5a5-492f-bad1-57bbd5d6ccc9.png"
              alt="Professional headshot"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-lg"></div>
          
          {/* Social Links positioned below */}
          <div className="flex justify-center gap-3 mt-6">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://www.linkedin.com/in/prashant-islur/', '_blank')}
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://github.com/prashantislur', '_blank')}
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hover:text-primary"
              onClick={() => window.open('https://www.instagram.com/prashant_islur/', '_blank')}
            >
              <Instagram className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;