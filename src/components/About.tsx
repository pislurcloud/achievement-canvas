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
                  src="/lovable-uploads/02f7de00-e5f3-472f-b233-a9ac34b41e39.png"
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
              <Button 
                variant="default" 
                className="group"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  contactSection?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Hire Me</span>
              </Button>
              <Button 
                variant="outline" 
                className="group"
                onClick={() => {
                  // Create and trigger download of sample CV
                  const link = document.createElement('a');
                  link.href = 'data:application/pdf;base64,JVBERi0xLjQKMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovUGFnZXMgMiAwIFIKPj4KZW5kb2JqCjIgMCBvYmoKPDwKL1R5cGUgL1BhZ2VzCi9LaWRzIFszIDAgUl0KL0NvdW50IDEKPj4KZW5kb2JqCjMgMCBvYmoKPDwKL1R5cGUgL1BhZ2UKL1BhcmVudCAyIDAgUgovTWVkaWFCb3ggWzAgMCA2MTIgNzkyXQovUmVzb3VyY2VzIDw8Ci9Gb250IDw8Ci9GMSA0IDAgUgo+Pgo+PgovQ29udGVudHMgNSAwIFIKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL1R5cGUgL0ZvbnQKL1N1YnR5cGUgL1R5cGUxCi9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iago1IDAgb2JqCjw8Ci9MZW5ndGggMTAwCj4+CnN0cmVhbQpCVAovRjEgMTIgVGYKNzIgNzIwIFRkCihQcmFzaGFudCBJc2x1ciAtIEFJIFByb2R1Y3QgTWFuYWdlcikgVGoKNzIgNzAwIFRkCihFbWFpbDogcHJhc2hhbnQuaXNsdXJAZ21haWwuY29tKSBUago3MiA2ODAgVGQKKFBob25lOiArOTEgOTgyMDgzNDg5MikgVGoKNzIgNjYwIFRkCihMb2NhdGlvbjogTXVtYmFpLCBJbmRpYSkgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagp4cmVmCjAgNgowMDAwMDAwMDAwIDY1NTM1IGYKMDAwMDAwMDAwOSAwMDAwMCBuCjAwMDAwMDAwNTggMDAwMDAgbgowMDAwMDAwMTE1IDAwMDAwIG4KMDAwMDAwMDI0NSAwMDAwMCBuCjAwMDAwMDAzMjIgMDAwMDAgbgp0cmFpbGVyCjw8Ci9TaXplIDYKL1Jvb3QgMSAwIFIKPj4Kc3RhcnR4cmVmCjQ3MgolJUVPRgo=';
                  link.download = 'Prashant_Islur_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
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