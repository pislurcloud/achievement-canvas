import { Button } from "@/components/ui/button";
import { Linkedin, Github, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-muted py-16 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Thank You Message */}
          <div>
            <p className="text-primary text-lg font-medium mb-4">
              2024 AI Product Manager Portfolio
            </p>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              THANK YOU
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Thank you for taking the time to review my portfolio. I'm excited about 
              the opportunity to discuss how my AI product management expertise can 
              drive innovation and value for your organization.
            </p>
            
            <div className="flex gap-4">
              <Button variant="outline" onClick={scrollToTop}>
                See More My Portfolio
              </Button>
              <Button variant="default">
                Contact Me!
              </Button>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="w-full h-80 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/5e1a98d2-85ad-47d1-a443-9c61d4d70b2f.png"
                alt="Thank you for visiting - workspace with laptop, plant and coffee"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-32 h-24 bg-primary rounded-lg"></div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground text-sm">
              © 2024 AI Product Manager Portfolio. All rights reserved.
            </p>
          </div>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm">Follow me:</span>
            <div className="flex gap-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open('https://www.linkedin.com/in/prashant-islur/', '_blank')}
              >
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open('https://github.com/prashantislur', '_blank')}
              >
                <Github className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:text-primary"
                onClick={() => window.open('https://www.instagram.com/prashant_islur/', '_blank')}
              >
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll to Top Button */}
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-8 right-8 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={scrollToTop}
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </footer>
  );
};

export default Footer;