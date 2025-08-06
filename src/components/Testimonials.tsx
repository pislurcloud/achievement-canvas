import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "SARAH JOHNSON",
    role: "CTO, TechCorp",
    image: "placeholder",
    quote: "Working with them on our AI integration project was exceptional. Their deep understanding of both technical capabilities and business needs made the implementation seamless."
  },
  {
    name: "MICHAEL CHEN", 
    role: "Head of Product, DataFlow",
    image: "placeholder",
    quote: "Their expertise in generative AI helped us transform our product roadmap. The strategic insights and hands-on approach delivered results beyond our expectations."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Happy Clients Says</h2>
          <div className="flex-1 h-0.5 bg-primary"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative border-2 border-primary/20 bg-muted hover:border-primary/50 transition-all duration-300">
              <div className="absolute -top-4 left-6">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              
              <CardContent className="p-8 pt-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
                    <span className="text-xs text-muted-foreground">Photo</span>
                  </div>
                  <div>
                    <h4 className="text-foreground font-bold">{testimonial.name}</h4>
                    <p className="text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.quote}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;